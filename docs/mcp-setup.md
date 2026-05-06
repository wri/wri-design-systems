# Using MCP Servers with the WRI Design System

This guide explains how to set up and use the MCP (Model Context Protocol) servers for the WRI Design System in your AI coding tools.

MCP servers give your AI agent (GitHub Copilot, Cursor, Claude, etc.) live access to WRI DS component APIs and Chakra UI docs — so it generates correct code instead of guessing.

---

## Quick Setup

Run this once in your project root:

```bash
npx ds setup-ai
```

This detects your installed IDE and writes the correct MCP configuration automatically. It also installs the AI instruction file (`AGENTS.md` content) for your agent.

That's it — no manual config needed.

---

## What Gets Installed

### VS Code / GitHub Copilot → `.vscode/mcp.json`

```json
{
  "servers": {
    "wri-storybook": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "storybook-mcp@latest"],
      "env": {
        "STORYBOOK_URL": "https://wri.github.io/wri-design-systems/index.json"
      }
    },
    "chakra-ui": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@chakra-ui/react-mcp"]
    }
  }
}
```

### Cursor → `.cursor/mcp.json`

```json
{
  "mcpServers": {
    "wri-storybook": {
      "command": "npx",
      "args": ["-y", "storybook-mcp@latest"],
      "env": {
        "STORYBOOK_URL": "https://wri.github.io/wri-design-systems/index.json"
      }
    },
    "chakra-ui": {
      "command": "npx",
      "args": ["-y", "@chakra-ui/react-mcp"]
    }
  }
}
```

> Both files are added to `.gitignore` automatically — they are local to your machine and should not be committed.

---

## Activating MCP Servers in VS Code

After the config file is created, VS Code does not start the servers automatically. You need to activate them manually:

Open `.vscode/mcp.json`

You will see a Start button above each server entry — click it for each server

Alternatively, open the Command Palette `(Cmd+Shift+P / Ctrl+Shift+P)` and run MCP: `List Servers` to see their status and start them from there

You only need to do this once per session. After restarting VS Code, repeat this step if the servers show as inactive.

**Tip:** If the Start button does not appear, make sure the GitHub Copilot extension is up to date and restart VS Code.

---

## Manual Setup (if auto-detect fails)

If `npx ds setup-ai` does not detect your IDE, create the config file manually using the snippets above for your IDE.

Then verify by asking your AI agent:

> "List all WRI Design System components available in Storybook"

A working MCP returns the live component list. If the agent guesses instead of querying, the MCP is not active.

---

## What Each Server Does

### Storybook MCP (`wri-storybook`)

Queries the live WRI DS Storybook hosted at `https://wri.github.io/wri-design-systems/`.

**Use it to:**

- Check which WRI DS components exist before writing code
- Get the correct prop names, variants, and valid values for any component
- See concrete usage examples from the story `args`

**Example queries for your agent:**

```
"What variants does the Button component support?"
"Show me the props for the Select component"
"What WRI DS components are available for navigation?"
"How do I use IconButton with a tooltip?"
```

**What it returns:**

- Component list organized by category (`Forms/Actions`, `Navigation`, etc.)
- Story names and their concrete `args` (prop values)
- TypeScript prop types inferred from the component
- `argTypes` metadata where defined (descriptions, control types)
- Full autodocs pages for components with `tags: ['autodocs']`

### Chakra UI MCP (`chakra-ui`)

Queries the Chakra UI v3 component registry.

**Use it when:**

- No WRI DS component exists for your use case and you need to use a Chakra primitive directly
- You need to verify a Chakra prop name or type (Chakra v3 has breaking changes from v2)
- You want to check available design tokens or the theme structure

**Example queries:**

```
"What props does the Chakra Skeleton component accept?"
"Show me the Chakra v3 Grid layout props"
"What changed in Chakra v3 for the Input component?"
```

> **Important:** Always check the WRI DS Storybook MCP first. Only fall back to the Chakra MCP if no WRI DS wrapper exists for what you need.

---

## Component Hierarchy (enforced by the AI instruction file)

```
1. @worldresources/wri-design-systems  ← always check Storybook MCP first
2. @chakra-ui/react                    ← fallback; verify props via Chakra MCP
3. Custom code                         ← last resort; add [CUSTOM COMPONENT] comment
```

---

## Updating

Run the setup command again after:

- Installing a new IDE or AI extension
- Upgrading the WRI DS package (picks up any MCP config changes)

```bash
npx ds setup-ai
```

---

## Troubleshooting

### The agent is not using the MCP

1. Check that the config file exists at the correct path for your IDE (`.vscode/mcp.json` or `.cursor/mcp.json`)
2. Restart the IDE after creating the config
3. Ask explicitly: _"Using the wri-storybook MCP, list available components"_

### `npx ds setup-ai` says "command not found"

Install the package first:

```bash
npm i @worldresources/wri-design-systems
# or
yarn add @worldresources/wri-design-systems
```

### The Storybook MCP returns outdated data

The MCP queries the hosted Storybook at build time. If you have just published a new version, wait for the GitHub Pages deployment to complete (~2 minutes after the release workflow finishes).

### I want to point to a local Storybook

Change the `STORYBOOK_URL` in your MCP config to `http://localhost:6006/index.json` and run `yarn storybook` in the WRI DS repo.

---

## For Contributors (working in this repo)

Contributors use a separate setup that also includes the Figma MCP:

```bash
yarn install   # runs postinstall automatically
# or manually:
yarn setup-ai
```

This writes the same Storybook and Chakra MCP configs, plus the Figma MCP for implementing designs from Figma links.

See [contributor-ai/CONTRIBUTOR.md](../contributor-ai/CONTRIBUTOR.md) for the full contributor guide.
