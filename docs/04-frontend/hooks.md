# Hooks Personalizados — Frontend

Todos los hooks se encuentran en [frontend/src/hooks/](../../../frontend/src/hooks/).

## Tabla de hooks

| Hook | Archivo | Retorna | Descripción |
|------|---------|---------|-------------|
| `useUser` | `useUser.js` | `{ user }` | Usuario actual desde AuthContext |
| `useTheme` | `useTheme.js` | `{ theme, setTheme, availableThemes, isLight }` | Tema actual y setter |
| `useLogo` | `useLogo.js` | `{ logo, setLogo }` | Logo de la instancia desde LogoContext |
| `usePfp` | `usePfp.js` | `{ pfp, setPfp }` | Foto de perfil desde PfpContext |
| `usePrefersDarkMode` | `usePrefersDarkMode.js` | `boolean` | Preferencia del SO por dark mode |
| `useLoginMode` | `useLoginMode.js` | `{ mode }` | Modo de login disponible (`single` / `multi` / `sso`) |
| `useModal` | `useModal.js` | `{ isOpen, openModal, closeModal }` | Control de apertura/cierre de un modal |
| `useOnboardingComplete` | `useOnboardingComplete.js` | `{ complete }` | Si el onboarding fue completado |
| `useQuery` | `useQuery.js` | `URLSearchParams` | Parsing de query params de la URL actual |
| `useLanguageOptions` | `useLanguageOptions.js` | `{ languages, currentLanguage, changeLanguage }` | Opciones de idioma de i18n |
| `useCopyText` | `useCopyText.js` | `{ copyText, copied }` | Copiar texto al portapapeles |
| `useTextSize` | `useTextSize.js` | `{ textSize, setTextSize }` | Tamaño de fuente del chat |
| `useSimpleSSO` | `useSimpleSSO.js` | `{ enabled, url }` | Config de SSO simple |
| `useCommunityHubAuth` | `useCommunityHubAuth.js` | `{ authenticated, token }` | Auth del Community Hub |
| `useGetProvidersModels` | `useGetProvidersModels.js` | `{ models, loading }` | Modelos disponibles de un proveedor |
| `useProviderEndpointAutoDiscovery` | `useProviderEndpointAutoDiscovery.js` | `{ discovered, endpoint }` | Auto-descubrimiento de endpoints locales |
| `usePromptInputStorage` | `usePromptInputStorage.js` | `{ prompt, setPrompt }` | Persiste el prompt en progreso en localStorage |
| `useChatHistoryScrollHandle` | `useChatHistoryScrollHandle.js` | `{ ref, scrollToBottom, isAtBottom }` | Control de scroll del historial |
| `useChatContainerQuickScroll` | `useChatContainerQuickScroll.js` | `{ quickScrollRef }` | Scroll rápido al fondo del chat |
| `useScrollActiveItemIntoView` | `useScrollActiveItemIntoView.js` | `ref` | Hace scroll al item activo en una lista |
| `useWebPushNotifications` | `useWebPushNotifications.js` | `{ subscribe, unsubscribe, isSubscribed }` | Suscripción a web push notifications |
| `useAppVersion` | `useAppVersion.js` | `{ version }` | Versión actual de la aplicación |

---

## Detalle de hooks importantes

### `useTheme`

```javascript
const { theme, setTheme, isLight } = useTheme();

// Cambiar tema
setTheme("light");    // modo claro
setTheme("default");  // modo oscuro
setTheme("system");   // seguir preferencia del SO

// Verificar tema actual
if (isLight) { /* estilos de modo claro */ }
```

### `useCopyText`

```javascript
const { copyText, copied } = useCopyText();

// Copiar al portapapeles
await copyText("texto a copiar");

// Mostrar feedback al usuario
{copied && <span>¡Copiado!</span>}
```

### `useGetProvidersModels`

```javascript
const { models, loading } = useGetProvidersModels("openai");
// Llama a GET /api/system/supported-ai-providers para obtener modelos disponibles
// Usado en selectores de modelo en settings
```

### `usePromptInputStorage`

```javascript
const { prompt, setPrompt } = usePromptInputStorage(workspaceSlug);
// Persiste el texto del prompt en localStorage
// key: anythingllm_user_prompt_input_map[slug]
// Se restaura cuando el usuario regresa al workspace
```

### `useChatHistoryScrollHandle`

```javascript
const { ref, scrollToBottom, isAtBottom } = useChatHistoryScrollHandle();

// ref: asignar al contenedor del historial
<div ref={ref}>...</div>

// scrollToBottom: llamar cuando llega nuevo mensaje
useEffect(() => scrollToBottom(), [lastMessage]);

// isAtBottom: saber si el usuario está al fondo
{!isAtBottom && <ScrollToBottomButton onClick={scrollToBottom} />}
```

### `useModal`

```javascript
const { isOpen, openModal, closeModal } = useModal();

return (
  <>
    <button onClick={openModal}>Abrir</button>
    {isOpen && <Modal onClose={closeModal} />}
  </>
);
```

### `useWebPushNotifications`

```javascript
const { isSubscribed, subscribe, unsubscribe } = useWebPushNotifications();

// Suscribirse a notificaciones push
await subscribe();

// Verificar si está suscrito
{isSubscribed ? "Notificaciones activas" : "Activar notificaciones"}
```

---

## Patrones de uso

### Hook con fetch y estado de carga

```javascript
function useMyData(id) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    SomeModel.fetch(id).then(result => {
      setData(result);
      setLoading(false);
    });
  }, [id]);

  return { data, loading };
}
```

### Hook con efecto de limpieza

```javascript
function useEventListener(eventName, handler) {
  useEffect(() => {
    window.addEventListener(eventName, handler);
    return () => window.removeEventListener(eventName, handler);
  }, [eventName, handler]);
}
```
