FROM caddy:2 as builder
RUN xcaddy build \
    --with github.com/caddy-dns/cloudflare

FROM caddy:2.6.1-alpine

COPY --from=builder /usr/bin/caddy /usr/bin/caddy

COPY Caddyfile /etc/caddy/Caddyfile