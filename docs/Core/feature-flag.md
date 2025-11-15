---
sidebar_position: 5
---

# Feature Management

Feature flags and A/B testing for the A.R.C. Framework.

---

## Overview

The feature management layer provides:

- Feature flags and toggles
- Gradual rollouts
- A/B testing and experiments
- User targeting
- Kill switches for emergency rollback

---

# Unleash - Feature Flags

Feature flag management for gradual rollouts and A/B testing.

---

## Overview

**Unleash** provides:

- Feature flags and toggles
- Gradual rollouts
- A/B testing
- User targeting
- Kill switches
- Environment-based flags

---

## Ports

- **4242** - Web UI and API

---

## Configuration

See `.env.example` for configuration options.

### Key Features

- **Gradual Rollout** - Roll out features to percentage of users
- **User Targeting** - Target specific users or groups
- **Strategy-based** - Multiple activation strategies
- **Environment Support** - Separate flags per environment
- **SDKs** - Client libraries for many languages
- **Audit Trail** - Track flag changes

---

## Environment Variables

See `.env.example` for configuration options.

**Key Variables:**

```bash
UNLEASH_URL=http://unleash:4242
UNLEASH_API_TOKEN=<your-api-token>
DATABASE_URL=postgres://...  # For persistence
```

---

## Usage

### Start Service

```bash
make up-stack
# or
docker compose -f docker-compose.yml -f docker-compose.stack.yml up unleash
```

### Access Web UI

```bash
open http://localhost:4242
```

### First-Time Setup

1. Access http://localhost:4242
2. Login with default credentials (check Unleash docs)
3. Create API tokens
4. Create feature flags
5. Configure strategies

---

## Feature Flag Patterns

### 1. Kill Switch

```
Enable/disable feature instantly without deployment
Use case: Emergency rollback
```

### 2. Gradual Rollout

```
Release to 10% → 25% → 50% → 100% of users
Use case: Safe feature deployment
```

### 3. User Targeting

```
Enable for specific users or user properties
Use case: Beta testing, VIP features
```

### 4. A/B Testing

```
Split users into variants A and B
Use case: Experiment with different approaches
```

### 5. Environment Flags

```
Different flag states per environment
Use case: Test in staging before production
```

---

## Client Libraries

### Go

```go
import "github.com/Unleash/unleash-client-go/v4"

unleash.Initialize(
    unleash.WithUrl("http://localhost:4242/api"),
    unleash.WithAppName("my-service"),
    unleash.WithInstanceId("instance-1"),
)

if unleash.IsEnabled("new-feature") {
    // New feature code
} else {
    // Old code
}

// With context
ctx := context.Context{
    UserId: "user-123",
    Properties: map[string]string{
        "plan": "premium",
    },
}
if unleash.IsEnabled("premium-feature", unleash.WithContext(ctx)) {
    // Premium feature
}
```

### Python

```python
from UnleashClient import UnleashClient

client = UnleashClient(
    url="http://localhost:4242/api",
    app_name="my-service",
    instance_id="instance-1"
)

client.initialize_client()

if client.is_enabled("new-feature"):
    # New feature code
else:
    # Old code

# With context
context = {
    "userId": "user-123",
    "properties": {"plan": "premium"}
}
if client.is_enabled("premium-feature", context):
    # Premium feature
```

### JavaScript/Node

```javascript
const { initialize } = require('unleash-client');

const unleash = initialize({
  url: 'http://localhost:4242/api',
  appName: 'my-service',
  instanceId: 'instance-1',
});

unleash.on('ready', () => {
  if (unleash.isEnabled('new-feature')) {
    // New feature code
  }
});

// With context
const context = {
  userId: 'user-123',
  properties: { plan: 'premium' },
};
if (unleash.isEnabled('premium-feature', context)) {
  // Premium feature
}
```

---

## Activation Strategies

### Standard Strategy

On/off for all users in environment

### Flexible Rollout

Percentage-based gradual rollout

```
0% → 10% → 25% → 50% → 100%
```

### User IDs

Target specific user IDs

```
userIds: user-1, user-2, user-3
```

### Remote Address (IP)

Target specific IP addresses or ranges

### Custom Strategy

Define your own strategy logic

---

## Best Practices

### 1. Naming Convention

```
Format: domain-feature-action

Examples:
✅ agent-reasoning-enable-gpt4
✅ payment-checkout-show-paypal
✅ ui-dashboard-display-analytics
```

### 2. Strategy Selection

- **Kill Switch** - Use standard strategy
- **Gradual Rollout** - Use flexible rollout
- **Beta Testing** - Use user IDs or properties
- **Regional** - Use remote address or custom strategy

### 3. Flag Lifecycle

```
1. Create flag (off in all environments)
2. Enable in development
3. Test thoroughly
4. Enable in staging
5. Gradual rollout in production (10% → 100%)
6. Remove flag after stabilization
```

### 4. Clean Up Old Flags

Remove flags after:

- Feature is 100% rolled out
- Flag has been stable for 1-2 weeks
- Update code to remove flag checks

---

## Monitoring

### Key Metrics

- Flag evaluation count
- Variant distribution
- Toggle state changes
- API response times

### Metrics API

```bash
# Get all toggles
curl http://localhost:4242/api/admin/features

# Get specific toggle
curl http://localhost:4242/api/admin/features/my-feature

# Get metrics
curl http://localhost:4242/api/admin/metrics/features/my-feature
```

---

## Production Notes

1. **Persistence** - Use external Postgres for flag storage
2. **High Availability** - Deploy multiple Unleash instances
3. **Client Caching** - SDKs cache flags locally
4. **API Tokens** - Use separate tokens per environment
5. **Audit Trail** - Monitor who changes flags
6. **Documentation** - Document each flag's purpose
7. **Cleanup** - Remove obsolete flags regularly

---

## Integration with Observability

### Send Flag Evaluations to Telemetry

```go
// Add custom attribute to spans
if unleash.IsEnabled("new-feature") {
    span.SetAttribute("feature.new-feature", true)
}

// Log flag evaluation
logger.Info("feature evaluated",
    "feature", "new-feature",
    "enabled", unleash.IsEnabled("new-feature"),
    "user", userId)
```

---

## Troubleshooting

### Flag Not Updating

1. Check client cache refresh interval (default: 15s)
2. Verify API token has correct permissions
3. Check network connectivity to Unleash server
4. Review Unleash logs for errors

### Inconsistent Flag States

1. Verify environment configuration
2. Check strategy configuration
3. Review context being sent (userId, properties)
4. Test with Unleash playground

---

## Alternatives

If Unleash doesn't fit your needs:

- **LaunchDarkly** - SaaS, enterprise features
- **Split** - SaaS, A/B testing focused
- **Flagsmith** - Open-source, similar to Unleash
- **GrowthBook** - Open-source, experiment-focused
- **Flipt** - Lightweight, self-hosted
