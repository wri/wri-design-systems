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

### Toolbar

| Prop                 | Type                     | Default   | Description                                                                                                     |
| -------------------- | ------------------------ | --------- | --------------------------------------------------------------------------------------------------------------- |
| `ariaLabel`          | `string`                 | —         | Accessible name of the toolbar                                                                                  |
| `autoCollapse`       | `boolean`                | `false`   | Automatically collapses items that do not fit the container                                                     |
| `defaultGaps`        | `boolean`                | —         | Makes every item end a group unless it sets `gap: false`; when omitted, only items with `gap: true` end a group |
| `expanded`           | `boolean`                | `false`   | Expands the toolbar to show item labels by default                                                              |
| `expandSide`         | `ToolbarExpandSide`      | `'right'` | Side the expanded labels grow toward                                                                            |
| `items`              | `ToolbarItem[]`          | —         | Items rendered in the toolbar                                                                                   |
| `labels`             | `Partial<ToolbarLabels>` | —         | Override internal UI labels for internationalization support                                                    |
| `showExpandedToggle` | `boolean`                | —         | Shows the expand/collapse toggle button                                                                         |
| `vertical`           | `boolean`                | `false`   | Renders the toolbar vertically                                                                                  |

### ToolbarButton

| Prop         | Type                | Default   | Description                                     |
| ------------ | ------------------- | --------- | ----------------------------------------------- |
| `active`     | `boolean`           | —         | Marks the button as active (pressed)            |
| `ariaLabel`  | `string`            | —         | Accessible name of the button                   |
| `disabled`   | `boolean`           | —         | Disables the button                             |
| `expandSide` | `ToolbarExpandSide` | `'right'` | Side the expanded label grows toward            |
| `icon`       | `React.ReactNode`   | —         | Icon rendered on the button                     |
| `isExpanded` | `boolean`           | —         | Shows the label text                            |
| `label`      | `React.ReactNode`   | —         | Visible text shown when expanded                |
| `onClick`    | `() => void`        | —         | Called when the button is clicked               |
| `tooltip`    | `string`            | —         | Tooltip text shown when the button is collapsed |
| `vertical`   | `boolean`           | —         | Renders the button for a vertical toolbar       |

### Supporting types

```ts
type ToolbarExpandSide = 'left' | 'right'

type ToolbarItem = {
  /** Icon rendered on the button */
  icon: React.ReactElement
  /** Accessible name of the button */
  ariaLabel: string
  /** Visible text shown when the toolbar is expanded */
  label?: React.ReactNode
  /** Disables the item */
  disabled?: boolean
  /** Called when the item is clicked */
  onClick?: () => void
  /** Overrides the default grouping to force or suppress a group break after this item */
  gap?: boolean
  /** Tooltip text shown when the toolbar is collapsed */
  tooltip?: string
  /** Marks the item as active (pressed) */
  active?: boolean
}

type ToolbarLabels = {
  /** Visible text on the collapse toggle button. Default: "Collapse" */
  collapseLabel: React.ReactNode
  /** Visible text on the expand toggle button. Default: "Expand" */
  expandLabel: React.ReactNode
  /** aria-label on the collapse toggle button. Default: "Collapse" */
  collapseAriaLabel: string
  /** aria-label on the expand toggle button. Default: "Expand" */
  expandAriaLabel: string
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
