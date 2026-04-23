# Servicio Collector

## ¿Qué es y por qué está separado?

El Collector es un servicio Node.js/Express **separado del servidor principal**, que corre en el puerto **8888**. Está diseñado para:

- **Aislar el procesamiento pesado** (PDFs, OCR, transcripción de audio) del servidor principal
- **Escalabilidad independiente** — se puede escalar horizontalmente el Collector sin tocar el servidor
- **Seguridad** — no es accesible desde internet, solo desde el servidor principal

**Directorio:** [collector/](../../collector/)  
**Punto de entrada:** `collector/index.js`  
**Puerto:** 8888 (por defecto)

---

## Comunicación segura con el servidor

Toda comunicación entre el servidor y el collector usa una firma **HMAC** para verificar la autenticidad:

```javascript
// Servidor genera la firma antes de enviar
const signature = HMAC(comKey, JSON.stringify(payload));
// Header enviado: X-Payload-Signature: {signature}

// Collector verifica en el middleware verifyPayloadIntegrity
function verifyPayloadIntegrity(req, res, next) {
  const signature = req.headers["x-payload-signature"];
  const expectedSig = HMAC(comKey, JSON.stringify(req.body));
  if (signature !== expectedSig) return res.status(401).end();
  next();
}
```

La `comKey` se deriva de `SIG_KEY` y `SIG_SALT` del `.env` del servidor — las mismas que el Collector debe tener en su propio `.env`.

---

## Endpoints

| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | `/process` | Procesa un archivo completo y retorna chunks |
| POST | `/parse` | Parsea sin persistir (solo análisis) |
| POST | `/process-link` | Scraping de una URL |
| POST | `/process-raw-text` | Procesa texto plano sin formato |
| GET | `/accepts` | Lista los MIME types aceptados |
| POST | `/util/get-link` | Obtiene contenido de una URL |
| POST | `/util/upload` | Subir un archivo al almacenamiento |

---

## Parsers por tipo de archivo

**Directorio:** [collector/processSingleFile/convert/](../../collector/processSingleFile/convert/)

### PDF (`asPDF/`)

```
collector/processSingleFile/convert/asPDF/
├── index.js         → Extrae texto con pdf-parse
└── index.js         → Si hay imágenes en el PDF, ejecuta OCR con tesseract.js
```

- Procesa el texto normal del PDF con `pdf-parse`
- Para PDFs escaneados (solo imágenes): OCR con `tesseract.js`
- Idiomas OCR configurables con `TARGET_OCR_LANG`

### Word (`asDocx.js`)

- Usa `mammoth` para convertir `.docx` a texto limpio
- Preserva la estructura básica (headings, párrafos, listas)

### Excel (`asXlsx.js`)

- Usa `node-xlsx` para leer hojas de cálculo
- Convierte cada hoja a texto tabular
- Incluye nombres de columnas

### Audio (`asAudio.js`)

- Transcripción automática del audio
- Si `WHISPER_PROVIDER=local`: usa el modelo Whisper local
- Si `WHISPER_PROVIDER=openai`: llama a la API de OpenAI Whisper
- Soporta: MP3, WAV, M4A, OGG, FLAC, WebM, etc.

### Imágenes - OCR (`asImage.js`)

- Usa `tesseract.js` para extraer texto de imágenes
- Soporta: JPG, PNG, GIF, BMP, WebP, etc.
- Requiere idiomas instalados (ver `TARGET_OCR_LANG`)

### E-book (`asEPub.js`)

- Usa `epub2` (fork de Mintplex Labs)
- Extrae capítulos y los convierte a texto

### Email (`asMbox.js`)

- Usa `mbox-parser` para archivos de archivo de correo
- Extrae asunto, de, para, fecha y cuerpo de cada email

### Texto plano (`asTxt.js`)

- Lee directamente el contenido del archivo
- Soporta: `.txt`, `.md`, `.csv`, `.log`, `.json`, `.xml`, etc.

### Office genérico (`asOfficeMime.js`)

- Usa `officeparser` como fallback para otros formatos de Office
- Soporta: `.pptx`, `.odt`, `.ods`, `.odp`, etc.

---

## Procesamiento de URLs (`processLink/`)

**Directorio:** [collector/processLink/](../../collector/processLink/)

Scraping de páginas web para extraer su contenido:

1. **Intento 1 — Fetch directo:** obtiene el HTML con `node-fetch`
2. **Intento 2 — Cheerio:** parsea el HTML con `cheerio` para extraer texto limpio
3. **Intento 3 — Puppeteer:** para sitios que requieren JavaScript (SPAs)

```env
# Permitir scraping de IPs locales/privadas
COLLECTOR_ALLOW_ANY_IP="true"

# Flags de Chromium para Puppeteer (en Linux sin privilegios)
ANYTHINGLLM_CHROMIUM_ARGS="--no-sandbox,--disable-setuid-sandbox"
```

---

## Extensions (conectores especiales)

**Directorio:** [collector/utils/extensions/](../../collector/utils/extensions/)

Módulos para conectar fuentes de datos específicas:

### GitHub / RepoLoader

```
collector/utils/extensions/RepoLoader/
```

- Clona un repositorio Git
- Procesa cada archivo de código fuente como un documento separado
- Respeta `.gitignore`
- Configurable: qué extensiones incluir/excluir

### YouTube (`YoutubeTranscript/`)

- Descarga la transcripción de un video de YouTube
- Usa `youtube-transcript-plus` y `youtubei.js`
- Si el video tiene subtítulos automáticos, los usa directamente
- Alternativa: descargar audio y transcribir con Whisper

### Confluence (`Confluence/`)

- Conecta con la API de Confluence
- Procesa espacios completos o páginas individuales
- Requiere token de API de Confluence

### ObsidianVault (`ObsidianVault/`)

- Sincroniza notas de Obsidian desde un directorio local
- Procesa archivos Markdown de la vault

### PaperlessNgx (`PaperlessNgx/`)

- Conecta con la API de Paperless-NGX
- Importa documentos del sistema de gestión documental

### WebsiteDepth (`WebsiteDepth/`)

- Scraping en profundidad de un sitio web
- Sigue links internos hasta N niveles de profundidad
- Configurable: profundidad máxima, patrones de URL a incluir/excluir

### DrupalWiki (`DrupalWiki/`)

- Conecta con instancias de Drupal
- Procesa páginas de wiki

---

## Hotdir (directorio de observación)

**Directorio:** [collector/hotdir/](../../collector/hotdir/)

Si se configura un directorio "hot", el collector monitorea ese directorio y procesa automáticamente cualquier archivo que aparezca:

1. Un archivo nuevo aparece en el hotdir
2. El collector lo detecta
3. Lo procesa automáticamente (parsea + envía al servidor para embeddings)
4. Elimina el archivo procesado

Útil para integrar con pipelines de procesamiento existentes.

---

## Variables de entorno del collector

**Archivo:** [collector/.env.example](../../collector/.env.example)

El collector hereda la mayoría de la configuración del servidor via la solicitud HMAC. Sus propias variables son mínimas:

```env
# Logging HTTP (opcional)
ENABLE_HTTP_LOGGER=""
ENABLE_HTTP_LOGGER_TIMESTAMPS=""
```

Las variables importantes (`SIG_KEY`, `SIG_SALT`, `WHISPER_PROVIDER`, `TARGET_OCR_LANG`) se pasan desde el servidor en el payload de cada solicitud.
