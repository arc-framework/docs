---
sidebar_position: 1
---

# Introduction

<p align="center">
  <img src="https://raw.githubusercontent.com/arc-framework/.github/main/assets/arc-icon.png" alt="A.R.C. Agentic Reasoning Core Banner" width="800" />
</p>

<p align="center">
  <strong>A.R.C. (Agentic Reasoning Core)</strong>
  <br />
  An open-source, "Platform-in-a-Box" for building, deploying, and orchestrating production-ready AI agents.
</p>

---

## 🧠 What is A.R.C.?

**A.R.C. (Agentic Reasoning Core)** is an open-source, modular, and cloud-native AI system designed to be a distributed intelligence orchestration engine.

But A.R.C. isn't just another Python library—it's a **"Platform-in-a-Box."**

It's a production-ready ecosystem of pre-built, "black-box" services that you compose and control. We provide the "batteries-included" infrastructure (like IAM, streaming, and API gateways) so you can stop worrying about plumbing and focus on what matters: **building the "thinking engine" for your agents.**

Use A.R.C. to build, deploy, and scale:

- Voice-first AI companions
- Stateful, long-running research agents
- Custom AI workflows (RAG, agentic, etc.)
- Modular, event-driven AI microservices

---

## ✨ Why A.R.C.?

- **Truly Open-Source:** 100% of our core stack is **FOSS**. No BSL, source-available, or proprietary-core-with-non-compete-clauses. We're built on Apache 2.0, MIT, and MPL.
- **Platform-in-a-Box:** We provide the "batteries-included" foundation. You get auth, secrets, messaging, and observability out of the box, not as an afterthought.
- **Modular & Pluggable:** We're built on standards. We use **OpenFeature** for feature flags and **OpenTelemetry** for observability, so you're never locked into a single vendor (not even us).
- **Built for Production:** Our stack isn't a toy. It's a collection of battle-tested, best-in-class open-source projects (like Kratos, Pulsar, and Infisical) orchestrated to work as one.

---

## 🧩 The A.R.C. Stack (Batteries Included)

A.R.C. is a polyglot platform managed by a single powerful CLI. We give you the pre-built components to assemble your perfect stack.

### 🚀 Platform & Developer Experience

- **Blazing-fast Go CLI:** A single binary (`arc`) to scaffold, run, and manage your entire platform. (`arc new`, `arc add`, `arc run`)
- **Auto-discovery API Gateway:** A pre-configured **Traefik** instance acts as the "front door." It automatically discovers and routes new services (like Kratos or Unleash) via Docker labels, so your platform wires itself up.
- **Polyglot Architecture:** Get the best of all worlds: a high-performance **Go** gateway and CLI, with a powerful **Python** ecosystem for AI.
- **Documentation-as-Code:** Your platform's documentation is built with **Docusaurus**, versioned right alongside your code.

### 🧠 The AI Agent Core (The "Stephen" Stack)

- **Agentic Reasoning Engine:** A core Python service built on **LangGraph** for creating powerful, stateful, and persistent agents.
- **Agent Guardrails:** A Go-native **RuleGo** engine provides deterministic guardrails for your "fuzzy" LLM, ensuring predictable execution of agent actions.
- **Agent Memory:** Persistent, long-term memory and RAG capabilities provided by **PostgreSQL** with the **`pgvector`** extension.
- **Real-time Voice Interface:** A full, end-to-end streaming voice pipeline orchestrated by **`pipecat`**.
- **Self-Hosted Voice Engine:** 100% open-source, self-hosted TTS engine powered by **Piper**, ensuring real-time performance and total privacy.

### 🔐 Core Services (Security & Auth)

- **Built-in IAM & Auth:** Add production-ready user management, auth, and security to your platform in one command (`arc add security`), powered by **Ory Kratos**.
- **Secrets Management:** A self-hosted, open-source vault powered by **Infisical** to manage all platform secrets and API keys.
- **Dynamic Config & Flags:** Manage runtime configuration and feature flags with **Unleash**, accessed via the **OpenFeature** SDK for total vendor-agnosticism.

### ⚡ Core Services (Data & Messaging)

- **Durable Streaming:** A pre-configured **Apache Pulsar** cluster for your "system-of-record" event log and streaming analytics (the "Conveyor Belt").
- **Ephemeral Messaging:** A lightweight, high-performance **NATS** server for fire-and-forget messaging and job queues (the "Central Nervous System").
- **Platform Cache:** A high-speed, in-memory **Redis** instance for shared caching, rate limiting, and session storage.

### 📊 Core Services (Observability)

- **Full-Stack Telemetry:** Your platform is born with "eyes." Get a pre-configured, end-to-end observability stack from day one.
- **Collection:** **OpenTelemetry Collector** as the single "front door" for all telemetry.
- **Logs:** **Loki** for log aggregation.
- **Metrics:** **Prometheus** for metrics.
- **Traces:** **Jaeger** for distributed tracing.
- **Visualization:** **Grafana** as the single pane of glass.

---

## 💡 How It Works (The "A.R.C. Way")

We've designed A.R.C. to have the power of a microservice architecture, with the simple developer experience of a monolith.

The A.R.C. developer experience is designed to get you from an idea to a running, production-ready platform in minutes, not months. We're not just a library; we're a factory.

1.  **Interactive Scaffolding**
    It all starts with the `arc` CLI wizard. This tool guides you through a series of questions to understand what your platform needs—do you require user security? Real-time data streaming? Voice interaction?

2.  **Smart Composition**
    Based on your answers, the A.R.C. framework acts as a "smart scaffolder." It dynamically generates a new, fully-configured project, composing our pre-built, "black-box" Docker services (like the API gateway and security engine) into a single, cohesive `docker-compose.yml`.

3.  **One-Command Launch**
    The entire, complex, multi-service platform—which would normally take weeks to configure—launches locally with a single `arc run` command.

4.  **Focus on the "Thinking Engine"**
    Your job as a developer is to not build infrastructure. The plumbing is done. Your only task is to open the Agentic Reasoning Core (`engine`) service and start writing your unique agent logic (using LangGraph).

You're not building _from_ scratch. You're building _on top_ of a production-ready foundation from day one.

---

## 🤝 Contributing

We are building A.R.C. in the open. We'd love your help. Please read our **[CONTRIBUTING.md](httpsS://github.com/arc-framework/.github/blob/main/CONTRIBUTING.md)** to get started.

All community interaction is governed by our **[CODE_OF_CONDUCT.md](httpsS://github.com/arc-framework/.github/blob/main/CODE_OF_CONDUCT.md)**.

## 📜 License

A.R.C. is open-source under the **[Apache 2.0 License](httpsS://github.com/arc-framework/arc/blob/main/LICENSE)**.
