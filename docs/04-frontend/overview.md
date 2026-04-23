# Overview del Frontend

## Stack

| Tecnología | Versión | Propósito |
|-----------|---------|-----------|
| React | 18.2.0 | Framework UI |
| Vite | 5.x | Build tool y servidor de desarrollo |
| React Router DOM | 6.3.0 | Routing SPA |
| Tailwind CSS | 3.3.1 | Framework de estilos utilitarios |
| i18next | 23.11.3 | Internacionalización |

## Dependencias principales

### UI y visualización
| Paquete | Versión | Uso |
|---------|---------|-----|
| `@tremor/react` | 3.15.1 | Componentes de tablas y datos |
| `recharts` | 2.12.5 | Gráficos y visualizaciones |
| `@phosphor-icons/react` | 2.1.7 | Iconografía principal |
| `@lobehub/icons` | 4.0.3 | Iconos de proveedores LLM |
| `react-tooltip` | 5.25.2 | Tooltips flotantes |
| `react-toastify` | 9.1.3 | Notificaciones toast |
| `react-loading-skeleton` | 3.1.0 | Placeholders de carga |

### Interacción y formularios
| Paquete | Versión | Uso |
|---------|---------|-----|
| `react-beautiful-dnd` | 13.1.1 | Drag and drop (lista de workspaces) |
| `react-dropzone` | 14.2.3 | Carga de archivos por arrastre |
| `react-speech-recognition` | 3.10.0 | Speech-to-text en el input |

### Procesamiento de contenido
| Paquete | Versión | Uso |
|---------|---------|-----|
| `markdown-it` | 13.0.1 | Renderizado de Markdown en chat |
| `katex` | 0.6.0 | Renderizado de fórmulas matemáticas |
| `highlight.js` | 11.9.0 | Resaltado de sintaxis en bloques de código |
| `dompurify` | 3.0.8 | Sanitización de HTML (seguridad XSS) |
| `file-saver` | 2.0.5 | Descarga de archivos desde el browser |

### Comunicación con backend
| Paquete | Versión | Uso |
|---------|---------|-----|
| `@microsoft/fetch-event-source` | 2.0.1 | Server-Sent Events (SSE) para streaming de chat |

### Audio y multimedia
| Paquete | Versión | Uso |
|---------|---------|-----|
| `@mintplex-labs/piper-tts-web` | 1.0.4 | Text-to-Speech en el navegador |
| `onnxruntime-web` | 1.18.0 | Inferencia de modelos ML en el navegador |

### Utilidades
| Paquete | Versión | Uso |
|---------|---------|-----|
| `uuid` | 9.0.0 | Generación de IDs únicos |
| `moment` | 2.30.1 | Formateo de fechas |
| `react-error-boundary` | 6.0.0 | Manejo de errores en componentes |

---

## Scripts de build y desarrollo

```json
{
  "start": "vite --open",
  "dev": "cross-env NODE_ENV=development vite --debug --host=0.0.0.0",
  "build": "vite build && node scripts/postbuild.js",
  "lint:check": "eslint src",
  "lint": "eslint --fix src",
  "preview": "vite preview"
}
```

- `yarn start` — Dev server con apertura automática del navegador
- `yarn dev` — Dev server con debugging y acceso desde red local
- `yarn build` — Build de producción + script post-build
- `yarn preview` — Previsualizar el build de producción

---

## Configuración de Vite (`vite.config.js`)

- **Puerto:** 3000
- **Alias:** `@` → `src/` (para imports absolutos: `import X from "@/components/X"`)
- **Assets:** archivos WASM para Piper TTS
- **Workers:** formato ES modules
- **Plugin:** `rollup-visualizer` (genera `bundleinspector.html` para analizar el tamaño del bundle)
- **Output:** `index.js` y `index.css` (nombres normalizados para producción)

---

## Internacionalización (i18n)

Usa **i18next** con detección automática del idioma del navegador.

**Idiomas soportados en la UI:**
Inglés, Español, Francés, Alemán, Italiano, Japonés, Coreano, Portugués, Chino, Árabe, Ruso, y más.

**Archivos:** `src/locales/{idioma}/common.js`

**Uso en componentes:**
```jsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();
  return <button>{t('common.save')}</button>;
}
```

---

## PWA (Progressive Web App)

El frontend está configurado como PWA:
- `public/manifest.json` — Manifest de la app
- `public/service-workers/` — Service workers
- `PWAContext.jsx` — Detección de si la app está instalada como PWA
- Variante CSS `pwa:` en Tailwind para estilos específicos de PWA

---

## Estructura de carpetas

Ver documento detallado: [Estructura de Carpetas](estructura-carpetas.md)

## Routing

Ver documento detallado: [Sistema de Enrutamiento](enrutamiento.md)

## Theming y estilos

Ver documento detallado: [Theming y Estilos](theming-y-estilos.md)
