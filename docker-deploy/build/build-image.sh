#!/usr/bin/env bash
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
DEPLOY_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

# Nota: .dockerignore excluye **/.env pero desexcluye explícitamente
# !frontend/.env.production — ese es el archivo que Vite realmente lee
# en el build de producción, no frontend/.env (que ni siquiera llega
# al contexto del build).
FRONTEND_ENV_PROD="$REPO_ROOT/frontend/.env.production"
DOCKERIGNORE="$REPO_ROOT/.dockerignore"
FRONTEND_ENV_PROD_BACKUP="$FRONTEND_ENV_PROD.deploy-backup.$$"
DOCKERIGNORE_BACKUP="$DOCKERIGNORE.deploy-backup.$$"
FRONTEND_ENV_PROD_EXISTED=0

cleanup() {
  echo "Restaurando frontend/.env.production y .dockerignore originales..."
  if [ "$FRONTEND_ENV_PROD_EXISTED" = "1" ]; then
    mv -f "$FRONTEND_ENV_PROD_BACKUP" "$FRONTEND_ENV_PROD"
  else
    rm -f "$FRONTEND_ENV_PROD"
  fi
  mv -f "$DOCKERIGNORE_BACKUP" "$DOCKERIGNORE"
}
trap cleanup EXIT

if [ -f "$FRONTEND_ENV_PROD" ]; then
  FRONTEND_ENV_PROD_EXISTED=1
  cp "$FRONTEND_ENV_PROD" "$FRONTEND_ENV_PROD_BACKUP"
fi
cp "$DOCKERIGNORE" "$DOCKERIGNORE_BACKUP"

cp "$DEPLOY_DIR/build/frontend.env.production" "$FRONTEND_ENV_PROD"
cp "$DEPLOY_DIR/build/dockerignore.deploy" "$DOCKERIGNORE"

# Esta PC no llega a registry.yarnpkg.com; el build descarga los paquetes
# desde el espejo (los hashes del yarn.lock se siguen verificando).
# YARN_REGISTRY= (vacío) usa el registro oficial.
YARN_REGISTRY="${YARN_REGISTRY-https://registry.npmmirror.com}"

echo "Construyendo imagen anythingllm-iasmar:deploy..."
docker build \
  --build-arg ARG_UID=1000 \
  --build-arg ARG_GID=1000 \
  --build-arg YARN_REGISTRY="$YARN_REGISTRY" \
  -t anythingllm-iasmar:deploy \
  -f "$REPO_ROOT/docker/Dockerfile" \
  "$REPO_ROOT"

echo "Build completo: anythingllm-iasmar:deploy"
