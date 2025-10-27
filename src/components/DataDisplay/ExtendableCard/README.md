# Extendable Card

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/data-display-extendablecard--docs)

[ExtendableCardDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/DataDisplay/ExtendableCard/ExtendableCardDemo.tsx)

---

## Import

```tsx
import { ExtendableCard } from '@worldresources/wri-design-systems'
```

## Usage

```tsx

import { Icon, Box, Flex, Text } from '@chakra-ui/react'
import { MapIcon } from '../../icons'
import List from '../List'

const cardHeader = (
  <div>Card Title</div>
)

const cardChildren = (
  <div>Content</div>
)

const cardFooter = (
  <div>Footer Content</div>
)

<ExtendableCard
  header={cardHeader}
  footer={cardFooter}
>
  {cardChildren}
</ExtendableCard>
```

## Props

```ts
import { ReactNode } from 'react'

export interface ExtendableCardProps {
  header: ReactNode
  children: ReactNode
  footer?: ReactNode
}
```
