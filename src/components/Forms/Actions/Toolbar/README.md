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
type ToolbarLabels = {
  collapseLabel: ReactNode
  expandLabel: ReactNode
  collapseAriaLabel: string
  expandAriaLabel: string
}

interface ToolbarItem {
  icon: React.ReactElement
  ariaLabel: string
  label?: React.ReactNode
  disabled?: boolean
  onClick?: () => void
  gap?: boolean
  tooltip?: string
  active?: boolean
}

interface ToolbarProps {
  items: ToolbarItem[]
  vertical?: boolean
  expanded?: boolean
  showExpandedToggle?: boolean
  ariaLabel?: string
  defaultGaps?: boolean
  autoCollapse?: boolean
  expandSide?: 'left' | 'right'
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
  vertical?: boolean
  expandSide?: 'left' | 'right'
  active?: boolean
}

interface UseToolbarOverflowParams {
  itemsCount: number
  isExpanded: boolean
  isVertical: boolean
  endsGroup: boolean[]
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

## Expand side

`expandSide` sets the direction labels open toward. Expanded items share one width —
the widest label — via CSS flex/grid stretch (no JS measurement).

- **Vertical**: column flex sized to the widest child; siblings stretch to match.
  `expandSide="left"` mirrors icon/label and hugs the right edge.
- **Horizontal**: equal `1fr` grid columns (groups use subgrid) so every button
  matches the widest. With `left`, the toolbar grows from the right edge.

```tsx
<div style={{ position: 'absolute', top: 16, left: 16 }}>
  <Toolbar items={items} vertical showExpandedToggle expandSide='right' />
</div>

<div style={{ position: 'absolute', top: 16, right: 16 }}>
  <Toolbar items={items} vertical showExpandedToggle expandSide='left' />
</div>

<div style={{ position: 'absolute', bottom: 16, left: 16 }}>
  <Toolbar items={items} showExpandedToggle expandSide='right' />
</div>

<div style={{ position: 'absolute', bottom: 16, right: 16 }}>
  <Toolbar items={items} showExpandedToggle expandSide='left' />
</div>
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
