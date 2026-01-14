# syntax=docker/dockerfile:1

# Pin Node.js version once such that all builds utilize the same runtime
ARG NODE_VERSION=25.2.1
FROM node:${NODE_VERSION}-alpine AS base
WORKDIR /usr/src/app

# deps: install dependencies once
FROM base AS deps
COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm npm ci

# build: compile Next.js
FROM base AS build
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# dev: hot reload
FROM base AS dev
ENV NODE_ENV=development
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]

# final: minimal production runtime
FROM node:${NODE_VERSION}-alpine AS final
WORKDIR /usr/src/app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=build /usr/src/app/.next/standalone ./
COPY --from=build /usr/src/app/.next/static ./.next/static
COPY --from=build /usr/src/app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]