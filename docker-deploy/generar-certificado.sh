#!/usr/bin/env bash
# Genera el certificado autofirmado con el que IASMAR responde por HTTPS.
# Uso:
#   ./generar-certificado.sh <ip-o-nombre> [más direcciones...]
#   ./generar-certificado.sh 192.0.2.10                 -> https://192.0.2.10:2603
#   ./generar-certificado.sh 192.0.2.10 iasmar.local    -> sirve para ambas
#   ./generar-certificado.sh --help                   -> muestra este uso
#
# Pasa todas las direcciones con las que se abrirá IASMAR (las del snippet
# del widget incluidas), sin puerto ni https://. Crea certs/cert.pem y
# certs/key.pem junto a este script; docker-compose.yml los monta en el
# contenedor. No sobrescribe un certificado existente.
#
# Debe ejecutarse en el servidor, en ~/anythingllm-deploy.
set -euo pipefail

DIAS=3650
DEPLOY_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CERTS_DIR="$DEPLOY_DIR/certs"
CERT="$CERTS_DIR/cert.pem"
KEY="$CERTS_DIR/key.pem"

uso() {
  echo "uso: $0 <ip-o-nombre> [más direcciones...]"
  echo "     Pasa solo la IP o el nombre del servidor, sin puerto ni https://."
}

case "${1:-}" in
  -h|--help) uso; exit 0 ;;
  "") uso >&2; exit 1 ;;
esac

for DIRECCION in "$@"; do
  if [[ "$DIRECCION" == -* || "$DIRECCION" =~ [:/[:space:]] ]]; then
    echo "ERROR: dirección no válida: '$DIRECCION'." >&2
    echo "Pasa solo la IP o el nombre, sin puerto ni https:// (ejemplo: 192.0.2.10)." >&2
    exit 1
  fi
done

if ! command -v openssl > /dev/null 2>&1; then
  echo "ERROR: no se encontró openssl. Instálalo y vuelve a ejecutar." >&2
  exit 1
fi

if [ -e "$CERT" ] || [ -e "$KEY" ]; then
  echo "Ya existe un certificado en $CERTS_DIR: no se sobrescribe." >&2
  echo "Regenerarlo obliga a volver a aceptar la advertencia en todos los navegadores." >&2
  echo "Si aun así quieres hacerlo, borra cert.pem y key.pem, vuelve a ejecutar este" >&2
  echo "script y después: cd $DEPLOY_DIR && docker compose up -d --no-deps --force-recreate anythingllm" >&2
  exit 1
fi

SAN=""
for DIRECCION in "$@"; do
  if [[ "$DIRECCION" =~ ^[0-9]{1,3}(\.[0-9]{1,3}){3}$ ]]; then
    ENTRADA="IP:$DIRECCION"
  else
    ENTRADA="DNS:$DIRECCION"
  fi
  SAN="${SAN:+$SAN,}$ENTRADA"
done

mkdir -p "$CERTS_DIR"
# Docker crea ./certs como root si el compose se levantó antes que este script.
if [ ! -w "$CERTS_DIR" ]; then
  echo "ERROR: no se puede escribir en $CERTS_DIR (puede haberla creado Docker como root)." >&2
  echo "Corrígelo con: sudo chown $(id -u):$(id -g) $CERTS_DIR" >&2
  exit 1
fi
# El contenedor (UID 1000) debe poder entrar aunque la umask sea restrictiva.
if [ -O "$CERTS_DIR" ]; then
  chmod 755 "$CERTS_DIR"
fi
# MSYS2_ARG_CONV_EXCL evita que Git Bash en Windows convierta "/CN=..." en una
# ruta; en Linux no tiene efecto.
if ! ERROR_OPENSSL="$(MSYS2_ARG_CONV_EXCL="/CN=" openssl req -x509 -newkey rsa:2048 -nodes \
  -days "$DIAS" \
  -subj "/CN=$1" \
  -addext "subjectAltName=$SAN" \
  -addext "extendedKeyUsage=serverAuth" \
  -addext "basicConstraints=critical,CA:FALSE" \
  -keyout "$KEY" -out "$CERT" 2>&1)"; then
  rm -f "$CERT" "$KEY"
  echo "ERROR: openssl no pudo generar el certificado:" >&2
  echo "$ERROR_OPENSSL" >&2
  exit 1
fi
chmod 644 "$CERT"
chmod 600 "$KEY"

echo "Certificado generado en $CERTS_DIR"
echo "  Direcciones: $*"
echo "  Vigencia:    $DIAS días"

# El contenedor corre con el UID 1000 y debe poder leer la clave.
if [ "$(id -u)" != "1000" ]; then
  echo ""
  echo "AVISO: este usuario no tiene el UID 1000 y el contenedor no podrá leer"
  echo "la clave. Corrígelo con: sudo chown 1000:1000 $KEY"
fi

echo ""
echo "Siguiente paso: cd $DEPLOY_DIR && docker compose up -d --no-deps anythingllm"
echo "Después, en cada navegador que use el chat, abre https://$1:2603 una vez"
echo "y acepta la advertencia del certificado; si no, el widget incrustado no carga."
