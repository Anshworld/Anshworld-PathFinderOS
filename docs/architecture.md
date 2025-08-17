# PathFinderOS Architecture Overview

This document summarizes the backend and frontend architecture for PathFinderOS.

## High-Level
- Backend: NestJS + Prisma + PostgreSQL, Redis (cache/queues), Razorpay, S3-compatible storage, SMTP, WebSockets.
- Frontend: React 18 + Vite + Tailwind + TanStack Query; deployed to Netlify.
- Observability: Pino logs with request IDs, OpenTelemetry traces to Jaeger, Prometheus metrics and Grafana dashboards.

## Key Modules
- Auth (JWT/OAuth/OTP, device sessions, email verification)
- Tracks/Sprints (enrollments, progress, quizzes)
- Mentorship (mentor profiles, slots, bookings, notes)
- Gamification (Spark Coins, badges, leaderboards)
- Projects & Demo Day (submissions, scoring, showcase)
- Payments (Razorpay orders/webhooks, subscriptions)
- Notifications (in-app, email, SMS via adapters)
- Admin & Analytics (RBAC, reports, metrics)

## Sequence: Student Onboarding
1. Student registers -> receives verification email -> verifies.
2. Browses tracks and enrolls.
3. Starts sprint, completes quiz -> coins awarded -> leaderboard updates.

## Sequence: Mentor Booking
1. Student requests session slot.
2. Mentor accepts; reminders sent; session occurs; feedback stored; coins awarded.

## Sequence: Payment
1. Create Razorpay order -> user pays -> webhook verifies -> unlock premium sprint.

## Security
- Helmet, CORS allowlist, rate limiting, input validation, CSRF on forms.
- Secrets from env; audit logs on auth/admin/payment flows.

Refer to `erd.mmd` for data model and `openapi.yaml` for API design.