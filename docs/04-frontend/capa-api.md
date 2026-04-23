# Capa de API — Frontend (src/models/)

El frontend se comunica con el backend usando `fetch` nativo. La capa de acceso a datos está en [frontend/src/models/](../../../frontend/src/models/).

## Configuración base

**Archivo:** [frontend/src/utils/request.js](../../../frontend/src/utils/request.js)

```javascript
// URL base de la API
export const API_BASE = import.meta.env.VITE_API_BASE || "/api";

// Headers de autenticación
export function baseHeaders(token = null) {
  const authToken = token ?? window.localStorage.getItem("anythingllm_authToken");
  return {
    "Content-Type": "application/json",
    ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
  };
}
```

**Variables de entorno relevantes:**

```env
# frontend/.env
VITE_API_BASE='http://localhost:3001/api'    # Development
# VITE_API_BASE='/api'                       # Producción (mismo servidor)
```

---

## Patrón estándar de los modelos

```javascript
// src/models/workspace.js (ejemplo)
const Workspace = {
  new: async function(name) {
    return await fetch(`${API_BASE}/workspace/new`, {
      method: "POST",
      headers: baseHeaders(),
      body: JSON.stringify({ name }),
    })
    .then(res => res.json())
    .catch(e => { console.error(e.message); return null; });
  },

  update: async function(slug, data) {
    return await fetch(`${API_BASE}/workspace/${slug}/update`, {
      method: "POST",
      headers: baseHeaders(),
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .catch(e => { console.error(e.message); return null; });
  },

  // Métodos GET sin body
  all: async function() {
    return await fetch(`${API_BASE}/workspaces`, {
      method: "GET",
      headers: baseHeaders(),
    })
    .then(res => res.json())
    .catch(e => { console.error(e.message); return []; });
  },
};

export default Workspace;
```

---

## Inventario de modelos

### `system.js` — Sistema

| Método | HTTP | Endpoint | Descripción |
|--------|------|----------|-------------|
| `ping()` | GET | `/ping` | Health check |
| `keys()` | GET | `/system/keys` | Configuración del sistema |
| `refreshUser()` | GET | `/system/me` | Refrescar datos del usuario |
| `requestToken(body)` | POST | `/auth` | Login y obtener JWT |
| `checkAuth()` | GET | `/system/check-auth` | Verificar autenticación |
| `isOnboardingComplete()` | GET | `/system/onboarding-complete` | Estado del onboarding |
| `totalIndexes()` | GET | `/system/total-indexes` | Total de vectores indexados |
| `getLogo()` | GET | `/system/logo` | Logo actual de la instancia |
| `setLogo(form)` | POST | `/system/logo` | Subir nuevo logo |
| `removeLogo()` | DELETE | `/system/logo` | Restaurar logo por defecto |
| `getSystemPromptVariables()` | GET | `/system/prompt-variables` | Variables de prompt |
| `updateSystemSettings(body)` | POST | `/system/update-env` | Actualizar configuración |
| `getWelcomeMessages()` | GET | `/system/welcome-messages` | Mensajes de bienvenida |
| `setWelcomeMessages(msgs)` | POST | `/system/welcome-messages` | Guardar mensajes de bienvenida |
| `getApiKeys()` | GET | `/system/api-keys` | Listar API keys |
| `createApiKey()` | POST | `/system/api-key/new` | Crear nueva API key |
| `deleteApiKey(id)` | DELETE | `/system/api-key/${id}` | Eliminar API key |

### `workspace.js` — Workspaces

| Método | HTTP | Endpoint | Descripción |
|--------|------|----------|-------------|
| `new(name)` | POST | `/workspace/new` | Crear workspace |
| `all()` | GET | `/workspaces` | Listar todos los workspaces |
| `bySlug(slug)` | GET | `/workspace/${slug}` | Obtener workspace por slug |
| `update(slug, data)` | POST | `/workspace/${slug}/update` | Actualizar config |
| `delete(slug)` | DELETE | `/workspace/${slug}` | Eliminar workspace |
| `chatHistory(slug)` | GET | `/workspace/${slug}/chats` | Historial de chats |
| `updateChatFeedback(chatId, slug, feedback)` | POST | `/workspace/${slug}/chat-feedback/${chatId}` | Dar feedback a mensaje |
| `deleteChats(slug, chatIds)` | DELETE | `/workspace/${slug}/delete-chats` | Eliminar chats |
| `uploadFile(slug, formData)` | POST | `/workspace/${slug}/upload` | Subir archivo |
| `syncDocuments(slug)` | POST | `/workspace/${slug}/sync-documents` | Sincronizar docs |
| `modifyEmbeddings(slug, additions, deletions)` | POST | `/workspace/${slug}/update-embeddings` | Modificar documentos del workspace |
| `getSuggestedMessages(slug)` | GET | `/workspace/${slug}/suggested-messages` | Mensajes sugeridos |
| `setSuggestedMessages(slug, msgs)` | POST | `/workspace/${slug}/suggested-messages` | Guardar mensajes sugeridos |
| `members(slug)` | GET | `/workspace/${slug}/members` | Listar miembros |

### `workspaceThread.js` — Threads

| Método | HTTP | Endpoint | Descripción |
|--------|------|----------|-------------|
| `new(slug, data)` | POST | `/workspace/${slug}/thread/new` | Crear thread |
| `update(slug, threadSlug, data)` | POST | `/workspace/${slug}/thread/${threadSlug}/update` | Actualizar thread |
| `delete(slug, threadSlug)` | DELETE | `/workspace/${slug}/thread/${threadSlug}` | Eliminar thread |
| `chatHistory(slug, threadSlug)` | GET | `/workspace/${slug}/thread/${threadSlug}/chats` | Historial del thread |

### `admin.js` — Administración

| Método | HTTP | Endpoint | Descripción |
|--------|------|----------|-------------|
| `users()` | GET | `/admin/users` | Listar usuarios |
| `createUser(data)` | POST | `/admin/users/new` | Crear usuario |
| `updateUser(userId, data)` | POST | `/admin/users/${userId}` | Actualizar usuario |
| `deleteUser(userId)` | DELETE | `/admin/users/${userId}` | Eliminar usuario |
| `invites()` | GET | `/admin/invites` | Listar invitaciones |
| `newInvite(data)` | POST | `/admin/invite/new` | Crear invitación |
| `deleteInvite(inviteId)` | DELETE | `/admin/invite/${inviteId}` | Eliminar invitación |
| `workspaces()` | GET | `/admin/workspaces` | Listar todos los workspaces (admin) |
| `chats(offset)` | GET | `/admin/workspace-chats?offset=...` | Historial global de chats |
| `deleteChats(ids)` | DELETE | `/admin/workspace-chats` | Eliminar chats globales |

### `agentFlows.js` — Flujos de agentes

| Método | HTTP | Endpoint | Descripción |
|--------|------|----------|-------------|
| `all()` | GET | `/agent-flows` | Listar flujos de agentes |
| `get(flowId)` | GET | `/agent-flows/${flowId}` | Obtener flujo por ID |
| `create(data)` | POST | `/agent-flows` | Crear nuevo flujo |
| `update(flowId, data)` | PUT | `/agent-flows/${flowId}` | Actualizar flujo |
| `delete(flowId)` | DELETE | `/agent-flows/${flowId}` | Eliminar flujo |

### `communityHub.js` — Community Hub

Métodos para interactuar con el hub comunitario (explorar, importar, autenticarse).

### `mcpServers.js` — Servidores MCP

| Método | HTTP | Endpoint | Descripción |
|--------|------|----------|-------------|
| `all()` | GET | `/mcp-servers` | Listar servidores MCP configurados |
| `create(data)` | POST | `/mcp-servers` | Agregar servidor MCP |
| `delete(id)` | DELETE | `/mcp-servers/${id}` | Eliminar servidor MCP |
| `test(id)` | POST | `/mcp-servers/${id}/test` | Probar conexión al servidor |

---

## Streaming SSE

Para el chat con streaming, no se usa el patrón de fetch normal sino `fetchEventSource`:

```javascript
import { fetchEventSource } from "@microsoft/fetch-event-source";

// En ChatContainer
await fetchEventSource(`${API_BASE}/workspace/${slug}/stream-chat`, {
  method: "POST",
  headers: baseHeaders(),
  body: JSON.stringify({ message, mode: "chat", sessionId }),
  signal: abortController.signal,

  onopen(response) {
    if (!response.ok) throw new Error("Connection failed");
  },

  onmessage(event) {
    if (event.data === "[DONE]") return;
    const data = JSON.parse(event.data);

    switch(data.type) {
      case "textResponseChunk":
        // Agregar chunk al mensaje en curso
        break;
      case "finalizeResponseStream":
        // Mensaje completo — guardar en historial
        break;
      case "error":
        // Mostrar error al usuario
        break;
    }
  },

  onerror(err) {
    console.error(err);
    throw err; // Para detener los reintentos automáticos
  },
});
```
