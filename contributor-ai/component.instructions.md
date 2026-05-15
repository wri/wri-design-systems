---
description: 'Use when creating, editing, or reviewing any WRI DS component. Covers pre-implementation checklist, component hierarchy, scaffold script, file conventions, design tokens, and forbidden patterns.'
applyTo: 'src/components/**'
---

# WRI DS — Component Rules

## Pre-Implementation Checklist (MANDATORY — run in order before writing any JSX)

1. **Check WRI DS building blocks first** — read `src/components/index.ts`. If `IconButton`, `Button`, `Select`, etc. already exist, **use them**. Never use raw HTML or raw Chakra when a WRI DS wrapper exists.
2. **Check Chakra UI** — call `mcp_chakra-ui_list_components` or `mcp_chakra-ui_get_component_props`. If Chakra already has it, **wrap it, do not rebuild**.
3. **Check icons** — read `src/components/icons/index.ts`. Missing icons go in `src/components/icons/<Name>.tsx`. Never define SVG inline in a component file.
4. **Scaffold first** — run `yarn new-component <Name> <Category>` before creating any file.
5. **Tokens only** — all visual values via `getThemed*` from relative `../../../../lib/theme`. No hardcoded hex/rem/px.
6. **Element-level check (MANDATORY, repeat for every native element)** — before writing each `<button>`, `<input>`, `<select>`, or `<textarea>`, stop and explicitly ask: "does a WRI DS component cover this element?" The initial check at step 2 is **not sufficient** — every sub-element inside the component being built requires an individual check.
7. **Accessibility check** — confirm that semantic HTML, `aria-*` props, and keyboard navigation considerations are baked into the component by default.

## Accessibility (A11y)

> Full rules are in `contributor-ai/a11y.instructions.md` (auto-attached for `src/components/**`).
> Key point: always define `aria-*` props in `types.ts`, forward them to the DOM, and verify in your story/demo.

## Component Hierarchy (never skip a level)

```
1. WRI DS wrappers in src/components/   ← always check first
2. @chakra-ui/react                     ← if no WRI DS wrapper exists
3. Native HTML                          ← last resort; add // [CUSTOM COMPONENT] — <reason>
```

```tsx
// ❌ Raw HTML when WRI DS wrapper exists
;<button onClick={fn}>Save</button>

// ✅ WRI DS wrapper with icon
import IconButton from '../Actions/IconButton'
;<IconButton icon={<SaveIcon />} aria-label='Save' onClick={fn} />

// ✅ Text-only cancel/dismiss action → always use variant="borderless"
import Button from '../Actions/Button'
;<Button variant='borderless' label='Cancel' onClick={onCancel} />

// ✅ Input inside a custom container → TextInput + InputGroup, never bare <input>
// TextInput owns its own border/background/shadow; wrapping it adds double borders.
import { InputGroup } from '@chakra-ui/react'
import TextInput from '../Forms/Inputs/TextInput'
;<InputGroup startElement={<SearchIcon />}>
  <TextInput
    label=''
    noMarginBottom
    placeholder='Search'
    style={{ paddingLeft: '2.5rem' }}
  />
</InputGroup>
```

## Scaffold Script

```bash
yarn new-component <ComponentName> <Category>
# Valid categories: Forms/Actions, Forms/Controls, Forms/Inputs, Forms/Tag,
#   Forms/FormContainer, Geospatial, DataDisplay, Containers, Navigation, Status
```

The script creates `index.tsx`, `types.ts`, `styled.ts`, `*.stories.tsx`, `*.test.tsx`, `*Demo.tsx`, `README.md`
and updates `src/components/index.ts`, `DemoIndex.tsx`, `App.tsx`, `README.md`.

## File Conventions

### index.tsx

```tsx
/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */
import { MyProps } from './types'
import { containerStyles } from './styled'

const MyComponent = (props: MyProps) => (
  <div css={containerStyles}>{/* use WRI DS / Chakra primitives */}</div>
)
export default MyComponent
```

### styled.ts

```ts
import { css } from '@emotion/react'
import {
  getThemedColor,
  getThemedSpacing,
  getThemedRadius,
  getThemedBorderWidth,
  getThemedFontSize,
  getThemedLineHeight,
} from '../../../../lib/theme' // adjust depth

export const containerStyles = css`
  color: ${getThemedColor('neutral', 800)};
  padding: ${getThemedSpacing(400)};
  border-radius: ${getThemedRadius(300)};
`
```

## Design Tokens — Quick Reference

| Function                        | Tokens                                                                                   |
| ------------------------------- | ---------------------------------------------------------------------------------------- |
| `getThemedColor(variant, step)` | variants: `neutral primary secondary success warning error accessible`; steps: `100–900` |
| `getThemedSpacing(token)`       | `0 50 100 200 300 400 500 600 700 800 900 1000 1100 1200 1400 1600 2000 2400 2800`       |
| `getThemedRadius(token)`        | `100 200 300 400 500 600 700 800 900`                                                    |
| `getThemedBorderWidth(token)`   | `100 200 300 400`                                                                        |
| `getThemedFontSize(token)`      | `200 300 400 500 600 700 800 900 1000 1100`                                              |
| `getThemedLineHeight(token)`    | `300 400 500 600 700 800 900 1000 1100 1200`                                             |

Full tables: `agents/spacing.md`, `agents/radius.md`, `agents/border-width.md`, `agents/typography.md`.

## Forbidden Patterns

| Pattern                                                               | Correct alternative                                        |
| --------------------------------------------------------------------- | ---------------------------------------------------------- |
| `<button>`, `<select>`, `<input>` when WRI DS wrapper exists          | WRI DS `Button`, `Select`, `IconButton`                    |
| SVG inline in component file                                          | icon in `src/components/icons/`                            |
| Rebuilding what Chakra provides                                       | wrap Chakra                                                |
| Hardcoded `#hex`, `rem`, `px`                                         | `getThemed*` tokens                                        |
| `import { getThemedColor } from '@worldresources/wri-design-systems'` | relative `lib/theme`                                       |
| Creating files manually (no scaffold)                                 | `yarn new-component`                                       |
| Pasting Figma MCP output directly                                     | adapt to repo conventions                                  |
| Chakra v2 API                                                         | Chakra v3 — verify via `mcp_chakra-ui_get_component_props` |

## HARD FAIL CONDITIONS

Generated code is **INVALID** if any of the following are true:

- Fails to provide or forward accessibility props (e.g., missing `aria-label` for icon-only buttons, missing `tabIndex`, or non-semantic HTML for interactive elements)
- Uses raw `<button>`, `<input>`, `<select>`, `<textarea>` when a WRI DS wrapper exists
- Defines an SVG inline inside a component file (even a small one)
- Contains hardcoded `#hex`, `rgb(...)`, `rgba(...)` color values
- Contains hardcoded `px`, `rem`, `em` spacing, font-size, border-radius, or border-width values
- Uses `sx`, `style`, or `className` for visual styling instead of Emotion `css`
- Imports `getThemed*` from `@worldresources/wri-design-systems` (must be relative `lib/theme`)
- Uses Chakra v2 API (e.g. `colorScheme`, `isDisabled`, `leftIcon` props)
- Was created without running `yarn new-component` first
- Pastes Figma MCP output directly without adaptation

## BAD vs GOOD Examples

### Spacing / Colors

```tsx
// ❌ BAD
<Box px="16px" bg="#3D3B3B" borderRadius="6px">

// ✅ GOOD
<Box
  px={getThemedSpacing(400)}
  bg={getThemedColor('neutral', 800)}
  borderRadius={getThemedRadius(400)}
>
```

### Buttons

```tsx
// ❌ BAD
;<button onClick={fn} style={{ borderRadius: '12px' }}>
  Save
</button>

// ✅ GOOD
import IconButton from '../Actions/IconButton'
;<IconButton icon={<SaveIcon />} aria-label='Save' onClick={fn} />
```

### Icons

```tsx
// ❌ BAD — inline SVG in component file
const MyComponent = () => (
  <svg viewBox='0 0 16 16'>
    <path d='M8 2l6 12H2z' />
  </svg>
)

// ✅ GOOD
// 1. src/components/icons/MyIcon.tsx
export const MyIcon = (props: IconProps) => (
  <svg viewBox='0 0 16 16' {...props}>
    <path d='M8 2l6 12H2z' />
  </svg>
)
// 2. In component file:
import { MyIcon } from '../../icons'
```

### Tokens import path

```tsx
// ❌ BAD
import { getThemedColor } from '@worldresources/wri-design-systems'

// ✅ GOOD
import { getThemedColor } from '../../../lib/theme'
```

## Figma-to-Code Workflow

Figma designs are **visual references only**. WRI DS rules always win over Figma output.

1. Call `mcp_figma_get_design_context` to get the reference code + screenshot.
2. Run the Pre-Implementation Checklist above before writing any code.
3. Convert Figma reference → WRI DS conventions:
   - Tailwind classes → Emotion `css` with `getThemed*` tokens
   - Inline SVGs → `src/components/icons/<Name>.tsx`
   - Raw `<button>` / `<div onClick>` → WRI DS `IconButton` / `Button`
   - Hardcoded hex/px values → `getThemed*` tokens
4. **Prefer semantic fidelity over pixel-perfect recreation.**
