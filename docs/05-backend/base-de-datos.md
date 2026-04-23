# Base de Datos — Prisma Schema

**Archivo:** [server/prisma/schema.prisma](../../server/prisma/schema.prisma)

**ORM:** Prisma 5.3.1  
**Motor por defecto:** SQLite (`server/storage/anythingllm.db`)  
**Alternativa:** PostgreSQL (descomentar datasource en schema.prisma)

---

## Cambiar a PostgreSQL

```prisma
// Comentar el datasource SQLite:
// datasource db {
//   provider = "sqlite"
//   url      = "file:../storage/anythingllm.db"
// }

// Descomentar el datasource PostgreSQL:
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

Luego en `.env`:
```env
DATABASE_URL="postgresql://usuario:password@localhost:5432/anythingllm"
```

Y ejecutar:
```bash
yarn prisma:setup
```

---

## Diagrama de relaciones

```
users ──────────────────────────────────────────────────────────┐
  │                                                              │
  ├── workspace_users ──── workspaces                           │
  │                           │                                  │
  ├── workspace_chats          ├── workspace_documents           │
  │                           │     └── document_sync_queues     │
  ├── workspace_threads        │           └── document_sync_executions
  │                           ├── workspace_threads             │
  ├── workspace_agent_invocations ── workspaces                  │
  │                           ├── workspace_suggested_messages   │
  ├── embed_configs ────────── └── workspace_agent_invocations   │
  │     └── embed_chats                                          │
  │                                                              │
  ├── recovery_codes                                             │
  ├── password_reset_tokens                                      │
  ├── temporary_auth_tokens                                      │
  ├── browser_extension_api_keys                                 │
  ├── slash_command_presets                                      │
  ├── system_prompt_variables                                    │
  ├── prompt_history ─────── workspaces                         │
  ├── desktop_mobile_devices                                     │
  └── workspace_parsed_files ─ workspaces, workspace_threads    │
                                                                 │
document_vectors (sin relación Prisma, solo docId)               │
api_keys (sin relación a users en schema)                        │
system_settings (tabla de configuración key-value)               │
invites (standalone)                                             │
event_logs (standalone)                                          │
cache_data (standalone)                                          │
external_communication_connectors (standalone)                   │
```

---

## Tablas detalladas

### `users` — Usuarios

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | Int PK | ID auto-incremental |
| `username` | String? unique | Nombre de usuario |
| `password` | String | Password hasheado con bcrypt |
| `pfpFilename` | String? | Nombre del archivo de foto de perfil |
| `role` | String | `"admin"` / `"manager"` / `"default"` |
| `suspended` | Int | `0` = activo, `1` = suspendido |
| `seen_recovery_codes` | Boolean? | Si ya vio los códigos de recuperación 2FA |
| `dailyMessageLimit` | Int? | Límite de mensajes diarios (null = sin límite) |
| `bio` | String? | Biografía del usuario |
| `web_push_subscription_config` | String? | Config de web push (JSON) |
| `createdAt` | DateTime | Fecha de creación |
| `lastUpdatedAt` | DateTime | Última actualización |

---

### `workspaces` — Espacios de trabajo

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | Int PK | ID auto-incremental |
| `name` | String | Nombre del workspace |
| `slug` | String unique | Identificador URL-friendly |
| `vectorTag` | String? | Tag de colección en la vector DB |
| `openAiTemp` | Float? | Temperatura del LLM (0.0-1.0) |
| `openAiHistory` | Int | Mensajes previos en el contexto (default: 20) |
| `openAiPrompt` | String? | System prompt del workspace |
| `similarityThreshold` | Float? | Umbral de similitud (default: 0.25) |
| `chatProvider` | String? | Override del proveedor LLM |
| `chatModel` | String? | Override del modelo LLM |
| `topN` | Int? | Número de chunks a recuperar (default: 4) |
| `chatMode` | String? | `"chat"` o `"query"` (default: `"chat"`) |
| `pfpFilename` | String? | Avatar del workspace |
| `agentProvider` | String? | Proveedor LLM para agentes |
| `agentModel` | String? | Modelo LLM para agentes |
| `queryRefusalResponse` | String? | Respuesta cuando no hay contexto relevante |
| `vectorSearchMode` | String? | Modo de búsqueda vectorial |

---

### `workspace_documents` — Documentos en workspaces

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | Int PK | — |
| `docId` | String unique | Identificador único del documento |
| `filename` | String | Nombre del archivo |
| `docpath` | String | Ruta relativa al documento |
| `workspaceId` | Int | FK → workspaces |
| `metadata` | String? | Metadatos del documento (JSON) |
| `pinned` | Boolean? | Si está siempre en el contexto (default: false) |
| `watched` | Boolean? | Si se sincroniza automáticamente (default: false) |

---

### `workspace_chats` — Historial de chats

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | Int PK | — |
| `workspaceId` | Int | FK → workspaces |
| `prompt` | String | Mensaje del usuario |
| `response` | String | Respuesta del asistente (JSON con metadatos) |
| `include` | Boolean | Si se incluye en el contexto futuro (default: true) |
| `user_id` | Int? | FK → users (null en single-user) |
| `thread_id` | Int? | FK referencial → workspace_threads |
| `api_session_id` | String? | Identificador de sesión para la API v1 |
| `feedbackScore` | Boolean? | `true` = positivo, `false` = negativo, `null` = sin feedback |
| `createdAt` | DateTime | — |

---

### `workspace_threads` — Hilos de conversación

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | Int PK | — |
| `name` | String | Nombre del thread |
| `slug` | String unique | Identificador URL-friendly |
| `workspace_id` | Int | FK → workspaces |
| `user_id` | Int? | FK → users (propietario del thread) |

---

### `embed_configs` — Configuraciones de widget embebible

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | Int PK | — |
| `uuid` | String unique | Identificador público del embed |
| `enabled` | Boolean | Si el embed está activo |
| `chat_mode` | String | `"query"` o `"chat"` |
| `allowlist_domains` | String? | Dominios permitidos (separados por coma) |
| `allow_model_override` | Boolean | Permite al embed cambiar el modelo |
| `allow_temperature_override` | Boolean | Permite cambiar la temperatura |
| `allow_prompt_override` | Boolean | Permite cambiar el prompt |
| `max_chats_per_day` | Int? | Límite de chats por día |
| `max_chats_per_session` | Int? | Límite de chats por sesión |
| `message_limit` | Int? | Límite de mensajes en el historial (default: 20) |
| `workspace_id` | Int | FK → workspaces |

---

### `system_settings` — Configuración del sistema

Tabla key-value para la configuración del sistema.

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `label` | String unique | Nombre de la configuración |
| `value` | String? | Valor de la configuración |

Ejemplos de labels: `LLMProvider`, `EmbeddingEngine`, `VectorDB`, `MultiUserMode`, etc.

---

### `document_sync_queues` — Cola de sincronización

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | Int PK | — |
| `staleAfterMs` | Int | Tiempo hasta considerar documento desactualizado (default: 7 días = 604800000 ms) |
| `nextSyncAt` | DateTime | Próxima sincronización programada |
| `lastSyncedAt` | DateTime | Última sincronización exitosa |
| `workspaceDocId` | Int unique | FK → workspace_documents |

---

### `system_prompt_variables` — Variables de prompt

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | Int PK | — |
| `key` | String unique | Nombre de la variable (ej: `{{company_name}}`) |
| `value` | String? | Valor de la variable |
| `description` | String? | Descripción para el admin |
| `type` | String | `"system"` / `"user"` / `"dynamic"` |
| `userId` | Int? | FK → users (para variables de usuario) |

---

### `external_communication_connectors` — Conectores externos

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | Int PK | — |
| `type` | String unique | Tipo de conector (`"telegram"`) |
| `config` | String | Configuración en JSON |
| `active` | Boolean | Si el conector está activo |

---

## Comandos de Prisma

```bash
# Desde la raíz del proyecto (usa los scripts de package.json raíz)
yarn prisma:setup          # Genera cliente + migra + seed

# Desde server/
cd server
npx prisma generate        # Generar cliente TypeScript
npx prisma migrate dev     # Crear y aplicar migración en dev
npx prisma migrate deploy  # Aplicar migraciones en producción
npx prisma db seed         # Ejecutar seed.js
npx prisma studio          # Interfaz web de BD (puerto 5555)
npx prisma db push         # Sincronizar schema sin migración (dev rápido)
```

---

## Notas importantes

- Los campos `thread_id` en `workspace_chats` y `workspace_agent_invocations` son referencias **sin relación Prisma** declarada — para evitar migraciones en cascada de tablas grandes
- `workspace_parsed_files.filename` tiene constraint `@unique` — cada archivo parseado tiene nombre único global
- La tabla `api_keys` no tiene FK explícita a `users` (solo `createdBy` como Int sin relación)
- `document_vectors` no tiene relaciones Prisma con otras tablas — se gestiona por código con el `docId` string
