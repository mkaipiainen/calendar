FROM caddy:2-builder as builder
RUN xcaddy build --with github.com/caddy-dns/cloudflare

FROM caddy:2-alpine as runner

COPY --from=builder /usr/bin/caddy /usr/bin/caddy

# Use Docker secrets directly without modifying the .env file
COPY .env /etc/caddy/.env
COPY Caddyfile /etc/caddy/Caddyfile
RUN --mount=type=secret,id=CLOUDFLARE_API_KEY \
    sed -i "s/MY_SECRET_1=/MY_SECRET_1=$(cat /run/secrets/CLOUDFLARE_API_KEY)/" /etc/caddy/.env


