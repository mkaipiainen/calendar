#!/bin/sh

# Export the CLOUDFLARE_API_KEY environment variable from the secret
if [ -f /run/secrets/CLOUDFLARE_API_KEY ]; then
  export CLOUDFLARE_API_KEY=$(cat /run/secrets/CLOUDFLARE_API_KEY)
fi

# Execute the command passed to the entrypoint
exec "$@"