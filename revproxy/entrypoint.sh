#!/bin/sh

# Load the secret from the mounted file
if [ -f /run/secrets/CLOUDFLARE_API_KEY ]; then
    export CLOUDFLARE_API_KEY=$(cat /run/secrets/CLOUDFLARE_API_KEY)
fi

# Source the .env file to export environment variables
if [ -f /etc/caddy/.env ]; then
    export $(grep -v '^#' /etc/caddy/.env | xargs)
fi

# Replace placeholder with actual secret in .env file
sed -i "s/CLOUDFLARE_API_KEY=/CLOUDFLARE_API_KEY=$CLOUDFLARE_API_KEY/" /etc/caddy/.env

# Start Caddy
caddy run --config /etc/caddy/Caddyfile --adapter caddyfile
