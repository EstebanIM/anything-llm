#!/usr/bin/env bash
# Empaqueta la imagen de IASMAR para actualizar el servidor sin internet.
# El servidor ya tiene instalados el driver NVIDIA, el toolkit, Chroma,
# llama.cpp y los modelos; aquí solo viaja la imagen de la aplicación.
#
# Uso: ./package.sh            (empaqueta la imagen ya construida)
#      BUILD=1 ./package.sh    (la construye antes con build-image.sh)
set -euo pipefail

DEPLOY_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TRANSFER_DIR="$DEPLOY_DIR/transfer"
IMAGE="anythingllm-iasmar:deploy"
ARCHIVE="01-anythingllm-image.tar.gz"
CHUNK_SIZE="1G"

if [ "${BUILD:-0}" = "1" ]; then
  "$DEPLOY_DIR/build/build-image.sh"
fi

if ! docker image inspect "$IMAGE" > /dev/null 2>&1; then
  echo "No existe la imagen $IMAGE. Constrúyela con build/build-image.sh o usa BUILD=1." >&2
  exit 1
fi

mkdir -p "$TRANSFER_DIR"
cd "$TRANSFER_DIR"
rm -f "$ARCHIVE" "$ARCHIVE".sha256 "$ARCHIVE".part-* CHECKSUMS.txt

echo "Guardando $IMAGE..."
docker save "$IMAGE" | gzip > "$ARCHIVE"
sha256sum "$ARCHIVE" > "$ARCHIVE.sha256"
split -b "$CHUNK_SIZE" -d -a 3 "$ARCHIVE" "$ARCHIVE.part-"
rm "$ARCHIVE"
echo "  -> $(ls "$ARCHIVE".part-* | wc -l) partes"

cp "$DEPLOY_DIR/docker-compose.yml" .
cp "$DEPLOY_DIR/.env.example" .
cp "$DEPLOY_DIR/cambiar-modelo.sh" .
cp "$DEPLOY_DIR/generar-certificado.sh" .

echo "Generando CHECKSUMS.txt..."
find . -maxdepth 1 -type f ! -name "CHECKSUMS.txt" -exec sha256sum {} \; > CHECKSUMS.txt

echo "Paquete listo en $TRANSFER_DIR"
du -sh "$TRANSFER_DIR"
