---
sidebar_position: 3
title: "Customization"
---

# CLI Customization

The A.R.C. CLI features a rich visual experience with customizable themes and profile systems.

## Themes

Themes control the visual appearance of the CLI — colors, gradients, and animations.

### Available Themes

| Theme | Description |
|-------|-------------|
| `cyan-purple` | Default gradient theme |
| `rainbow` | Full spectrum color cycling |
| `fire` | Warm red-orange-yellow gradient |
| `ocean` | Cool blue-teal gradient |
| `matrix` | Green-on-black terminal aesthetic |
| `character-rainbow` | Per-character rainbow coloring |

### Theme Commands

```bash
# List all available themes
arc theme list

# Set a theme
arc theme set rainbow

# Preview the current theme
arc theme show
```

Themes are persisted in your user preferences and apply across all sessions.

## Profiles

Profiles customize the naming conventions used for workspace tiers. Instead of generic tier names, A.R.C. uses themed naming systems.

### Available Profiles

| Profile | Tier Names |
|---------|-----------|
| `saiyan` | SuperSaiyan, SuperSaiyanBlue, UltraInstinct (default) |
| `jedi` | Padawan, Knight, Master |
| `shinobi` | Genin, Chunin, Hokage |
| `pokemon` | Starter, Evolved, Legendary |
| `pirate` | Crew, Captain, Emperor |
| `triforce` | Courage, Wisdom, Power |
| `crystal` | Quartz, Emerald, Diamond |
| `bending` | Student, Master, Avatar |
| `horcrux` | Muggle, Wizard, Horcrux |

### Setting a Profile

Profiles are selected during workspace initialization. The tier names in `arc.yaml` and CLI output will use the selected profile's naming convention.

## Shell Completion

Set up shell completion for faster command entry:

```bash
# Interactive setup (recommended)
arc completion --interactive

# Manual setup for specific shells
arc completion bash >> ~/.bashrc
arc completion zsh >> ~/.zshrc
arc completion fish > ~/.config/fish/completions/arc.fish
```

After setup, press `Tab` to autocomplete commands and flags.
