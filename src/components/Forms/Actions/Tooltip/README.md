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
  <InfoIcon height='20px' width='20px' />
</Tooltip>
```

## Props

```ts
type TooltipProps = {
  children: React.ReactNode
  content: React.ReactNode
  showArrow?: boolean // default: true
  disabled?: boolean
  position?: 'top' | 'right' | 'bottom' | 'left' // default: 'bottom'
  variant?: 'pill' | 'text' // default: 'pill'
  portalRef?: React.RefObject<HTMLElement | null>
  openDelay?: number
  closeDelay?: number
}
```

## Text Variant

```tsx
<Tooltip content='This is a tooltip'>
  <InfoIcon height='20px' width='20px' variant='text' />
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
        gap: '5px',
      }}
    >
      <InfoIcon />
      This is a tooltip
    </div>
  }
>
  <InfoIcon height='20px' width='20px' />
</Tooltip>
```

## Position

```tsx
<Tooltip content='This is a tooltip' position='right'>
  <InfoIcon height='20px' width='20px' />
</Tooltip>
```

## Delay

```tsx
<Tooltip content='This is a tooltip' closeDelay={2000}>
  <InfoIcon height='20px' width='20px' />
</Tooltip>
```
