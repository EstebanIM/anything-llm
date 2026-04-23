# Theming y Estilos — Frontend

## Stack de estilos

| Tecnología | Versión | Rol |
|-----------|---------|-----|
| Tailwind CSS | 3.3.1 | Framework principal de utilidades |
| CSS Variables | — | Tokens de tema (dark/light) |
| PostCSS | — | Procesamiento: Tailwind → Autoprefixer |

---

## Cómo funciona el sistema de temas

El tema se controla mediante la clase del elemento raíz del DOM y un atributo `data-theme`.

### Dark mode (modo por defecto)
```html
<html>                         <!-- sin clase "light" -->
  <body>                       <!-- sin clase "light" -->
```

### Light mode
```html
<html data-theme="light">
  <body class="light">
```

Tailwind detecta la clase `.light` con su variante personalizada:
```javascript
// tailwind.config.js
plugins: [
  function ({ addVariant }) {
    addVariant('light', '.light &')   // Activa estilos cuando body tiene .light
    addVariant('pwa', '.pwa &')       // Activa estilos cuando body tiene .pwa
  },
]
```

### Uso en componentes
```jsx
<div className="bg-black light:bg-white text-white light:text-black">
  Contenido
</div>
```

---

## ThemeContext

**Archivo:** [frontend/src/ThemeContext.jsx](../../frontend/src/ThemeContext.jsx)

```javascript
const { theme, setTheme } = useTheme();
// theme: "default" | "light" | "system"
// "default" = dark theme
// "system" = sigue la preferencia del SO
```

El tema se persiste en `localStorage` con la clave `theme`.

**Hook relacionado:** `useTheme()` en `src/hooks/useTheme.js`

---

## Variables CSS de tema

Definidas en [frontend/src/index.css](../../frontend/src/index.css).

### Modo oscuro (`:root` — por defecto)

```css
:root {
  /* Fondos */
  --theme-bg-primary: #17191C;
  --theme-bg-secondary: #1C1E21;
  --theme-bg-sidebar: #25272C;
  --theme-bg-container: #1C1E21;
  --theme-bg-chat: #1C1E21;
  --theme-bg-chat-input: #1F2125;
  --theme-popup-menu-bg: #2C2F35;

  /* Textos */
  --theme-text-primary: #FFFFFF;
  --theme-text-secondary: #C0C4CC;
  --theme-placeholder: #6B7280;

  /* Sidebar */
  --theme-sidebar-item-default: rgba(255,255,255,0.07);
  --theme-sidebar-item-selected: rgba(255,255,255,0.15);
  --theme-sidebar-item-hover: rgba(255,255,255,0.1);
  --theme-sidebar-border: rgba(255,255,255,0.1);

  /* Botones */
  --theme-button-primary: #2C2F35;
  --theme-button-cta: #065986;
  --theme-button-text: #FFFFFF;

  /* Input del chat */
  --theme-chat-input-border: rgba(255,255,255,0.1);

  /* Settings inputs */
  --theme-settings-input-bg: #1C1E21;
  --theme-settings-input-active: #2C2F35;
  --theme-settings-input-text: #FFFFFF;

  /* Archivos adjuntos */
  --theme-attachment-bg: #2C2F35;
  --theme-attachment-text: #FFFFFF;
  --theme-attachment-icon: #9CA3AF;

  /* Pantalla de inicio */
  --theme-home-text: #FFFFFF;
  --theme-home-bg-card: #2C2F35;
  --theme-home-button-primary: #065986;
  ...
}
```

### Modo claro (`[data-theme="light"]`)

```css
[data-theme="light"] {
  --theme-bg-primary: #F9FAFB;
  --theme-bg-secondary: #FFFFFF;
  --theme-bg-sidebar: #FFFFFF;
  --theme-text-primary: #111827;
  --theme-text-secondary: #4B5563;
  --theme-sidebar-border: rgba(0,0,0,0.1);
  ...
}
```

---

## Colores custom en Tailwind

Definidos en [frontend/tailwind.config.js](../../frontend/tailwind.config.js) bajo `theme.extend.colors`:

### Colores fijos (no cambian con el tema)

```javascript
"black-900": "#141414"       // Negro profundo
accent: "#3D4147"            // Acento gris
sidebar: "#25272C"           // Fondo sidebar
"sidebar-button": "#31353A"  // Botón en sidebar
secondary: "#2C2F36"         // Fondo secundario
royalblue: "#065986"         // Azul corporativo
teal: "#0BA5EC"              // Azul claro
danger: "#F04438"            // Rojo peligro
error: "#B42318"             // Rojo error
warn: "#854708"              // Naranja advertencia
success: "#05603A"           // Verde éxito
```

### Colores de tema (usan variables CSS)

```javascript
// Uso: bg-theme-bg-primary, text-theme-text-primary, etc.
theme: {
  bg: {
    primary: 'var(--theme-bg-primary)',
    secondary: 'var(--theme-bg-secondary)',
    sidebar: 'var(--theme-bg-sidebar)',
    container: 'var(--theme-bg-container)',
    chat: 'var(--theme-bg-chat)',
    "chat-input": 'var(--theme-bg-chat-input)',
    "popup-menu": 'var(--theme-popup-menu-bg)',
  },
  text: {
    primary: 'var(--theme-text-primary)',
    secondary: 'var(--theme-text-secondary)',
    placeholder: 'var(--theme-placeholder)',
  },
  sidebar: {
    item: { default, selected, hover },
    subitem: { default, selected, hover },
    footer: { icon, 'icon-hover' },
    border: 'var(--theme-sidebar-border)',
  },
  attachment: { bg, 'error-bg', 'success-bg', text, ... },
  home: { text, "text-secondary", "bg-card", "bg-button", ... },
  checklist: { "item-bg", "item-text", "checkbox-border", ... },
  button: { text, 'code-hover-text', 'code-hover-bg', ... },
}
```

**Ejemplo de uso en JSX:**
```jsx
<div className="bg-theme-bg-primary text-theme-text-primary border border-theme-sidebar-border">
  <button className="bg-primary-button hover:bg-theme-button-primary">
    Guardar
  </button>
</div>
```

---

## Gradientes predefinidos

```javascript
backgroundImage: {
  "main-gradient": "linear-gradient(180deg, #3D4147 0%, #2C2F35 100%)",
  "modal-gradient": "linear-gradient(180deg, #3D4147 0%, #2C2F35 100%)",
  "sidebar-gradient": "linear-gradient(90deg, #5B616A 0%, #3F434B 100%)",
  "login-gradient": "linear-gradient(180deg, #3D4147 0%, #2C2F35 100%)",
  "preference-gradient": "linear-gradient(180deg, #5A5C63 0%, rgba(90,92,99,0.28) 100%)",
  "chat-msg-user-gradient": "linear-gradient(180deg, #3D4147 0%, #2C2F35 100%)",
  "workspace-item-gradient": "linear-gradient(90deg, #3D4147 0%, #2C2F35 100%)",
  "workspace-item-selected-gradient": "linear-gradient(90deg, #5B616A 0%, #3F434B 100%)",
}
```

---

## Animaciones custom

```javascript
animation: {
  "sweep": "sweep 0.5s ease-in-out",               // Expansión horizontal
  "pulse-glow": "pulse-glow 1.5s infinite",        // Pulsación con glow
  "fade-in": "fade-in 0.3s ease-out",              // Aparición suave
  "slide-up": "slide-up 0.4s ease-out forwards",  // Deslizamiento hacia arriba
  "bounce-subtle": "bounce-subtle 2s ease-in-out infinite"  // Rebote sutil
}
```

**Uso:** `className="animate-fade-in"`, `className="animate-pulse-glow"`

---

## Tipografía

La fuente principal es **Plus Jakarta Sans**, con fallbacks estándar:

```javascript
fontFamily: {
  sans: [
    "plus-jakarta-sans",
    "ui-sans-serif",
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    ...
  ]
}
```

La fuente se carga desde `public/fonts/` (auto-hosted, sin Google Fonts).

---

## Variante PWA

Cuando la app corre como PWA instalada (detectado por `PWAContext`), `body` tiene la clase `.pwa`. Esto permite ajustar estilos para el modo standalone:

```jsx
<div className="h-screen pwa:h-[calc(100vh-env(safe-area-inset-top))]">
```

---

## Safelist para recharts

Tailwind purga clases CSS que no aparecen en el código. Como recharts genera clases dinámicamente, están en la safelist:

```javascript
safelist: [
  { pattern: /^(bg|text|border|ring|stroke|fill)-(...colores...)-(...pesos...)$/ }
]
```

Esto garantiza que los colores de los gráficos no sean eliminados en el build de producción.

---

## Cómo modificar el tema (guía para el fork)

Para cambiar los colores del tema, editar las variables CSS en [frontend/src/index.css](../../frontend/src/index.css):

1. **Modo oscuro:** variables en `:root`
2. **Modo claro:** variables en `[data-theme="light"]`
3. **Nuevos colores:** agregar en `tailwind.config.js` bajo `theme.extend.colors`
4. **Nuevas animaciones:** agregar en `animation` y `keyframes` de `tailwind.config.js`

Para agregar un nuevo tema (por ejemplo, "ocean"):
1. Agregar las variables CSS en `[data-theme="ocean"] { ... }`
2. Agregar `"ocean"` a `availableThemes` en `ThemeContext.jsx`
