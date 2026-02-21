---
sidebar_position: 11
title: "Services"
---

# A.R.C. Services

## Platform Services at a Glance

A.R.C. ships with 29 production-ready services. Each is pre-configured, orchestrated by the CLI, and identifiable by its codename.

| Codename | Service | Technology | Category | Default Port(s) |
|----------|---------|------------|----------|-----------------|
| **Heimdall** | API Gateway | Traefik v3.0 | INFRA | 80, 443, 8080 |
| **Mystique** | Feature Flags | Unleash | INFRA | 4242 |
| **J.A.R.V.I.S.** | Identity & Auth | Ory Kratos | INFRA | 4433, 4434 |
| **Nick Fury** | Secrets Vault | Infisical | INFRA | 8200 |
| **Daredevil** | Voice Server | LiveKit | INFRA | 7880, 7881 |
| **The Flash** | Messaging | NATS | INFRA | 4222, 8222 |
| **Dr. Strange** | Event Streaming | Apache Pulsar | INFRA | 6650, 8081 |
| **Oracle** | Relational Database | PostgreSQL 16 | INFRA | 5432 |
| **Sonic** | In-Memory Cache | Redis | INFRA | 6379 |
| **Cerebro** | Vector Database | Qdrant | INFRA | 6333, 6334 |
| **Tardis** | Object Storage | MinIO | INFRA | 9000, 9001 |
| **Black Widow** | Telemetry Collector | OpenTelemetry Collector | INFRA | - |
| **Dr. House** | Metrics | Prometheus | INFRA | 9090 |
| **Watson** | Log Aggregation | Loki | INFRA | 3100 |
| **Columbo** | Distributed Tracing | Jaeger (Tempo) | INFRA | 16686 |
| **Friday** | Dashboards | Grafana | INFRA | 3000 |
| **Hermes** | Log Shipper | Promtail | INFRA | - |
| **T-800** | Chaos Testing | Chaos Mesh | INFRA | 2333 |
| **Sherlock** | AI Brain | LangGraph | CORE | 8000 |
| **Scarlett** | Voice Agent | Pipecat | CORE | 8001 |
| **RoboCop** | AI Guardrails | RuleGo | CORE | 8002 |
| **The Wolf** | Operations | Custom | CORE | 8007 |
| **Alfred** | Billing & Usage | Custom | CORE | 8008 |
| **Gordon Ramsay** | QA Critic | Custom | WORKER | - |
| **Ivan Drago** | Adversarial Trainer | Custom | WORKER | - |
| **Uhura** | Semantic Translator | Custom | WORKER | - |
| **Statham** | Self-Healing | Custom | WORKER | - |
| **Pathfinder** | Database Migrations | Script | SIDECAR | - |
| **Sentry** | Voice Ingress | LiveKit Ingress | SIDECAR | 7882 |
| **Scribe** | Voice Egress | LiveKit Egress | SIDECAR | 7883 |
| **Hedwig** | Mailer | Courier | SIDECAR | 1025, 8025 |

### Service Categories

| Category | Count | Description |
|----------|-------|-------------|
| **INFRA** | 18 | External open-source services A.R.C. orchestrates (Traefik, PostgreSQL, Redis, etc.) |
| **CORE** | 5 | Custom-built services central to A.R.C.'s intelligence (Sherlock, Scarlett, RoboCop, The Wolf, Alfred) |
| **WORKER** | 4 | Specialized agents that perform specific tasks (Gordon Ramsay, Ivan Drago, Uhura, Statham) |
| **SIDECAR** | 4 | Utility processes that support other services (Pathfinder, Sentry, Scribe, Hedwig) |

For the full architecture breakdown, dependency graph, and tier system, see [Platform Architecture](./architecture.md).

---

## Professional Services

A.R.C. is open-source and free to use. For teams that need accelerated adoption, we offer professional services to help you get to production faster.

### Platform Integration

Deploy A.R.C. into your existing infrastructure -- on-prem, cloud, or hybrid. We handle networking, security hardening, and service integration so your team stays focused on building agents. Whether you run on AWS, GCP, Azure, or bare metal, we ensure A.R.C. fits seamlessly into your environment.

### Custom Agent Development

Need specialized agent logic? Our team builds bespoke reasoning engines, voice pipelines, and workflow automation on top of the A.R.C. platform. From domain-specific RAG systems to multi-agent orchestration patterns, we deliver production-ready agent implementations tailored to your use case.

### Enterprise Support

Production SLAs, dedicated support channels, priority bug fixes, and architecture reviews for mission-critical deployments. Our support team understands the full A.R.C. stack, from Heimdall to the T-800, and can diagnose issues across every layer of the platform.

### Training & Workshops

Hands-on training for your engineering team. Programs range from A.R.C. fundamentals (CLI, tier system, service composition) to advanced topics like agent orchestration patterns, custom worker development, and chaos engineering with the T-800.

### Architecture Consulting

Design sessions for teams planning large-scale agent deployments. We help you choose the right tier, configure feature flags, design service topologies, and plan for scale. Includes capacity planning, resilience strategy, and migration roadmaps.

---

**Interested?** Reach out via [GitHub Discussions](https://github.com/arc-framework/arc/discussions) or contact us at the links in our [GitHub organization](https://github.com/arc-framework).
