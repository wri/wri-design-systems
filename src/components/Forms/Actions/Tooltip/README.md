# Tooltip

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/forms-actions-tooltip--docs)

[TooltipDemo](https://github.com/wri/wri-design-systems/tree/main/src/components/Forms/Actions/Tooltip/TooltipDemo.tsx)

## Import

```tsx
import { Tooltip } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<Tooltip content='This is a tooltip'>
  <InfoIcon height='1.25rem' width='1.25rem' />
</Tooltip>
```

## Props

| Prop                   | Type                                     | Default    | Description                                                              |
| ---------------------- | ---------------------------------------- | ---------- | ------------------------------------------------------------------------ |
| `children`             | `React.ReactNode`                        | —          | Element that triggers the tooltip                                        |
| `closeDelay`           | `number`                                 | `0`        | Delay in milliseconds before the tooltip closes                          |
| `content`              | `React.ReactNode`                        | —          | Content shown inside the tooltip                                         |
| `disabled`             | `boolean`                                | —          | Prevents the tooltip from opening                                        |
| `openDelay`            | `number`                                 | `0`        | Delay in milliseconds before the tooltip opens                           |
| `portalRef`            | `React.RefObject<HTMLElement \| null>`   | —          | Container element for the tooltip portal                                 |
| `position`             | `'top' \| 'right' \| 'bottom' \| 'left'` | `'bottom'` | Placement of the tooltip relative to the trigger                         |
| `preserveFocusOnChild` | `boolean`                                | `false`    | Uses the child as the trigger without adding tab focus or trigger styles |
| `showArrow`            | `boolean`                                | `true`     | Shows the tooltip arrow; only applies to the `pill` variant              |
| `variant`              | `'pill' \| 'text'`                       | `'pill'`   | Visual style of the tooltip                                              |

## Text Variant

```tsx
<Tooltip content='This is a tooltip'>
  <InfoIcon height='1.25rem' width='1.25rem' variant='text' />
</Tooltip>
```

## Any Content

```tsx
<Tooltip
  content={
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.3125rem',
      }}
    >
      <InfoIcon />
      This is a tooltip
    </div>
  }
>
  <InfoIcon height='1.25rem' width='1.25rem' />
</Tooltip>
```

## Position

```tsx
<Tooltip content='This is a tooltip' position='right'>
  <InfoIcon height='1.25rem' width='1.25rem' />
</Tooltip>
```

## Delay

```tsx
<Tooltip content='This is a tooltip' closeDelay={2000}>
  <InfoIcon height='1.25rem' width='1.25rem' />
</Tooltip>
```
