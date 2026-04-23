# Documentación Técnica — AnythingLLM (Fork)

Documentación técnica detallada del proyecto AnythingLLM. Generada a partir de la auditoría del código fuente.

**Versión del proyecto:** 1.11.1  
**Node.js requerido:** >= 18  
**Licencia:** MIT  

---

## Stack principal

| Capa | Tecnología |
|------|-----------|
| Frontend | React 18, Vite, Tailwind CSS, React Router v6 |
| Backend | Node.js 18, Express 4, Prisma 5 |
| Base de datos | SQLite (por defecto) / PostgreSQL |
| Procesamiento de docs | Servicio Collector separado (puerto 8888) |
| Agentes IA | Framework Aibitat + MCP |
| Estilos | Tailwind CSS 3, CSS Variables, dark/light mode |

---

## Servicios del monorepo

```
anything-llm/
├── frontend/      → React SPA (puerto 3000 en dev)
├── server/        → API Express (puerto 3001)
├── collector/     → Procesamiento de documentos (puerto 8888)
├── embed/         → Widget de chat embebible
├── browser-extension/ → Extensión de navegador
└── docs/          → Esta documentación
```

---

## Índice de documentación

### Visión general y arquitectura
- [01 — Visión General del Proyecto](01-vision-general/overview.md)
- [02 — Arquitectura del Sistema](02-arquitectura/arquitectura.md)

### Inicio rápido
- [03a — Instalación con Docker](03-inicio-rapido/docker.md)
- [03b — Instalación sin Docker (Bare Metal)](03-inicio-rapido/bare-metal.md)
- [03c — Entorno de Desarrollo Local](03-inicio-rapido/desarrollo-local.md)

### Frontend
- [04a — Overview del Frontend](04-frontend/overview.md)
- [04b — Estructura de Carpetas](04-frontend/estructura-carpetas.md)
- [04c — Sistema de Enrutamiento](04-frontend/enrutamiento.md)
- [04d — Theming y Estilos](04-frontend/theming-y-estilos.md)
- [04e — Gestión de Estado](04-frontend/gestion-de-estado.md)
- [04f — Componente: Sidebar](04-frontend/componentes/sidebar.md)
- [04g — Componente: Chat](04-frontend/componentes/chat.md)
- [04h — Componente: Settings](04-frontend/componentes/settings.md)
- [04i — Componente: Modales](04-frontend/componentes/modales.md)
- [04j — Páginas y Rutas](04-frontend/paginas.md)
- [04k — Hooks Personalizados](04-frontend/hooks.md)
- [04l — Capa de API (src/models/)](04-frontend/capa-api.md)

### Backend
- [05a — Overview del Backend](05-backend/overview.md)
- [05b — Endpoints HTTP](05-backend/endpoints.md)
- [05c — Base de Datos (Prisma Schema)](05-backend/base-de-datos.md)
- [05d — Autenticación y Autorización](05-backend/autenticacion.md)
- [05e — Proveedores LLM (40+)](05-backend/proveedores-llm.md)
- [05f — Bases de Datos Vectoriales (11+)](05-backend/bases-vectoriales.md)
- [05g — Motores de Embedding (15+)](05-backend/motores-embedding.md)
- [05h — Procesamiento de Documentos](05-backend/procesamiento-documentos.md)
- [05i — Sistema de Agentes (Aibitat + MCP)](05-backend/sistema-agentes.md)
- [05j — Workers en Background](05-backend/workers-background.md)
- [05k — Variables de Entorno (.env)](05-backend/variables-entorno.md)

### Servicios adicionales
- [06 — Servicio Collector](06-collector/collector.md)
- [07 — Integraciones (Telegram, extensión, mobile)](07-integraciones/integraciones.md)
- [08 — API para Desarrolladores (v1)](08-api-developer/api-v1.md)

### Contribución
- [09 — Guía de Contribución](09-contribucion/contribucion.md)

---

## Comandos rápidos de referencia

```bash
# Instalar y configurar el entorno completo
yarn setup

# Ejecutar todos los servicios en paralelo (dev)
yarn dev:all

# Ejecutar servicios individuales
yarn dev:server     # servidor en :3001
yarn dev:frontend   # frontend en :3000
yarn dev:collector  # collector en :8888

# Migraciones de base de datos
yarn prisma:setup

# Linting
yarn lint
```
