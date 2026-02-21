---
sidebar_position: 1
---

# Introduction

<p align="center">
  <img src="https://raw.githubusercontent.com/arc-framework/.github/main/assets/arc-icon.png" alt="A.R.C. Agentic Reasoning Core Banner" width="800" />
</p>

**A.R.C. (Agentic Reasoning Core)** is an open-source Platform-in-a-Box that transforms weeks of infrastructure wiring into a single command. Scaffold a complete AI agent platform, deploy 20+ production services with memorable codenames like Sherlock, Heimdall, and Friday, and focus entirely on building the reasoning engine your agents deserve.

## What is A.R.C.?

- **A complete platform, not a library.** One CLI command composes an entire production stack: gateway, auth, streaming, observability, and AI reasoning, all pre-wired and ready to run.
- **Every service has a codename and a job.** Heimdall guards the gate (Traefik), Sherlock thinks (LangGraph), Friday shows the vitals (Grafana), and the T-800 stress-tests the whole thing (Chaos Mesh).
- **Built for distributed intelligence.** Design stateful, multi-agent systems with persistent memory, semantic search, event-driven messaging, and real-time voice, all orchestrated from a single `arc.yaml`.

## Why A.R.C.?

| | |
|---|---|
| **Minutes, Not Months** | A single `arc run` deploys 20+ production services. What takes teams weeks to wire by hand is ready in minutes. |
| **100% FOSS** | Apache 2.0, MIT, and MPL throughout. No BSL, no "source-available" gotchas, no non-compete clauses. You own your stack. |
| **Platform, Not Library** | This is not another `pip install`. A.R.C. ships a complete ecosystem: gateway, auth, secrets, messaging, observability, voice, and AI reasoning, pre-configured and production-hardened. |
| **Zero Lock-In** | Built on open standards: OpenFeature for feature flags, OpenTelemetry for observability. Swap any service, including ours, whenever you want. |

## Quick Glance

| Layer | Services (Codenames) | Technology |
|-------|---------------------|------------|
| **Edge** | Heimdall | Traefik API Gateway |
| **Intelligence** | Sherlock, Scarlett, RoboCop, Gordon Ramsay, Ivan Drago, Uhura | LangGraph, Pipecat, RuleGo |
| **Data & Memory** | Oracle, Sonic, Cerebro, Tardis, The Flash, Dr. Strange | PostgreSQL, Redis, Qdrant, MinIO, NATS, Pulsar |
| **Identity & Security** | J.A.R.V.I.S., Nick Fury, Mystique | Ory Kratos, Infisical, Unleash |
| **Observability** | Black Widow, Dr. House, Watson, Columbo, Friday, Hermes | OTEL, Prometheus, Loki, Jaeger, Grafana, Promtail |
| **Operations** | The Wolf, Alfred, Statham, T-800 | Ops, Billing, Self-Healing, Chaos Mesh |
| **Voice** | Daredevil, Sentry, Scribe | LiveKit, Ingress, Egress |
| **Utilities** | Pathfinder, Hedwig | Migration, Mailer |

## Next Steps

- **Evaluating A.R.C.?** Read [Why A.R.C.](./why-arc.md) for the business case and competitive comparison.
- **Ready to try it?** Jump to [Getting Started](./getting-started/) and deploy your first platform in minutes.
- **Want the architecture?** Explore the [Platform Architecture](./architecture.md) with the full 29-service codename matrix.

---

## Contributing

We are building A.R.C. in the open. We'd love your help. Please read our **[CONTRIBUTING.md](https://github.com/arc-framework/.github/blob/main/CONTRIBUTING.md)** to get started.

All community interaction is governed by our **[CODE_OF_CONDUCT.md](https://github.com/arc-framework/.github/blob/main/CODE_OF_CONDUCT.md)**.

## License

A.R.C. is open-source under the **[Apache 2.0 License](https://github.com/arc-framework/arc/blob/main/LICENSE)**.
