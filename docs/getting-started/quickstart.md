---
sidebar_position: 3
title: "Quickstart"
---

# Quickstart: Your First A.R.C. Platform

This guide takes you from zero to a running A.R.C. platform in under 5 minutes.

## Step 1: Initialize a Workspace

```bash
arc workspace init ./my-project
```

This creates a workspace directory with:

```
my-project/
├── arc.yaml          # Workspace manifest (source of truth)
├── .env              # Environment variables
├── .gitignore        # Git ignore rules
└── .arc/
    ├── state/        # Workspace state
    ├── data/         # Persistent data
    └── generated/    # Generated configs (don't edit these)
```

## Step 2: Configure Features

Open `arc.yaml` and enable the features you need:

```yaml
version: "1.0.0"

features:
  voice: true         # Scarlett (Voice Agent) + Daredevil (LiveKit)
  security: true      # J.A.R.V.I.S. (Auth) + Nick Fury (Secrets)
  observability: false # Dr. House + Watson + Friday (Monitoring stack)
  chaos: false         # T-800 (Resilience testing)

environment:
  LOG_LEVEL: "info"
  ENVIRONMENT: "development"
```

## Step 3: Launch the Platform

```bash
cd my-project
arc workspace run
```

This generates a complete `docker-compose.yml` and launches your platform. With the default configuration (voice + security), approximately **20 services** start up:

| Codename | Service | What It Does |
|----------|---------|-------------|
| **Heimdall** | Traefik | API gateway — routes all traffic |
| **Oracle** | PostgreSQL | Long-term memory — relational data + pgvector |
| **Sonic** | Redis | Working memory — caching and sessions |
| **Cerebro** | Qdrant | Semantic search — vector embeddings |
| **The Flash** | NATS | Nervous system — ephemeral messaging |
| **Dr. Strange** | Pulsar | Time stone — durable event streaming |
| **Mystique** | Unleash | Feature flags — runtime configuration |
| **Sherlock** | Brain | Reasoning engine — LangGraph-powered AI |
| **J.A.R.V.I.S.** | Kratos | Identity — authentication and sessions |
| **Nick Fury** | Infisical | Secrets — API keys and credentials |
| **Scarlett** | Voice Agent | Voice interface — WebRTC conversations |
| **Daredevil** | LiveKit | Real-time — voice/video infrastructure |
| ...and more | | |

## Step 4: Verify Everything Is Running

```bash
# Check workspace status
arc workspace info

# View running containers
docker ps --filter "name=arc-" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
```

### Key Service URLs

| Service | URL | Credentials |
|---------|-----|-------------|
| **Heimdall** (Gateway) | `http://localhost:8080` | — |
| **Mystique** (Feature Flags) | `http://localhost:4242` | See `.env` |
| **Friday** (Grafana) | `http://localhost:3000` | See `.env` (if observability enabled) |

## What Just Happened?

With a single `arc workspace run`, A.R.C.:

1. Read your `arc.yaml` manifest
2. Resolved service dependencies (Sherlock needs Oracle, Sonic, Cerebro, and The Flash)
3. Generated a complete `docker-compose.yml` in `.arc/generated/`
4. Launched all services with health checks, resource limits, and proper networking
5. Wired Heimdall (Traefik) to auto-discover and route to every service

**Your job now**: Open the Sherlock (Brain) service and start writing your agent logic with LangGraph. The infrastructure is done.

## Common Operations

```bash
# Run in background (detached mode)
arc workspace run --detached

# Generate configs without launching
arc workspace run --generate-only

# View workspace operation history
arc workspace history

# Stop the platform
docker compose -f .arc/generated/docker-compose.yml down
```

## Troubleshooting

### "Docker is not installed" or "Docker is not running"

Install [Docker Desktop](https://docs.docker.com/get-started/get-docker/), start it, and wait for the whale icon in your system tray. Verify with `docker ps`.

### Port conflict detected

Another process is using the same port. Update `arc.yaml`:

```yaml
services:
  arc-gateway:
    config:
      port: 8081  # Changed from default 8080
```

Then regenerate: `arc workspace run --generate-only`

### Services failing health checks

Your machine may not have enough resources. Check with `docker stats` and consider disabling unused features (set `voice: false` or `security: false` in `arc.yaml`).

---

**Next:** [Configure your platform →](./configuration.md) for detailed `arc.yaml` reference, tier selection, and environment variables.
