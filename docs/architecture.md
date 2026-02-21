---
sidebar_position: 3
title: 'Platform Architecture'
---

# Platform Architecture

## Architecture Overview

A.R.C. organizes its 29 services into four functional layers. Every request flows through the Edge Layer, is processed by the Intelligence Layer, persists in the Data Layer, and is monitored by the Operations Layer.

```
┌──────────────────────────────────────────────────────────────┐
│                        Edge Layer                            │
│                 Heimdall (Traefik Gateway)                   │
├──────────────────────────────────────────────────────────────┤
│                    Intelligence Layer                        │
│  Sherlock (Brain) │ Scarlett (Voice) │ RoboCop (Guard)       │
│  Gordon Ramsay (Critic) │ Ivan Drago (Gym) │ Uhura (Semantic)│
│  Statham (Mechanic) │ The Wolf (Janitor) │ Alfred (Billing)  │
├──────────────────────────────────────────────────────────────┤
│                       Data Layer                             │
│  Oracle (Postgres) │ Sonic (Redis) │ Cerebro (Qdrant)        │
│  Tardis (MinIO) │ The Flash (NATS) │ Dr. Strange (Pulsar)    │
├──────────────────────────────────────────────────────────────┤
│                    Operations Layer                          │
│  Black Widow (OTEL) │ Friday (Grafana) │ T-800 (Chaos)       │
│  Dr. House (Prometheus) │ Watson (Loki) │ Columbo (Jaeger)   │
│  Hermes (Promtail) │ Mystique (Unleash)                      │
├──────────────────────────────────────────────────────────────┤
│                    Voice & Sidecars                          │
│  Daredevil (LiveKit) │ Sentry (Ingress) │ Scribe (Egress)    │
│  J.A.R.V.I.S. (Kratos) │ Nick Fury (Infisical)               │
│  Pathfinder (Migrate) │ Hedwig (Mailer)                      │
└──────────────────────────────────────────────────────────────┘
```

## The Codename System

Every A.R.C. service has a codename that reflects its personality and role. This is not just branding -- it makes the system memorable and makes architecture discussions feel natural. When someone says "Heimdall is down," the entire team knows the gateway is unreachable. When "Sherlock needs more memory," everyone understands the reasoning engine is under pressure.

### Infrastructure (The Body)

These are the external, battle-tested open-source services that A.R.C. orchestrates into a cohesive platform.

| Service             | Codename         | Technology              | Role                                                                                    |
| ------------------- | ---------------- | ----------------------- | --------------------------------------------------------------------------------------- |
| API Gateway         | **Heimdall**     | Traefik v3.0            | The Gatekeeper. Opens the Bifrost (ports) only for authorized traffic.                  |
| Feature Flags       | **Mystique**     | Unleash                 | The Shapeshifter. Changes app behavior instantly without redeploying.                   |
| Identity & Auth     | **J.A.R.V.I.S.** | Ory Kratos              | The Butler. Handles identity and authentication.                                        |
| Secrets Vault       | **Nick Fury**    | Infisical               | The Spymaster. Holds the nuclear codes (secrets). Paranoid for a reason.                |
| Voice Server        | **Daredevil**    | LiveKit                 | The Radar. Sees the world through sound waves (WebRTC).                                 |
| Messaging           | **The Flash**    | NATS                    | The Nervous System. Information travels so fast it feels like telepathy.                |
| Event Streaming     | **Dr. Strange**  | Apache Pulsar           | Time Stone. Replays history (events) and sees 14 million outcomes.                      |
| Relational DB       | **Oracle**       | PostgreSQL 16           | Long-Term Memory. The photographic record of truth.                                     |
| Cache               | **Sonic**        | Redis                   | Working Memory. Holds context at speed; if he stops, he dies.                           |
| Vector DB           | **Cerebro**      | Qdrant                  | The Finder. Connects to every thought to find semantic matches.                         |
| Object Storage      | **Tardis**       | MinIO                   | Infinite Storage. It's bigger on the inside (S3 compatible).                            |
| Telemetry Collector | **Black Widow**  | OpenTelemetry Collector | The Spy. Intercepts all signals and traces without being seen.                          |
| Metrics             | **Dr. House**    | Prometheus              | Diagnostics. Doesn't trust you; trusts the vitals.                                      |
| Log Aggregation     | **Watson**       | Loki                    | The Chronicler. Writes down every messy detail for later deduction.                     |
| Distributed Tracing | **Columbo**      | Jaeger (Tempo)          | The Detective. Follows the request path with "just one more thing."                     |
| Dashboards          | **Friday**       | Grafana                 | The UI. The visual interface overlay for all metrics.                                   |
| Log Shipper         | **Hermes**       | Promtail                | The Messenger. Delivers the logs to Watson.                                             |
| Chaos Testing       | **T-800**        | Chaos Mesh              | The Terminator. Absolutely will not stop until your infrastructure is proven resilient. |

### Data & Memory (The Mind)

| Service             | Codename       | Technology       | Role                                                                    |
| ------------------- | -------------- | ---------------- | ----------------------------------------------------------------------- |
| Relational Database | **Oracle**     | PostgreSQL 16    | Long-Term Memory. The photographic record of truth.                     |
| In-Memory Cache     | **Sonic**      | Redis            | Working Memory. High-speed context, rate limiting, and session storage. |
| Vector Database     | **Cerebro**    | Qdrant           | The Finder. Semantic search and embedding storage for RAG.              |
| Object Storage      | **Tardis**     | MinIO            | Infinite Storage. S3-compatible blob storage for files and artifacts.   |
| Database Migrations | **Pathfinder** | Migration Script | Pioneer. Maps the database schema before anyone else enters.            |

### AI Workforce (Core & Workers)

| Service             | Codename          | Type   | Technology | Role                                                                     |
| ------------------- | ----------------- | ------ | ---------- | ------------------------------------------------------------------------ |
| Brain               | **Sherlock**      | CORE   | LangGraph  | The Reasoner. Stateful, persistent agentic reasoning engine.             |
| Voice Agent         | **Scarlett**      | CORE   | Pipecat    | The Voice. Turns raw data into human connection.                         |
| Guardrails          | **RoboCop**       | CORE   | RuleGo     | Safety. Prime Directives: stops the agent from going off-script.         |
| Janitor             | **The Wolf**      | CORE   | Custom     | The Fixer. Solves problems and cleans up the mess efficiently.           |
| Billing             | **Alfred**        | CORE   | Custom     | The Manager. Tracks the budget and manages the estate.                   |
| Critic              | **Gordon Ramsay** | WORKER | Custom     | QA. "This output is RAW!" Yells until the answer is perfect.             |
| Adversarial Trainer | **Ivan Drago**    | WORKER | Custom     | Gym. "I must break you." Attacks the agent's logic to find weaknesses.   |
| Semantic Translator | **Uhura**         | WORKER | Custom     | Translator. Converts human speech to system commands (SQL/API).          |
| Self-Healing        | **Statham**       | WORKER | Custom     | Mechanic. Slides under the car to fix the leak while it's still running. |

### Observability (The Eyes)

| Service             | Codename        | Technology              | Role                                                        |
| ------------------- | --------------- | ----------------------- | ----------------------------------------------------------- |
| Telemetry Collector | **Black Widow** | OpenTelemetry Collector | The Spy. Single front door for all telemetry signals.       |
| Metrics Database    | **Dr. House**   | Prometheus              | Diagnostics. Scrapes and stores time-series metrics.        |
| Log Aggregation     | **Watson**      | Loki                    | The Chronicler. Centralized log aggregation and search.     |
| Distributed Tracing | **Columbo**     | Jaeger (Tempo)          | The Detective. End-to-end request tracing across services.  |
| Dashboards          | **Friday**      | Grafana                 | The UI. Single pane of glass for all observability data.    |
| Log Shipper         | **Hermes**      | Promtail                | The Messenger. Ships logs from containers to Watson (Loki). |

### Sidecars & Utilities

| Service             | Codename       | Type    | Technology      | Role                                                   |
| ------------------- | -------------- | ------- | --------------- | ------------------------------------------------------ |
| Database Migrations | **Pathfinder** | SIDECAR | Script          | Pioneer. Runs schema migrations before services start. |
| Voice Ingress       | **Sentry**     | SIDECAR | LiveKit Ingress | The Watchtower. Handles incoming RTMP/SIP streams.     |
| Voice Egress        | **Scribe**     | SIDECAR | LiveKit Egress  | The Recorder. Archives voice sessions to storage.      |
| Mailer              | **Hedwig**     | SIDECAR | Courier         | Mail Delivery. Delivers transactional email reliably.  |

## Service Types

| Type        | Description                                            | Examples                                                |
| ----------- | ------------------------------------------------------ | ------------------------------------------------------- |
| **INFRA**   | External open-source services A.R.C. orchestrates      | Traefik, PostgreSQL, Redis, Grafana                     |
| **CORE**    | Custom-built services central to A.R.C.'s intelligence | Sherlock (Brain), Scarlett (Voice), RoboCop (Guard)     |
| **WORKER**  | Specialized agents that perform specific tasks         | Gordon Ramsay (QA), Ivan Drago (Gym), Uhura (Semantic)  |
| **SIDECAR** | Utility processes that support other services          | Pathfinder (Migrate), Hedwig (Mailer), Sentry (Ingress) |

## Tier System

A.R.C. offers deployment tiers with pre-selected service groups. Tiers are starting points; you can customize the service list after initialization by editing `arc.yaml`.

### SuperSaiyan (Default)

The default tier ships with 13 base services plus optional feature groups.

**Base Infrastructure (13 services, always included):**
Heimdall, Oracle, Sonic, Cerebro, Tardis, Mystique, Dr. Strange, The Flash, Hedwig, Pathfinder, Sherlock, The Wolf, Alfred

**Optional feature groups:**

| Feature Flag    | Services Added                                          | Default  |
| --------------- | ------------------------------------------------------- | -------- |
| `security`      | J.A.R.V.I.S., Nick Fury, RoboCop                        | Enabled  |
| `voice`         | Daredevil, Scarlett, Sentry, Scribe                     | Enabled  |
| `observability` | Black Widow, Dr. House, Watson, Columbo, Friday, Hermes | Disabled |
| `chaos`         | T-800                                                   | Disabled |

**Default total:** 13 base + 3 security + 4 voice = **20 services**

**Resource Requirements:**

| Configuration   | Services | CPU (min) | RAM (min) | Storage (min) |
| --------------- | -------- | --------- | --------- | ------------- |
| Base Only       | 13       | 2 cores   | 4 GB      | 10 GB         |
| + Security      | 16       | 3 cores   | 6 GB      | 12 GB         |
| + Voice         | 17       | 4 cores   | 8 GB      | 15 GB         |
| + Observability | 19       | 6 cores   | 12 GB     | 25 GB         |
| All Features    | 27       | 8 cores   | 16 GB     | 30 GB         |

### SuperSaiyanBlue (Coming Soon)

Production-grade tier with enhanced observability and performance. Includes all SuperSaiyan services plus the full observability stack enabled by default, enhanced caching (Redis Cluster), and advanced event streaming (Kafka + Pulsar).

**Planned requirements:** 8 cores minimum, 16 GB RAM, 50 GB storage.

### UltraInstinct (Coming Soon)

Enterprise tier for large-scale deployments with chaos engineering and advanced diagnostics. Includes all SuperSaiyanBlue services plus Chaos Mesh (T-800), advanced tracing and profiling, and multi-region support.

**Planned requirements:** 16 cores minimum, 32 GB RAM, 100 GB storage.

## Feature Flags

Feature flags control which optional services run. They are set in your `arc.yaml` and can be toggled at any time.

| Flag            | Services Added                                          | Resource Impact |
| --------------- | ------------------------------------------------------- | --------------- |
| `voice`         | Daredevil, Scarlett, Sentry, Scribe                     | +2 GB RAM       |
| `security`      | J.A.R.V.I.S., Nick Fury, RoboCop                        | +1.5 GB RAM     |
| `observability` | Black Widow, Dr. House, Watson, Columbo, Friday, Hermes | +4 GB RAM       |
| `chaos`         | T-800                                                   | +1 GB RAM       |

## Service Dependencies

Services declare their dependencies, and A.R.C. resolves them automatically during `arc workspace run`. If a required dependency is missing from your configuration, you will receive a validation error.

```
Sherlock (Brain)
├── requires: Oracle (PostgreSQL)
├── requires: Sonic (Redis)
├── requires: Cerebro (Qdrant)
└── requires: The Flash (NATS)

J.A.R.V.I.S. (Identity)
├── requires: Heimdall (Gateway)
└── requires: Oracle (PostgreSQL)

Scarlett (Voice)
├── requires: Sherlock (Brain)
└── requires: Daredevil (LiveKit)

Friday (Grafana)
├── requires: Dr. House (Prometheus)
├── requires: Watson (Loki)
└── requires: Columbo (Jaeger)
```
