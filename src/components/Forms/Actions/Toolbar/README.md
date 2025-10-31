# Toolbar

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/forms-actions-map-control--docs)

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
type Toolbar = {
  items: {
    icon: React.ReactNode
    label?: string
    onClick?: () => void
    disabled?: boolean
    ariaLabel: string
    gap?: boolean // If true, adds spacing after this item (used for grouping)
  }[]
  vertical?: boolean
  expanded?: boolean // Controls the visibility of item labels (default is false/icons only)
  toggleControl?: boolean // Renders an expand/collapse button when combined with 'expanded'
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
  toggleControl
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
