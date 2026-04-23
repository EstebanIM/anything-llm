# Páginas y Rutas — Frontend

Todas las páginas del router, con ruta, componente, acceso requerido y descripción.

## Tabla completa

| Ruta | Componente | Acceso | Descripción |
|------|-----------|--------|-------------|
| `/` | `pages/Main` | Autenticado | Pantalla principal con lista de workspaces |
| `/login` | `pages/Login` | Público | Formulario de login |
| `/sso/simple` | `pages/Login/SSO/simple` | Público | Passthrough de SSO simple |
| `/workspace/:slug` | `pages/WorkspaceChat` | Autenticado | Chat del workspace |
| `/workspace/:slug/t/:threadSlug` | `pages/WorkspaceChat` | Autenticado | Chat en thread específico |
| `/workspace/:slug/settings/:tab` | `pages/WorkspaceSettings` | Manager | Configuración del workspace |
| `/accept-invite/:code` | `pages/Invite` | Público | Aceptar invitación |
| `/onboarding` | `pages/OnboardingFlow` | Público | Setup inicial del sistema |
| `/onboarding/:step` | `pages/OnboardingFlow` | Público | Paso específico del setup |
| `/settings/llm-preference` | `GeneralSettings/LLMPreference` | Admin | Proveedor LLM global |
| `/settings/embedding-preference` | `GeneralSettings/EmbeddingPreference` | Admin | Motor de embeddings |
| `/settings/text-splitter-preference` | `GeneralSettings/EmbeddingTextSplitterPreference` | Admin | Config de chunking |
| `/settings/vector-database` | `GeneralSettings/VectorDatabase` | Admin | Vector DB global |
| `/settings/transcription-preference` | `GeneralSettings/TranscriptionPreference` | Admin | STT/Whisper |
| `/settings/audio-preference` | `GeneralSettings/AudioPreference` | Admin | TTS |
| `/settings/agents` | `Admin/Agents` | Admin | Config de agentes globales |
| `/settings/agents/builder` | `Admin/AgentBuilder` | Admin | Constructor de flujos |
| `/settings/agents/builder/:flowId` | `Admin/AgentBuilder` | Admin | Editar flujo existente |
| `/settings/event-logs` | `Admin/Logging` | Admin | Logs del sistema |
| `/settings/embed-chat-widgets` | `GeneralSettings/ChatEmbedWidgets` | Admin | Widgets embebibles |
| `/settings/security` | `GeneralSettings/Security` | Manager | Seguridad y multi-usuario |
| `/settings/privacy` | `GeneralSettings/PrivacyAndData` | Admin | Telemetría y privacidad |
| `/settings/interface` | `GeneralSettings/Settings/Interface` | Manager | Idioma y accesibilidad |
| `/settings/branding` | `GeneralSettings/Settings/Branding` | Manager | Logo y branding |
| `/settings/default-system-prompt` | `Admin/DefaultSystemPrompt` | Admin | Prompt por defecto global |
| `/settings/chat` | `GeneralSettings/Settings/Chat` | Manager | Config global de chat |
| `/settings/beta-features` | `Admin/ExperimentalFeatures` | Admin | Features beta |
| `/settings/api-keys` | `GeneralSettings/ApiKeys` | Admin | API keys de desarrollador |
| `/settings/system-prompt-variables` | `Admin/SystemPromptVariables` | Admin | Variables de prompt |
| `/settings/browser-extension` | `GeneralSettings/BrowserExtensionApiKey` | Manager | API key de extensión |
| `/settings/workspace-chats` | `GeneralSettings/Chats` | Manager | Historial de chats |
| `/settings/invites` | `Admin/Invitations` | Manager | Invitaciones |
| `/settings/users` | `Admin/Users` | Manager | Gestión de usuarios |
| `/settings/workspaces` | `Admin/Workspaces` | Manager | Vista admin de workspaces |
| `/settings/beta-features/live-document-sync/manage` | `LiveSync/manage` | Admin | Gestión de sync en vivo |
| `/settings/community-hub/trending` | `CommunityHub/Trending` | Admin | Hub comunitario |
| `/settings/community-hub/authentication` | `CommunityHub/Authentication` | Admin | Auth del hub |
| `/settings/community-hub/import-item` | `CommunityHub/ImportItem` | Admin | Importar del hub |
| `/settings/mobile-connections` | `GeneralSettings/MobileConnections` | Manager | Dispositivos móviles |
| `/settings/external-connections/telegram` | `Connections/TelegramBot` | Admin | Bot de Telegram |
| `*` | `pages/404` | Público | Página no encontrada |

---

## Descripción detallada de páginas clave

### Main (`/`)

Pantalla de bienvenida. Muestra:
- Logo de la instancia
- Nombre personalizado
- Quick actions (sugerencias de uso)
- Lista de workspaces recientes
- Botón de crear nuevo workspace

### WorkspaceChat (`/workspace/:slug`)

La página principal de la aplicación. Compone:
- `Sidebar` (lista de workspaces)
- `ChatContainer` (interfaz de chat completa)

Al cargar, obtiene el workspace por su slug y el historial de chat (o del thread si se especifica `:threadSlug`).

### OnboardingFlow (`/onboarding`)

Wizard de configuración inicial que aparece la primera vez que se accede a la instancia. Pasos típicos:
1. Bienvenida
2. Selección de LLM
3. Configuración de embeddings
4. Contraseña / modo multi-usuario
5. Creación del primer workspace

### WorkspaceSettings (`/workspace/:slug/settings/:tab`)

Panel de configuración del workspace con sistema de tabs. Ver [componentes/settings.md](componentes/settings.md) para detalle completo.

### Admin/AgentBuilder (`/settings/agents/builder`)

Constructor visual de flujos de agentes. Interfaz de nodos y conexiones (estilo flow editor). Solo disponible para admins. Se oculta el `UserMenu` en esta pantalla (espacio de trabajo más limpio).

### GeneralSettings/Security (`/settings/security`)

En modo single-user: permite cambiar la contraseña de acceso.

En modo multi-user: permite configurar complejidad de contraseñas para todos los usuarios.

---

## Páginas lazy-loaded vs eager-loaded

**Eager (carga inmediata al inicio):**
- `Login`
- `SimpleSSOPassthrough`
- `OnboardingFlow`

**Lazy (se cargan solo cuando se navega a la ruta):**
- Todas las demás páginas
