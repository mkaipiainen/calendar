FROM caddy:2-builder as builder
RUN xcaddy build --with github.com/caddy-dns/cloudflare

FROM caddy:2-alpine as runner

COPY --from=builder /usr/bin/caddy /usr/bin/caddy
ENV CLOUDFLARE_API_KEY="initial_value"

# Use Docker secrets directly without modifying the .env file
COPY .env /etc/caddy/.env
COPY Caddyfile /etc/caddy/Caddyfile
RUN --mount=type=secret,id=CLOUDFLARE_API_KEY \
  export CLOUDFLARE_API_KEY=$(cat /run/secrets/CLOUDFLARE_API_KEY)




