---
title: Core Services
---

# Core Services

**Required** infrastructure components that the A.R.C. Framework depends on. These services are essential and cannot be removed.

---

## Overview

Core services provide foundational capabilities that all other services depend on. Unlike plugins, these are mandatory for framework operation and have deep integration points throughout the system.

---

## Core Service Categories

### [Gateway](./gateway.md)

API Gateway and service mesh

#### [Traefik](./gateway.md)

- **Purpose:** API Gateway, reverse proxy, automatic service discovery
- **Port:** 80 (HTTP), 443 (HTTPS), 8080 (Dashboard)
- **Config:** `traefik.yml`
- **Status:** ✅ Configured

### [Telemetry](./telemetry.md)

Observability pipeline

#### [OpenTelemetry Collector](./telemetry.md)

- **Purpose:** Unified telemetry collection hub (logs, metrics, traces)
- **Port:** 4317 (gRPC), 4318 (HTTP), 13133 (health)
- **Config:** `otel-collector-config.yml`
- **Status:** ✅ Configured
- **Note:** Custom-built with health check endpoint

### [Messaging](./messaging.md)

Event and message distribution

#### [Ephemeral - NATS](./messaging.md)

- **Purpose:** Agent-to-agent messaging, job queues, pub/sub
- **Port:** 4222 (client), 8222 (monitoring)
- **Status:** ✅ Configured
- **Use Case:** Real-time agent communication

#### [Durable - Pulsar](./messaging.md)

- **Purpose:** Event streaming "Conveyor Belt", durable event log
- **Port:** 6650 (broker), 8080 (HTTP)
- **Status:** ✅ Configured
- **Use Case:** Event sourcing, cross-service events

### [Persistence](./persistence.md)

Data storage

#### [Postgres](./persistence.md)

- **Purpose:** Primary database, agent state, vector storage (pgvector)
-- **Port:** 5432
- **Config:** `init.sql`, `.env.example`
- **Status:** ✅ Configured
- **Extensions:** pgvector for RAG/embeddings

### [Caching](./caching.md)

In-memory data store

#### [Redis](./caching.md)

- **Purpose:** Cache, sessions, rate limiting, temporary data
- **Port:** 6379
- **Status:** ✅ Configured

### [Secrets](./secrets.md)

Secrets management

#### [Infisical](./secrets.md)

- **Purpose:** Self-hosted secrets vault
- **Port:** 3001
- **Status:** ✅ Configured in stack
- **Note:** Optional for development, required for production

### [Feature Management](./feature-flag.md)

Feature flags and A/B testing

#### [Unleash](./feature-flag.md)

- **Purpose:** Feature flags, experiments, gradual rollouts
- **Port:** 4242
- **Status:** ✅ Configured in stack

---

## Architecture Pattern

```
Pattern: category/[subcategory]/implementation/

Example:
core/
├── gateway/
│   └── traefik/           # Implementation
├── messaging/
│   ├── ephemeral/
│   │   └── nats/          # Implementation
│   └── durable/
│       └── pulsar/        # Implementation
```

---

## Core vs Plugin Decision Criteria

A component is **core** if:

- ✅ Framework breaks without it
- ✅ Deep integration with multiple services
- ✅ Required by agent architecture
- ✅ No reasonable alternative for the use case

---

## Deployment

### Minimal Core (Development)

```bash
# Start observability core only
make up-observability
```

Includes:

- OpenTelemetry Collector
- Sample application (toolbox)

### Full Core (Production)

```bash
# Start everything
make up
```

Includes:

- All observability services
- Traefik gateway
- NATS + Pulsar messaging
- Postgres + Redis data layer
- Kratos identity
- Unleash feature flags
- Infisical secrets

---

## Configuration

Each core service has:

- **README.md** - Service documentation (coming soon)
- **.env.example** - Environment variables template
- **Config files** - Service-specific configuration

### Quick Setup

```bash
# Initialize all core service configs
make .env

# Or manually for specific service
cp core/postgres/.env.example core/postgres/.env
# Edit .env with your values
```

---

## Service Health

Check core service health:

```bash
# All services
make health-all

# Specific service
make health-postgres
make health-redis
make health-nats
```
