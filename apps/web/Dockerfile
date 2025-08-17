FROM node:20-alpine
WORKDIR /workspace
RUN corepack enable && corepack prepare pnpm@9.4.0 --activate
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml* ./
COPY packages ./packages
COPY apps/web ./apps/web
RUN pnpm install --frozen-lockfile || pnpm install
RUN pnpm --filter @pfos/web build
EXPOSE 5173
CMD ["pnpm", "--filter", "@pfos/web", "preview", "--host", "0.0.0.0", "--port", "5173"]