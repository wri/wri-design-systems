# Analysis Widget

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/data-display-analysiswidget--docs)

## [AnalysisWidgetDemo](https://github.com/wri/wri-design-systems/tree/main/src/components/DataDisplay/AnalysisWidget/AnalysisWidgetDemo.tsx)

## Import

```tsx
import { AnalysisWidget } from '@worldresources/wri-design-systems'
```

## Usage

```tsx

import { InfoIcon } from '../../icons'


const widgetHeader = (
  <div>Card Title</div>
)

const widgetChildren = (
  <div>Content</div>
)

const widgetFooter = (
  <div>Footer Content</div>
)

<AnalysisWidget
  header={cardHeader}
  footer={cardFooter}
  actions={[
    {
      label: 'About',
      onClick: () => console.log('About clicked'),
      icon: <InfoIcon />,
    }
  ]}
>
  {widgetChildren}
</AnalysisWidget>
```

## Props

```ts
import { ReactNode } from 'react'

export interface AnalysisWidgetProps {
  children: ReactNode
  header: ReactNode
  footer?: ReactNode
  expanded?: boolean
  collapsible?: boolean
  actions?: AnalysisWidgetActionsProps[]
}

export interface AnalysisWidgetActionsProps {
  label: string
  onClick: () => void
  icon?: ReactNode
}
```
