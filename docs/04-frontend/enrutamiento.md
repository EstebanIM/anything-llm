# Sistema de Enrutamiento — Frontend

## Tecnología

- **React Router DOM** v6.3.0
- **Modo:** `createBrowserRouter` (history API, sin hash)
- **Archivo:** [frontend/src/main.jsx](../../frontend/src/main.jsx)
- **Lazy loading:** todas las páginas usan `async import()` para code splitting

---

## Tipos de rutas protegidas

| Componente | Archivo | Acceso mínimo |
|-----------|---------|--------------|
| `PrivateRoute` | `src/components/PrivateRoute/index.jsx` | Autenticado (cualquier usuario) |
| `AdminRoute` | `src/components/PrivateRoute/index.jsx` | Rol `admin` |
| `ManagerRoute` | `src/components/PrivateRoute/index.jsx` | Rol `manager` o `admin` |

Si el usuario no tiene el rol requerido, es redirigido a `/` o `/login`.

---

## Tabla de rutas completa

### Rutas públicas

| Ruta | Componente | Descripción |
|------|-----------|-------------|
| `/login` | `pages/Login` | Formulario de login |
| `/sso/simple` | `pages/Login/SSO/simple` | Passthrough de SSO simple |
| `/onboarding` | `pages/OnboardingFlow` | Wizard de setup inicial |
| `/onboarding/:step` | `pages/OnboardingFlow` | Paso específico del onboarding |
| `/accept-invite/:code` | `pages/Invite` | Aceptar invitación de usuario |
| `*` | `pages/404` | Cualquier ruta no definida |

### Rutas privadas (cualquier usuario autenticado)

| Ruta | Componente | Descripción |
|------|-----------|-------------|
| `/` | `pages/Main` | Pantalla principal con lista de workspaces |
| `/workspace/:slug` | `pages/WorkspaceChat` | Chat del workspace |
| `/workspace/:slug/t/:threadSlug` | `pages/WorkspaceChat` | Chat en un thread específico |

### Rutas de manager (roles: admin, manager)

| Ruta | Componente | Descripción |
|------|-----------|-------------|
| `/workspace/:slug/settings/:tab` | `pages/WorkspaceSettings` | Configuración del workspace |
| `/settings/security` | `GeneralSettings/Security` | Contraseñas y modo multi-usuario |
| `/settings/interface` | `GeneralSettings/Settings/Interface` | Idioma, accesibilidad |
| `/settings/branding` | `GeneralSettings/Settings/Branding` | Logo e identidad visual |
| `/settings/chat` | `GeneralSettings/Settings/Chat` | Configuración global de chat |
| `/settings/browser-extension` | `GeneralSettings/BrowserExtensionApiKey` | API key de la extensión |
| `/settings/workspace-chats` | `GeneralSettings/Chats` | Historial global de chats |
| `/settings/invites` | `Admin/Invitations` | Gestión de invitaciones |
| `/settings/users` | `Admin/Users` | Gestión de usuarios |
| `/settings/workspaces` | `Admin/Workspaces` | Vista admin de workspaces |
| `/settings/mobile-connections` | `GeneralSettings/MobileConnections` | Dispositivos móviles |

### Rutas de administrador (solo rol: admin)

| Ruta | Componente | Descripción |
|------|-----------|-------------|
| `/settings/llm-preference` | `GeneralSettings/LLMPreference` | Proveedor LLM global |
| `/settings/transcription-preference` | `GeneralSettings/TranscriptionPreference` | STT / Whisper |
| `/settings/audio-preference` | `GeneralSettings/AudioPreference` | TTS |
| `/settings/embedding-preference` | `GeneralSettings/EmbeddingPreference` | Motor de embeddings |
| `/settings/text-splitter-preference` | `GeneralSettings/EmbeddingTextSplitterPreference` | Chunking |
| `/settings/vector-database` | `GeneralSettings/VectorDatabase` | Vector DB global |
| `/settings/agents` | `Admin/Agents` | Configuración global de agentes |
| `/settings/agents/builder` | `Admin/AgentBuilder` | Constructor visual de flujos |
| `/settings/agents/builder/:flowId` | `Admin/AgentBuilder` | Editar flujo existente |
| `/settings/event-logs` | `Admin/Logging` | Logs de eventos del sistema |
| `/settings/embed-chat-widgets` | `GeneralSettings/ChatEmbedWidgets` | Widgets embebibles |
| `/settings/privacy` | `GeneralSettings/PrivacyAndData` | Telemetría y privacidad |
| `/settings/default-system-prompt` | `Admin/DefaultSystemPrompt` | Prompt por defecto global |
| `/settings/beta-features` | `Admin/ExperimentalFeatures` | Features beta |
| `/settings/api-keys` | `GeneralSettings/ApiKeys` | Claves API de desarrollador |
| `/settings/system-prompt-variables` | `Admin/SystemPromptVariables` | Variables de prompt del sistema |
| `/settings/beta-features/live-document-sync/manage` | `ExperimentalFeatures/Features/LiveSync/manage` | Gestión de sincronización en vivo |
| `/settings/community-hub/trending` | `GeneralSettings/CommunityHub/Trending` | Hub comunitario |
| `/settings/community-hub/authentication` | `GeneralSettings/CommunityHub/Authentication` | Auth del hub |
| `/settings/community-hub/import-item` | `GeneralSettings/CommunityHub/ImportItem` | Importar del hub |
| `/settings/external-connections/telegram` | `GeneralSettings/Connections/TelegramBot` | Bot de Telegram |

---

## Lazy loading

Todas las páginas (excepto `Login`, `SimpleSSOPassthrough` y `OnboardingFlow`) se cargan con lazy loading:

```javascript
{
  path: "/workspace/:slug",
  lazy: async () => {
    const { default: WorkspaceChat } = await import("@/pages/WorkspaceChat");
    return { element: <PrivateRoute Component={WorkspaceChat} /> };
  },
}
```

Esto genera un chunk JS separado por página, reduciendo el bundle inicial.

---

## Navegación programática

El archivo [frontend/src/utils/paths.js](../../frontend/src/utils/paths.js) centraliza todas las rutas para evitar strings duplicados:

```javascript
// Ejemplo de uso
import paths from "@/utils/paths";

navigate(paths.workspace(slug));
navigate(paths.workspaceSettings(slug, "chat"));
navigate(paths.settings.llmPreference());
navigate(paths.settings.users());
```

---

## Árbol de componentes en App.jsx

```jsx
<RouterProvider router={router}>
  <App>                         ← Todos los Providers (Auth, Theme, PWA, Logo, Pfp)
    <PrivateRoute>              ← Verifica autenticación
      <AdminRoute>              ← Verifica rol admin
      <ManagerRoute>            ← Verifica rol manager
        <Outlet />              ← Renderiza la página correspondiente a la ruta
    </PrivateRoute>
  </App>
</RouterProvider>
```

---

## Parámetros de URL relevantes

| Parámetro | Ejemplo | Descripción |
|-----------|---------|-------------|
| `:slug` | `mi-workspace` | Identificador único del workspace |
| `:threadSlug` | `hilo-1a2b` | Identificador único del thread |
| `:tab` | `chat`, `agent`, `members` | Pestaña activa en WorkspaceSettings |
| `:flowId` | `123` | ID del flujo de agente a editar |
| `:code` | `abc123xyz` | Código de invitación |
| `:step` | `llm-preference` | Paso del onboarding |
