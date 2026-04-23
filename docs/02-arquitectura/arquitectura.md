# Arquitectura del Sistema — AnythingLLM

## Diagrama de servicios

```
┌─────────────────────────────────────────────────────────────────┐
│                         CLIENTE (Navegador)                      │
│                    React SPA — puerto 3000 (dev)                 │
│                    Servido desde /public en producción           │
└───────────────────────────┬─────────────────────────────────────┘
                            │ HTTP / SSE / WebSocket
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│                    SERVIDOR — puerto 3001                        │
│                    Node.js + Express                             │
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐  │
│  │   Endpoints  │  │   Modelos    │  │    Utils / Servicios  │  │
│  │  /api/*      │  │   Prisma     │  │   AiProviders (40+)  │  │
│  │  WebSocket   │  │   SQLite /   │  │   VectorDB (11+)     │  │
│  │  SSE         │  │   PostgreSQL │  │   Embeddings (15+)   │  │
│  └──────────────┘  └──────────────┘  │   Aibitat (Agentes)  │  │
│                                       │   MCP                 │  │
│                                       │   TextSplitter        │  │
│                                       │   BackgroundWorkers   │  │
│                                       └──────────────────────┘  │
└───────────────┬─────────────────────────────────────────────────┘
                │ HTTP + HMAC (firma de payload)
                ▼
┌─────────────────────────────────────────────────────────────────┐
│                   COLLECTOR — puerto 8888                        │
│                   Node.js / Express desacoplado                  │
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐  │
│  │  /process    │  │  Parsers     │  │  Extensions          │  │
│  │  /process-   │  │  PDF, DOCX   │  │  Confluence          │  │
│  │   link       │  │  Excel, Audio│  │  YouTube             │  │
│  │  /process-   │  │  OCR, EPUB   │  │  ObsidianVault       │  │
│  │   raw-text   │  │  Web scraping│  │  RepoLoader          │  │
│  └──────────────┘  └──────────────┘  └──────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Flujos de datos principales

### 1. Flujo de un mensaje de chat (RAG)

```
Usuario escribe prompt
        │
        ▼
PromptInput.jsx (frontend)
        │  SSE (fetchEventSource)
        ▼
POST /api/workspace/:slug/stream-chat
        │
        ▼
chatEndpoints → stream.js
        │
        ├─── 1. Genera embedding del prompt (EmbeddingEngine)
        │
        ├─── 2. Búsqueda vectorial similaritySearch(namespace, embedding, topN)
        │         namespace = workspace.slug
        │
        ├─── 3. Recupera chunks relevantes del Vector DB
        │
        ├─── 4. Construye contexto:
        │         system_prompt + documentos_relevantes + historial
        │
        ├─── 5. Envía a LLM (provider.streamChatCompletion())
        │
        └─── 6. Streaming SSE de la respuesta al frontend → ChatHistory.jsx
```

### 2. Flujo de ingesta de un documento

```
Usuario sube archivo
        │
        ▼
POST /api/workspace/:slug/document/new (multer)
        │  Archivo guardado en server/storage/documents/
        │
        ▼
POST http://localhost:8888/process (Collector)
        │  Header: X-Payload-Signature: HMAC(comKey, payload)
        │
        ▼
Collector selecciona parser según MIME type
        │  processSingleFile/convert/asPDF|asDocx|asImage...
        │
        ▼
Texto extraído → TextSplitter (chunks ~1500 tokens)
        │
        ▼
Servidor recibe chunks
        │
        ▼
EmbeddingEngine.embedChunks(chunks)
        │  Genera vectores de cada chunk
        │
        ▼
VectorDB.addDocumentToNamespace(workspace.slug, docId, embeddings)
        │
        ▼
document_vectors guardado en SQLite
        │
        ▼
Documento disponible para búsqueda semántica
```

### 3. Flujo de autenticación

```
Usuario ingresa credenciales
        │
        ▼
POST /api/auth (single-user) o POST /api/auth/login (multi-user)
        │
        ├─ [Single-user] JWT con p=bcrypt(AUTH_TOKEN)
        │
        └─ [Multi-user]  JWT con id=user.id (firmado con JWT_SECRET)
                │
                ▼
        localStorage: anythingllm_authToken
                │
        AuthContext actualiza user
                │
        PrivateRoute verifica antes de renderizar
```

### 4. Flujo de un agente

```
Usuario envía mensaje con @agent o activa modo agente
        │
        ▼
POST /api/workspace/:slug/stream-chat (chat_mode = "agent")
        │
        ▼
agentWebsocket endpoint
        │  WebSocket (no SSE)
        │
        ▼
Aibitat.chat(message)
        │
        ├─── Loop: decide herramienta a usar
        │
        ├─── plugin.run(args) → resultados
        │    Ej: web-search, read-file, workspace-search
        │
        ├─── LLM procesa resultados y decide próxima acción
        │
        └─── Cuando terminó: respuesta final → WebSocket → frontend
```

---

## Patrones de diseño clave

### Adaptive Providers (Proveedores adaptativos)

Los proveedores de LLM, embeddings y vector DBs se seleccionan en **tiempo de ejecución** según variables de entorno. No hay dependencia hardcodeada de un proveedor específico.

```javascript
// server/utils/helpers/index.js
function getLLMProvider({ provider, model } = {}) {
  const selection = provider ?? process.env.LLM_PROVIDER ?? "openai";
  // Retorna instancia del proveedor correcto
}

function getVectorDbClass(selection = null) {
  const vectorSelection = selection ?? process.env.VECTOR_DB ?? "lancedb";
  // Retorna clase del vector DB correcto
}
```

Esto permite cambiar el proveedor de LLM, la base de datos vectorial, o el motor de embeddings simplemente editando el archivo `.env`, **sin cambiar código**.

### Namespace = workspace slug

Cada workspace tiene un `slug` único (ej: `"mi-workspace"`). Este slug se usa como **namespace** en la base de datos vectorial. Todos los vectores de los documentos de un workspace se almacenan bajo ese namespace.

```
workspace.slug = "soporte-tecnico"
    → vectorDB namespace = "soporte-tecnico"
    → similaritySearch("soporte-tecnico", embedding, topN)
```

### Comunicación segura Servidor ↔ Collector

El servidor principal y el collector se comunican por HTTP. Cada request del servidor al collector lleva una firma HMAC del payload, derivada de una clave común (`comKey`). El collector verifica esta firma antes de procesar.

```
Servidor genera: signature = HMAC(comKey, JSON.stringify(payload))
Header enviado: X-Payload-Signature: {signature}
Collector verifica: verifyPayloadIntegrity(request) → true/false
```

Esto evita que el collector procese requests de fuentes no autorizadas.

### Code splitting en el frontend

Todas las páginas del frontend usan lazy loading con `async import()`:

```javascript
{
  path: "/workspace/:slug",
  lazy: async () => {
    const { default: WorkspaceChat } = await import("@/pages/WorkspaceChat");
    return { element: <PrivateRoute Component={WorkspaceChat} /> };
  },
}
```

Esto divide el bundle en chunks, reduciendo el tiempo de carga inicial.

---

## Almacenamiento persistente

```
server/storage/
├── anythingllm.db          → SQLite (base de datos principal)
├── documents/              → Archivos subidos por usuarios
│   └── custom-documents/
├── vector-cache/           → Cache local de vectores (LanceDB)
├── models/                 → Modelos ML descargados (Whisper, embeddings nativos)
└── swagger/                → Documentación Swagger generada
```

En producción con Docker, este directorio se monta como volumen externo para persistencia.

---

## Comunicación en tiempo real

### Server-Sent Events (SSE) — para chat normal
- Librería frontend: `@microsoft/fetch-event-source`
- Endpoint: `POST /api/workspace/:slug/stream-chat`
- El servidor envía chunks de texto a medida que el LLM genera la respuesta

### WebSockets — para agentes
- Librería: `@mintplex-labs/express-ws`
- Endpoint: `WS /api/agent/:uuid/start`
- Comunicación bidireccional durante la ejecución del agente
- Solo disponible en modo no-HTTPS

---

## Background Workers

El servidor usa **Bree** para ejecutar tareas en background en procesos hijos separados:

| Job | Cada | Descripción |
|-----|------|-------------|
| `cleanup-orphan-documents` | 12 horas | Elimina documentos sin referencias en ningún workspace |
| `cleanup-generated-files` | 8 horas | Limpia archivos temporales generados |
| `sync-watched-documents` | 1 hora | Re-procesa documentos observados si cambiaron |
| `handle-telegram-chat` | On-demand | Procesa mensajes entrantes del bot de Telegram |

---

## Estructura de directorios del servidor

```
server/
├── endpoints/          → Routers Express (cada feature tiene su archivo)
│   ├── api/            → API v1 pública (/api/v1/*)
│   └── *.js            → Endpoints internos
├── models/             → Acceso a la base de datos (Prisma queries)
├── middleware/         → Middlewares de Express
├── prisma/             → Schema y migraciones
├── utils/
│   ├── AiProviders/    → 40+ implementaciones de proveedores LLM
│   ├── agents/         → Framework Aibitat + MCP
│   ├── agentFlows/     → Constructor de flujos de agentes
│   ├── BackgroundWorkers/ → Motor Bree
│   ├── chats/          → Lógica de procesamiento de chat
│   ├── EmbeddingEngines/  → 15+ motores de embedding
│   ├── EmbeddingRerankers/ → Reranking de resultados
│   ├── EncryptionManager/ → Cifrado JWT y datos sensibles
│   ├── helpers/        → getLLMProvider, getVectorDbClass, etc.
│   ├── MCP/            → Model Context Protocol
│   ├── middleware/      → Middlewares de autenticación
│   ├── TextSplitter/   → Chunking de documentos
│   ├── TextToSpeech/   → TTS (OpenAI, ElevenLabs)
│   ├── vectorDbProviders/ → 11+ implementaciones de vector DB
│   └── vectorStore/    → Abstracción de vector store
├── jobs/               → Archivos de los background workers
├── storage/            → Datos persistentes (DB, archivos, vectores)
└── index.js            → Punto de entrada
```
