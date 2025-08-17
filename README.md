# PathFinderOS

Backend (NestJS) + Web (React) monorepo with Prisma/Postgres, Redis, Razorpay, S3, Swagger, Docker, and CI.

## Quickstart
```
cp .env.example .env
docker compose up -d
pnpm i
pnpm -r build
pnpm prisma migrate dev --name init
pnpm db:seed
pnpm --filter @pfos/api start
```

API: http://localhost:3000/docs

## Runbooks
- Migrations: `prisma migrate deploy` in CI, `migrate dev` locally.
- Seeds: `pnpm db:seed` (idempotent).
- Backups: Use `pg_dump` and S3 snapshot policies.
- Zero-downtime: Use rolling restarts; keep migrations backward compatible.

See `docs/architecture.md` and `docs/openapi.yaml`.