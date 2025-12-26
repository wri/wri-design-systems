# Chart Container

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/data-display-charts-chartcontainer--docs)

---

## Import

```tsx
import { ChartContainer } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
import { LineChart, Line, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
]

<ChartContainer
  isLoading={false}
  isError={false}
  isEmpty={false}
>
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
      <Line
        type="monotone"
        dataKey="value"
        stroke="var(--chakra-colors-blue-500)"
      />
    </LineChart>
  </ResponsiveContainer>
</ChartContainer>
```

## Props

```ts
import { ReactNode } from 'react'
import { BoxProps } from '@chakra-ui/react'

export interface ChartContainerProps extends BoxProps {
  isLoading?: boolean
  isError?: boolean
  isEmpty?: boolean
  errorMessage?: string
  children: ReactNode
}
```
