#!/usr/bin/env bash
set -euo pipefail

DEPLOY_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ENV_EXAMPLE="$DEPLOY_DIR/.env.example"
ENV_OUT="$DEPLOY_DIR/transfer/.env"

mkdir -p "$DEPLOY_DIR/transfer"

if [ -f "$ENV_OUT" ]; then
  echo "Ya existe $ENV_OUT: no se sobrescribe. Bórralo a mano si quieres regenerar los secretos." >&2
  exit 1
fi

random_secret() {
  openssl rand -hex 20
}

JWT_SECRET="$(random_secret)"
SIG_KEY="$(random_secret)"
SIG_SALT="$(random_secret)"

sed \
  -e "s#^JWT_SECRET=.*#JWT_SECRET='${JWT_SECRET}'#" \
  -e "s#^SIG_KEY=.*#SIG_KEY='${SIG_KEY}'#" \
  -e "s#^SIG_SALT=.*#SIG_SALT='${SIG_SALT}'#" \
  "$ENV_EXAMPLE" > "$ENV_OUT"

echo "Generado $ENV_OUT con secretos nuevos."
