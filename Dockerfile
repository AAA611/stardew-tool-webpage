# ===============================
# Build stage
# ===============================
FROM node:18 AS builder

WORKDIR /app

COPY package.json package-lock.json* pnpm-lock.yaml* ./
RUN npm install

COPY . .
RUN npm run build


# ===============================
# Runtime stage - Caddy
# ===============================
FROM caddy:lastest

WORKDIR /srv

# 拷贝构建产物
COPY --from=builder /app/dist /srv

# 拷贝 Caddy 配置
COPY Caddyfile /etc/caddy/Caddyfile

EXPOSE 80
EXPOSE 443

CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]
