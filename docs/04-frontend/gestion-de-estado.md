# Gestión de Estado — Frontend

## Enfoque general

El frontend **no usa Redux ni Zustand**. El estado se gestiona con:

1. **React Context API** — estado global compartido entre componentes
2. **`useState` local** — estado interno de cada componente
3. **`localStorage`** — persistencia entre sesiones

---

## Contextos globales

### 1. AuthContext

**Archivo:** [frontend/src/AuthContext.jsx](../../frontend/src/AuthContext.jsx)

Gestiona el usuario autenticado y el token de autenticación.

```javascript
const { user, authToken, updateUser, unsetUser } = useContext(AuthContext);

// Forma tipica de uso:
const { user } = useContext(AuthContext);
if (!user) return <Redirect to="/login" />;
```

**Estado:**
```javascript
{
  user: {
    id: 1,
    username: "admin",
    role: "admin",           // "admin" | "manager" | "default"
    pfpFilename: null,
    bio: "",
    dailyMessageLimit: null,
  },
  authToken: "eyJhbGciOiJIUzI1NiIs..."
}
```

**localStorage keys:**
- `anythingllm_user` — Objeto usuario serializado
- `anythingllm_authToken` — Token JWT
- `anythingllm_authTimestamp` — Timestamp de la última autenticación

**Métodos:**
- `updateUser(newUser)` — Actualiza el usuario en contexto y localStorage
- `unsetUser()` — Limpia el usuario y token (logout)

---

### 2. ThemeContext

**Archivo:** [frontend/src/ThemeContext.jsx](../../frontend/src/ThemeContext.jsx)

Gestiona el tema visual de la aplicación.

```javascript
const { theme, setTheme } = useTheme(); // hook wrapper de useContext
```

**Estado:**
```javascript
{
  theme: "default" | "light" | "system"
  // "default" = modo oscuro
  // "system" = sigue la preferencia del sistema operativo
}
```

**localStorage key:** `theme`

**Efecto:** Al cambiar el tema, aplica `document.documentElement.setAttribute("data-theme", resolvedTheme)` y toggle de la clase `.light` en `document.body`.

---

### 3. PWAContext

**Archivo:** [frontend/src/PWAContext.jsx](../../frontend/src/PWAContext.jsx)

Detecta si la aplicación está siendo ejecutada como PWA instalada.

```javascript
const { isPWA } = useContext(PWAContext);
```

**Estado:** `{ isPWA: boolean }`

Se activa escuchando el evento `appinstalled` del navegador y verificando si el modo de display es `standalone`.

---

### 4. LogoContext

**Archivo:** [frontend/src/LogoContext.jsx](../../frontend/src/LogoContext.jsx)

Gestiona el logo personalizado de la instancia.

```javascript
const { logo, setLogo } = useContext(LogoContext);
```

**Lógica:** Llama al endpoint `/api/system/logo` para obtener el logo actual. Escucha el evento `REFETCH_LOGO_EVENT` para refrescarlo cuando el admin cambia el logo desde Settings.

---

### 5. PfpContext

**Archivo:** [frontend/src/PfpContext.jsx](../../frontend/src/PfpContext.jsx)

Gestiona la foto de perfil del usuario actual.

```javascript
const { pfp, setPfp } = useContext(PfpContext);
```

---

### 6. TTSProvider

**Archivo:** [frontend/src/components/contexts/TTSProvider.jsx](../../frontend/src/components/contexts/TTSProvider.jsx)

Gestiona la configuración de Text-to-Speech.

```javascript
const { TTSProvider, voiceOptions } = useContext(TTSContext);
```

Escucha el evento `ASSISTANT_MESSAGE_COMPLETE_EVENT` para reproducir la respuesta del asistente.

---

## Árbol de Providers en App.jsx

```jsx
// src/App.jsx
<AuthProvider>
  <ThemeProvider>
    <PWAProvider>
      <LogoProvider>
        <PfpProvider>
          <TTSProvider>
            <Outlet />    {/* Página actual según el router */}
          </TTSProvider>
        </PfpProvider>
      </LogoProvider>
    </PWAProvider>
  </ThemeProvider>
</AuthProvider>
```

---

## localStorage — todas las keys

| Clave | Tipo | Descripción |
|------|------|-------------|
| `anythingllm_user` | JSON | Usuario autenticado serializado |
| `anythingllm_authToken` | string | Token JWT de autenticación |
| `anythingllm_authTimestamp` | number | Timestamp del último login |
| `anythingllm_completed_questionnaire` | boolean | Onboarding completado |
| `theme` | string | `"default"` / `"light"` / `"system"` |
| `anythingllm_pinned_document_alert` | boolean | Alert de documento pinned visto |
| `anythingllm_watched_document_alert` | boolean | Alert de documento watched visto |
| `anythingllm_last_visited_workspace` | string | Slug del último workspace visitado |
| `anythingllm_user_prompt_input_map` | JSON | Prompts en progreso por workspace |
| `anythingllm_pending_home_message` | string | Mensaje pendiente desde la home |
| `anythingllm_appearance_settings` | JSON | Preferencias de apariencia del usuario |

---

## Patrón de estado local

Para estado que no necesita ser compartido entre múltiples componentes, se usa `useState` directamente:

```javascript
// Ejemplo típico en un componente de página
function WorkspaceSettings() {
  const [loading, setLoading] = useState(true);
  const [settings, setSettings] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchSettings() {
      setLoading(true);
      const data = await Workspace.settings(slug);
      setSettings(data);
      setLoading(false);
    }
    fetchSettings();
  }, [slug]);
}
```

---

## Eventos personalizados (Event Bus)

Algunos componentes se comunican mediante eventos del DOM (patrón publish/subscribe sin librería):

| Evento | Descripción |
|--------|-------------|
| `REFETCH_LOGO_EVENT` | Solicita al LogoContext que vuelva a cargar el logo |
| `PROMPT_INPUT_EVENT` | Inyecta texto en el PromptInput desde otro componente |
| `ABORT_STREAM_EVENT` | Cancela el stream de chat en curso |
| `ASSISTANT_MESSAGE_COMPLETE_EVENT` | Notifica al TTSProvider que hay texto para leer |

**Ejemplo de uso:**
```javascript
// Disparar el evento
window.dispatchEvent(new CustomEvent("PROMPT_INPUT_EVENT", {
  detail: { command: "/reset" }
}));

// Escuchar el evento (en el componente PromptInput)
window.addEventListener("PROMPT_INPUT_EVENT", handlePromptInput);
return () => window.removeEventListener("PROMPT_INPUT_EVENT", handlePromptInput);
```

---

## Cuándo usar cada mecanismo

| Situación | Mecanismo recomendado |
|-----------|----------------------|
| Usuario actual, token | AuthContext |
| Tema visual | ThemeContext |
| Estado de UI de un solo componente (loading, form values) | `useState` local |
| Datos que necesitan persistir al recargar | `localStorage` |
| Comunicación entre componentes no relacionados | Evento custom del DOM |
| Datos del servidor que necesita toda la app | Context + fetch en el Provider |
