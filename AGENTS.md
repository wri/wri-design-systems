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

Key rules (full details in the instructions file):

1. **Chakra first** — if Chakra UI v3 already has the component, wrap it. Never rebuild from scratch.
2. **WRI DS wrappers first** — check `src/components/index.ts`. Use existing `Button`, `IconButton`, `Select`, etc. Never use raw `<button>`, `<input>`, `<select>` when a WRI DS wrapper exists.
3. **Icons in `src/components/icons/`** — never define SVG inline in a component file.
4. **Scaffold with the script** — `yarn new-component <Name> <Category>` before writing any file.
5. **Design tokens only** — all values via `getThemed*` from relative `lib/theme`. No hardcoded `#hex`, `rem`, `px`.
6. **Accessibility first** — component logic must include support for `aria-*` props, explicit semantic tags, and keyboard focus states.

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

## Accessibility — Mandatory for Every Component

Accessibility is not optional. Every component must be accessible by default.

Full rules, per-component type guides, and BAD vs GOOD examples live in `contributor-ai/a11y.instructions.md` — auto-attached by VS Code Copilot whenever you edit `src/components/**`.

Core: define `aria-*` props in `types.ts`, forward them to the DOM, never convey state through color alone, and verify in every story/demo.

## Internationalization (i18n) — Optional

Components ship English defaults — no i18n setup is required for English-only consumers. If a component contains internal strings a consumer might need to translate, expose them via a `labels` prop backed by `useLabels()`. Full procedure in `docs/i18n/README.md` and `contributor-ai/component.instructions.md`.
