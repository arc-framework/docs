---
sidebar_position: 4
title: "Configuration"
---

# Configuration

A.R.C. uses a declarative configuration model. You define your desired state in `arc.yaml`, and the CLI generates the infrastructure.

## arc.yaml Reference

```yaml
# Version of the manifest schema
version: "1.0.0"

# Workspace tier (determines base services)
tier: super-saiyan  # Default tier

# Feature flags to enable/disable capabilities
features:
  voice: false         # Scarlett, Daredevil (Voice AI)
  security: false      # J.A.R.V.I.S., Nick Fury, RoboCop (Auth & Secrets)
  observability: false # Dr. House, Watson, Friday (Monitoring)
  chaos: false         # T-800 (Chaos Engineering)

# Service-specific overrides
services:
  arc-gateway:
    config:
      port: 8080
      enable_tls: false

# Environment variables for all services
environment:
  LOG_LEVEL: "info"
  ENVIRONMENT: "development"
```

## Feature Flags

Feature flags control which optional services are included in your platform.

### Voice (`features.voice`)

Enables real-time voice AI capabilities.

**Services added:** Daredevil (LiveKit), Scarlett (Voice Agent), Sentry (Ingress), Scribe (Egress)
**Resource impact:** +2GB RAM, +1 CPU core
**When to enable:** Building conversational AI, voice assistants, real-time collaboration

### Security (`features.security`)

Enables production-grade identity and secrets management.

**Services added:** J.A.R.V.I.S. (Kratos), Nick Fury (Infisical), RoboCop (Guardrails)
**Resource impact:** +1.5GB RAM, +0.5 CPU core
**When to enable:** Multi-user applications, production deployments, compliance requirements

### Observability (`features.observability`)

Enables the full monitoring stack.

**Services added:** Black Widow (OTEL), Dr. House (Prometheus), Watson (Loki), Columbo (Jaeger/Tempo), Friday (Grafana), Hermes (Promtail)
**Resource impact:** +4GB RAM, +2 CPU cores
**When to enable:** Production deployments, performance debugging, SLA monitoring

### Chaos (`features.chaos`)

Enables infrastructure resilience testing.

**Services added:** T-800 (Chaos Mesh)
**Resource impact:** +1GB RAM, +0.5 CPU core
**When to enable:** Production readiness validation, resilience testing

## Tiers

Tiers are pre-defined service collections that serve as starting configurations.

### SuperSaiyan (Default)

The standard development tier. Includes 13 base infrastructure services plus any feature-flagged services.

| Configuration | Services | RAM | CPU |
|--------------|----------|-----|-----|
| Base only | 13 | 4 GB | 2 cores |
| + Security | 16 | 6 GB | 3 cores |
| + Voice | 17 | 8 GB | 4 cores |
| + Observability | 19 | 12 GB | 6 cores |
| All features | 26 | 16 GB | 8 cores |

### SuperSaiyanBlue (Coming Soon)

Production environments with enhanced observability and Redis Cluster.

### UltraInstinct (Coming Soon)

Large-scale deployments with chaos engineering and multi-region support.

## Environment Variables (.env)

The `.env` file contains credentials and configuration for your services:

```bash
# Database
POSTGRES_USER=arc
POSTGRES_PASSWORD=your-secure-password
POSTGRES_DB=arc

# Redis
REDIS_PASSWORD=your-redis-password

# Security (if enabled)
SESSION_SECRET=your-session-secret
JWT_SECRET=your-jwt-secret

# Voice AI (if enabled)
OPENAI_API_KEY=sk-your-api-key
```

## Example Configurations

### Minimal (AI Agent Only)

```yaml
version: "1.0.0"
features:
  voice: false
  security: false
  observability: false
  chaos: false
```

13 services, 4GB RAM minimum.

### Voice AI Platform

```yaml
version: "1.0.0"
features:
  voice: true
  security: false
  observability: false
environment:
  VOICE_MODEL: "whisper-large"
```

17 services, 8GB RAM minimum.

### Production-Ready

```yaml
version: "1.0.0"
features:
  voice: false
  security: true
  observability: true
services:
  arc-gateway:
    config:
      enable_tls: true
environment:
  LOG_LEVEL: "warn"
  ENVIRONMENT: "production"
```

22 services, 12GB RAM minimum.

### Full Development Stack

```yaml
version: "1.0.0"
features:
  voice: true
  security: true
  observability: true
  chaos: true
environment:
  LOG_LEVEL: "debug"
  TRACING_SAMPLE_RATE: "1.0"
```

27 services, 16GB RAM minimum.

## Customizing After Initialization

Edit `arc.yaml` to add or remove features at any time:

```bash
# After editing arc.yaml
arc workspace run
```

To stop running services before changing configuration:

```bash
docker compose -f .arc/generated/docker-compose.yml down
arc workspace run
```

---

**Next:** Explore the [Platform Services](../Platform/) for detailed documentation on each service.
