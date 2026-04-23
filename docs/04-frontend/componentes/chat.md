# Componente: Chat

## Jerarquía de componentes

```
WorkspaceChat (página)
└── ChatContainer
    ├── ChatHistory
    │   ├── HistoricalMessage (mensaje del asistente o del usuario)
    │   │   ├── Markdown renderer (markdown-it)
    │   │   ├── CodeBlock (highlight.js)
    │   │   ├── KaTeX (fórmulas matemáticas)
    │   │   └── MessageActions (copy, feedback, delete, etc.)
    │   └── LoadingMessage (placeholder animado mientras responde)
    ├── PromptInput
    │   ├── TextArea (input multilinea)
    │   ├── SpeechToText (reconocimiento de voz)
    │   ├── FileAttachment (adjuntar archivos)
    │   └── SubmitButton
    ├── SourcesSidebar (fuentes/contexto de la respuesta)
    ├── TextSizeMenu (selector de tamaño de fuente)
    ├── WorkspaceModelPicker (cambio de modelo inline)
    └── DnDWrapper (drag & drop de archivos)
```

---

## ChatContainer

**Archivo:** [frontend/src/components/WorkspaceChat/ChatContainer/index.jsx](../../../frontend/src/components/WorkspaceChat/ChatContainer/index.jsx)

Es el orquestador principal del flujo de chat. Responsabilidades:

- Cargar el historial de conversación al montar
- Manejar el envío de mensajes
- Gestionar el streaming SSE de respuestas
- Gestionar la conexión WebSocket para agentes
- Drag & Drop de archivos (mediante `DnDUploaderContext`)
- Escuchar eventos: `PROMPT_INPUT_EVENT`, `ABORT_STREAM_EVENT`

### Flujo de un mensaje

```
1. Usuario escribe y presiona Enter / botón enviar
2. PromptInput emite el texto al ChatContainer
3. ChatContainer agrega el mensaje del usuario al historial (optimistic update)
4. Si es chat normal:
     POST /api/workspace/:slug/stream-chat (SSE)
     fetchEventSource → onmessage → actualiza el último mensaje en tiempo real
5. Si es chat de agente:
     WebSocket /api/agent/:uuid/start
     onmessage → procesa pasos del agente
6. Al completar: se guarda el chat en la BD, se dispara ASSISTANT_MESSAGE_COMPLETE_EVENT
```

---

## ChatHistory

**Archivo:** `src/components/WorkspaceChat/ChatContainer/ChatHistory/`

Renderiza el historial de mensajes con los siguientes features:

### Renderizado de contenido

| Tipo de contenido | Tecnología |
|------------------|-----------|
| Texto en Markdown | `markdown-it` (tablas, listas, negritas, links) |
| Bloques de código | `highlight.js` con temas custom |
| Fórmulas matemáticas | `KaTeX` (inline con `$...$`, bloque con `$$...$$`) |
| HTML de usuario | sanitizado con `DOMPurify` antes de renderizar |

### Acciones por mensaje

- **Copiar texto** — copia el contenido del mensaje al portapapeles
- **Feedback** — pulgar arriba / pulgar abajo (se guarda en BD)
- **Eliminar** — solo admin/manager
- **Citar** — pre-rellena el PromptInput con el mensaje citado
- **Leer en voz alta** — TTS si está habilitado

### Scroll automático

- Scroll al fondo cuando llega un nuevo mensaje
- Si el usuario hace scroll hacia arriba manualmente, se pausa el auto-scroll
- Botón "volver al fondo" aparece cuando el usuario está scrolleado arriba

---

## PromptInput

**Archivo:** `src/components/WorkspaceChat/ChatContainer/PromptInput/`

Input multilinea con las siguientes capacidades:

### Atajos de teclado

| Atajo | Acción |
|-------|--------|
| `Enter` | Enviar mensaje |
| `Shift + Enter` | Salto de línea |
| `↑` (arriba) | Recuperar último mensaje enviado |
| `Ctrl/Cmd + K` | Limpiar historial |
| `/` (al inicio) | Abrir selector de slash commands |

### Speech-to-Text (STT)

- Librería: `react-speech-recognition`
- Botón de micrófono activa/desactiva la escucha
- El texto reconocido se agrega al input automáticamente
- Solo disponible en navegadores con soporte de Web Speech API

### Adjuntos de archivos

- Arrastra y suelta archivos en el área de chat (DnDWrapper)
- Botón de adjuntar abre el selector de archivos
- Los archivos se suben como "parsed files" asociados al workspace/thread actual
- Endpoint: `POST /api/workspace/:slug/upload`

### Comandos slash

Al escribir `/` aparece un panel con los slash commands disponibles:
- Presets definidos por el admin (`/reset`, `/clear`, etc.)
- Comandos personalizados del usuario

---

## Streaming SSE

El chat usa Server-Sent Events para recibir la respuesta del LLM en tiempo real:

```javascript
import { fetchEventSource } from "@microsoft/fetch-event-source";

await fetchEventSource(`${API_BASE}/workspace/${slug}/stream-chat`, {
  method: "POST",
  headers: baseHeaders(),
  body: JSON.stringify({ message, mode: "chat" }),
  onmessage(event) {
    const data = JSON.parse(event.data);
    // data.type: "textResponseChunk" | "finalizeResponseStream" | "error"
    if (data.type === "textResponseChunk") {
      appendToLastMessage(data.textResponse);
    }
  },
  signal: abortController.signal,  // Para cancelar con ABORT_STREAM_EVENT
});
```

---

## WebSocket para agentes

Cuando el workspace está en modo agente, se usa WebSocket:

```javascript
const socket = new WebSocket(websocketURI(uuid));

socket.onmessage = (event) => {
  const response = JSON.parse(event.data);
  handleSocketResponse(response, chatHistory, setChatHistory);
};
```

Los mensajes del agente incluyen pasos intermedios (pensamiento, herramientas usadas, resultados) además de la respuesta final.

---

## SourcesSidebar

**Archivo:** `src/components/WorkspaceChat/ChatContainer/SourcesSidebar/`

Panel lateral que muestra las **fuentes** (chunks de documentos) que el LLM usó para generar la respuesta. Se activa al hacer click en "Ver fuentes" en un mensaje del asistente.

---

## WorkspaceModelPicker

**Archivo:** `src/components/WorkspaceChat/ChatContainer/WorkspaceModelPicker/`

Dropdown inline en el header del chat para cambiar el modelo LLM del workspace sin ir a settings. Solo disponible para roles con permisos de edición del workspace.

---

## DnD de archivos

El `DnDUploaderContext` provee el contexto de drag-and-drop a todos los componentes del chat. Permite arrastrar archivos directamente sobre el área de chat para adjuntarlos o subirlos al workspace.
