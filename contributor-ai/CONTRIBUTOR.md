# WRI Design System — AI Contributor Context

You are working **inside the library itself** (`@worldresources/wri-design-systems`), not in a consumer app.
Components here are published as `@worldresources/wri-design-systems` and used by WRI products.

> If your editor supports per-file instructions (e.g. VS Code Copilot), detailed rules for
> `src/components/**` live in `.github/instructions/component.instructions.md` and
> auto-attach when you edit component files. Read that file before implementing any component.

## Stack

| Layer      | Technology                        |
| ---------- | --------------------------------- |
| Components | React + TypeScript                |
| Base UI    | Chakra UI v3 (`@chakra-ui/react`) |
| CSS-in-JS  | Emotion (`@emotion/react`)        |
| Stories    | Storybook                         |
| Build      | Rollup                            |
| Dev app    | Create React App (`yarn start`)   |

## Commands

| Task                   | Command                                |
| ---------------------- | -------------------------------------- |
| Scaffold new component | `yarn new-component <Name> <Category>` |
| Dev app                | `yarn start`                           |
| Storybook              | `yarn storybook`                       |
| Build                  | `yarn build`                           |

## MCP Reality Check

This repo can write `.vscode/mcp.json` and `.cursor/mcp.json`, but those files only configure editors that support those formats.

- If you are using VS Code / Copilot, start the MCP servers from the editor session
- If you are using Cursor, the Cursor MCP config must be the one being read
- If you are using a different agent runtime, it may need separate MCP registration

## Component Rules — Read Before Implementing Anything

**Before writing a single line of JSX, read `.github/instructions/component.instructions.md`.**
It contains the mandatory pre-implementation checklist, hierarchy rules, scaffold steps, file conventions, and forbidden patterns.

## Design Tokens — Source of Truth

`src/lib/theme.ts` is the only source. Import from it, never from the package:

```ts
// ✅ correct
import { getThemedColor, getThemedSpacing } from '../../../../lib/theme'

// ❌ forbidden
import { getThemedColor } from '@worldresources/wri-design-systems'
```

| Function                        | Example tokens                                                           |
| ------------------------------- | ------------------------------------------------------------------------ |
| `getThemedColor(variant, step)` | `neutral 100–900`, `primary`, `secondary`, `success`, `warning`, `error` |
| `getThemedSpacing(token)`       | `0 50 100 200 300 400 500 600 700 800 900 1000…`                         |
| `getThemedRadius(token)`        | `100 200 300 400 500 600 700 800 900`                                    |
| `getThemedBorderWidth(token)`   | `100 200 300 400`                                                        |
| `getThemedFontSize(token)`      | `200 300 400 500 600 700 800 900 1000 1100`                              |
| `getThemedLineHeight(token)`    | `300 400 500 600 700 800 900 1000 1100 1200`                             |

Full token tables: `agents/spacing.md`, `agents/radius.md`, `agents/border-width.md`, `agents/typography.md`.
