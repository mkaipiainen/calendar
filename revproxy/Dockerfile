FROM caddy:2-builder as builder
RUN xcaddy build --with github.com/caddy-dns/cloudflare

FROM caddy:2-alpine as runner

COPY --from=builder /usr/bin/caddy /usr/bin/caddy
COPY entrypoint.sh /usr/bin/entrypoint.sh
# Use Docker secrets directly without modifying the .env file
COPY .env /etc/caddy/.env
COPY Caddyfile /etc/caddy/Caddyfile
RUN chmod +x /usr/bin/entrypoint.sh



ENTRYPOINT ["/usr/bin/entrypoint.sh"]
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile"]