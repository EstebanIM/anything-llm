# Endpoints HTTP — Backend

Todos los endpoints están bajo el prefijo `/api/`. Los endpoints públicos de la API de desarrollador están bajo `/api/v1/`.

---

## Sistema (`systemEndpoints`)

| Método | Ruta | Auth | Descripción |
|--------|------|------|-------------|
| GET | `/api/ping` | No | Health check |
| GET | `/api/migrate` | No | Ejecutar migraciones pendientes |
| GET | `/api/system/keys` | Sí | Configuración del sistema (LLM, embedder, vector DB) |
| GET | `/api/system/me` | Sí | Usuario autenticado actual |
| POST | `/api/auth` | No | Login single-user |
| POST | `/api/auth/login` | No | Login multi-user |
| GET | `/api/system/check-auth` | No | Verificar si auth está configurada |
| GET | `/api/system/onboarding-complete` | No | Estado del onboarding |
| POST | `/api/system/onboarding-complete` | Sí | Marcar onboarding como completo |
| POST | `/api/system/update-env` | Admin | Actualizar variables de entorno del sistema |
| GET | `/api/system/logo` | No | Obtener logo actual |
| POST | `/api/system/logo` | Manager | Subir logo personalizado |
| DELETE | `/api/system/logo` | Manager | Eliminar logo personalizado |
| GET | `/api/system/api-keys` | Admin | Listar API keys |
| POST | `/api/system/api-key/new` | Admin | Crear API key |
| DELETE | `/api/system/api-key/:id` | Admin | Eliminar API key |
| GET | `/api/system/welcome-messages` | No | Mensajes de bienvenida |
| POST | `/api/system/welcome-messages` | Manager | Actualizar mensajes de bienvenida |
| GET | `/api/system/prompt-variables` | Sí | Variables de prompt del sistema |
| GET | `/api/system/supported-ai-providers` | Sí | Modelos disponibles por proveedor |
| GET | `/api/system/total-indexes` | Sí | Total de vectores indexados |
| GET | `/api/system/metadata-export/:slug` | Admin | Exportar metadatos del workspace |

---

## Workspaces (`workspaceEndpoints`)

| Método | Ruta | Auth | Descripción |
|--------|------|------|-------------|
| GET | `/api/workspaces` | Sí | Listar workspaces del usuario |
| POST | `/api/workspace/new` | Sí | Crear workspace |
| GET | `/api/workspace/:slug` | Sí | Obtener workspace por slug |
| POST | `/api/workspace/:slug/update` | Manager | Actualizar configuración |
| DELETE | `/api/workspace/:slug` | Manager | Eliminar workspace |
| GET | `/api/workspace/:slug/chats` | Sí | Historial de chats |
| POST | `/api/workspace/:slug/chat-feedback/:chatId` | Sí | Dar feedback a mensaje |
| DELETE | `/api/workspace/:slug/delete-chats` | Manager | Eliminar chats seleccionados |
| POST | `/api/workspace/:slug/update-embeddings` | Manager | Modificar documentos del workspace |
| POST | `/api/workspace/:slug/upload` | Manager | Subir archivo al workspace |
| POST | `/api/workspace/:slug/sync-documents` | Manager | Sincronizar documentos |
| GET | `/api/workspace/:slug/suggested-messages` | Sí | Mensajes sugeridos |
| POST | `/api/workspace/:slug/suggested-messages` | Manager | Guardar mensajes sugeridos |
| GET | `/api/workspace/:slug/members` | Manager | Listar miembros del workspace |
| POST | `/api/workspace/:slug/update-members` | Manager | Actualizar miembros |
| GET | `/api/workspace/:slug/parsed-files` | Sí | Archivos parseados en el workspace |
| DELETE | `/api/workspace/:slug/parsed-files` | Sí | Eliminar archivos parseados |

---

## Chat (`chatEndpoints`)

| Método | Ruta | Auth | Descripción |
|--------|------|------|-------------|
| POST | `/api/workspace/:slug/chat` | Sí | Chat sin streaming |
| POST | `/api/workspace/:slug/stream-chat` | Sí | **Chat con streaming SSE** |
| POST | `/api/workspace/:slug/thread/:threadSlug/chat` | Sí | Chat en thread |
| POST | `/api/workspace/:slug/thread/:threadSlug/stream-chat` | Sí | **Chat en thread con SSE** |

El endpoint de streaming devuelve eventos SSE con los siguientes tipos:
- `textResponseChunk` — chunk de texto de la respuesta
- `finalizeResponseStream` — mensaje completo listo
- `error` — error durante la generación
- `stopGeneration` — stream detenido por el usuario

---

## Threads (`workspaceThreadEndpoints`)

| Método | Ruta | Auth | Descripción |
|--------|------|------|-------------|
| POST | `/api/workspace/:slug/thread/new` | Sí | Crear thread |
| POST | `/api/workspace/:slug/thread/:threadSlug/update` | Sí | Actualizar thread |
| DELETE | `/api/workspace/:slug/thread/:threadSlug}` | Sí | Eliminar thread |
| GET | `/api/workspace/:slug/thread/:threadSlug/chats` | Sí | Historial del thread |

---

## Administración (`adminEndpoints`)

| Método | Ruta | Auth | Descripción |
|--------|------|------|-------------|
| GET | `/api/admin/users` | Manager | Listar usuarios |
| POST | `/api/admin/users/new` | Manager | Crear usuario |
| POST | `/api/admin/users/:userId` | Manager | Actualizar usuario |
| DELETE | `/api/admin/users/:userId` | Manager | Eliminar usuario |
| GET | `/api/admin/invites` | Manager | Listar invitaciones |
| POST | `/api/admin/invite/new` | Manager | Crear invitación |
| DELETE | `/api/admin/invite/:inviteId` | Manager | Eliminar invitación |
| GET | `/api/admin/workspaces` | Manager | Listar todos los workspaces |
| GET | `/api/admin/workspace-chats` | Manager | Historial global de chats |
| DELETE | `/api/admin/workspace-chats` | Manager | Eliminar chats |
| GET | `/api/admin/event-logs` | Admin | Logs de eventos |
| DELETE | `/api/admin/event-logs` | Admin | Limpiar logs |
| POST | `/api/admin/workspaces/:slug/update-users` | Admin | Asignar usuarios a workspace |

---

## Agentes (`agentWebsocket`)

| Tipo | Ruta | Auth | Descripción |
|------|------|------|-------------|
| WebSocket | `/api/agent/:uuid/start` | Sí | Iniciar sesión de agente |

El WebSocket envía/recibe mensajes JSON con pasos del agente, resultados de herramientas y la respuesta final.

---

## API v1 Pública (`developerEndpoints`)

Ver documento completo: [08 — API para Desarrolladores](../08-api-developer/api-v1.md)

Base URL: `/api/v1/`

Autenticación: Header `Authorization: Bearer {api_key}`

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/v1/auth` | Verificar API key válida |
| GET | `/v1/workspaces` | Listar workspaces |
| POST | `/v1/workspace/new` | Crear workspace |
| GET | `/v1/workspace/:slug` | Obtener workspace |
| POST | `/v1/workspace/:slug/chat` | Chat en workspace |
| POST | `/v1/workspace/:slug/stream-chat` | Chat en workspace (streaming) |
| POST | `/v1/workspace/:slug/update` | Actualizar workspace |
| DELETE | `/v1/workspace/:slug}` | Eliminar workspace |
| POST | `/v1/document/create-folder` | Crear carpeta de documentos |
| POST | `/v1/document/upload` | Subir documento |
| GET | `/v1/documents` | Listar documentos |
| DELETE | `/v1/document/remove/:docId` | Eliminar documento |
| GET | `/v1/admin/users` | Listar usuarios (admin) |
| POST | `/v1/admin/user/new` | Crear usuario |
| POST | `/v1/admin/user/:userId/update` | Actualizar usuario |
| DELETE | `/v1/admin/user/:userId` | Eliminar usuario |
| GET | `/v1/embed/chats/:embedId` | Chats de un embed |
| GET | `/v1/system` | Info del sistema |

Swagger UI disponible en: `GET /api/docs` (deshabilitable con `DISABLE_SWAGGER_DOCS=true`)

---

## Embeds públicos (`embeddedEndpoints`)

Endpoints sin autenticación de usuario, validados por la configuración del embed:

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/embed/:embedId/info` | Info del embed |
| POST | `/api/embed/:embedId/chat` | Chat en embed |
| POST | `/api/embed/:embedId/stream-chat` | Chat en embed (streaming) |
| GET | `/api/embed/:embedId/chats/:sessionId` | Historial de sesión embed |
| DELETE | `/api/embed/:embedId/chats/:sessionId` | Limpiar sesión embed |

---

## Extensión de navegador (`browserExtensionEndpoints`)

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/browser-extension/check` | Verificar clave de extensión |
| GET | `/api/browser-extension/workspaces` | Listar workspaces |
| POST | `/api/browser-extension/workspace/:slug/chat` | Chat desde extensión |
