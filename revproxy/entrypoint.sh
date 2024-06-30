#!/bin/sh

# Load the secret from the mounted file
if [ -f /run/secrets/CLOUDFLARE_API_KEY ]; then
    export CLOUDFLARE_API_KEY=$(cat /run/secrets/CLOUDFLARE_API_KEY)
fi

# Source the .env file to export environment variables
if [ -f /etc/caddy/.env ]; then
    export $(grep -v '^#' /etc/caddy/.env | xargs)
fi

# Start Caddy with the environment variable for the API key
caddy run --config /etc/caddy/Caddyfile --adapter caddyfile
