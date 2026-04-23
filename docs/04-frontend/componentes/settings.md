# Componente: Settings

## Dos paneles de configuración

Existen dos contextos de settings en la aplicación:

1. **SettingsSidebar** — Configuración global del sistema (admin/manager)
2. **WorkspaceSettings** — Configuración específica de cada workspace

---

## SettingsSidebar

**Archivo:** [frontend/src/components/SettingsSidebar/index.jsx](../../../frontend/src/components/SettingsSidebar/index.jsx)

Sidebar de navegación que aparece en todas las páginas bajo `/settings/*`.

### Estructura de navegación

```
Configuración
├── LLM Preference          → /settings/llm-preference          [Admin]
├── Embedding Preference    → /settings/embedding-preference     [Admin]
├── Text Splitter           → /settings/text-splitter-preference [Admin]
├── Vector Database         → /settings/vector-database          [Admin]
├── Transcription           → /settings/transcription-preference [Admin]
├── Audio                   → /settings/audio-preference         [Admin]

Personalización
├── Interface               → /settings/interface                [Manager]
├── Branding                → /settings/branding                 [Manager]
├── Chat Settings           → /settings/chat                     [Manager]

Seguridad
├── Security                → /settings/security                 [Manager]
├── API Keys                → /settings/api-keys                 [Admin]
├── Browser Extension       → /settings/browser-extension        [Manager]
├── Privacy & Data          → /settings/privacy                  [Admin]

Agentes
├── Agents Config           → /settings/agents                   [Admin]
├── Agent Builder           → /settings/agents/builder           [Admin]

Usuarios
├── Users                   → /settings/users                    [Manager]
├── Invitations             → /settings/invites                  [Manager]
├── Workspaces              → /settings/workspaces               [Manager]

Sistema
├── System Prompt           → /settings/default-system-prompt    [Admin]
├── System Prompt Variables → /settings/system-prompt-variables  [Admin]
├── Event Logs              → /settings/event-logs               [Admin]
├── Workspace Chats         → /settings/workspace-chats          [Manager]
├── Beta Features           → /settings/beta-features            [Admin]
├── Embed Widgets           → /settings/embed-chat-widgets        [Admin]
├── Mobile Connections      → /settings/mobile-connections       [Manager]
├── Community Hub           → /settings/community-hub/*          [Admin]
└── Telegram                → /settings/external-connections/telegram [Admin]
```

### Comportamiento de visibilidad

Las secciones se muestran/ocultan según el rol del usuario autenticado:
- Un usuario con rol `default` no ve ningún item de settings (no puede acceder)
- Un `manager` ve las secciones marcadas `[Manager]` y `[Admin]`
- Un `admin` ve todas las secciones

---

## WorkspaceSettings

**Archivo:** [frontend/src/pages/WorkspaceSettings/index.jsx](../../../frontend/src/pages/WorkspaceSettings/index.jsx)

**Ruta:** `/workspace/:slug/settings/:tab`

Configuración específica de un workspace individual. Tiene sistema de tabs.

### Tabs disponibles

| Tab | Ruta (`/settings/:tab`) | Descripción | Acceso |
|-----|------------------------|-------------|--------|
| **General** | `general` | Nombre, avatar, descripción del workspace | Manager |
| **Chat** | `chat` | Prompt del sistema, modelo, temperatura, topN, modo | Manager |
| **Agent** | `agent` | Proveedor y modelo del agente para este workspace | Manager |
| **Members** | `members` | Usuarios con acceso al workspace | Manager |
| **Vector DB** | `vector-database` | Config de vector DB específica del workspace | Manager |

### Campos de la pestaña Chat

| Campo | Descripción |
|-------|-------------|
| System Prompt | Instrucciones al LLM para este workspace |
| Chat Model | Override del modelo LLM (si es distinto al global) |
| Temperature | Creatividad del LLM (0.0 - 1.0) |
| Chat History | Número de mensajes previos incluidos en el contexto |
| Similarity Threshold | Umbral mínimo de similitud para incluir un chunk |
| Top N | Número máximo de chunks a recuperar por búsqueda |
| Chat Mode | `chat` (con historial) o `query` (sin historial) |
| Query Refusal | Mensaje cuando no hay respuesta relevante |

---

## Páginas de settings globales clave

### LLM Preference (`/settings/llm-preference`)

Selector del proveedor LLM global. Renderiza el sub-componente correspondiente al proveedor seleccionado:

```
src/components/LLMSelection/
├── OpenAiOptions/
├── AnthropicAiOptions/
├── OllamaLLMOptions/
├── AzureAiOptions/
├── GroqAiOptions/
├── GeminiLLMOptions/
└── [un directorio por proveedor]
```

Cada opción tiene sus propios campos de configuración (API key, endpoint, modelo preferido, etc.).

### Embedding Preference (`/settings/embedding-preference`)

Selector del motor de embeddings. Estructura similar a LLMPreference con:

```
src/components/EmbeddingSelection/
├── OpenAiOptions/
├── AzureAiOptions/
├── OllamaOptions/
└── [un directorio por motor]
```

### Branding (`/settings/branding`)

Permite personalizar:
- Logo de la instancia (imagen PNG/SVG)
- Nombre personalizado de la aplicación
- (Solo admin/manager)

### Security (`/settings/security`)

- Activar/desactivar modo multi-usuario
- Gestión de contraseña en modo single-user
- Complejidad de contraseñas requerida

---

## Componentes reutilizables en settings

### Toggle

**Archivo:** `src/components/lib/Toggle/`

Switch on/off reutilizable usado en múltiples páginas de settings:

```jsx
<Toggle
  label="Habilitar feature"
  checked={enabled}
  onChange={(val) => setEnabled(val)}
/>
```

### CTAButton

**Archivo:** `src/components/lib/CTAButton/`

Botón de acción principal con estilo consistente en todas las páginas de settings.
