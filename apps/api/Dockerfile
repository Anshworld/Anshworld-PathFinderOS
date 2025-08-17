FROM node:20-alpine
WORKDIR /workspace

RUN corepack enable && corepack prepare pnpm@9.4.0 --activate

# Copy lockfiles and workspace manifests
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml* ./

# Copy packages and apps and prisma
COPY packages ./packages
COPY apps/api ./apps/api
COPY prisma ./prisma

RUN pnpm install --frozen-lockfile || pnpm install
RUN pnpm -r build

ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000
CMD ["node", "apps/api/dist/main.js"]