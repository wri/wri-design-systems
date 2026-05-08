---
description: 'Use when importing or using @worldresources/wri-design-systems components, tokens, or utilities. Covers component hierarchy, API verification, design tokens, and forbidden patterns.'
applyTo: '**/*.tsx'
---

# WRI Design System — Usage Rules

## Pre-Implementation Checklist (MANDATORY — run before writing any JSX)

1. **Query Storybook MCP first** — call `mcp_wri-storybook_getComponentList` then `mcp_wri-storybook_getComponentsProps` to confirm the component exists and its exact prop API. Never guess props.
2. **WRI DS first** — if it exists in the library, use it. Never use the raw Chakra equivalent when WRI DS already wraps it.
3. **No style overrides** — do not use `sx`, `css`, `style`, or `className` to override WRI DS component styles.
4. **Tokens only** — all values via `getThemed*` from `@worldresources/wri-design-systems`. No hardcoded `#hex`, `rem`, `px`.
5. **No Chakra v2 API** — verify props via Chakra MCP before using any Chakra component.

## Component Hierarchy (never skip a level)

```
1. @worldresources/wri-design-systems  ← always check first
2. @chakra-ui/react                    ← fallback if no WRI DS equivalent exists
3. Custom code                         ← last resort; add // [CUSTOM COMPONENT] — <reason>
```

```tsx
// ❌ Raw Chakra when WRI DS already wraps it
import { Button } from '@chakra-ui/react'

// ✅ WRI DS component
import { Button } from '@worldresources/wri-design-systems'
;<Button variant='primary'>Save</Button>
```

Custom components that have no WRI DS or Chakra equivalent must be marked:

```tsx
// [CUSTOM COMPONENT] — no WRI DS or Chakra equivalent for X
const MyThing = () => { ... }
```

## API Verification — Never Guess

Confirm props, variants, and valid values from a trusted source before writing code:

1. **Storybook MCP** → `mcp_wri-storybook_getComponentsProps` (preferred for WRI DS)
2. **Component README** → GitHub `src/components/<Category>/<Name>/README.md`
3. **Chakra MCP** → `mcp_chakra-ui_get_component_props` (for Chakra-only components)

If you cannot confirm an API, ask the user rather than inventing props.

## Design Tokens

```ts
import {
  getThemedColor,
  getThemedSpacing,
  getThemedRadius,
  getThemedBorderWidth,
  getThemedFontSize,
  getThemedLineHeight,
} from '@worldresources/wri-design-systems'
```

| Function                        | Tokens                                                                                   |
| ------------------------------- | ---------------------------------------------------------------------------------------- |
| `getThemedColor(variant, step)` | variants: `neutral primary secondary success warning error accessible`; steps: `100–900` |
| `getThemedSpacing(token)`       | `0 50 100 200 300 400 500 600 700 800 900 1000 1100 1200 1400 1600 2000 2400 2800`       |
| `getThemedRadius(token)`        | `100 200 300 400 500 600 700 800 900`                                                    |
| `getThemedBorderWidth(token)`   | `100 200 300 400`                                                                        |
| `getThemedFontSize(token)`      | `200 300 400 500 600 700 800 900 1000 1100`                                              |
| `getThemedLineHeight(token)`    | `300 400 500 600 700 800 900 1000 1100 1200`                                             |

```tsx
// ❌ Hardcoded value
<Box p="1rem" bg="#2C7D6E" borderRadius="8px" />

// ✅ Design tokens
<Box
  p={getThemedSpacing(400)}
  bg={getThemedColor('primary', 500)}
  borderRadius={getThemedRadius(300)}
/>
```

## Forbidden Patterns

| Pattern                                                              | Correct alternative                                           |
| -------------------------------------------------------------------- | ------------------------------------------------------------- |
| `import { Button } from '@chakra-ui/react'` when WRI DS has `Button` | `import { Button } from '@worldresources/wri-design-systems'` |
| `<Button sx={{ ... }}>` overriding WRI DS styles                     | Remove style override                                         |
| Hardcoded `#hex`, `rem`, `px`                                        | `getThemed*` tokens                                           |
| Raw token strings: `<Box bg="primary.500" />`                        | `getThemedColor('primary', 500)`                              |
| Inventing prop names without checking MCP                            | Query Storybook MCP first                                     |
| Chakra v2 API (`colorScheme`, `variant` on v2 components)            | Verify via Chakra MCP                                         |
