---
sidebar_position: 1
title: "Overview"
---

# Platform Services

A.R.C. ships with a comprehensive set of pre-configured platform services. Each service is production-ready, battle-tested, and identified by a memorable codename.

## Service Overview

| Service | Codename | Technology | Purpose |
|---------|----------|-----------|---------|
| API Gateway | **Heimdall** | Traefik | Routes all traffic, auto-discovers services |
| Messaging (Ephemeral) | **The Flash** | NATS | High-speed fire-and-forget messaging |
| Messaging (Durable) | **Dr. Strange** | Apache Pulsar | Event streaming with replay capability |
| Database | **Oracle** | PostgreSQL + pgvector | Long-term memory, vector search |
| Cache | **Sonic** | Redis | Working memory, sessions, rate limiting |
| Telemetry | **Black Widow** | OpenTelemetry | Intercepts and routes all signals |
| Secrets | **Nick Fury** | Infisical | API keys, credentials, secret rotation |
| Feature Flags | **Mystique** | Unleash | Runtime configuration, A/B testing |
| Identity & Auth | **J.A.R.V.I.S.** | Ory Kratos | User management, authentication |
| Object Storage | **Tardis** | MinIO | S3-compatible file and media storage |
| Vector Search | **Cerebro** | Qdrant | Semantic search, embeddings |

## Service Categories

### Always Running (Base Infrastructure)

These 13 services start with every A.R.C. workspace regardless of feature flag configuration:

Heimdall (Gateway), Oracle (Database), Sonic (Cache), Cerebro (Vector DB), Tardis (Storage), Mystique (Feature Flags), Dr. Strange (Streaming), The Flash (Messaging), Hedwig (Mailer), Pathfinder (Migrations), Sherlock (Brain), The Wolf (Janitor), Alfred (Billing).

### Feature-Gated Services

These services are included when their feature flag is enabled in `arc.yaml`:

- **`security: true`** → J.A.R.V.I.S., Nick Fury, RoboCop
- **`voice: true`** → Daredevil, Scarlett, Sentry, Scribe
- **`observability: true`** → Black Widow, Dr. House, Watson, Columbo, Friday, Hermes
- **`chaos: true`** → T-800

## Managing Services

```bash
# Launch all configured services
arc workspace run

# Launch in background
arc workspace run --detached

# View running services
docker ps --filter "name=arc-"

# Stop all services
docker compose -f .arc/generated/docker-compose.yml down
```

## Swappability

Every A.R.C. service has alternatives. Check the **Alternatives** section on each service page to see what you could swap in. A.R.C. uses open standards (OpenFeature, OpenTelemetry) to make swaps painless.

---

Explore each service in detail using the sidebar navigation.
