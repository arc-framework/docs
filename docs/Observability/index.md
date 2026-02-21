---
sidebar_position: 1
title: "Overview"
---

# Observability

> **"Born with Eyes."** — Every A.R.C. platform ships with enterprise-grade observability from day one.

## Overview

A.R.C. provides a complete, pre-configured observability stack. When you enable the `observability` feature flag, six services activate to give you full visibility into your platform:

```
Your Services
     │
     ▼
Black Widow (OpenTelemetry Collector)
     │
     ├──→ Dr. House (Prometheus) ──→ Metrics
     ├──→ Watson (Loki) ←── Hermes (Promtail) ──→ Logs
     └──→ Columbo (Jaeger/Tempo) ──→ Traces
                    │
                    ▼
            Friday (Grafana)
          "The Single Pane of Glass"
```

## The Observability Stack

| Service | Codename | Role |
|---------|----------|------|
| OpenTelemetry Collector | **Black Widow** | The single entry point for all telemetry signals |
| Prometheus | **Dr. House** | Metrics collection and alerting — "It's never DNS" |
| Loki | **Watson** | Log aggregation — writes down every detail for later |
| Jaeger/Tempo | **Columbo** | Distributed tracing — "Just one more thing" |
| Grafana | **Friday** | Unified dashboards — the visual interface for everything |
| Promtail | **Hermes** | Log shipping — delivers logs from containers to Watson |

## Enabling Observability

In your `arc.yaml`:

```yaml
features:
  observability: true
```

Then run:

```bash
arc workspace run
```

**Resource impact:** +4GB RAM, +2 CPU cores (6 additional services).

## Key Dashboards

Once enabled, access Friday (Grafana) at `http://localhost:3000`:

- **Service Health**: Overview of all service status and uptime
- **Request Tracing**: End-to-end request paths across services
- **Log Explorer**: Search and filter logs from all services
- **Metrics Explorer**: Custom queries against all collected metrics

## The Three Pillars

A.R.C. implements all three pillars of observability:

1. **[Logs](./logging.md)** (Watson) — What happened, in detail
2. **[Metrics](./metrics.md)** (Dr. House) — How the system is performing, numerically
3. **[Traces](./tracing.md)** (Columbo) — How requests flow through services
4. **[Dashboards](./dashboards.md)** (Friday) — Unified visualization of all signals

---

Explore each component in detail using the sidebar.
