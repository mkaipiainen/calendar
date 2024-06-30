FROM caddy:2-builder as builder
RUN xcaddy build --with github.com/caddy-dns/cloudflare

FROM caddy:2-alpine as runner

COPY --from=builder /usr/bin/caddy /usr/bin/caddy

COPY .env .
RUN --mount=type=secret,id=CLOUDFLARE_API_KEY \
    sed -i "s/MY_SECRET_1=/MY_SECRET_1=$(cat /run/secrets/CLOUDFLARE_API_KEY)/" .env


COPY Caddyfile /etc/caddy/Caddyfile
