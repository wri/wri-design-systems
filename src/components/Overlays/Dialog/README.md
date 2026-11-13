# Dialog

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/overlays-dialog--docs)

[DialogDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Overlays/Dialog/DialogDemo.tsx)

## Import

```tsx
import { Dialog } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<Dialog
  title='Title'
  open={showDialog}
  onClose={() => setShowDialog(false)}
  footer={
    <>
      <Button
        label='Cancel'
        variant='secondary'
        onClick={() => setShowDialog(false)}
      />
      <Button label='Save' onClick={handleSave} />
    </>
  }
>
  Lorem ipsum dolor sit amet consectetur. Sollicitudin aliquet in libero nunc
  scelerisque cras magna hendrerit. Vel neque convallis ac velit sed. Semper
  diam metus.
</Dialog>
```

## Props

| Prop                     | Type                            | Default             | Description                                                                                                      |
| ------------------------ | ------------------------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `title`                  | `string`                        | — (required)        | Dialog title, rendered in the header                                                                             |
| `children`               | `React.ReactNode`               | `—`                 | Body content rendered under the title                                                                            |
| `footer`                 | `React.ReactNode`               | `—`                 | Footer content rendered right-aligned below the body; compose `Button`s (e.g. Cancel + primary action) as needed |
| `hideCloseButton`        | `boolean`                       | `false`             | Hides the close button in the header                                                                             |
| `open`                   | `boolean`                       | — (required)        | Controls whether the dialog is rendered                                                                          |
| `onClose`                | `() => void`                    | `—`                 | Called when the dialog is closed via the close button, escape key or outside interaction                         |
| `width`                  | `SizeValue`                     | `'27.5rem'` (440px) | Overrides the fixed design width                                                                                 |
| `closeOnEscape`          | `boolean`                       | `true`              | Closes the dialog when the escape key is pressed                                                                 |
| `closeOnInteractOutside` | `boolean`                       | `true`              | Closes the dialog on backdrop or outside interaction                                                             |
| `initialFocusEl`         | `() => MaybeElement`            | `—`                 | Returns the element that receives focus when the dialog opens                                                    |
| `scrollBehavior`         | `'inside' \| 'outside'`         | `'inside'`          | Scroll behavior when the content overflows                                                                       |
| `placement`              | `'top' \| 'center' \| 'bottom'` | `'top'`             | Vertical placement of the dialog in the viewport                                                                 |
| `labels`                 | `Partial<DialogLabels>`         | `—`                 | Overrides built-in labels such as the dialog aria-label for localization                                         |

### Supporting types

```ts
type SizeValue = number | string

type DialogLabels = {
  /** Fallback aria-label on the dialog content. Default: "Dialog" */
  dialogAriaLabel: string
  /** aria-label on the close button. Default: "Close" */
  closeLabel: string
}
```

## Destructive

```tsx
<Dialog
  title='Delete dataset?'
  open={showDialog}
  onClose={() => setShowDialog(false)}
  footer={
    <>
      <Button
        label='Cancel'
        variant='secondary'
        onClick={() => setShowDialog(false)}
      />
      <Button label='Delete' variant='negative' onClick={handleDelete} />
    </>
  }
>
  Lorem ipsum dolor sit amet consectetur. Sollicitudin aliquet in libero nunc
  scelerisque cras magna hendrerit. Vel neque convallis ac velit sed. Semper
  diam metus.
</Dialog>
```

## Without Close Button

```tsx
<Dialog
  title='Title'
  hideCloseButton
  open={showDialog}
  onClose={() => setShowDialog(false)}
  footer={...}
>
  Lorem ipsum dolor sit amet consectetur.
</Dialog>
```

## Blocking

```tsx
<Dialog
  title='Title'
  hideCloseButton
  closeOnEscape={false}
  closeOnInteractOutside={false}
  open={showDialog}
  onClose={() => setShowDialog(false)}
  footer={...}
>
  Lorem ipsum dolor sit amet consectetur.
</Dialog>
```

## Custom Width

```tsx
<Dialog
  title='Title'
  width='31.25rem'
  open={showDialog}
  onClose={() => setShowDialog(false)}
  footer={...}
>
  Lorem ipsum dolor sit amet consectetur.
</Dialog>
```

## Nested Dialogs

```tsx
<Dialog
  title='First dialog'
  open={firstOpen}
  onClose={() => {
    setFirstOpen(false)
    setSecondOpen(false)
  }}
  footer={<Button label='Close All' variant='secondary' onClick={...} />}
>
  <p>First dialog</p>
  <Button label='Open Second Dialog' onClick={() => setSecondOpen(true)} />
</Dialog>
<Dialog
  title='Second dialog'
  width='20rem'
  open={secondOpen}
  onClose={() => setSecondOpen(false)}
  footer={<Button label='Close Second Dialog' onClick={...} />}
>
  <p>Second dialog, opened on top of the first one.</p>
</Dialog>
```
