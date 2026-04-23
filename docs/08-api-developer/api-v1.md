# API REST v1 para Desarrolladores

## Descripción general

La API v1 de AnythingLLM permite integrar y automatizar cualquier funcionalidad desde aplicaciones externas: crear workspaces, chatear, subir documentos, gestionar usuarios y más.

**Base URL:** `/api/v1/`  
**Documentación interactiva (Swagger):** `/api/docs` (deshabilitar con `DISABLE_SWAGGER_DOCS="true"` en producción)  
**Router:** [server/endpoints/api/index.js](../../server/endpoints/api/index.js)

---

## Autenticación

Todas las rutas de la API v1 requieren una API key válida.

### Obtener una API key

1. Ir a `/settings/api-keys` en la interfaz web
2. Crear una nueva clave
3. Copiar la clave generada

### Enviar la clave en cada request

```http
Authorization: Bearer {tu-api-key}
```

Ejemplo con curl:

```bash
curl -H "Authorization: Bearer tu-api-key" \
     https://tu-instancia.com/api/v1/auth
```

### Errores de autenticación

```json
HTTP 403
{ "error": "Invalid API Key" }
```

---

## Verificar autenticación

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/v1/auth` | Verifica que la API key es válida |

**Respuesta 200:**
```json
{ "authenticated": true }
```

---

## Workspaces

| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | `/api/v1/workspace/new` | Crear un workspace nuevo |
| GET | `/api/v1/workspaces` | Listar todos los workspaces |
| GET | `/api/v1/workspace/:slug` | Obtener un workspace por slug |
| DELETE | `/api/v1/workspace/:slug` | Eliminar un workspace |
| POST | `/api/v1/workspace/:slug/update` | Actualizar configuración |
| GET | `/api/v1/workspace/:slug/chats` | Historial de chats |
| POST | `/api/v1/workspace/:slug/update-embeddings` | Agregar/quitar documentos |
| POST | `/api/v1/workspace/:slug/update-pin` | Fijar/desfijar un documento |
| POST | `/api/v1/workspace/:slug/chat` | Enviar chat (respuesta completa) |
| POST | `/api/v1/workspace/:slug/stream-chat` | Enviar chat (SSE streaming) |
| POST | `/api/v1/workspace/:slug/vector-search` | Búsqueda vectorial directa |

### Crear un workspace

```bash
curl -X POST https://tu-instancia.com/api/v1/workspace/new \
  -H "Authorization: Bearer tu-api-key" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Mi Workspace",
    "openAiPrompt": "Eres un asistente experto en...",
    "similarityThreshold": 0.7,
    "openAiTemp": 0.7,
    "openAiHistory": 20,
    "chatMode": "chat",
    "topN": 4
  }'
```

**Respuesta 200:**
```json
{
  "workspace": {
    "id": 79,
    "name": "Mi Workspace",
    "slug": "mi-workspace",
    "createdAt": "2024-01-01 00:00:00",
    "openAiTemp": 0.7,
    "openAiHistory": 20,
    "openAiPrompt": "Eres un asistente experto en..."
  },
  "message": "Workspace created"
}
```

### Enviar un chat (sin streaming)

```bash
curl -X POST https://tu-instancia.com/api/v1/workspace/mi-workspace/chat \
  -H "Authorization: Bearer tu-api-key" \
  -H "Content-Type: application/json" \
  -d '{
    "message": "¿Cuáles son los puntos clave del documento?",
    "mode": "chat",
    "sessionId": "sesion-usuario-externo-123"
  }'
```

**Modos disponibles:**
- `"query"` — Solo usa documentos del vectorDB; no usa historial de chat; no responde si no hay documentos relevantes
- `"chat"` — Usa conocimiento general del LLM + documentos; mantiene historial de chat
- `"automatic"` — Tool-calling automático (si el proveedor lo soporta nativo)

**Parámetros del body:**
| Campo | Tipo | Descripción |
|-------|------|-------------|
| `message` | string | El mensaje a enviar |
| `mode` | string | `"query"`, `"chat"` o `"automatic"` (default: `"query"`) |
| `sessionId` | string | ID externo para particionar chats por usuario/sesión |
| `attachments` | array | Archivos adjuntos (imágenes o documentos) |
| `reset` | boolean | Si `true`, limpia el historial de la sesión |

**Adjuntos:**
```json
{
  "attachments": [
    {
      "name": "imagen.png",
      "mime": "image/png",
      "contentString": "data:image/png;base64,iVBORw0KGgo..."
    },
    {
      "name": "documento.pdf",
      "mime": "application/anythingllm-document",
      "contentString": "data:application/pdf;base64,JVBERi0x..."
    }
  ]
}
```

> Para adjuntos de documentos, usar el mime type `application/anythingllm-document`. Para imágenes, usar el mime type real (image/png, image/jpeg, etc.).

**Respuesta 200:**
```json
{
  "id": "chat-uuid-aqui",
  "type": "textResponse",
  "textResponse": "Los puntos clave del documento son...",
  "sources": [
    {
      "title": "documento.pdf",
      "chunk": "Fragmento del documento usado como contexto..."
    }
  ],
  "close": true,
  "error": null
}
```

### Chat con streaming (SSE)

```bash
curl -X POST https://tu-instancia.com/api/v1/workspace/mi-workspace/stream-chat \
  -H "Authorization: Bearer tu-api-key" \
  -H "Content-Type: application/json" \
  --no-buffer \
  -d '{"message": "Explícame el documento", "mode": "chat"}'
```

Los chunks llegan como Server-Sent Events. Cada chunk tiene el formato:
```json
data: {"id":"uuid","type":"textResponseChunk","textResponse":"primeras palabras...","sources":[],"close":false,"error":null}

data: {"id":"uuid","type":"textResponseChunk","textResponse":" más texto...","sources":[],"close":false,"error":null}

data: {"id":"uuid","type":"textResponseChunk","textResponse":"","sources":[{"title":"doc.pdf","chunk":"..."}],"close":true,"error":null}
```

El último chunk tiene `"close": true` e incluye las `sources`.

### Búsqueda vectorial directa

```bash
curl -X POST https://tu-instancia.com/api/v1/workspace/mi-workspace/vector-search \
  -H "Authorization: Bearer tu-api-key" \
  -H "Content-Type: application/json" \
  -d '{
    "query": "procedimiento de alta de clientes",
    "topN": 5,
    "scoreThreshold": 0.75
  }'
```

**Respuesta 200:**
```json
{
  "results": [
    {
      "id": "5a6bee0a-306c-47fc-942b-8ab9bf3899c4",
      "text": "Contenido del fragmento del documento...",
      "metadata": {
        "url": "file://documento.txt",
        "title": "documento.txt",
        "author": "Autor",
        "description": "Descripción",
        "wordCount": 150,
        "tokenCount": 180
      },
      "distance": 0.54,
      "score": 0.46
    }
  ]
}
```

### Actualizar embeddings de un workspace

Agrega o quita documentos de un workspace (los documentos deben estar previamente subidos):

```bash
curl -X POST https://tu-instancia.com/api/v1/workspace/mi-workspace/update-embeddings \
  -H "Authorization: Bearer tu-api-key" \
  -H "Content-Type: application/json" \
  -d '{
    "adds": ["custom-documents/mi-pdf.pdf-hash.json"],
    "deletes": ["custom-documents/viejo.txt-hash.json"]
  }'
```

---

## Documentos

| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | `/api/v1/document/upload` | Subir un archivo para procesar |
| POST | `/api/v1/document/upload-link` | Procesar contenido de una URL |
| POST | `/api/v1/document/upload-text` | Subir texto plano |
| GET | `/api/v1/documents` | Listar todos los documentos subidos |
| GET | `/api/v1/document/:docName` | Obtener un documento por nombre |
| GET | `/api/v1/document/accepted-file-types` | Tipos de archivo aceptados |
| DELETE | `/api/v1/document/remove-folder` | Eliminar una carpeta de documentos |
| DELETE | `/api/v1/document/bulk-delete-documents` | Eliminar documentos en bulk |
| GET | `/api/v1/document/move-files` | Mover archivos entre carpetas |
| POST | `/api/v1/document/raw-text` | Procesar texto con metadatos custom |
| POST | `/api/v1/document/create-folder` | Crear carpeta de organización |

### Subir un archivo

```bash
curl -X POST https://tu-instancia.com/api/v1/document/upload \
  -H "Authorization: Bearer tu-api-key" \
  -F "file=@/ruta/a/mi-documento.pdf" \
  -F 'addToWorkspaces=mi-workspace,otro-workspace' \
  -F 'metadata={"title":"Mi Documento","docAuthor":"Autor","description":"Descripción del doc"}'
```

**Respuesta 200:**
```json
{
  "success": true,
  "error": null,
  "documents": [
    {
      "location": "custom-documents/mi-documento.pdf-abc123.json",
      "name": "mi-documento.pdf-abc123.json",
      "url": "file:///storage/documents/custom-documents/mi-documento.pdf-abc123.json",
      "title": "mi-documento.pdf",
      "docAuthor": "Autor",
      "description": "Descripción del doc",
      "wordCount": 2450,
      "token_count_estimate": 3200
    }
  ]
}
```

El campo `location` es lo que se usa en `update-embeddings` para agregar el documento a un workspace.

### Subir desde URL

```bash
curl -X POST https://tu-instancia.com/api/v1/document/upload-link \
  -H "Authorization: Bearer tu-api-key" \
  -H "Content-Type: application/json" \
  -d '{"link": "https://ejemplo.com/articulo"}'
```

### Subir texto plano

```bash
curl -X POST https://tu-instancia.com/api/v1/document/upload-text \
  -H "Authorization: Bearer tu-api-key" \
  -H "Content-Type: application/json" \
  -d '{
    "textContent": "Este es el contenido del documento...",
    "metadata": {
      "title": "Mi Nota",
      "docAuthor": "Usuario"
    }
  }'
```

---

## Threads (hilos de conversación)

Los threads son sub-conversaciones dentro de un workspace, con su propio historial independiente.

| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | `/api/v1/workspace/:slug/thread/new` | Crear un thread nuevo |
| GET | `/api/v1/workspace/:slug/threads` | Listar threads del workspace |
| DELETE | `/api/v1/workspace/:slug/thread/:threadSlug` | Eliminar un thread |
| POST | `/api/v1/workspace/:slug/thread/:threadSlug/update` | Actualizar un thread |
| POST | `/api/v1/workspace/:slug/thread/:threadSlug/chat` | Chat en un thread |
| POST | `/api/v1/workspace/:slug/thread/:threadSlug/stream-chat` | Chat streaming en thread |
| GET | `/api/v1/workspace/:slug/thread/:threadSlug/chats` | Historial del thread |

```bash
# Crear thread
curl -X POST https://tu-instancia.com/api/v1/workspace/mi-workspace/thread/new \
  -H "Authorization: Bearer tu-api-key" \
  -H "Content-Type: application/json" \
  -d '{"name": "Análisis de contratos Q1"}'

# Chat en thread
curl -X POST https://tu-instancia.com/api/v1/workspace/mi-workspace/thread/analisis-contratos-q1/chat \
  -H "Authorization: Bearer tu-api-key" \
  -H "Content-Type: application/json" \
  -d '{"message": "Resume los contratos del primer trimestre", "mode": "chat"}'
```

---

## Admin (solo multi-user mode)

Los endpoints de Admin requieren multi-user mode activado. Devuelven `401` en modo single-user.

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/v1/admin/is-multi-user-mode` | Verificar si multi-user está activo |
| GET | `/api/v1/admin/users` | Listar todos los usuarios |
| POST | `/api/v1/admin/users/new` | Crear un usuario nuevo |
| POST | `/api/v1/admin/users/:id` | Actualizar un usuario |
| DELETE | `/api/v1/admin/users/:id` | Eliminar un usuario |
| GET | `/api/v1/admin/invites` | Listar invitaciones pendientes |
| POST | `/api/v1/admin/invite/new` | Crear una invitación |
| DELETE | `/api/v1/admin/invite/:id` | Eliminar una invitación |
| POST | `/api/v1/admin/workspaces/:workspaceId/update-users` | Asignar usuarios a workspace |
| GET | `/api/v1/admin/workspace-chats` | Obtener chats de todos los workspaces |

```bash
# Crear usuario
curl -X POST https://tu-instancia.com/api/v1/admin/users/new \
  -H "Authorization: Bearer tu-api-key" \
  -H "Content-Type: application/json" \
  -d '{
    "username": "nuevo-usuario",
    "password": "contraseña-segura",
    "role": "default"
  }'
```

**Roles válidos:** `"admin"`, `"manager"`, `"default"`

---

## System

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/v1/system/env-dump` | Configuración actual del sistema (sin secretos) |
| GET | `/api/v1/system/ping` | Health check |
| GET | `/api/v1/system/vector-count` | Conteo de vectores en todas las namespaces |
| POST | `/api/v1/system/update-env` | Actualizar variables de entorno del sistema |
| GET | `/api/v1/system/event-logs` | Logs de eventos |
| DELETE | `/api/v1/system/event-logs` | Limpiar logs de eventos |

```bash
# Health check
curl https://tu-instancia.com/api/v1/system/ping \
  -H "Authorization: Bearer tu-api-key"

# Respuesta: { "online": true }
```

---

## Gestión de usuarios (User Management)

Endpoints para gestionar el propio perfil (disponibles para todos los usuarios autenticados):

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/v1/users` | Listar usuarios (admin) |
| POST | `/api/v1/users/:id` | Actualizar usuario |
| DELETE | `/api/v1/users/:id` | Eliminar usuario |

---

## Compatibilidad OpenAI

AnythingLLM expone una API compatible con el formato de OpenAI para facilitar la integración con librerías que ya usan la API de OpenAI.

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/v1/openai/models` | Lista workspaces como "modelos" |
| POST | `/api/v1/openai/chat/completions` | Chat en formato OpenAI |
| GET | `/api/v1/openai/vector_stores` | Lista workspaces como vector stores |
| POST | `/api/v1/openai/vector_stores/:id/files` | Sube archivo a workspace |

```python
# Usar con la librería oficial de Python de OpenAI
from openai import OpenAI

client = OpenAI(
    api_key="tu-api-key-de-anythingllm",
    base_url="https://tu-instancia.com/api/v1/openai"
)

completion = client.chat.completions.create(
    model="mi-workspace",  # Nombre del workspace como model ID
    messages=[
        {"role": "user", "content": "¿Cuáles son los documentos disponibles?"}
    ]
)
print(completion.choices[0].message.content)
```

---

## Embed (API del widget embebible)

Endpoints para interactuar con los embeds desde código externo (sin auth de usuario, solo UUID del embed):

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/v1/embed/:embedId/chats` | Listar chats de sesiones del embed |
| DELETE | `/api/v1/embed/:embedId/chats/:chatId` | Eliminar un chat del embed |

---

## Códigos de respuesta HTTP

| Código | Significado |
|--------|-------------|
| 200 | Éxito |
| 400 | Parámetros incorrectos o recurso no encontrado |
| 401 | Acción requiere multi-user mode |
| 403 | API key inválida o faltante |
| 422 | Error de validación en los parámetros |
| 500 | Error interno del servidor |

---

## Ejemplos completos

### Flujo completo: subir documento y chatear

```bash
# 1. Crear workspace
WS=$(curl -s -X POST https://tu-instancia.com/api/v1/workspace/new \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"name": "Documentos Legales"}' | jq -r '.workspace.slug')

echo "Workspace creado: $WS"

# 2. Subir documento
DOC_LOCATION=$(curl -s -X POST https://tu-instancia.com/api/v1/document/upload \
  -H "Authorization: Bearer $API_KEY" \
  -F "file=@contrato.pdf" | jq -r '.documents[0].location')

echo "Documento subido: $DOC_LOCATION"

# 3. Agregar documento al workspace
curl -s -X POST "https://tu-instancia.com/api/v1/workspace/$WS/update-embeddings" \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d "{\"adds\": [\"$DOC_LOCATION\"]}"

# 4. Chatear con el documento
curl -s -X POST "https://tu-instancia.com/api/v1/workspace/$WS/chat" \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"message": "¿Cuáles son las cláusulas principales del contrato?", "mode": "query"}' \
  | jq '.textResponse'
```

### Particionado por sesión (múltiples usuarios)

El campo `sessionId` permite mantener historiales de chat separados por usuario/sesión sin crear workspaces separados:

```bash
# Usuario A
curl -X POST https://tu-instancia.com/api/v1/workspace/soporte/chat \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"message": "Hola", "mode": "chat", "sessionId": "user-alice-123"}'

# Usuario B — historial independiente del de A
curl -X POST https://tu-instancia.com/api/v1/workspace/soporte/chat \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"message": "Hola", "mode": "chat", "sessionId": "user-bob-456"}'
```

### Recuperar historial de una sesión

```bash
curl "https://tu-instancia.com/api/v1/workspace/soporte/chats?apiSessionId=user-alice-123&limit=50&orderBy=asc" \
  -H "Authorization: Bearer $API_KEY"
```

---

## Swagger UI

La documentación interactiva está disponible en `/api/docs` (Swagger UI). Permite probar todos los endpoints directamente desde el navegador.

Para deshabilitar en producción:
```env
DISABLE_SWAGGER_DOCS="true"
```

El spec OpenAPI se genera automáticamente desde las anotaciones JSDoc en el código fuente con `swagger-autogen`.
