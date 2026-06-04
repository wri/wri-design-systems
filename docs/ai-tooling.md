# AI Tooling for WRI Design System

This guide explains how AI tooling is organized in the WRI Design System repo and how to set it up in your IDE.

The repo ships two related AI contexts:

- `contributor-ai/` for people working inside this repository
- `agents/` for consumers of the published package

Both layers are designed to help AI assistants use the right WRI DS components, MCP servers, and code conventions instead of guessing.

---

## 1. Two AI Context Layers

### `contributor-ai/`

Use this when you are working in the WRI Design System repo itself.

It includes:

- `CONTRIBUTOR.md` - the main contributor guide for this repo
- `setup-ai.mjs` - the postinstall/setup script that writes contributor AI files and MCP config
- `wri-component-builder.agent.md` - the custom agent for building or updating WRI DS components
- `component.instructions.md` - detailed rules for component implementation
- `icons.instructions.md` - rules for icon files under `src/components/icons/`

This layer is stricter because it assumes you are editing the library source, not consuming it.

### `agents/`

Use this when you are a consumer of `@worldresources/wri-design-systems` in another project.

It includes:

- `AGENTS.md` - the consumer-facing AI context file
- `setup-ai.mjs` - the CLI that writes IDE AI config for consumer projects
- `setup-ai.sh` - shell wrapper for the setup command
- token reference files like `spacing.md`, `radius.md`, `border-width.md`, and `typography.md`
- `wri-ds.instructions.md` - the consumer instruction file

This layer is lighter and focused on using the published package correctly.

---

## 2. Setup Command

The main setup command is:

```bash
ds setup-ai
```

Run it in the root of the project where you want AI tooling configured.

It will:

- install or update the AI instruction files for the detected IDE
- create the MCP configuration files for that IDE
- add the repo-specific `.gitignore` entries when needed

Optional: point it at a specific path.

```bash
ds setup-ai /path/to/your/project
```

---

## 3. What Gets Installed Automatically

Depending on the detected IDE, `setup-ai` writes some or all of these files and directories:

- `.cursor/rules` (Cursor agent rules)
- `.github/copilot-instructions.md` (GitHub Copilot workspace instructions)
- `.github/instructions/wri-ds.instructions.md` (detailed component instructions, if available)
- `.windsurfrules` (Windsurf agent rules)
- `.clinerules` (Cline agent rules)
- `.vscode/mcp.json` (VS Code MCP config)
- `.cursor/mcp.json` (Cursor MCP config)
- `.gemini/skills/ds-ui-creator/` (copied `ds-ui-creator` skill for Gemini/Antigravity)
- `.claude/skills/ds-ui-creator/` (copied `ds-ui-creator` skill for Claude Code)

The setup also ensures the repo `.gitignore` contains the generated AI files and MCP configs.

---

## 4. The Three MCP Servers

The setup configures three MCP servers:

| Server        | Purpose                                                                   |
| ------------- | ------------------------------------------------------------------------- |
| Figma         | Read designs, inspect frames, and turn design references into WRI DS code |
| WRI Storybook | Inspect live WRI DS component props, stories, args, and autodocs          |
| Chakra UI     | Verify Chakra v3 primitives when no WRI DS wrapper exists                 |

### Figma MCP

Use the Figma MCP when you have a Figma URL or a design selected in Figma Dev Mode.

Use it to:

- inspect the selected frame or component
- extract layout, spacing, and visual structure
- turn a design into a WRI DS implementation plan

**Figma Dev Mode tip:** when you select a design in Dev Mode, the right-side panel shows an example prompt. Copy that prompt into your agent chat to jump straight into implementation.

### WRI Storybook MCP

Use this first for anything that should come from the design system.

It helps you:

- confirm which WRI DS components already exist
- inspect component props and valid values
- see story args and usage examples
- read autodocs and `argTypes` metadata when available

### Chakra UI MCP

Use this only when WRI DS does not provide a wrapper for the UI you need.

It helps you:

- verify Chakra v3 props and patterns
- check primitive APIs before wrapping them
- avoid Chakra v2 assumptions

---

## 5. How To Start the MCP Servers

The config files are created automatically, but the servers still need to be started in the IDE.

### VS Code / GitHub Copilot

1. Open `.vscode/mcp.json`
2. Click **Start** above each server entry
3. If a server stays inactive, restart VS Code and try again

### Cursor

1. Open the MCP settings for the workspace
2. Enable the servers shown in `.cursor/mcp.json`
3. Restart Cursor if the server does not activate immediately

If the AI assistant does not appear to use MCP data, the first thing to check is whether the server is actually running in that session.

---

## 6. Manual Installation

If auto-detection fails, create the MCP files manually.

### VS Code / GitHub Copilot → `.vscode/mcp.json`

```json
{
  "servers": {
    "figma": {
      "type": "http",
      "url": "https://mcp.figma.com/mcp"
    },
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
    "figma": {
      "url": "https://mcp.figma.com/mcp",
      "type": "http"
    },
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

After creating the file, start the servers manually in your IDE.

---

## 7. Custom Agent: WRI Component Builder

The repo includes a custom agent for component work:

- `contributor-ai/wri-component-builder.agent.md`

Use it when you are implementing or modifying WRI DS components.

What it enforces:

- query Storybook MCP before coding
- query Chakra MCP only if no WRI DS component exists
- read component and icon instructions before editing
- run `yarn new-component <Name> <Category>` before creating component files
  - scaffold now includes `index.tsx`, `types.ts`, `styled.ts`, `*.stories.tsx`, `*.test.tsx`, `*Demo.tsx`, and `README.md`
- use WRI DS wrappers and design tokens instead of raw HTML and hardcoded values

This agent is the best starting point for anything inside `src/components/`.

---

## 8. Recommended Workflow

When you are implementing something new:

1. Check Storybook MCP for an existing WRI DS component
2. If needed, check Chakra MCP for a primitive to wrap
3. If the work comes from Figma, open the design and use the example prompt from Dev Mode
4. If you are adding a new WRI DS component, use the `WRI Component Builder` agent
5. Run `yarn new-component` before creating files
6. Verify the result in Storybook and fix TypeScript errors before finishing

---

## 9. Related References

- [WRI Design System README](../README.md)
- [MCP setup details](mcp-setup.md)
- [Contributor AI context](../contributor-ai/CONTRIBUTOR.md)
- [Consumer AI context](../agents/AGENTS.md)
