---
sidebar_position: 12
title: Components
---

# A.R.C. Components

The Agentic Reasoning Core (A.R.C.) is an open-source, modular, Platform-in-a-Box designed as a distributed intelligence orchestration engine. Our technology choices reflect our commitment to open standards, developer experience, and robust, scalable systems.

This page provides a high-level overview of the components that make up the A.R.C. stack. For more detailed information, please see the [Platform Services](./Platform/index.md) and [Observability](./Observability/index.md) pages.

---

## Quick Reference

Below is the quick reference guide to the A.R.C. stack.

### Platform

- **CLI**: [Go](https://go.dev/)
- **API Gateway** (codename: **Heimdall**): [Traefik](https://traefik.io/traefik/)
- **Docs**: [Docusaurus](https://docusaurus.io/)

### AI Agent Core

- **Engine** (codename: **Sherlock**): [LangGraph](https://langchain-ai.github.io/langgraph/) (Python)
- **Guardrails** (codename: **RoboCop**): [RuleGo](https://github.com/rulego/rulego) (Go-native)
- **Memory** (codename: **Oracle**): [PostgreSQL](https://www.postgresql.org/) with [pgvector](https://github.com/pgvector/pgvector)
- **Voice** (codename: **Daredevil** + **Scarlett**): [pipecat](https://github.com/pipecat-ai/pipecat-python) + [Piper](https://github.com/rhasspy/piper)

### Security

- **Auth** (codename: **J.A.R.V.I.S.**): [Ory Kratos](https://www.ory.sh/kratos/)
- **Secrets** (codename: **Nick Fury**): [Infisical](https://infisical.com/)
- **Config** (codename: **Mystique**): [Unleash](https://www.getunleash.io/) / [OpenFeature](https://openfeature.dev/)

### Data & Messaging

- **Durable Streaming** (codename: **Dr. Strange**): [Apache Pulsar](https://pulsar.apache.org/)
- **Ephemeral Messaging** (codename: **The Flash**): [NATS](https://nats.io/)
- **Cache** (codename: **Sonic**): [Redis](https://redis.io/)

### Observability

- **Collection** (codename: **Black Widow**): [OpenTelemetry](https://opentelemetry.io/)
- **Logs** (codename: **Watson**): [Loki](https://grafana.com/oss/loki/)
- **Metrics** (codename: **Dr. House**): [Prometheus](https://prometheus.io/)
- **Traces** (codename: **Columbo**): [Jaeger](https://www.jaegertracing.io/)
- **UI** (codename: **Friday**): [Grafana](https://grafana.com/oss/grafana/)
- **Log Shipping** (codename: **Hermes**): [Promtail](https://grafana.com/docs/loki/latest/send-data/promtail/)

---

## Core vs. Optional Services

The A.R.C. framework is divided into two main categories of components: **Platform Services** and **Optional Services** (like Observability).

### Platform Services

**Platform Services** are the essential components that the A.R.C. Framework depends on. These services are mandatory for the framework to operate and have deep integration points throughout the system.

A component is considered **platform** if:

- The framework breaks without it.
- It has deep integration with multiple services.
- It is required by the agent architecture.
- There is no reasonable alternative for the use case.

[**Learn more about Platform Services -->**](./Platform/index.md)

### Observability Services

**Observability Services** provide enterprise-grade monitoring, logging, and tracing. They activate with the `observability` feature flag and can be swapped with alternatives.

[**Learn more about Observability -->**](./Observability/index.md)

---

## Comprehensive Service Reference

| Service | Codename | Category | Default Port | Description |
|---------|----------|----------|-------------|-------------|
| Traefik | **Heimdall** | Platform | 8080, 8443 | API Gateway and reverse proxy |
| LangGraph | **Sherlock** | Platform | 8000 | AI reasoning engine |
| RuleGo | **RoboCop** | Platform | 8002 | Guardrails and rule engine |
| PostgreSQL + pgvector | **Oracle** | Platform | 5432 | Relational DB with vector search |
| NATS | **The Flash** | Platform | 4222 | Ephemeral messaging |
| Apache Pulsar | **Dr. Strange** | Platform | 6650, 8081 | Durable event streaming |
| Redis | **Sonic** | Platform | 6379 | In-memory cache |
| Infisical | **Nick Fury** | Platform | 8200 | Secrets management |
| Unleash | **Mystique** | Platform | 4242 | Feature flags / config |
| Ory Kratos | **J.A.R.V.I.S.** | Security | 4433, 4434 | Identity and authentication |
| pipecat + Piper | **Daredevil** + **Scarlett** | Voice | 8765 | Voice AI pipeline |
| OpenTelemetry Collector | **Black Widow** | Observability | 4317, 4318, 8889 | Telemetry collection |
| Prometheus | **Dr. House** | Observability | 9090 | Metrics storage and alerting |
| Loki | **Watson** | Observability | 3100 | Log aggregation |
| Promtail | **Hermes** | Observability | 9080 | Log shipping |
| Jaeger | **Columbo** | Observability | 16686, 14268 | Distributed tracing |
| Grafana | **Friday** | Observability | 3000 | Unified dashboards |
