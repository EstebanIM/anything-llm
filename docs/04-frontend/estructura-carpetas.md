# Estructura de Carpetas — Frontend

Árbol completo del directorio `frontend/src/` con descripción de cada carpeta y archivo clave.

```
frontend/
├── index.html                    → HTML raíz (punto de entrada de Vite)
├── vite.config.js                → Configuración de build, alias @/, puerto 3000
├── tailwind.config.js            → Estilos, temas, colores custom
├── postcss.config.js             → Tailwind + Autoprefixer
├── jsconfig.json                 → Path alias: @ → src/
├── eslint.config.js              → Reglas ESLint del frontend
├── package.json                  → Dependencias y scripts
├── .env.example                  → VITE_API_BASE
│
├── public/
│   ├── favicon.png / favicon.ico
│   ├── manifest.json             → Configuración PWA
│   ├── fonts/                    → Tipografías (Plus Jakarta Sans)
│   ├── service-workers/          → Service worker para PWA y web push
│   └── embed/                    → Assets del widget embebible
│
└── src/
    ├── main.jsx                  → Punto de entrada, define el router completo
    ├── App.jsx                   → Componente raíz con todos los Providers
    ├── index.css                 → Estilos globales + variables CSS de tema
    ├── i18n.js                   → Configuración de i18next
    │
    ├── AuthContext.jsx            → Contexto de autenticación (usuario + token)
    ├── ThemeContext.jsx           → Contexto de tema (dark/light/system)
    ├── PWAContext.jsx             → Detección de modo PWA
    ├── PfpContext.jsx             → Foto de perfil del usuario
    ├── LogoContext.jsx            → Logo de la instancia
    │
    ├── components/
    │   ├── Sidebar/
    │   │   ├── index.jsx          → Componente principal del sidebar
    │   │   ├── ActiveWorkspaces/  → Lista de workspaces activos con DnD
    │   │   ├── SearchBox/         → Búsqueda/filtro de workspaces
    │   │   └── SidebarToggle/     → Botón toggle para móvil
    │   │
    │   ├── WorkspaceChat/
    │   │   ├── index.jsx          → Wrapper del chat con inicialización
    │   │   ├── LoadingChat/       → Skeleton de carga del chat
    │   │   └── ChatContainer/
    │   │       ├── index.jsx      → Orquestador principal del chat
    │   │       ├── ChatHistory/   → Renderizado del historial de mensajes
    │   │       ├── PromptInput/   → Input multilinea con STT, adjuntos, atajos
    │   │       ├── SourcesSidebar/ → Panel lateral de fuentes/contexto
    │   │       ├── TextSizeMenu/  → Selector de tamaño de texto
    │   │       ├── WorkspaceModelPicker/ → Selector de modelo inline
    │   │       └── DnDWrapper/    → Wrapper de drag-and-drop para archivos
    │   │
    │   ├── SettingsSidebar/
    │   │   └── index.jsx          → Sidebar de navegación de configuraciones
    │   │
    │   ├── UserMenu/
    │   │   └── index.jsx          → Menú dropdown de usuario (logout, perfil)
    │   │
    │   ├── Modals/
    │   │   ├── NewWorkspace/      → Crear nuevo workspace
    │   │   ├── ManageWorkspace/   → Gestionar documentos del workspace
    │   │   ├── Password/          → Cambio de contraseña
    │   │   ├── Settings/          → Configuración de usuario
    │   │   └── [otros modales]
    │   │
    │   ├── PrivateRoute/
    │   │   └── index.jsx          → PrivateRoute, AdminRoute, ManagerRoute
    │   │
    │   ├── DefaultChat/           → Pantalla cuando no hay workspace seleccionado
    │   ├── Footer/                → Pie de página
    │   ├── KeyboardShortcutsHelp/ → Overlay de atajos de teclado
    │   ├── ErrorBoundaryFallback/ → UI de error cuando crashea un componente
    │   │
    │   ├── contexts/
    │   │   └── TTSProvider.jsx    → Proveedor de Text-to-Speech
    │   │
    │   ├── lib/
    │   │   ├── QuickActions/      → Acciones rápidas en la pantalla de inicio
    │   │   ├── SuggestedMessages/ → Mensajes sugeridos del workspace
    │   │   ├── ModelTable/        → Tabla para selección de modelos
    │   │   ├── CTAButton/         → Botón call-to-action reutilizable
    │   │   └── Toggle/            → Switch toggle reutilizable
    │   │
    │   ├── EmbeddingSelection/    → Selectores de proveedor de embeddings
    │   │   ├── OpenAiOptions/
    │   │   ├── AzureAiOptions/
    │   │   ├── OllamaOptions/
    │   │   └── [un componente por proveedor]
    │   │
    │   ├── LLMSelection/          → Selectores de proveedor LLM
    │   │   ├── OpenAiOptions/
    │   │   ├── AnthropicAiOptions/
    │   │   ├── OllamaLLMOptions/
    │   │   └── [un componente por proveedor]
    │   │
    │   ├── VectorDBSelection/     → Selectores de vector DB
    │   └── TranscriptionSelection/ → Selectores de motor de transcripción
    │
    ├── pages/
    │   ├── Main/
    │   │   ├── index.jsx          → Página principal (lista workspaces)
    │   │   └── Home/              → Pantalla de bienvenida con quick actions
    │   │
    │   ├── WorkspaceChat/
    │   │   └── index.jsx          → Página de chat con carga del workspace
    │   │
    │   ├── WorkspaceSettings/
    │   │   ├── index.jsx          → Tabs de configuración del workspace
    │   │   ├── AgentConfig/       → Configuración del agente del workspace
    │   │   ├── ChatSettings/      → Prompt, modelo, temperatura, etc.
    │   │   ├── GeneralAppearance/ → Nombre, avatar
    │   │   ├── Members/           → Gestión de miembros del workspace
    │   │   └── VectorDatabase/    → Config de vector DB del workspace
    │   │
    │   ├── Admin/
    │   │   ├── Agents/            → Configuración global de agentes
    │   │   ├── AgentBuilder/      → Constructor visual de flujos
    │   │   ├── Users/             → CRUD de usuarios
    │   │   ├── Workspaces/        → Vista admin de todos los workspaces
    │   │   ├── Invitations/       → Gestión de invitaciones
    │   │   ├── Logging/           → Logs de eventos del sistema
    │   │   ├── DefaultSystemPrompt/ → Prompt por defecto global
    │   │   ├── ExperimentalFeatures/ → Features beta
    │   │   └── SystemPromptVariables/ → Variables de prompt del sistema
    │   │
    │   ├── GeneralSettings/
    │   │   ├── LLMPreference/     → Selector de proveedor LLM global
    │   │   ├── EmbeddingPreference/ → Selector de motor de embeddings
    │   │   ├── EmbeddingTextSplitterPreference/ → Config de chunking
    │   │   ├── VectorDatabase/    → Selector de vector DB global
    │   │   ├── TranscriptionPreference/ → Config de STT
    │   │   ├── AudioPreference/   → Config de TTS
    │   │   ├── Security/          → Contraseñas, modo multi-usuario
    │   │   ├── PrivacyAndData/    → Telemetría, exportación de datos
    │   │   ├── Settings/
    │   │   │   ├── Interface/     → Idioma, accesibilidad, apariencia
    │   │   │   ├── Branding/      → Logo, nombre de la instancia
    │   │   │   └── Chat/          → Config global de chat
    │   │   ├── ApiKeys/           → Gestión de API keys de desarrollador
    │   │   ├── BrowserExtensionApiKey/ → Clave para la extensión
    │   │   ├── Chats/             → Historial global de chats
    │   │   ├── MobileConnections/ → Conexiones de dispositivos móviles
    │   │   ├── ChatEmbedWidgets/  → Gestión de widgets embebibles
    │   │   ├── CommunityHub/      → Hub comunitario (Trending, Auth, Import)
    │   │   └── Connections/
    │   │       └── TelegramBot/   → Configuración del bot de Telegram
    │   │
    │   ├── Login/
    │   │   ├── index.jsx          → Formulario de login
    │   │   └── SSO/simple.jsx     → Passthrough de SSO simple
    │   │
    │   ├── OnboardingFlow/        → Wizard de configuración inicial
    │   ├── Invite/                → Aceptar invitación de usuario
    │   └── 404.jsx               → Página no encontrada
    │
    ├── hooks/                     → Hooks personalizados (ver hooks.md)
    │   ├── useUser.js
    │   ├── useTheme.js
    │   ├── useLogo.js
    │   └── [20+ hooks]
    │
    ├── models/                    → Capa de acceso a la API (ver capa-api.md)
    │   ├── system.js
    │   ├── workspace.js
    │   ├── admin.js
    │   └── [15+ archivos]
    │
    ├── utils/
    │   ├── request.js             → baseHeaders(), userFromStorage(), API_BASE
    │   ├── constants.js           → AUTH_TOKEN, AUTH_USER, API_BASE, etc.
    │   ├── paths.js               → Rutas de navegación (/workspace/:slug, etc.)
    │   ├── chat/
    │   │   ├── index.js           → handleChat(), parsear respuesta del servidor
    │   │   ├── agent.js           → handleSocketResponse(), websocketURI()
    │   │   ├── markdown.js        → Configuración de markdown-it
    │   │   ├── purify.js          → Sanitización DOMPurify
    │   │   └── themes/            → Temas de resaltado de código (highlight.js)
    │   ├── piperTTS/
    │   │   ├── index.js           → Integración de Piper TTS
    │   │   └── worker.js          → Web Worker para TTS (no bloquea UI)
    │   ├── directories.js         → Manejo de estructura de directorios
    │   ├── keyboardShortcuts.js   → Definición de atajos de teclado
    │   ├── numbers.js             → Utilidades de formato numérico
    │   ├── session.js             → Gestión de sesión
    │   ├── toast.js               → Wrapper de react-toastify
    │   ├── types.js               → Definiciones de tipos
    │   └── username.js            → Utilidades de nombre de usuario
    │
    ├── locales/                   → Archivos de traducción i18n
    │   ├── en/common.js
    │   ├── es/common.js
    │   ├── fr/common.js
    │   ├── de/common.js
    │   ├── zh/common.js
    │   └── [otros idiomas]
    │
    └── media/                     → Imágenes y assets del frontend
```

---

## Archivos de configuración clave

| Archivo | Propósito |
|---------|-----------|
| [frontend/vite.config.js](../../frontend/vite.config.js) | Build, alias, puerto, WASM, rollup |
| [frontend/tailwind.config.js](../../frontend/tailwind.config.js) | Colores, animaciones, variantes `light:` y `pwa:` |
| [frontend/src/index.css](../../frontend/src/index.css) | Variables CSS de tema, reset de estilos globales |
| [frontend/src/main.jsx](../../frontend/src/main.jsx) | Router completo con todas las rutas |
| [frontend/src/App.jsx](../../frontend/src/App.jsx) | Árbol de Providers (Auth, Theme, Logo, Pfp) |
| [frontend/jsconfig.json](../../frontend/jsconfig.json) | Path alias `@` → `./src` |
