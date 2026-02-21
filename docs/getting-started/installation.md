---
sidebar_position: 2
title: "Installation"
---

# Install the A.R.C. CLI

The A.R.C. CLI is a single Go binary with zero external dependencies. It works on macOS, Linux, and Windows.

## Quick Install (Recommended)

### macOS / Linux

```bash
curl -sSL https://raw.githubusercontent.com/arc-framework/arc-cli/main/install.sh | bash
```

### Windows (PowerShell as Administrator)

```powershell
irm https://raw.githubusercontent.com/arc-framework/arc-cli/main/install.ps1 | iex
```

## Manual Installation

1. Download the latest release from [GitHub Releases](https://github.com/arc-framework/arc-cli/releases/latest)
2. Extract and move to your PATH:

```bash
tar -xzf arc-cli_*.tar.gz
sudo mv arc /usr/local/bin/
```

3. Verify the installation:

```bash
arc --version
```

## Verify Installation

Run these commands to confirm everything is working:

```bash
# Check the CLI version
arc --version

# View system information
arc info

# See all available commands
arc --help
```

You should see the A.R.C. banner and version information.

## Next Steps

Now that the CLI is installed, [create your first workspace →](./quickstart.md)
