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

## Forbidden

- SVG defined inline inside a component — always a separate file in `icons/`
- Custom wrapper instead of Chakra `<Icon>` — always use `import { Icon, IconProps } from '@chakra-ui/react'`
- Fixed colors in SVG — always `fill='currentColor'` so the icon inherits color from CSS
