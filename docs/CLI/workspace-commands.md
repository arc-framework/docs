---
sidebar_position: 2
title: "Workspace Commands"
---

# Workspace Commands

Workspace commands manage the lifecycle of your A.R.C. platform — from initialization to deployment.

## `arc workspace init [path]`

Initialize a new A.R.C. workspace.

**Usage:**
```bash
arc workspace init                    # Current directory
arc workspace init ./my-project       # Specific path
arc workspace init --force            # Reinitialize existing workspace
```

**Flags:**

| Flag | Description |
|------|-------------|
| `-f, --force` | Reinitialize an existing workspace |
| `--skip-gitignore` | Don't create/update .gitignore |

**What it creates:**
```
my-project/
├── arc.yaml          # Workspace manifest
├── .env              # Environment variables
├── .gitignore        # Git ignore rules
└── .arc/
    ├── state/        # Workspace state
    ├── data/         # Persistent data
    └── generated/    # Generated configs
```

---

## `arc workspace run`

Generate infrastructure configurations and launch the platform.

**Usage:**
```bash
arc workspace run                     # Interactive mode
arc workspace run -d                  # Background (detached) mode
arc workspace run --generate-only    # Generate configs only, don't launch
```

**Flags:**

| Flag | Description |
|------|-------------|
| `-d, --detached` | Run in background |
| `--generate-only` | Generate configs without launching Docker |
| `--no-validate` | Skip Docker validation checks |

**What it does:**
1. Reads `arc.yaml` manifest
2. Resolves service dependencies
3. Generates `docker-compose.yml` in `.arc/generated/`
4. Validates Docker availability
5. Launches all configured services

---

## `arc workspace info`

Display workspace state and configuration.

**Usage:**
```bash
arc workspace info
arc workspace info --no-color
```

**Output includes:**
- Workspace root and manifest location
- Enabled features and their services
- State information (init time, last update)
- Recent operations

---

## `arc workspace history`

Show operation history for the workspace.

**Usage:**
```bash
arc workspace history                 # Full history
arc workspace history -n 10           # Last 10 operations
arc workspace history -t generate     # Only generation operations
arc workspace history -s failed       # Only failed operations
```

**Flags:**

| Flag | Description |
|------|-------------|
| `-n, --limit N` | Limit to N entries |
| `-t, --type TYPE` | Filter by type: `init`, `generate`, `run` |
| `-s, --status STATUS` | Filter by status: `success`, `failed` |
| `--no-color` | Disable colored output |
