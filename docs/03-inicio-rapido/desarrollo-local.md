# Entorno de Desarrollo Local

## Requisitos

- Node.js v18.18.0 (usar `nvm use` con el `.nvmrc` del proyecto)
- Yarn
- Git

---

## Setup inicial

### 1. Instalar dependencias y crear archivos .env

```bash
yarn setup
```

Este script hace automáticamente:
- `yarn install` en `server/`, `frontend/`, `collector/`
- Crea `server/.env` a partir de `server/.env.example`
- Genera el cliente de Prisma
- Ejecuta las migraciones de la base de datos

### 2. Configurar variables de entorno

Editar `server/.env`:

```env
# Mínimo requerido para development:
JWT_SECRET="dev-secret-12-chars"
SIG_KEY="dev-passphrase-32-chars-xxxxxxxxxx"
SIG_SALT="dev-salt-32-chars-xxxxxxxxxxxxxxxxx"

# LLM (elegir uno)
LLM_PROVIDER='openai'
OPEN_AI_KEY=sk-tu-api-key
OPEN_MODEL_PREF='gpt-4o'

# Vector DB (LanceDB es local por defecto)
VECTOR_DB="lancedb"
```

Verificar `frontend/.env`:

```env
VITE_API_BASE='http://localhost:3001/api'
```

---

## Ejecutar todos los servicios

```bash
# Opción A: Todos en paralelo (un solo comando)
yarn dev:all

# Opción B: Cada servicio en una terminal separada (recomendado para debugging)
yarn dev:server     # puerto 3001
yarn dev:frontend   # puerto 3000
yarn dev:collector  # puerto 8888
```

> **Orden recomendado al iniciar separados:** primero el collector, luego el servidor, finalmente el frontend.

---

## URLs de desarrollo

| Servicio | URL |
|---------|-----|
| Frontend (React) | http://localhost:3000 |
| Backend (API) | http://localhost:3001 |
| Collector | http://localhost:8888 |
| Swagger UI | http://localhost:3001/api/docs |

---

## Usar Dev Container (VS Code)

El proyecto incluye configuración para **Dev Containers**, que provee un entorno de desarrollo aislado con todas las dependencias preinstaladas.

### Requisitos
- Docker
- VS Code
- Extensión "Remote - Containers" o "Dev Containers"

### Pasos
1. Clonar el repo y abrirlo en VS Code
2. VS Code detectará el `devcontainer.json` y ofrecerá reabrir en el contenedor
3. Al crear el contenedor, se ejecuta `yarn setup` automáticamente
4. Usar la extensión o las tareas de VS Code para arrancar los servicios

### Configuración del devcontainer
- **Base:** Node.js LTS v18
- **Puertos expuestos:** 3000 (frontend), 3001 (backend)
- **Variables automáticas:** `NODE_ENV=development`
- **Extensiones incluidas:** Prettier, ESLint, Docker

### Nota para GitHub Codespaces
El puerto 3001 debe configurarse como **"Public"** para que el frontend (en otro puerto) pueda alcanzarlo.

---

## Hot reload

- **Frontend:** Vite tiene HMR (Hot Module Replacement) incorporado — los cambios en `.jsx/.js/.css` se reflejan al instante
- **Server:** Nodemon reinicia el servidor al detectar cambios en `.js`
- **Collector:** Similar al servidor

---

## Debugging

El proyecto incluye configuraciones de debugging en `.vscode/launch.json`:

- **"Debug Server":** Debugging del servidor Node.js (puerto 3001)
- **"Debug Collector":** Debugging del collector (puerto 8888)
- **Frontend:** El debugging de React en el navegador funciona con el source map de Vite

---

## Linting y formato

```bash
# Verificar todo el proyecto
yarn lint

# Auto-corregir
yarn lint:fix

# Solo un servicio
cd server && yarn lint
cd frontend && yarn lint
cd collector && yarn lint
```

Configuración:
- ESLint v9 con configuración en la raíz (`eslint.config.js`)
- Prettier (`.prettierrc`): 2 espacios, LF, printWidth 80
- EditorConfig (`.editorconfig`): UTF-8, LF, 2 espacios

---

## Pasos post-instalación recomendados

1. Verificar que ESLint funciona en archivos `.js`/`.jsx` en VS Code
2. Verificar que Prettier formatea al guardar
3. Ejecutar el flujo completo: subir un documento, hacer una pregunta sobre él

---

## Notas de desarrollo

- En modo development, el servidor carga `.env.development` si existe, sino `.env`
- Los logs HTTP solo se muestran si `ENABLE_HTTP_LOGGER=true` en `.env`
- La documentación Swagger está disponible en desarrollo en `/api/docs`
- Los WebSockets (para agentes) **no funcionan** si `ENABLE_HTTPS=true`
- Prisma Studio (UI de BD): `cd server && npx prisma studio`
