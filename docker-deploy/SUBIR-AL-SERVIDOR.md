# Subir IASMAR al servidor

Cómo se arma el paquete de IASMAR y qué reglas cumple en el servidor interno, donde corre junto a otros proyectos. IASMAR se actualiza sin tocar ninguno de los otros. Los comandos exactos están en [`ACTUALIZAR-EN-EL-SERVIDOR.txt`](ACTUALIZAR-EN-EL-SERVIDOR.txt), que viaja dentro del paquete.

## 1. Cómo es el servidor

1.1 No tiene internet, ni node ni pip. En el servidor no se construye ni se descarga nada: la imagen de IASMAR se construye en el PC personal y llega hecha.

1.2 Recorrido: PC personal (construye y empaqueta) → disco externo → PC con intranet (comprueba las huellas y sube con `scp`) → servidor (carga y levanta por `ssh`).

1.3 Linux x86_64 (`linux/amd64`). Docker corre como root: cada `docker` va con `sudo`.

1.4 Todos los proyectos se abren con la misma IP y distinto puerto. IASMAR responde por `https` con un certificado autofirmado: una plataforma interna servida por HTTPS incrusta su widget de chat, y el navegador bloquea un widget cargado desde `http://`.

1.5 Lo que ocupa IASMAR:

| Recurso             | IASMAR                                                                          |
| ------------------- | ------------------------------------------------------------------------------- |
| Proyecto de compose | `anythingllm-deploy`                                                            |
| Puerto publicado    | `2603` (HTTPS)                                                                  |
| Carpeta             | `~/anythingllm-deploy`, en la carpeta personal del usuario que lo instaló       |
| Respaldos           | `~/anythingllm-deploy/respaldos`                                                |
| Imagen propia       | `anythingllm-iasmar:deploy` (y `:anterior` durante una actualización)           |
| Imágenes de base    | `ghcr.io/ggml-org/llama.cpp:server-cuda`, `chromadb/chroma:1.4.4`               |
| Contenedores        | `anythingllm-server`, `llama-llm-server`, `llama-embed-server`, `chroma-server` |
| Red                 | `anythingllm-deploy_anythingllm-net`                                            |
| Datos               | carpetas en `~/anythingllm-deploy/data/` (no volúmenes de Docker)               |
| GPU                 | `llama-llm` y `llama-embed` (un modelo LLM a la vez, con `cambiar-modelo.sh`)   |
| Sesión              | token en el `localStorage` del navegador (`anythingllm_authToken`), sin cookies |

Antes de usar un puerto, nombre o carpeta nuevos, la guía comprueba en el servidor qué está ocupado (`sudo docker compose ls`, `sudo docker ps`, `sudo ss -tlnp`).

## 2. Lo que IASMAR no comparte con otros proyectos

2.1 **Nombre del proyecto en el compose:** `name: anythingllm-deploy`, fijo en `docker-compose.yml`. Sin él, compose tomaría el nombre de la carpeta.

2.2 **Imagen con el prefijo del proyecto:** `anythingllm-iasmar`. `docker load` reemplaza sin avisar cualquier imagen con el mismo nombre y etiqueta.

2.3 **Imágenes de base:** Chroma va con la versión completa (`1.4.4`). La de llama.cpp usa la etiqueta móvil `server-cuda`; ya está en el servidor y no viaja en el paquete. Si alguna vez viaja, se fija con una etiqueta con versión, para no reemplazársela a otro proyecto que use la misma.

2.4 **Puerto propio:** solo `anythingllm` publica puerto (`2603`). llama.cpp y Chroma quedan dentro de la red del compose.

2.5 **Sin proxy compartido:** AnythingLLM sirve HTTPS por sí mismo (`ENABLE_HTTPS`). No se agregan rutas al proxy de otro proyecto.

2.6 **Carpeta propia:** `~/anythingllm-deploy`, con su `.env`, sus certificados (`certs/`), sus datos (`data/`) y sus respaldos (`respaldos/`). Quedó en la carpeta personal desde la instalación y no en `/opt/<proyecto>/`; moverla es un cambio aparte.

2.7 **Bases de datos propias:** SQLite dentro de `data/server-storage` y un Chroma propio en `data/chroma`.

2.8 **Sesión:** AnythingLLM guarda el token en el `localStorage`, que el navegador separa por origen (esquema, IP y puerto). No choca con las cookies de otros proyectos.

2.9 **Redes separadas:** IASMAR no se conecta a la red ni a la base de otro compose.

2.10 **Nombres de contenedor fijos** (`container_name`): son únicos en todo el servidor, así que ningún otro proyecto puede usarlos.

## 3. Configuración del proyecto

3.1 Cada servicio tiene su `image:` explícita. El servicio `anythingllm` trae además `build:` para construir en el PC; en el servidor no se construye.

3.2 La imagen se construye en Docker Desktop sobre Windows x86_64, que produce `linux/amd64`, la plataforma del servidor.

3.3 Los secretos (`JWT_SECRET`, `SIG_KEY`, `SIG_SALT`) y la elección del modelo (`LLM_MODEL_FILE`, `LLM_CTX`) viven en el `.env` del servidor, fuera de Git y del paquete. Viaja un `.env.example` con los nombres y sin valores. Una actualización nunca sobrescribe el `.env`.

3.4 `restart: unless-stopped` en todos los servicios.

3.5 **HTTPS:**

- `generar-certificado.sh` crea el certificado en el servidor, en `certs/`: RSA 2048, 10 años, `CA:FALSE`, con SAN por cada IP o nombre recibido. La dirección se pasa como argumento y nunca entra al repositorio ni al paquete.
- El compose lo monta de solo lectura en `/app/certs`.
- El `entrypoint` no arranca sin un certificado legible y lo explica en el log.
- El healthcheck consulta por HTTPS.
- Cada navegador acepta la advertencia una vez. Chrome y Edge la olvidan a los pocos días, y sin esa aceptación el widget incrustado no carga ni avisa.

3.6 La base se migra sola al arrancar la imagen (`prisma migrate deploy`). Por eso el respaldo se hace con la aplicación detenida, antes de recrearla, y volver atrás implica restaurar ese respaldo.

3.7 Pendientes frente a las reglas generales del servidor:

- La carpeta está en `~` y no en `/opt/`.
- No hay `pull_policy: never`.
- No hay `mem_limit`.
- No se fija `TZ`: los contenedores parten en UTC.
- La etiqueta de llama.cpp es móvil.

## 4. El paquete

4.1 La imagen se construye desde la copia de trabajo, no desde un commit. Antes de construir, `git status --short` tiene que salir vacío. `VERSION.txt` registra el commit y avisa si había cambios sin commitear.

4.2 `docker-deploy/build/build-image.sh` construye `anythingllm-iasmar:deploy`:

- Aplica por un momento `frontend/.env.production` (`VITE_API_BASE=/api`) y un `.dockerignore` de despliegue, y los restaura al terminar.
- Descarga los paquetes desde el espejo `registry.npmmirror.com`, porque este PC no llega al registro oficial. Los hashes del `yarn.lock` se siguen verificando. `YARN_REGISTRY=` usa el registro oficial.
- Si se interrumpe a mitad, no restaura nada. Antes de volver a construir hay que dejar `.dockerignore` y `frontend/.env.production` como estaban:

```bash
mv -f .dockerignore.deploy-backup.* .dockerignore
rm -f frontend/.env.production
git status --porcelain .dockerignore
```

4.3 `docker-deploy/build/package.sh` arma `docker-deploy/transfer/`. Con `BUILD=1`, construye la imagen antes. El paquete contiene:

- La imagen comprimida en partes de 1 GB (`01-anythingllm-image.tar.gz.part-*`) y su `.sha256`.
- `docker-compose.yml`, `.env.example`, `cambiar-modelo.sh` y `generar-certificado.sh`.
- `ACTUALIZAR-EN-EL-SERVIDOR.txt`.
- `VERSION.txt`, con el commit, la fecha y la fecha de creación de la imagen. El servidor compara esa fecha con la de la imagen cargada; el ID de la imagen puede cambiar entre el almacén de containerd de Docker Desktop y el del servidor.
- `CHECKSUMS.txt`, con la huella de cada archivo.

4.4 Solo viaja la imagen de la aplicación. llama.cpp, Chroma, los modelos GGUF, el driver NVIDIA y el NVIDIA Container Toolkit ya están en el servidor.

4.5 No viajan el `.env` real, `certs/`, `data/` ni el repositorio.

4.6 Antes de entregar, se ensaya en el PC, en una carpeta fuera del repositorio:

- Copiar el `docker-compose.yml` del paquete y un `.env` de prueba creado desde `.env.example` con secretos nuevos.
- Generar un certificado de prueba con `bash generar-certificado.sh localhost 127.0.0.1` y levantar solo la aplicación con `docker compose up -d --no-deps anythingllm`.
- Comprobar que `curl -k https://localhost:2603/api/ping` responde, que el contenedor queda `healthy` y que, sin certificado, el log muestra el error en vez de arrancar.
- Para ver la interfaz y el widget, usar Chrome o Edge y aceptar la advertencia; algunos navegadores integrados en otras aplicaciones no dejan aceptar certificados autofirmados.
- Al terminar, `docker compose down` y borrar la carpeta.

## 5. La guía (.txt)

5.1 Solo existe `ACTUALIZAR-EN-EL-SERVIDOR.txt`, porque IASMAR ya está instalado. La instalación desde cero (driver NVIDIA, toolkit, imágenes de base y modelos) no tiene guía en el repositorio.

5.2 Formato:

- Texto sin tildes ni eñes, para que se lea igual en cualquier terminal.
- Solo comandos, en orden y uno por línea, en bloques numerados por lugar: PC personal (Git Bash), PC con intranet (PowerShell) y servidor (bash).
- `USUARIO@IP_SERVIDOR` es lo único que se sustituye.
- Después de cada comprobación, el valor esperado.
- Al final, «Si algo falla», con cada error y qué hacer.

5.3 Una actualización hace siempre lo siguiente:

- Comprueba las huellas en el PC con intranet y en el servidor.
- Guarda como `:anterior` la imagen en uso antes de cargar la nueva y compara su fecha con `VERSION.txt`.
- Guarda el compose en uso como `docker-compose.yml.anterior` y revisa con `diff` que solo cambie el servicio `anythingllm`.
- Detiene solo la aplicación, respalda `data/server-storage` en `respaldos/` con la fecha en el nombre y comprueba que el respaldo pese más de 0.
- Recrea solo la aplicación (`up -d --no-deps --force-recreate anythingllm`).
- Comprueba el log, el ping por HTTPS, el healthcheck y que llama.cpp y Chroma no se reiniciaron.
- Tiene una sección de vuelta atrás: restaura los datos, el compose y la imagen anteriores.

5.4 Los comandos de `docker compose` se ejecutan dentro de `~/anythingllm-deploy`, para que nunca actúen sobre otro proyecto.

## 6. Lo que la guía no hace nunca

- `docker system prune`, `docker image prune`, `docker volume prune` ni `docker network prune`: borran cosas de todos los proyectos.
- `docker compose down` ni un `up -d` sin `--no-deps anythingllm`: bajan o recrean también llama.cpp y Chroma, y el modelo vuelve a cargarse.
- Reiniciar el servicio de Docker o el servidor: baja todos los proyectos.
- Sobrescribir el `.env` del servidor o regenerar el certificado sin necesidad. Regenerarlo obliga a todos los navegadores a aceptar de nuevo la advertencia.
- Tocar carpetas, contenedores, imágenes o respaldos de otro proyecto, o borrar respaldos fuera de `~/anythingllm-deploy/respaldos/`.
