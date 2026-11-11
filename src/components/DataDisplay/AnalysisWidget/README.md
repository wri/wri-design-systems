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

| Prop                    | Type                            | Default | Description                                                    |
| ----------------------- | ------------------------------- | ------- | -------------------------------------------------------------- |
| `actions`               | `AnalysisWidgetActionsProps[]`  | —       | Action buttons rendered in the header                          |
| `children`              | `React.ReactNode`               | —       | Widget content shown when the section is expanded              |
| `collapsible`           | `boolean`                       | `true`  | Whether the header can toggle the widget open and closed       |
| `expanded`              | `boolean`                       | `true`  | Whether the widget starts expanded                             |
| `footer`                | `React.ReactNode`               | —       | Footer content rendered below the widget body                  |
| `header`                | `React.ReactNode`               | —       | Clickable header rendered as the accordion trigger             |
| `labels`                | `Partial<AnalysisWidgetLabels>` | —       | Override internal UI labels for internationalization support   |
| `showFooterOnCollapsed` | `boolean`                       | `false` | Whether the footer stays visible while the widget is collapsed |

### Supporting types

```ts
type AnalysisWidgetActionsProps = {
  /** Label of the action button */
  label: string
  /** Called when the action button is clicked */
  onClick: () => void
  /** Optional icon rendered before the label */
  icon?: React.ReactNode
}

type AnalysisWidgetLabels = {
  /** aria-label on the collapsible section trigger. Default: "Toggle section" */
  toggleSectionLabel: string
}
```
