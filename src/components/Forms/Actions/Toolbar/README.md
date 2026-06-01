# Toolbar

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/forms-actions-toolbar--docs)

[ToolbarDemo](https://github.com/wri/wri-design-systems/tree/main/src/components/Forms/Actions/Toolbar/ToolbarDemo.tsx)

## Import

```tsx
import { Toolbar } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<Toolbar
  items={[
    {
      icon: <CheckIcon />,
      label: 'Check Status',
      ariaLabel: 'check status',
    },
  ]}
  expanded
/>
```

## Props

```ts
interface ToolbarItem {
  icon: React.ReactElement
  ariaLabel: string
  label?: string
  disabled?: boolean
  onClick?: () => void
  gap?: boolean
  tooltip?: string
}

interface ToolbarProps {
  items: ToolbarItem[]
  vertical?: boolean
  expanded?: boolean
  showExpandedToggle?: boolean
  ariaLabel?: string
  defaultGaps?: boolean
  autoCollapse?: boolean
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<ToolbarLabels>
}

interface ToolbarButtonProps {
  isExpanded: boolean
  ariaLabel: string
  icon?: React.ReactNode
  label?: React.ReactNode
  tooltip?: string
  disabled?: boolean
  onClick?: () => void
  showGap?: boolean
  vertical?: boolean
}

interface UseToolbarOverflowParams {
  itemsCount: number
  isExpanded: boolean
  isVertical: boolean
  collapsedWidth: SizeValue
  expandedLabelWidth: SizeValue
  gap?: SizeValue
  showExpandedToggle?: boolean
  autoCollapse?: boolean
}
```

## Map Control

```tsx
<Toolbar
  items={[
    { icon: <PlusIcon />, label: 'Zoom In', onClick: onZoomInClick },
    {
      icon: <MinusIcon />,
      label: 'Zoom Out',
      onClick: onZoomOutClick,
      gap: true,
    },
    { icon: <ExpandIcon />, label: 'Expand', onClick: onExpandClick },
  ]}
/>
```

## Vertical

```tsx
<Toolbar
  items={[
    { icon: <SettingsIcon />, label: 'Settings', onClick: onSettingsClick },
    { icon: <QuestionIcon />, label: 'Help', onClick: onHelpClick },
  ]}
  vertical
  expanded
  showExpandedToggle
/>
```

## Disabled

```tsx
<Toolbar
  items={[
    {
      icon: <CheckIcon />,
      label: 'Check Status',
      ariaLabel: 'check status',
      disabled: true,
    },
  ]}
  expanded
/>
```
