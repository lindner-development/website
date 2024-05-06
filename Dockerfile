# DEPRECATED, we use serverless functions now
FROM node:20-alpine3.18 AS build
ENV NODE_ENV=production

WORKDIR /usr/src/app
RUN corepack enable && corepack prepare pnpm@latest --activate

COPY .npmrc package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod

COPY . .
RUN pnpm build --production

FROM node:20-alpine3.18 AS runtime
LABEL org.opencontainers.image.title="Lindner IT Website"
LABEL org.opencontainers.image.description="Node HTTP-Server for Lindner IT Website (using Astro: SSR + SSG)"
LABEL org.opencontainers.image.authors="Robin Lindner <robin.lindner@lindnerit.io>"
LABEL org.opencontainers.image.vendor="Lindner IT UG (haftungsbeschränkt)"
LABEL org.opencontainers.image.licenses="UNLICENSED"
LABEL org.opencontainers.image.source="https://github.com/lindner-development/website"
LABEL org.opencontainers.image.url="https://lindnerit.io"

WORKDIR /usr/src/app
USER node
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000
EXPOSE 3000
COPY --from=build /usr/src/app/ /usr/src/app/
ENTRYPOINT ["node", "dist/server/entry.mjs"]