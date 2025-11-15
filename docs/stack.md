---
sidebar_position: 2
title: Components
---

# A.R.C. Components

The Agentic Reasoning Core (A.R.C.) is an open-source, modular, Platform-in-a-Box designed as a distributed intelligence orchestration engine. Our technology choices reflect our commitment to open standards, developer experience, and robust, scalable systems.

This page provides a high-level overview of the components that make up the A.R.C. stack. For more detailed information, please see the [Core Services](./Core/index.md) and [Plugins](./Plugins/index.md) pages.

---

## Quick Reference

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

---

## Core vs. Plugins

The A.R.C. framework is divided into two main categories of components: **Core Services** and **Plugins**.

### Core Services

**Core Services** are the essential components that the A.R.C. Framework depends on. These services are mandatory for the framework to operate and have deep integration points throughout the system.

A component is considered **core** if:

- ✅ The framework breaks without it.
- ✅ It has deep integration with multiple services.
- ✅ It is required by the agent architecture.
- ✅ There is no reasonable alternative for the use case.

[**Learn more about Core Services →**](./Core/index.md)

### Plugins

**Plugins** are optional components that extend the A.R.C. Framework. They can be added, removed, or swapped with alternatives without breaking the core functionality of the framework.

A component is considered a **plugin** if:

- ✅ The framework works without it.
- ✅ Multiple alternatives exist.
- ✅ It can be swapped at runtime.
- ✅ It is only needed for specific deployments.

[**Learn more about Plugins →**](./Plugins/index.md)
