---
description: 'Use when creating or editing icons in src/components/icons/. Covers icon file pattern, SVG conventions, and export requirement.'
applyTo: 'src/components/icons/**'
---

# WRI DS — Icon Rules

## Before Creating an Icon

Check `src/components/icons/index.ts` — the icon may already exist.

## File Pattern

Every icon is a named export in its own file: `src/components/icons/<Name>.tsx`

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

## After Creating the File

Add the export to `src/components/icons/index.ts`:

```ts
export * from './MyIcon'
```

## Accessibility

| Use case | What to do |
| --- | --- |
| Icon next to a visible text label | Add `aria-hidden="true"` to the `<Icon>` — the label already provides the accessible name |
| Icon as the only content of a `<button>` or `<a>` | Add `aria-hidden="true"` to the `<Icon>`; the `aria-label` goes on the parent element, not the icon |
| Icon conveying standalone meaning with no surrounding label | Add `role="img"` and `aria-label` on the `<Icon>` element |

```tsx
// ✅ Decorative — parent Button carries the accessible name
<IconButton icon={<SaveIcon aria-hidden="true" />} aria-label="Save" />

// ✅ Standalone semantic icon
<InfoIcon role="img" aria-label="Information" />
```

**Never** define `aria-label` on an icon that is already described by a visible sibling label — it creates duplicate announcements for screen readers.

## Forbidden

- SVG defined inline inside a component — always a separate file in `icons/`
- Custom wrapper instead of Chakra `<Icon>` — always use `import { Icon, IconProps } from '@chakra-ui/react'`
- Fixed colors in SVG — always `fill='currentColor'` so the icon inherits color from CSS
