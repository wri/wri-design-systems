# AI Agent Instructions — WRI Design System (Contributor)

This file provides context for AI coding agents working **inside this repository** — i.e., building and maintaining the WRI Design System library itself.

> **You are working on the library, not a consumer app.**
> Components here are published as `@worldresources/wri-design-systems` and used by WRI products.
> A separate consumer-facing instructions file lives at `agents/AGENTS.md` and is distributed via `npx ds setup-ai`.

---

## Stack

| Layer      | Technology                        |
| ---------- | --------------------------------- |
| Components | React + TypeScript                |
| Base UI    | Chakra UI v3 (`@chakra-ui/react`) |
| CSS-in-JS  | Emotion (`@emotion/react`)        |
| Stories    | Storybook                         |
| Build      | Rollup (`rollup.config.mjs`)      |
| Dev app    | Create React App (`yarn start`)   |

---

## Internal Component Hierarchy — Never Skip a Level

When building a new component or feature **in this repo**, follow this strict priority order:

```
1. Existing WRI DS components in src/components/  — always check first
2. @chakra-ui/react                               — fallback for primitives not yet wrapped
3. Native HTML / fully custom code               — last resort; add [CUSTOM COMPONENT] marker
```

Before writing any JSX, scan `src/components/index.ts` or the relevant category folder to check if a WRI DS building block already exists. Using raw `<button>` when `Button` is exported from this library, or a raw Chakra primitive when a WRI DS wrapper already exists, breaks visual consistency.

```tsx
// ❌ Wrong — raw Chakra button when WRI DS Button already exists in src/components
import { Button as ChakraButton } from '@chakra-ui/react'

// ✅ Correct — reuse the WRI DS wrapper
import Button from '../Actions/Button'
```

---

## Creating a New Component — Use the Script

**Always scaffold** a new component with the generator before writing any code:

```bash
yarn new-component <ComponentName> <Category/SubCategory>

# Examples:
yarn new-component RichTextEditorToolbar Forms/Actions
yarn new-component AlertCard Status
yarn new-component ScaleBar Geospatial
```

Valid categories: `Forms/Actions`, `Forms/Controls`, `Forms/Inputs`, `Forms/Tag`, `Forms/FormContainer`, `Geospatial`, `DataDisplay`, `Containers`, `Navigation`, `Status`.

The script generates all required files and wires them up automatically:

| File generated                                        | Purpose                  |
| ----------------------------------------------------- | ------------------------ |
| `src/components/<Category>/<Name>/index.tsx`          | Component implementation |
| `src/components/<Category>/<Name>/types.ts`           | TypeScript prop types    |
| `src/components/<Category>/<Name>/styled.ts`          | Emotion CSS styles       |
| `src/components/<Category>/<Name>/<Name>.stories.tsx` | Storybook story          |
| `src/components/<Category>/<Name>/<Name>Demo.tsx`     | Demo for the dev app     |
| `src/components/<Category>/<Name>/README.md`          | Component documentation  |

It also updates:

- `src/components/index.ts` — adds the public export
- `src/components/UI/DemoIndex.tsx` — adds the component to the index list
- `src/App.tsx` — adds the demo to the dev app

### After Running the Script

1. Implement the component in `index.tsx` — replace the placeholder.
2. Define TypeScript types in `types.ts`.
3. Add Emotion styles in `styled.ts` using `getThemedColor` (see Color Tokens below).
4. Export any additional types from `src/components/index.ts` if needed.
5. Verify the Storybook story renders: `yarn storybook`.
6. Verify the dev app demo renders: `yarn start`.

---

## File & Code Conventions

All component files follow these patterns. Look at an existing component in the same category for the exact relative import depth.

### index.tsx

```tsx
/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import { css } from '@emotion/react'
import { ComponentName } from './types'
import { componentStyles } from './styled'

const ComponentName = ({ ...props }: ComponentNameProps) => {
  return <div css={componentStyles}>{/* implementation */}</div>
}

export default ComponentName
```

### styled.ts

```ts
import { css } from '@emotion/react'
import { getThemedColor } from '../../../../lib/theme' // adjust depth as needed

export const componentStyles = css`
  color: ${getThemedColor('neutral', 800)};
  background-color: ${getThemedColor('neutral', 100)};
`
```

The number of `../` in the `getThemedColor` import depends on the component's depth from `src/`. Check a neighbouring component in the same category for the correct relative path.

---

## Icons

Custom icons live in `src/components/icons/`. Each icon is a React component wrapping an SVG inside Chakra's `<Icon>`.

Pattern:

```tsx
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
import { Icon, IconProps } from '@chakra-ui/react'

export const MyIcon = (props: IconProps) => (
  <Icon {...props}>
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='...' fill='currentColor' />
    </svg>
  </Icon>
)
```

After creating the icon file, export it from `src/components/icons/index.ts`.

---

## MCP Servers

Three MCP servers are relevant when working in this repo.

### Figma MCP

Use this when implementing a component from a Figma design. The MCP returns a screenshot and reference code — treat it as a **visual spec only**. Always adapt the output to this repo's conventions (WRI DS building blocks, Emotion CSS, relative `getThemedColor`, etc.). Never paste Figma MCP output directly.

```json
{
  "mcpServers": {
    "figma": {
      "url": "https://mcp.figma.com/mcp",
      "type": "http"
    }
  }
}
```

### Storybook MCP

Exposes WRI DS component stories and props from the hosted Storybook. Use it to confirm what WRI DS building blocks already exist before writing new ones.

```json
{
  "mcpServers": {
    "wri-storybook": {
      "command": "npx",
      "args": ["-y", "storybook-mcp@latest"],
      "env": {
        "STORYBOOK_URL": "https://wri.github.io/wri-design-systems/index.json"
      }
    }
  }
}
```

### Chakra UI MCP

Exposes Chakra UI v3 props and design tokens. Use it to verify Chakra component APIs before using them as building blocks.

```json
{
  "mcpServers": {
    "chakra-ui": {
      "command": "npx",
      "args": ["-y", "@chakra-ui/react-mcp"]
    }
  }
}
```

---

## Design Tokens

`src/lib/theme.ts` is the **single source of truth for all color tokens** in this repo. Read it before using any color.

### `getThemedColor`

Import from the local lib — **not from the package** (the package is the built output, not the source):

```ts
// ✅ Correct — relative import from the local source
import { getThemedColor } from '../../../../lib/theme' // adjust depth

// ❌ Wrong — never import from the package when working in this repo
import { getThemedColor } from '@worldresources/wri-design-systems'
```

Usage:

```ts
getThemedColor('primary', 500) // → CSS color string
getThemedColor('neutral', 100)
getThemedColor('success', 300)
```

Valid variants: `neutral`, `primary`, `secondary`, `success`, `warning`, `error`, `accessible`.
Valid steps: `100, 200, 300, 400, 500, 600, 700, 800, 900` (and named string keys for `accessible`).
Only use combinations confirmed in `src/lib/theme.ts`.

---

## What NOT to Do

```tsx
// ❌ Do not use raw HTML when a WRI DS component already exists in this repo
<button onClick={...}>Save</button>  // → use <Button> from src/components

// ❌ Do not use a raw Chakra primitive when WRI DS already wraps it
import { Button } from '@chakra-ui/react'  // → use src/components/Forms/Actions/Button

// ❌ Do not hardcode hex or pixel values when a token exists
<Box bg="#2C7D6E" />          // → use getThemedColor(...)
<Text fontSize="14px" />      // → use Chakra size tokens

// ❌ Do not import getThemedColor from the package in this repo
import { getThemedColor } from '@worldresources/wri-design-systems'  // → use relative lib path

// ❌ Do not create component files from scratch — always run yarn new-component first

// ❌ Do not paste Figma MCP output directly — adapt to repo conventions

// ❌ Do not use Chakra v2 API — v3 has breaking changes (verify props via Chakra MCP)

// ❌ Do not create custom code without the searchable marker
const MyWidget = () => <div style={{ color: 'red' }}>...</div>
// → add // [CUSTOM COMPONENT] — <reason> above the definition
```

---

## Quick Reference

| Question                                        | Where to look                                                               |
| ----------------------------------------------- | --------------------------------------------------------------------------- |
| Does a WRI DS building block already exist?     | `src/components/index.ts` or Storybook MCP                                  |
| Detailed props for an existing WRI DS component | `src/components/<Category>/<Name>/README.md`                                |
| What props does a Chakra component accept?      | Chakra MCP → `get_component_props`                                          |
| What color tokens are available?                | `src/lib/theme.ts` — source of truth                                        |
| How do I use a color in a style?                | `getThemedColor('scale', step)` from relative `../../../../lib/theme`       |
| How do I scaffold a new component?              | `yarn new-component <Name> <Category>`                                      |
| Where are all custom (non-DS) components?       | "Find in Files" → `[CUSTOM COMPONENT]`                                      |
| How do I verify the dev app?                    | `yarn start`                                                                |
| How do I verify Storybook?                      | `yarn storybook`                                                            |
| How do I build the library?                     | `yarn build`                                                                |
| How do I distribute consumer AI context?        | `node agents/setup-ai.mjs <target-path>` or `npx ds setup-ai <target-path>` |
