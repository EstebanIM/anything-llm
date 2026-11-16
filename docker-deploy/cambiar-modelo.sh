#!/usr/bin/env bash
# Cambia el modelo LLM activo entre el 9B y el 27B, en el servidor.
# Uso:
#   ./cambiar-modelo.sh 9b              -> Qwen3.5-9B  (contexto 65536)
#   ./cambiar-modelo.sh 27b             -> Qwen3.6-27B (contexto 65536)
#   ./cambiar-modelo.sh 27b 32768       -> Qwen3.6-27B con contexto 32768
#
# Solo un modelo está activo a la vez (los dos no entran juntos en la VRAM).
# Cada uno corre solo, con toda la GPU disponible. El cambio recrea el
# contenedor llama-llm y tarda ~1-2 min en cargar el modelo nuevo.
#
# Debe ejecutarse desde ~/anythingllm-deploy (donde están .env y
# docker-compose.yml).
set -euo pipefail

MODEL_9B="unsloth/Qwen3.5-9B-GGUF/Qwen3.5-9B-Q6_K.gguf"
MODEL_27B="unsloth/Qwen3.6-27B-GGUF/Qwen3.6-27B-Q4_K_M.gguf"

case "${1:-}" in
  9b)  FILE="$MODEL_9B";  NOMBRE="Qwen3.5-9B" ;;
  27b) FILE="$MODEL_27B"; NOMBRE="Qwen3.6-27B" ;;
  *)   echo "uso: $0 9b|27b [contexto]"; exit 1 ;;
esac
CTX="${2:-65536}"

if [ ! -f "data/lmstudio-models/$FILE" ]; then
  echo "ERROR: no encuentro el modelo en data/lmstudio-models/$FILE"
  echo "Verifica que el bloque del modelo se haya transferido y extraído."
  exit 1
fi

# Persistir la elección en .env (compose lo lee en cada 'up'), sin tocar
# el resto del archivo (secretos, etc.).
touch .env
grep -v '^LLM_MODEL_FILE=' .env | grep -v '^LLM_CTX=' > .env.tmp || true
echo "LLM_MODEL_FILE=$FILE" >> .env.tmp
echo "LLM_CTX=$CTX" >> .env.tmp
mv .env.tmp .env

echo "Activando $NOMBRE (contexto $CTX)..."
docker compose up -d --force-recreate llama-llm

echo ""
echo "Listo. El modelo está cargando (tarda ~1-2 min)."
echo "Ver progreso:  docker compose logs -f llama-llm"
echo "Esperar la línea 'listening on http://0.0.0.0:8091', después probar el chat."
echo "Confirmar uso de GPU:  nvidia-smi"
