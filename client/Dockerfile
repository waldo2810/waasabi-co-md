# BASE IMAGE
FROM node:18-alpine AS base

# BUILD STAGE
FROM base AS builder
WORKDIR /app
RUN npm install -g turbo
COPY . .
RUN turbo prune client --docker
RUN npm install

# build app
RUN turbo run build --filter=client...

# PRODUCTION STAGE
FROM base as production
WORKDIR /app
COPY --from=builder /app/out/full/apps/client/dist .
COPY --from=builder /app/out/full/apps/client/vite.config.ts .
COPY --from=builder /app/out/json/apps/client/package.json .
RUN npm install typescript

EXPOSE 3000
CMD ["npm", "run", "preview"]