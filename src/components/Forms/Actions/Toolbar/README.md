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
  label?: string
  onClick?: () => void
  disabled?: boolean
  ariaLabel: string
  gap?: boolean // If true, adds spacing after this item (used for grouping)
}

interface ToolbarProps {
  items: ToolbarItem[]
  vertical?: boolean
  expanded?: boolean // Controls the visibility of item labels (default is false/icons only)
  showExpandedToggle?: boolean // Renders an expand/collapse button when combined with 'expanded'
  ariaLabel?: string // Main accessibility label for the toolbar container
  defaultGaps?: boolean // If true, adds gaps between all items by default
  breakpoint?: number // The viewport width (in px) at which the toolbar collapses into a menu
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
