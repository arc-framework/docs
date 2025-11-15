---
sidebar_position: 2
title: Components
---

# A.R.C. Components

The Agentic Reasoning Core (A.R.C.) is an open-source, modular, Platform-in-a-Box designed as a distributed intelligence orchestration engine. Our technology choices reflect our commitment to open standards, developer experience, and robust, scalable systems.

Below is the quick reference guide to the A.R.C. stack.

### Platform

- **CLI**: [Go](https://go.dev/)
- **API Gateway**: [Traefik](https://traefik.io/traefik/)
- **Docs**: [Docusaurus](https://docusaurus.io/)

### AI Agent Core

- **Engine**: [LangGraph](https://langchain-ai.github.io/langgraph/) (Python)
- **Guardrails**: [RuleGo](https://github.com/rulego/rulego) (Go-native)
- **Memory**: [PostgreSQL](https://www.postgresql.org/) with [pgvector](https://github.com/pgvector/pgvector)
- **Voice**: [pipecat](https://github.com/pipecat-ai/pipecat-python) + [Piper](https://github.com/rhasspy/piper)

### Security

- **Auth**: [Ory Kratos](https://www.ory.sh/kratos/)
- **Secrets**: [Infisical](https://infisical.com/)
- **Config**: [Unleash](https://www.getunleash.io/) / [OpenFeature](https://openfeature.dev/)

### Data & Messaging

- **Durable Streaming**: [Apache Pulsar](https://pulsar.apache.org/)
- **Ephemeral Messaging**: [NATS](https://nats.io/)
- **Cache**: [Redis](https://redis.io/)

### Observability

- **Collection**: [OpenTelemetry](https://opentelemetry.io/)
- **Logs**: [Loki](https://grafana.com/oss/loki/)
- **Metrics**: [Prometheus](https://prometheus.io/)
- **Traces**: [Jaeger](https://www.jaegertracing.io/)
- **UI**: [Grafana](https://grafana.com/oss/grafana/)
