# Overview del Backend

## Stack

| Tecnología | Versión | Rol |
|-----------|---------|-----|
| Node.js | >= 18 | Runtime |
| Express | 4.21.2 | Framework HTTP |
| Prisma | 5.3.1 | ORM y cliente de base de datos |
| SQLite | — | Base de datos por defecto |
| PostgreSQL | — | Alternativa a SQLite (comentado en schema.prisma) |
| Winston | 3.13.0 | Logging |
| JWT (jsonwebtoken) | 9.0.0 | Autenticación |
| bcryptjs | 3.0.3 | Hash de contraseñas |
| Joi | 17.11.0 | Validación |

## Punto de entrada

**Archivo:** [server/index.js](../../server/index.js)

```
server/index.js
├── Carga de variables de entorno (.env)
├── Inicialización del logger (Winston)
├── Creación de la app Express
├── Middlewares globales:
│   ├── CORS (origin: true)
│   ├── Body parser (límite 3 GB)
│   ├── HTTP Logger (opcional, solo dev)
│   └── WebSockets (solo modo no-HTTPS)
├── Registro de todos los routers bajo /api
├── Serving del frontend (en producción, desde /public)
└── Boot HTTP o SSL según ENV.ENABLE_HTTPS
```

## Todos los routers registrados

| Router | Función | Prefijo |
|--------|---------|---------|
| `systemEndpoints` | Configuración del sistema, auth, onboarding | `/api/system` |
| `extensionEndpoints` | Extensiones del sistema | `/api/extensions` |
| `workspaceEndpoints` | CRUD workspaces, documentos | `/api/workspace` |
| `workspaceThreadEndpoints` | Threads de conversación | `/api/workspace/:slug/thread` |
| `chatEndpoints` | Streaming de chat (SSE) | `/api/workspace/:slug/...` |
| `adminEndpoints` | Usuarios, invitaciones, chats admin | `/api/admin` |
| `inviteEndpoints` | Invitaciones de usuario | `/api/invite` |
| `embedManagementEndpoints` | Configuración de widgets embed | `/api/embeds` |
| `utilEndpoints` | Utilidades varias | `/api/util` |
| `documentEndpoints` | Gestión de documentos | `/api/document` |
| `agentWebsocket` | WebSocket para sesiones de agente | `/api/agent/:uuid/start` |
| `agentSkillWhitelistEndpoints` | Whitelist de skills de agente | `/api/agent/skill-whitelist` |
| `agentFileServerEndpoints` | Archivos de agentes | `/api/agent/file-server` |
| `experimentalEndpoints` | Features experimentales | `/api/experimental` |
| `developerEndpoints` | API v1 pública (con Swagger) | `/api/v1` |
| `communityHubEndpoints` | Community Hub | `/api/community-hub` |
| `agentFlowEndpoints` | Flujos de agentes | `/api/agent-flows` |
| `mcpServersEndpoints` | Servidores MCP | `/api/mcp-servers` |
| `mobileEndpoints` | API para aplicación móvil | `/api/mobile` |
| `webPushEndpoints` | Notificaciones push | `/api/web-push` |
| `telegramEndpoints` | Bot de Telegram | `/api/telegram` |
| `embeddedEndpoints` | Chat embed (público, sin auth) | `/api/embed` |
| `browserExtensionEndpoints` | Extensión de navegador | `/api/browser-extension` |

## Configuración

| Aspecto | Valor |
|---------|-------|
| Puerto | `process.env.SERVER_PORT` (default: 3001) |
| CORS | `origin: true` (permite cualquier origen) |
| Límite de body | 3 GB (para archivos grandes) |
| HTTPS | Opcional (`ENABLE_HTTPS=true`) |
| WebSockets | Solo disponibles en modo HTTP (no HTTPS) |
| Static files | Sirve `server/public/` en producción |
| Robots.txt | `Disallow: /` (todo desindexado) |

## Estructura de directorios

```
server/
├── index.js                  → Punto de entrada
├── endpoints/                → Un archivo por feature area
│   ├── api/                  → API v1 pública (/api/v1/*)
│   └── *.js
├── models/                   → Queries a la base de datos con Prisma
├── middleware/                → Middlewares Express (httpLogger)
├── prisma/
│   ├── schema.prisma          → Definición de tablas y relaciones
│   ├── migrations/            → Historial de migraciones de BD
│   └── seed.js               → Datos iniciales
├── utils/
│   ├── AiProviders/           → Implementaciones de LLM (40+)
│   ├── agents/                → Framework Aibitat + MCP
│   ├── agentFlows/            → Flujos visuales de agentes
│   ├── BackgroundWorkers/     → Motor Bree para jobs
│   ├── boot/                  → Inicialización del servidor
│   ├── chats/                 → Lógica de procesamiento de chat
│   ├── collectorApi/          → Cliente HTTP hacia el Collector
│   ├── DocumentManager/       → Gestión de documentos y contexto
│   ├── EmbeddingEngines/      → Motores de embedding (15+)
│   ├── EmbeddingRerankers/    → Reranking de resultados
│   ├── EncryptionManager/     → Cifrado de tokens y datos sensibles
│   ├── helpers/               → getLLMProvider, getVectorDbClass, etc.
│   ├── http/                  → Utilidades HTTP y JWT
│   ├── logger/                → Configuración Winston
│   ├── MCP/                   → Model Context Protocol
│   ├── middleware/            → Auth, roles, validación (11 middlewares)
│   ├── PasswordRecovery/      → Flujo de recuperación de contraseña
│   ├── PushNotifications/     → Web push
│   ├── TextSplitter/          → Chunking de documentos
│   ├── TextToSpeech/          → TTS (OpenAI, ElevenLabs, generic)
│   ├── telegramBot/           → Integración con Telegram Bot API
│   ├── telemetry/             → PostHog tracking anónimo
│   └── vectorDbProviders/     → Implementaciones de vector DB (11+)
├── jobs/                      → Background workers (Bree)
├── storage/                   → Datos persistentes (BD, archivos, vectores)
├── swagger/                   → Documentación OpenAPI generada
├── .env.example
└── package.json
```

## Logging

El servidor usa **Winston** para logging. Configuración en `server/utils/logger/`.

Niveles usados: `error`, `warn`, `info`, `debug`.

Para habilitar el logging de requests HTTP en desarrollo:
```env
ENABLE_HTTP_LOGGER=true
ENABLE_HTTP_LOGGER_TIMESTAMPS=true
```

## Arranque del servidor

```javascript
// Modo HTTP (por defecto)
bootHTTP(app, process.env.SERVER_PORT || 3001);
// Llama a app.listen() y luego al BackgroundService

// Modo HTTPS
bootSSL(app, process.env.SERVER_PORT || 3001);
// Crea servidor HTTPS con certificados PEM
```

El arranque también:
- Ejecuta migraciones pendientes de Prisma
- Inicializa los background workers (Bree)
- Genera/verifica las PEM keys del EncryptionManager
