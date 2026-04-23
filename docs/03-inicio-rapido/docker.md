# Instalación con Docker

> Método recomendado para producción y uso personal.

## Requisitos

- Docker instalado y corriendo
- Al menos 2 GB de RAM disponible
- Al menos 10 GB de espacio en disco
- Acceso a un LLM (local como Ollama, o en la nube)

---

## Instalación rápida

### 1. Descargar la imagen

```bash
docker pull mintplexlabs/anythingllm
```

### 2. Crear carpeta de almacenamiento y ejecutar el contenedor

**Linux / macOS:**

```bash
export STORAGE_LOCATION="$HOME/anythingllm"
mkdir -p "$STORAGE_LOCATION"
touch "$STORAGE_LOCATION/.env"

docker run -d -p 3001:3001 \
  --cap-add SYS_ADMIN \
  -v "${STORAGE_LOCATION}:/app/server/storage" \
  -v "${STORAGE_LOCATION}/.env:/app/server/.env" \
  -e STORAGE_DIR="/app/server/storage" \
  mintplexlabs/anythingllm
```

**Windows (PowerShell):**

```powershell
$env:STORAGE_LOCATION="$HOME\Documents\anythingllm"
New-Item -ItemType Directory -Force -Path $env:STORAGE_LOCATION
New-Item -ItemType File -Force -Path "$env:STORAGE_LOCATION\.env"

docker run -d -p 3001:3001 `
  --cap-add SYS_ADMIN `
  -v "$env:STORAGE_LOCATION:/app/server/storage" `
  -v "$env:STORAGE_LOCATION\.env:/app/server/.env" `
  -e STORAGE_DIR="/app/server/storage" `
  mintplexlabs/anythingllm
```

### 3. Acceder

Abrir en el navegador: **http://localhost:3001**

---

## Instalación con Docker Compose

El archivo `docker/docker-compose.yml` incluye una configuración más completa.

```bash
# Desde la raíz del proyecto
cd docker/
cp .env.example .env
# Editar .env con tus configuraciones
docker-compose up -d
```

### Ejemplo de docker-compose.yml con Ollama local:

```yaml
version: '3.8'
services:
  anythingllm:
    image: mintplexlabs/anythingllm
    ports:
      - "3001:3001"
    cap_add:
      - SYS_ADMIN
    volumes:
      - ./storage:/app/server/storage
      - ./.env:/app/server/.env
    environment:
      - STORAGE_DIR=/app/server/storage
      - LLM_PROVIDER=ollama
      - OLLAMA_BASE_PATH=http://host.docker.internal:11434
      - OLLAMA_MODEL_PREF=llama2
      - VECTOR_DB=lancedb
    restart: unless-stopped
```

---

## Construcción desde código fuente

> No recomendado para uso normal. Solo para desarrollo o contribución.

```bash
# Clonar el repo
git clone https://github.com/mintplex-labs/anything-llm.git
cd anything-llm/docker

# Crear DB vacía
touch ./server/storage/anythingllm.db

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tus configuraciones

# Construir y ejecutar
docker-compose up -d --build
```

---

## Nota importante sobre localhost

Cuando AnythingLLM corre dentro de Docker y necesita conectarse a servicios en **tu máquina host** (ej: Ollama en `localhost:11434`), debes usar:

- **Linux/macOS (Docker Desktop):** `http://host.docker.internal:11434`
- **Linux (Docker Engine nativo):** `http://172.17.0.1:11434`

**No** uses `http://localhost:11434` dentro del contenedor — no apunta a tu máquina.

---

## UID/GID

El contenedor usa por defecto UID/GID **1000**. Si tu usuario del host tiene un UID diferente, pueden ocurrir problemas de permisos en los archivos montados.

Para verificar tu UID:
```bash
id -u && id -g
```

---

## Variables de entorno en Docker

Las variables se configuran en el archivo `.env` montado como volumen. Para referencia completa, ver [05k — Variables de Entorno](../05-backend/variables-entorno.md).

Variables mínimas requeridas para arrancar:

```env
SERVER_PORT=3001
JWT_SECRET="tu-string-aleatorio-de-al-menos-12-chars"
SIG_KEY="tu-passphrase-de-32-chars"
SIG_SALT="tu-salt-de-32-chars"
STORAGE_DIR="/app/server/storage"

# Selección de LLM (ejemplo con OpenAI)
LLM_PROVIDER='openai'
OPEN_AI_KEY=sk-xxxx
OPEN_MODEL_PREF='gpt-4o'

# Vector DB (LanceDB es local por defecto, no requiere config)
VECTOR_DB="lancedb"
```

---

## Resolución de problemas comunes

| Problema | Solución |
|----------|----------|
| No puede conectar a Ollama | Usar `host.docker.internal:11434` en vez de `localhost:11434` |
| Login no funciona / API no responde | Configurar `VITE_API_BASE` con la IP de la máquina (no localhost) |
| Problemas de permisos en archivos | Verificar UID/GID del usuario host vs el contenedor |
| El contenedor no arranca | Revisar logs: `docker logs <container_id>` |

Para más ayuda, consultar el servidor de Discord del proyecto.
