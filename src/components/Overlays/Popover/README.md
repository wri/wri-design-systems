# Popover

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/overlays-popover--docs)

[PopoverDemo](https://github.com/wri/wri-design-systems/tree/main/src/components/Overlays/Popover/PopoverDemo.tsx)

## Import

```tsx
import { Popover } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<Popover content='This is a popover'>
  <Button label='Open popover' />
</Popover>
```

## Props

| Prop                     | Type                                                                                                                                                                 | Default          | Description                                              |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | -------------------------------------------------------- |
| `children`               | `React.ReactNode`                                                                                                                                                    | —                | Element that triggers the popover                        |
| `content`                | `React.ReactNode`                                                                                                                                                    | —                | Content shown inside the popover                         |
| `width`                  | `string`                                                                                                                                                             | 366px            | Content width; Figma default, overridable per usage      |
| `hideArrow`              | `boolean`                                                                                                                                                            | `false`          | Hides the popover arrow; the arrow is visible by default |
| `arrowAlignment`         | `'left' \| 'center' \| 'right'`                                                                                                                                      | `'left'`         | Arrow alignment along the popover edge                   |
| `placement`              | `'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end' \| 'right' \| 'right-start' \| 'right-end'` | `'bottom-start'` | Placement of the popover relative to the trigger         |
| `open`                   | `boolean`                                                                                                                                                            | —                | Controlled open state of the popover                     |
| `onClose`                | `() => void`                                                                                                                                                         | —                | Called when the popover closes                           |
| `closeOnEscape`          | `boolean`                                                                                                                                                            | `true`           | Closes the popover when the escape key is pressed        |
| `closeOnInteractOutside` | `boolean`                                                                                                                                                            | `true`           | Closes the popover when clicking outside                 |
| `disabled`               | `boolean`                                                                                                                                                            | —                | Prevents the popover from opening                        |
| `portalRef`              | `React.RefObject<HTMLElement \| null>`                                                                                                                               | —                | Container element for the popover portal                 |

## Any Content

```tsx
<Popover
  content={
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <TextInput label='URL' placeholder='http://example.org' noMarginBottom />
      <TextInput label='Label (optional)' noMarginBottom />
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button label='Apply' variant='secondary' size='small' />
      </div>
    </div>
  }
>
  <IconButton icon={<InfoIcon />} aria-label='Edit link details' />
</Popover>
```

## Arrow Alignment

```tsx
<Popover content='This is a popover' arrowAlignment='left'>
  <Button label='Open popover' />
</Popover>
```

## Hide Arrow

```tsx
<Popover content='This is a popover' hideArrow>
  <Button label='Open popover' />
</Popover>
```

## Custom Width

```tsx
<Popover content='This is a popover' width='18.75rem'>
  <Button label='Open popover' />
</Popover>
```

## Placement

```tsx
<Popover content='This is a popover' placement='right'>
  <Button label='Open popover' />
</Popover>
```

## Controlled

```tsx
const [open, setOpen] = useState(false)

<Popover
  open={open}
  onClose={() => setOpen(false)}
  content='This is a popover'
>
  <Button label='Open popover' onClick={() => setOpen(!open)} />
</Popover>
```
