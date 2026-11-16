#!/usr/bin/env bash
# Descarga el driver NVIDIA (rama de producción 595, variante "open"
# requerida para GPUs Blackwell/RTX 50 series) empaquetado para Ubuntu
# 26.04, junto con sus dependencias completas (incluye linux-headers
# para el kernel exacto del servidor y build-essential/dkms). Usa un
# contenedor Ubuntu 26.04 con internet (esta PC) para resolver el árbol
# de dependencias correctamente vía apt. No se versiona en git.
#
# Se usa la rama 595 (no 580) y la variante "open" porque son las que
# soportan las GPU Blackwell (RTX 50).
#
# nvidia-utils-595 se pide explícito: nvidia-headless-595-open NO lo
# trae como dependencia (confirmado con apt-cache show), pero es el
# paquete que Provides: nvidia-smi. Sin esto, el driver queda activo
# pero no hay forma de verificarlo/monitorearlo (bug real, encontrado
# en el primer despliegue GPU).
#
# /cache/partial se crea DENTRO del contenedor (misma quirk de Docker
# Desktop en Windows que fetch-container-toolkit.sh). Sin eso, apt
# aborta con "Archives directory /cache/partial is missing". Además va
# un "set -e" adentro del sh -c: sin él, el fallo de apt-get quedaba
# tapado por el rm posterior y el script reportaba éxito igual.
set -euo pipefail

KERNEL_VERSION="7.0.0-27-generic"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DIST_DIR="$SCRIPT_DIR/dist-driver"

mkdir -p "$DIST_DIR"

echo "Resolviendo y descargando driver NVIDIA 595-open + headers de $KERNEL_VERSION + build-essential..."
docker run --rm -v "$DIST_DIR:/cache" ubuntu:26.04 sh -c "
  set -e
  apt-get update -qq
  mkdir -p /cache/partial
  apt-get install -y -qq --no-install-recommends --download-only \
    -o Dir::Cache::Archives=/cache \
    nvidia-headless-595-open \
    nvidia-utils-595 \
    linux-headers-$KERNEL_VERSION \
    build-essential
  rm -f /cache/lock
  rm -rf /cache/partial
"

echo "Listo en $DIST_DIR"
ls "$DIST_DIR" | wc -l
du -sh "$DIST_DIR"
