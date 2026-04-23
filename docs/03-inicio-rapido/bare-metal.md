# Instalación sin Docker (Bare Metal)

> Despliegue directo en el servidor sin contenedores. **No tiene soporte oficial** del equipo de Mintplex Labs — úsalo bajo tu propia responsabilidad.

## Requisitos mínimos

- Node.js v18 (se recomienda exactamente `v18.18.0` con nvm)
- Yarn (gestor de paquetes)
- Al menos 2 GB de RAM
- Al menos 10 GB de espacio en disco
- Acceso a un LLM (local o en la nube)

---

## Instalación desde cero

### 1. Clonar el repositorio

```bash
git clone https://github.com/mintplex-labs/anything-llm.git
cd anything-llm
```

### 2. Instalar dependencias y configurar entorno

```bash
yarn setup
```

Este comando instala dependencias en todos los servicios y crea archivos `.env` de ejemplo en cada uno.

### 3. Configurar las variables de entorno del servidor

```bash
cp server/.env.example server/.env
```

Editar `server/.env` con tus configuraciones. **Al menos** definir:

```env
STORAGE_DIR="/ruta/absoluta/a/tu/directorio/storage"
JWT_SECRET="string-aleatorio-12-chars-minimo"
SIG_KEY="string-aleatorio-32-chars-minimo"
SIG_SALT="string-aleatorio-32-chars-minimo"
```

### 4. Configurar el frontend (solo si sirves el frontend separado)

Editar `frontend/.env`:

```env
# Para development local:
VITE_API_BASE='http://localhost:3001/api'

# Para producción (frontend servido por el mismo servidor):
# VITE_API_BASE='/api'
```

---

## Arranque para producción

```bash
# 1. Construir el frontend
cd frontend && yarn build

# 2. Copiar el build al servidor (para que lo sirva Express)
cp -R frontend/dist server/public

# 3. Generar migraciones de la base de datos
cd server
npx prisma migrate deploy
npx prisma db seed

# 4. Iniciar el servidor (en background)
cd server
NODE_ENV=production node index.js &

# 5. Iniciar el collector (en background)
cd collector
NODE_ENV=production node index.js &
```

Acceder en: **http://localhost:3001**

---

## Script de actualización

```bash
#!/bin/bash
# Guardar variables de entorno primero
source server/.env

# Detener servicios
pkill -f "node index.js" 2>/dev/null || true

# Actualizar código
git pull origin master
yarn setup

# Reconstruir frontend
cd frontend && yarn build && cd ..
cp -R frontend/dist server/public

# Actualizar base de datos
cd server
npx prisma migrate deploy

# Reiniciar servicios
NODE_ENV=production node index.js > server.log 2>&1 &
cd ../collector
NODE_ENV=production node index.js > collector.log 2>&1 &

echo "AnythingLLM actualizado y corriendo en http://localhost:3001"
```

---

## Configuración con Nginx (recomendado para producción)

Nginx como proxy reverso con soporte para WebSockets y SSE:

```nginx
server {
    listen 80;
    server_name tu-dominio.com;

    # Aumentar timeout para respuestas largas de LLM
    proxy_read_timeout 600s;
    proxy_connect_timeout 600s;
    proxy_send_timeout 600s;

    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        
        # Headers necesarios para WebSocket (agentes)
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        
        # Headers estándar de proxy
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Para HTTPS (con Let's Encrypt):

```bash
certbot --nginx -d tu-dominio.com
```

---

## Configurar HTTPS nativo (sin Nginx)

AnythingLLM puede servir HTTPS directamente. En `server/.env`:

```env
ENABLE_HTTPS="true"
HTTPS_CERT_PATH="sslcert/cert.pem"
HTTPS_KEY_PATH="sslcert/key.pem"
```

> **Nota:** Con HTTPS habilitado, los WebSockets (para agentes) no están disponibles.

---

## Gestión de procesos con PM2

Para mayor robustez en producción:

```bash
npm install -g pm2

# Iniciar servicios
pm2 start server/index.js --name "anythingllm-server" --env production
pm2 start collector/index.js --name "anythingllm-collector" --env production

# Guardar configuración para reinicio automático
pm2 save
pm2 startup

# Monitorear
pm2 status
pm2 logs anythingllm-server
```

---

## Notas importantes

- El collector corre en el puerto **8888** por defecto y solo debe ser accesible desde el servidor principal (no exponerlo a internet)
- Las variables `SIG_KEY` y `SIG_SALT` son usadas para verificar la comunicación entre el servidor y el collector. Deben ser las **mismas** en ambos `.env`
- La base de datos SQLite se crea en `server/storage/anythingllm.db`
- Los documentos se guardan en `server/storage/documents/`
- Los modelos de embedding locales se descargan automáticamente en `server/storage/models/`
