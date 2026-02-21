---
sidebar_position: 1
title: "Overview"
---

# CLI Reference

The A.R.C. CLI is a zero-dependency Go binary for managing your entire AI agent platform. It handles scaffolding, configuration, service orchestration, and customization.

## Command Tree

```
arc
├── workspace                    # Workspace management
│   ├── init [path]              # Initialize a new workspace
│   ├── run                      # Generate configs and launch platform
│   ├── info                     # Display workspace state
│   └── history                  # Show operation history
├── theme                        # CLI visual customization
│   ├── list                     # List available themes
│   ├── set <name>               # Set active theme
│   └── show                     # Preview current theme
├── info                         # Display system information
├── completion                   # Shell completion setup
│   └── --interactive            # Interactive setup wizard
└── --help                       # Show help
```

## Global Flags

| Flag | Description |
|------|-------------|
| `--version` | Display CLI version |
| `--no-color` | Disable colored output |
| `--help` | Show help for any command |

## Quick Examples

```bash
# Initialize a new workspace
arc workspace init ./my-project

# Launch the platform
arc workspace run

# Launch in background
arc workspace run --detached

# Check status
arc workspace info

# Set a visual theme
arc theme set rainbow
```

---

See [Workspace Commands](./workspace-commands.md) and [Customization](./customization.md) for detailed reference.
