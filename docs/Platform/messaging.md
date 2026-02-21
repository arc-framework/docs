---
sidebar_position: 3
---

# Messaging

> **Codenames: The Flash (NATS)** — The Nervous System. Information travels at the speed of thought.
> **Dr. Strange (Pulsar)** — Time Stone. Replays event history and sees 14 million outcomes.

Message broker services for agent communication and event distribution.

---

## Overview

The A.R.C. Framework uses **two messaging systems** for different purposes:

1. **Ephemeral Messaging (NATS)** - Fast, lightweight, for real-time sync
2. **Durable Messaging (Pulsar)** - Persistent, for event sourcing

---

## Categories

### Ephemeral

**Purpose:** Real-time agent-to-agent communication

- Fast, sub-millisecond latency
- No persistence (memory only)
- Pub/sub, request/reply, queue groups
- Ideal for: coordination, job queues, heartbeats

**Implementation:** NATS

### Durable

**Purpose:** Event streaming and "Conveyor Belt" pattern

- Persistent storage
- Event replay and time-travel
- Guaranteed delivery
- Ideal for: event sourcing, audit logs, CDC

**Implementation:** Apache Pulsar

---

## When to Use Which?

| Use Case                                 | Use This            |
| ---------------------------------------- | ------------------- |
| Agent asks another agent to do something | NATS (ephemeral)    |
| Distribute work across workers           | NATS (queue groups) |
| Request/reply pattern                    | NATS                |
| Record events for audit log              | Pulsar (durable)    |
| Event sourcing / CQRS                    | Pulsar (durable)    |
| Replay historical events                 | Pulsar (durable)    |
| Cross-service event distribution         | Pulsar (durable)    |

---

## Architecture

```
Fast Sync Layer (NATS)
    ↓
Agent Communication
    ↓
Event Bus (Pulsar)
    ↓
Event Store & Replay
```

---

# Ephemeral Messaging

Real-time, low-latency messaging for agent-to-agent communication.

## Overview

Ephemeral messaging provides fast, memory-based message delivery without persistence. Messages are delivered in real-time and are not stored.

---

# NATS - Ephemeral Messaging {#nats-ephemeral-messaging}

Lightweight message broker for real-time agent-to-agent communication.

## Overview

**NATS** provides:

- Pub/sub messaging
- Request/reply patterns
- Queue groups for work distribution
- Low-latency communication
- Simple, ephemeral messaging (no persistence)

---

## Ports

- **4222** - Client connections
- **8222** - HTTP monitoring/management

---

## Configuration

See `.env.example` for configuration options.

### Key Features

- **Lightweight** - Minimal resource footprint
- **Fast** - Sub-millisecond latency
- **Simple** - Easy to use and deploy
- **Ephemeral** - Messages are not persisted

---

## Use Cases

### Ideal For

- ✅ Real-time agent coordination
- ✅ Job queues and work distribution
- ✅ Request/reply patterns
- ✅ Service-to-service communication
- ✅ Presence/heartbeat messages

### Not Ideal For

- ❌ Event sourcing (use Pulsar)
- ❌ Message persistence (use Pulsar)
- ❌ Replay historical events (use Pulsar)
- ❌ Cross-region replication

---

## Usage

### Start Service

```bash
make up-stack
# or
docker compose -f docker-compose.yml -f docker-compose.stack.yml up nats
```

### Check Health

```bash
make health-nats
# or
curl http://localhost:8222/healthz
```

### View Monitoring Dashboard

```bash
open http://localhost:8222
```

---

## Alternatives

- **RabbitMQ** - Feature-rich, slower than NATS
- **Redis Streams** - Simple, limited features
- **ZeroMQ** - Library, not a broker

---

# Durable Messaging

Persistent event streaming for event sourcing and the "Conveyor Belt" pattern.

---

## Overview

Durable messaging provides persistent storage of events with replay capabilities. Events are stored on disk and can be replayed at any time.

---

# Apache Pulsar - Durable Messaging {#apache-pulsar-durable-messaging}

Event streaming platform for durable, persistent messaging (the "Conveyor Belt").

---

## Overview

**Apache Pulsar** provides:

- Durable event storage
- Multi-tenancy
- Geo-replication
- Guaranteed message delivery
- Event replay and time-travel
- Stream processing

---

## Ports

- **6650** - Binary protocol (broker)
- **8080** - HTTP/REST API

---

## Configuration

See `.env.example` for configuration options.

### Key Features

- **Persistent Storage** - Messages stored on disk
- **Event Sourcing** - Replay historical events
- **Multi-Tenant** - Namespaces and topics
- **Guaranteed Delivery** - At-least-once, exactly-once
- **Tiered Storage** - Offload to S3/GCS for long-term retention

---

## Use Cases

### Ideal For

- ✅ Event sourcing and CQRS
- ✅ Cross-service event distribution
- ✅ Audit logs and compliance
- ✅ Data pipelines and ETL
- ✅ Change data capture (CDC)
- ✅ Replay and time-travel debugging

### Not Ideal For

- ❌ Low-latency sync messaging (use NATS)
- ❌ Request/reply patterns (use NATS)
- ❌ Simple pub/sub without persistence

---

## Architecture

### Components

```
Producer → Broker → BookKeeper → Consumer
                ↓
            Persistent Storage
```

### Hierarchy

```
Tenant (e.g., "arc")
  └── Namespace (e.g., "agents")
      └── Topic (e.g., "task-events")
          └── Partitions (0, 1, 2, ...)
```

---

## Usage

### Start Service

```bash
make up-stack
# or
docker compose -f docker-compose.yml -f docker-compose.stack.yml up pulsar
```

### Check Health

```bash
curl http://localhost:8080/metrics
```

### Admin Commands

```bash
# Access Pulsar admin CLI
docker compose exec pulsar bin/pulsar-admin

# List tenants
docker compose exec pulsar bin/pulsar-admin tenants list

# Create namespace
docker compose exec pulsar bin/pulsar-admin namespaces create public/arc

# List topics
docker compose exec pulsar bin/pulsar-admin topics list public/default
```

---

## Client Libraries

Pulsar has official clients:

- **Go:** `github.com/apache/pulsar-client-go`
- **Python:** `pulsar-client`
- **Java:** `pulsar-client`
- **C++:** `pulsar-client-cpp`

### Example (Go)

```go
import "github.com/apache/pulsar-client-go/pulsar"

client, _ := pulsar.NewClient(pulsar.ClientOptions{
    URL: "pulsar://localhost:6650",
})
defer client.Close()

// Producer
producer, _ := client.CreateProducer(pulsar.ProducerOptions{
    Topic: "agent-events",
})
producer.Send(context.Background(), &pulsar.ProducerMessage{
    Payload: []byte("event data"),
})

// Consumer
consumer, _ := client.Subscribe(pulsar.ConsumerOptions{
    Topic:            "agent-events",
    SubscriptionName: "my-subscription",
})
msg, _ := consumer.Receive(context.Background())
consumer.Ack(msg)
```

---

## Patterns

### Event Sourcing

```
1. Agent performs action
2. Publishes event to topic
3. Event stored durably
4. Other services consume and react
5. Can replay all events to rebuild state
```

### Change Data Capture

```
Database → Debezium → Pulsar → Downstream Services
```

### Message Replay

```bash
# Seek to earliest message
pulsar-client consume --subscription-position Earliest

# Seek to specific timestamp
pulsar-client consume --seek-time "2025-11-09T10:00:00Z"
```

---

## Monitoring

### Metrics

- Message rates (publish/consume)
- Storage usage
- Throughput (MB/s)
- Backlog (unconsumed messages)
- End-to-end latency

### Access Metrics

```bash
curl http://localhost:8080/metrics
```

---

## Production Notes

1. **Separate BookKeeper** - Deploy BookKeeper cluster separately
2. **Enable Authentication** - Configure mTLS or JWT
3. **Tiered Storage** - Offload old data to object storage
4. **Monitor Backlog** - Alert on growing backlogs
5. **Resource Limits** - Pulsar is resource-intensive

---

## Pulsar vs NATS

| Feature            | Pulsar         | NATS           |
| ------------------ | -------------- | -------------- |
| **Persistence**    | Yes            | No             |
| **Event Replay**   | Yes            | No             |
| **Latency**        | Few ms         | Sub-ms         |
| **Use Case**       | Event sourcing | Real-time sync |
| **Resource Usage** | High           | Low            |

**Recommendation:** Use both - Pulsar for events, NATS for sync

---

## Alternatives

- **Apache Kafka** - Popular, similar features
- **EventStore** - Purpose-built for event sourcing
- **AWS Kinesis** - Cloud-native (AWS only)
