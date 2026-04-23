# Integraciones

## Bot de Telegram

Permite usar AnythingLLM a través de Telegram como interfaz de chat alternativa.

**Backend:** [server/utils/telegramBot/](../../server/utils/telegramBot/)  
**Endpoint de configuración:** `/api/telegram`  
**Frontend:** `/settings/external-connections/telegram`  
**Job:** `server/jobs/handle-telegram-chat.js`

### Setup

1. Crear un bot en Telegram con [@BotFather](https://t.me/BotFather)
2. Obtener el token del bot
3. En AnythingLLM, ir a `/settings/external-connections/telegram`
4. Ingresar el token y configurar el workspace por defecto

### Configuración almacenada

**Tabla:** `external_communication_connectors` (type=`"telegram"`)

```json
{
  "token": "123456:ABCdef...",
  "defaultWorkspaceSlug": "mi-workspace",
  "active": true
}
```

### Flujo de un mensaje de Telegram

1. Usuario envía mensaje al bot de Telegram
2. Telegram notifica al webhook del servidor
3. El servidor dispara el job `handle-telegram-chat` con el payload
4. El job procesa el mensaje como un chat normal en el workspace configurado
5. La respuesta se envía de vuelta al usuario en Telegram

---

## Extensión de Navegador

Permite interactuar con AnythingLLM directamente desde el navegador.

**Backend:** [server/endpoints/browserExtension.js](../../server/endpoints/browserExtension.js)  
**Tabla:** `browser_extension_api_keys`  
**Frontend config:** `/settings/browser-extension`

### Autenticación

La extensión usa una API key separada del JWT de usuario:

```
POST /api/system/browser-extension-api-key/new  → Genera nueva clave
```

La clave se configura en la extensión y se envía en cada request:

```
Header: X-Browser-Extension-Api-Key: {key}
Middleware: validBrowserExtensionApiKey
```

### Endpoints disponibles para la extensión

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/browser-extension/check` | Verificar clave válida |
| GET | `/api/browser-extension/workspaces` | Listar workspaces accesibles |
| POST | `/api/browser-extension/workspace/:slug/chat` | Chat en workspace |
| POST | `/api/browser-extension/workspace/:slug/upload` | Subir el contenido de la página actual |

---

## Aplicación Móvil (Mobile)

Permite conectar la aplicación de escritorio (AnythingLLM Desktop) con dispositivos móviles.

**Backend:** [server/endpoints/mobile/](../../server/endpoints/mobile/)  
**Tabla:** `desktop_mobile_devices`  
**Frontend:** `/settings/mobile-connections`

### Flujo de conexión

1. En AnythingLLM Desktop, ir a `/settings/mobile-connections`
2. Aparece un código QR
3. Escanear con la app móvil
4. La app obtiene un token temporal y lo registra
5. La conexión queda autorizada

### Campos del dispositivo

| Campo | Descripción |
|-------|-------------|
| `deviceOs` | Sistema operativo del móvil |
| `deviceName` | Nombre del dispositivo |
| `token` | Token único de la conexión |
| `approved` | Si el admin aprobó la conexión |
| `userId` | Usuario dueño del dispositivo |

---

## Web Push Notifications

Notificaciones push al navegador cuando hay respuestas del asistente.

**Backend:** [server/endpoints/webPush.js](../../server/endpoints/webPush.js)  
**Utilidad:** [server/utils/PushNotifications/](../../server/utils/PushNotifications/)  
**Frontend hook:** `useWebPushNotifications.js`  
**Service Worker:** `frontend/public/service-workers/`

### Configuración

El servicio de web push usa VAPID keys que se generan automáticamente:

```javascript
// Las VAPID keys se almacenan en system_settings
// Clave: "VAPIDPublicKey", "VAPIDPrivateKey"
```

### Flujo

1. Usuario acepta las notificaciones en el navegador
2. El navegador registra el service worker
3. Frontend llama `subscribe()` → obtiene `PushSubscription`
4. La suscripción se guarda en `users.web_push_subscription_config`
5. Cuando el asistente responde (en background), el servidor envía la notificación
6. El service worker recibe la notificación y la muestra

---

## Community Hub

Hub comunitario para compartir y descargar prompts, flujos de agentes, etc.

**Backend:** [server/endpoints/communityHub.js](../../server/endpoints/communityHub.js)  
**Frontend:** `/settings/community-hub/*`  
**Modelo:** `server/models/communityHub.js`

### Secciones

- **Trending** — Items populares de la comunidad
- **Authentication** — Conectar con cuenta del hub
- **Import Item** — Importar un item del hub a la instancia

---

## Widget de Chat Embebible (Embed)

Permite integrar un chat de AnythingLLM en cualquier sitio web como un widget.

**Backend:** [server/endpoints/embed/](../../server/endpoints/embed/) y [server/endpoints/embedManagement.js](../../server/endpoints/embedManagement.js)  
**Frontend admin:** `/settings/embed-chat-widgets`  
**Tabla:** `embed_configs`, `embed_chats`  
**Directorio:** `embed/` (aplicación React separada del frontend principal)

### Crear un embed

1. Ir a `/settings/embed-chat-widgets`
2. Crear nueva configuración de embed para un workspace
3. Configurar restricciones (dominios permitidos, límites, modo)
4. Obtener el código HTML para insertar en el sitio externo

### Configuración de un embed

| Campo | Descripción |
|-------|-------------|
| `uuid` | Identificador público del embed |
| `enabled` | Si el embed está activo |
| `chat_mode` | `"query"` (sin historial) o `"chat"` (con historial) |
| `allowlist_domains` | Dominios que pueden usar el embed (seguridad) |
| `allow_model_override` | Si el iframe puede cambiar el modelo |
| `allow_temperature_override` | Si puede cambiar la temperatura |
| `allow_prompt_override` | Si puede cambiar el prompt |
| `max_chats_per_day` | Límite de chats diarios |
| `max_chats_per_session` | Límite por sesión |
| `message_limit` | Mensajes máximos en el historial (default: 20) |

### Código de integración (ejemplo)

```html
<!-- Insertar en tu sitio web -->
<script>
  window.AnythingLLMEmbed = {
    embedId: "uuid-del-embed",
    baseUrl: "https://tu-instancia.com",
  };
</script>
<script src="https://tu-instancia.com/embed/anythingllm-chat-widget.min.js"></script>
```

### Endpoints públicos (sin auth de usuario)

Los endpoints del embed son públicos pero validan el UUID del embed y los dominios permitidos:

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/embed/:embedId/info` | Info del embed (nombre del workspace, etc.) |
| POST | `/api/embed/:embedId/stream-chat` | Chat con streaming (SSE) |
| GET | `/api/embed/:embedId/chats/:sessionId` | Historial de la sesión |
| DELETE | `/api/embed/:embedId/chats/:sessionId` | Limpiar la sesión |
