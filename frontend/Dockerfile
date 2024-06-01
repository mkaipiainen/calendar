FROM node:22.2.0 as build

WORKDIR /app
RUN npm install -g pnpm@9.1.2

COPY . .
RUN pnpm install
RUN pnpm run build


FROM caddy:2.8.1-alpine as runner
COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=builder /app/dist /usr/share/caddy
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile"]
