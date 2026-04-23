# Procesamiento de Documentos

## Pipeline completo

```
1. Usuario sube archivo
        ↓
2. Endpoint recibe el archivo (multer)
   POST /api/workspace/:slug/upload
        ↓
3. Archivo guardado en server/storage/documents/
        ↓
4. Servidor envía al Collector (HMAC firmado)
   POST http://localhost:8888/process
        ↓
5. Collector selecciona parser según MIME type
   asPDF | asDocx | asImage | asXlsx | asAudio | ...
        ↓
6. Texto extraído y dividido en chunks (TextSplitter)
   ~1500 tokens por chunk, con overlap configurable
        ↓
7. Chunks devueltos al servidor
        ↓
8. Servidor genera embeddings para cada chunk
   EmbeddingEngine.embedChunks(chunks)
        ↓
9. Vectores almacenados en la BD vectorial
   VectorDB.addDocumentToNamespace(workspace.slug, docId, embeddings)
        ↓
10. Relación docId → vectorIds guardada en SQLite (document_vectors)
        ↓
11. Documento disponible para búsqueda semántica
```

---

## Parsers por tipo de archivo

| Formato | MIME types | Parser | Notas |
|---------|-----------|--------|-------|
| PDF | `application/pdf` | pdf-parse | Extrae texto; si hay imágenes, OCR con tesseract.js |
| Word | `application/vnd.openxmlformats-officedocument.wordprocessingml.document` | mammoth | Preserva estructura |
| Excel | `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet` | node-xlsx | Por hojas |
| PowerPoint | `application/vnd.openxmlformats-officedocument.presentationml.presentation` | officeparser | |
| E-book | `application/epub+zip` | epub2 | |
| Texto plano | `text/plain`, `.md`, `.csv`, `.log`, etc. | Nativo | Lee directo |
| Imágenes (OCR) | `image/png`, `image/jpeg`, etc. | tesseract.js | Extrae texto de imágenes |
| Audio | `audio/mpeg`, `audio/wav`, etc. | Whisper (local u OpenAI) | Transcripción ASR |
| Email | `.mbox` | mbox-parser | Archivos de correo |
| Genérico Office | Otros MIME de Office | officeparser | Fallback |

---

## TextSplitter

**Archivo:** [server/utils/TextSplitter/index.js](../../server/utils/TextSplitter/index.js)

Divide el texto de un documento en chunks para que sean procesables por el motor de embeddings.

### Parámetros

| Parámetro | Descripción | Default |
|-----------|-------------|---------|
| `chunkSize` | Tamaño máximo de cada chunk en tokens | ~1500 |
| `chunkOverlap` | Tokens de overlap entre chunks consecutivos | ~20% del chunkSize |
| `model` | Modelo de tokenización (para contar tokens correctamente) | Según el embedding engine |

### Configuración

```env
# Configurable por el admin desde /settings/text-splitter-preference
# No hay variables de entorno directas para TextSplitter — se configura desde la UI
```

### Algoritmo

1. Divide el texto por párrafos y oraciones
2. Si un párrafo es más grande que `chunkSize`, lo divide recursivamente
3. Agrega `chunkOverlap` de contexto del chunk anterior al inicio del siguiente
4. Cada chunk final se convierte en un objeto: `{ content: "...", metadata: {...} }`

---

## DocumentManager

**Archivo:** [server/utils/DocumentManager/index.js](../../server/utils/DocumentManager/index.js)

Gestiona qué documentos se incluyen en el contexto de una búsqueda y cómo:

### Documentos "pinned"

Los documentos marcados como `pinned = true` en `workspace_documents` **siempre** se incluyen en el contexto del chat, independientemente del score de similitud.

```javascript
// En la búsqueda, los pinned docs se agregan primero al contexto
const pinnedDocs = await WorkspaceDocument.pinnedDocs(workspace.slug);
const similarDocs = await VectorDB.similarityResponse(namespace, queryVector, threshold, topN);
const context = [...pinnedDocs, ...similarDocs];
```

### Límite de contexto

El DocumentManager respeta el `promptWindowLimit()` del proveedor LLM actual para no exceder el contexto máximo.

```javascript
// Si los chunks recuperados + el historial + el sistema prompt superan el límite,
// se truncan los chunks menos relevantes
const maxContextTokens = LLM.promptWindowLimit() - reservedForHistory - reservedForPrompt;
```

---

## Watched Documents (Sincronización automática)

Los documentos marcados como `watched = true` se sincronizan automáticamente:

1. **Al marcar un documento como watched**: se agrega a `document_sync_queues`
2. **Background worker `sync-watched-documents`** (cada hora):
   - Revisa qué documentos tienen `nextSyncAt <= now`
   - Re-procesa cada documento (descarga, parsea, re-embeds)
   - Actualiza los vectores en la BD vectorial
   - Registra la ejecución en `document_sync_executions`
   - Programa el próximo sync según `staleAfterMs` (default: 7 días)

**Útil para:** documentos que cambian frecuentemente, como páginas web, páginas de Confluence, etc.

---

## OCR (reconocimiento óptico de caracteres)

Para imágenes y PDFs con contenido escaneado:

```env
# Idiomas de OCR (por defecto: inglés)
TARGET_OCR_LANG=eng,spa,fra,deu  # Lista separada por comas
```

Idiomas disponibles en [tesseract-ocr.github.io](https://tesseract-ocr.github.io/tessdoc/Data-Files-in-different-versions.html).

---

## Transcripción de audio

Para archivos de audio y video:

```env
# Motor de transcripción (por defecto: Whisper local)
WHISPER_PROVIDER="local"   # Modelo whisper-small corriendo en el servidor
# O:
WHISPER_PROVIDER="openai"  # API de OpenAI Whisper
OPEN_AI_KEY=sk-xxxx
```

El modelo Whisper local se descarga automáticamente en `server/storage/models/whisper/`.

---

## Archivos parseados temporales (`workspace_parsed_files`)

Cuando un usuario adjunta un archivo en el chat (sin indexarlo permanentemente), se crea una entrada en `workspace_parsed_files`:

- El archivo se parsea y su texto queda disponible como contexto adicional en el thread
- No se embeds en la BD vectorial
- Se elimina automáticamente con el job `cleanup-generated-files`

---

## Data Connectors

Fuentes de datos externas que se pueden conectar desde el modal ManageWorkspace:

| Conector | Descripción | Implementación |
|---------|-------------|----------------|
| GitHub | Carga repositorios Git completos | `collector/utils/extensions/RepoLoader/` |
| YouTube | Transcripción de videos | `collector/utils/extensions/YoutubeTranscript/` |
| Confluence | Páginas de wiki | `collector/utils/extensions/Confluence/` |
| Obsidian Vault | Notas de Obsidian | `collector/utils/extensions/ObsidianVault/` |
| Paperless-ngx | Sistema de documentos | `collector/utils/extensions/PaperlessNgx/` |
| Drupal Wiki | Wiki Drupal | `collector/utils/extensions/DrupalWiki/` |
| Website Depth | Scraping en profundidad | `collector/utils/extensions/WebsiteDepth/` |
| URL individual | Scraping de una URL | `collector/processLink/` |
