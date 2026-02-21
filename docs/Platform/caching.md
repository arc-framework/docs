---
sidebar_position: 2
---

# Caching

> **Codename: Sonic** — Working Memory. "Gotta go fast." Holds context; if he stops, everything stops.

In-memory caching and session storage for the A.R.C. Framework.

---

## Overview

The caching layer provides high-performance, in-memory data storage for:

- Application caching
- Session storage
- Rate limiting
- Distributed locks
- Real-time data structures

---

## Redis - Cache & Session Store

In-memory data store for caching, sessions, and real-time data.

---

## Overview

**Redis** provides:

- High-performance caching
- Session storage
- Rate limiting
- Real-time data structures
- Pub/sub messaging
- Distributed locks

---

## Ports

- **6379** - Redis server

---

## Configuration

See `.env.example` for configuration options.

### Key Features

- **In-Memory** - Sub-millisecond access
- **Persistence** - Optional RDB/AOF persistence
- **Data Structures** - Strings, hashes, lists, sets, sorted sets
- **TTL** - Automatic expiration
- **Atomic Operations** - Race-condition free updates

---

## Environment Variables

See `.env.example` for configuration options.

**Key Variables:**

```bash
REDIS_PASSWORD=<strong-password>  # CHANGE THIS!
REDIS_MAXMEMORY=256mb
REDIS_MAXMEMORY_POLICY=allkeys-lru
```

---

## Usage

### Start Service

```bash
make up-stack
# or
docker compose -f docker-compose.yml -f docker-compose.stack.yml up redis
```

### Check Health

```bash
make health-redis
# or
docker compose exec redis redis-cli ping
```

### Connect to Redis

```bash
# Interactive CLI
docker compose exec redis redis-cli

# With authentication (if password set)
docker compose exec redis redis-cli -a <password>
```

---

## Common Use Cases

### 1. Caching

```bash
# Store cache entry with TTL
SET user:123:profile '{"name":"John"}' EX 3600

# Get cached value
GET user:123:profile

# Check TTL
TTL user:123:profile
```

### 2. Session Storage

```bash
# Store session
SETEX session:abc123 1800 '{"user_id":123,"role":"admin"}'

# Get session
GET session:abc123

# Delete session (logout)
DEL session:abc123
```

### 3. Rate Limiting

```bash
# Increment request counter
INCR rate:user:123:requests

# Set expiration on first request
EXPIRE rate:user:123:requests 60

# Check if rate limited
GET rate:user:123:requests
# If > threshold, reject request
```

### 4. Distributed Locks

```bash
# Acquire lock
SET lock:resource:123 "worker-1" NX EX 10

# Release lock
DEL lock:resource:123
```

### 5. Leaderboards (Sorted Sets)

```bash
# Add scores
ZADD leaderboard 100 "player1"
ZADD leaderboard 150 "player2"
ZADD leaderboard 120 "player3"

# Get top 10
ZREVRANGE leaderboard 0 9 WITHSCORES
```

---

## Client Libraries

Redis has clients for all major languages:

- **Go:** `github.com/redis/go-redis`
- **Python:** `redis-py`
- **JavaScript:** `ioredis`, `node-redis`
- **Java:** `Jedis`, `Lettuce`

### Example (Go)

```go
import "github.com/redis/go-redis/v9"

client := redis.NewClient(&redis.Options{
    Addr:     "localhost:6379",
    Password: "", // if set
    DB:       0,
})

// Set value
client.Set(ctx, "key", "value", time.Hour)

// Get value
val, err := client.Get(ctx, "key").Result()

// Increment
client.Incr(ctx, "counter")
```

---

## Data Persistence

### Persistence Options

#### RDB (Point-in-time snapshots)

```bash
# Save snapshot now
SAVE

# Configure automatic snapshots
# In redis.conf:
save 900 1     # After 900s if 1 key changed
save 300 10    # After 300s if 10 keys changed
save 60 10000  # After 60s if 10000 keys changed
```

#### AOF (Append-only file)

```bash
# Enable AOF in redis.conf
appendonly yes
appendfsync everysec  # Sync every second (balanced)
```

---

## Memory Management

### Eviction Policies

```bash
# Set in redis.conf or via CONFIG SET
maxmemory 256mb
maxmemory-policy allkeys-lru

# Policies:
# allkeys-lru    - Evict least recently used keys
# volatile-lru   - Evict LRU keys with TTL
# allkeys-random - Evict random keys
# volatile-ttl   - Evict keys with shortest TTL
# noeviction     - Return errors when memory full
```

### Check Memory Usage

```bash
# Memory stats
INFO memory

# See largest keys
redis-cli --bigkeys
```

---

## Monitoring

### Key Metrics

- Memory usage
- Hit rate (cache effectiveness)
- Connected clients
- Operations per second
- Slow commands

### Check Metrics

```bash
# General info
INFO

# Stats
INFO stats

# Memory
INFO memory

# Clients
CLIENT LIST

# Monitor commands in real-time
MONITOR
```

---

## Performance Tips

1. **Use Pipelining** - Batch multiple commands
2. **Use Connection Pooling** - Reuse connections
3. **Set Appropriate TTLs** - Prevent memory bloat
4. **Avoid Blocking Commands** - KEYS, SMEMBERS on large sets
5. **Use Redis Cluster** - For horizontal scaling

---

## Production Notes

1. **Set Password** - Always use authentication
2. **Resource Limits** - Set maxmemory
3. **Enable Persistence** - RDB + AOF for durability
4. **Monitoring** - Track hit rate, memory, latency
5. **Backup** - Regular RDB snapshots
6. **Redis Sentinel** - For automatic failover (HA)
7. **Redis Cluster** - For horizontal scaling

---

## Backup & Recovery

### Backup

```bash
# Create snapshot
docker compose exec redis redis-cli SAVE

# Copy RDB file
docker compose cp redis:/data/dump.rdb ./backup/

# Or use BGSAVE for non-blocking backup
docker compose exec redis redis-cli BGSAVE
```

### Restore

```bash
# Stop Redis
docker compose stop redis

# Copy RDB file back
docker compose cp ./backup/dump.rdb redis:/data/

# Start Redis
docker compose start redis
```

---

## Alternatives

The cache is **swappable**. Alternative implementations:

- **Valkey** - Redis fork (OSS)
- **DragonflyDB** - Modern Redis alternative
- **KeyDB** - Multi-threaded Redis fork
- **Memcached** - Simpler, cache-only

---
