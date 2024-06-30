#!/bin/sh

# Debug logging to check if the secret file exists
echo "Checking for secret file at /run/secrets/CLOUDFLARE_API_KEY"
if [ -f /run/secrets/CLOUDFLARE_API_KEY ]; then
    export CLOUDFLARE_API_KEY=$(cat /run/secrets/CLOUDFLARE_API_KEY)
    echo "Secret loaded into CLOUDFLARE_API_KEY"
else
    echo "Secret file not found!"
fi

# Debug logging to check the content of the .env file
if [ -f /etc/caddy/.env ]; then
    echo "Loading environment variables from /etc/caddy/.env"
    export $(grep -v '^#' /etc/caddy/.env | xargs)
    cat /etc/caddy/.env
else
    echo "/etc/caddy/.env file not found!"
fi

# Start Caddy with debug logging to show environment variables
echo "Starting Caddy with the following environment variables:"
env

# Start Caddy
caddy run --config /etc/caddy/Caddyfile --adapter caddyfile
