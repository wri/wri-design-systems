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

Do not assume that the presence of `.vscode/mcp.json` alone means every AI session can already query Figma.

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

Accessibility is not optional. Every component must be accessible by default. Full rules and per-component type guides live in `.github/instructions/component.instructions.md`. Summary:

### Core Principles

1. **Semantic HTML**: Use the right element for the job (`<nav>`, `<main>`, `<section>`, `<fieldset>`, `<legend>`, `<caption>`, etc.). Generic `<div>` conveys no role to assistive technologies.
2. **Keyboard Navigation**: Every interactive element must be focusable and operable by keyboard. `Enter`/`Space` activate; `Escape` dismisses modals, menus, and popovers.
3. **ARIA Attributes**: Define `aria-*` props in `types.ts` and forward them to the DOM. Never hardcode aria values that should be caller-controlled.
4. **Focus Management**: Dialogs and drawers must trap focus while open and return focus to the trigger on close.
5. **Color is not the only signal**: Error states, required fields, etc. must have a text indicator or ARIA attribute in addition to any color change.

### Per-Component Quick Reference

| Component type | Required a11y |
| --- | --- |
| `IconButton`, `CloseButton` (icon-only) | `aria-label` required; `aria-hidden="true"` on the icon |
| Toggle buttons | `aria-pressed={isPressed}` |
| Disclosure triggers | `aria-expanded={isOpen}` + `aria-controls="<id>"` |
| `TextInput`, `Select`, `Checkbox`, `Radio`, `Switch` | Visible label or `aria-label`/`aria-labelledby`; `aria-required`; `aria-invalid` + `aria-describedby` for errors |
| Grouped controls | `<fieldset>` + `<legend>` |
| `Modal`, `Panel`, `Sheet` | `role="dialog"`, `aria-modal="true"`, `aria-labelledby` or `aria-label`; focus trap; focus return |
| `Navbar`, `Footer`, nav regions | `<nav aria-label="...">`, `aria-current="page"` |
| `TabBar`, `MobileTabBar`, `NavigationRail` | `role="tablist"`, `role="tab"`, `aria-selected`, `role="tabpanel"` |
| `Table` | `<thead>`, `<th scope="col">`, `<caption>` or `aria-label`; `aria-sort` for sortable columns |
| `AlertBanner`, `Toast`, `InlineMessage` | `role="alert"` + `aria-live="assertive"` (critical) or `role="status"` + `aria-live="polite"` (informational) |
| Decorative icons | `aria-hidden="true"` |
| Semantic standalone icons | `role="img"` + `aria-label` |

### What NOT to Do

```tsx
// ❌ Icon-only button with no accessible name
<button onClick={fn}><CloseIcon /></button>

// ✅
<IconButton icon={<CloseIcon aria-hidden="true" />} aria-label="Close" onClick={fn} />

// ❌ Form field with no label
<TextInput placeholder="Email" />

// ✅
<TextInput label="Email address" aria-required={true} />

// ❌ Modal missing role and focus handling
<div css={overlayStyles}>{children}</div>

// ✅ Use WRI DS Modal — it handles role, aria-modal, and focus trap
<Modal isOpen={isOpen} onClose={onClose} title="Confirm action">{children}</Modal>

// ❌ Navigation with no landmark label
<nav>{links}</nav>

// ✅
<nav aria-label="Main navigation">{links}</nav>
```

