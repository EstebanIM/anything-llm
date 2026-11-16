#!/usr/bin/env bash
# Descarga el NVIDIA Container Toolkit (para que Docker pueda exponer
# la GPU a los contenedores) desde el repo oficial de NVIDIA, dentro de
# un contenedor Ubuntu 26.04 con internet (esta PC). No está en los
# repos estándar de Ubuntu, por eso hace falta agregar el repo de
# NVIDIA temporalmente dentro del contenedor de descarga. No se
# versiona en git.
#
# Nota: /cache/partial se crea DENTRO del contenedor, no en el host
# antes del mount - crearlo del lado del host y montarlo causa un
# error intermitente de Docker Desktop en Windows ("Archives directory
# /cache/partial is missing" pese a existir).
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DIST_DIR="$SCRIPT_DIR/dist-toolkit"

mkdir -p "$DIST_DIR"

echo "Resolviendo y descargando NVIDIA Container Toolkit..."
docker run --rm -v "$DIST_DIR:/cache" ubuntu:26.04 sh -c "
  apt-get update -qq
  apt-get install -y -qq --no-install-recommends ca-certificates curl gnupg2 >/dev/null

  curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey | gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg
  curl -s -L https://nvidia.github.io/libnvidia-container/stable/deb/nvidia-container-toolkit.list | \
    sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g' \
    > /etc/apt/sources.list.d/nvidia-container-toolkit.list

  apt-get update -qq
  mkdir -p /cache/partial
  apt-get install -y -qq --no-install-recommends --download-only \
    -o Dir::Cache::Archives=/cache \
    nvidia-container-toolkit \
    nvidia-container-toolkit-base \
    libnvidia-container-tools \
    libnvidia-container1
  rm -f /cache/lock
  rm -rf /cache/partial
"

echo "Listo en $DIST_DIR"
ls "$DIST_DIR" | wc -l
du -sh "$DIST_DIR"
