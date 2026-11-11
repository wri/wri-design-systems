# Modal

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/containers-modal--docs)

[ModalDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Containers/Modal/ModalDemo.tsx)

## Import

```tsx
import { Modal } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<Modal
  header={
    <p
      style={{
        fontWeight: 'bold',
        color: getThemedColor('neutral', 800),
      }}
    >
      Title
    </p>
  }
  content={
    <div style={{ padding: getThemedSpacing(300) }}>
      <p>Content</p>
    </div>
  }
  open={showModal}
  onClose={() => setShowModal(false)}
/>
```

## Props

| Prop             | Type                                                                     | Default    | Description                                                                                      |
| ---------------- | ------------------------------------------------------------------------ | ---------- | ------------------------------------------------------------------------------------------------ |
| `blocking`       | `boolean`                                                                | `—`        | Hides the close button and disables closing via escape key or outside interaction                |
| `content`        | `React.ReactNode`                                                        | `—`        | Main content rendered in the modal body                                                          |
| `draggable`      | `boolean`                                                                | `—`        | Makes the modal draggable and removes the backdrop, allowing interaction with the page behind it |
| `finalFocusEl`   | `() => MaybeElement`                                                     | `—`        | Returns the element that receives focus when the modal closes                                    |
| `footer`         | `React.ReactNode`                                                        | `—`        | Optional content rendered in the modal footer, below the body                                    |
| `header`         | `React.ReactNode`                                                        | `—`        | Content rendered in the modal header                                                             |
| `height`         | `SizeValue`                                                              | `—`        | Explicit modal height; defaults to auto, or 90% for the full-width size                          |
| `initialFocusEl` | `() => MaybeElement`                                                     | `—`        | Returns the element that receives focus when the modal opens                                     |
| `labels`         | `Partial<ModalLabels>`                                                   | `—`        | Overrides built-in labels such as the dialog aria-label for localization                         |
| `lazyMount`      | `boolean`                                                                | `—`        | Delays mounting the modal content until the first time it opens                                  |
| `maxHeight`      | `SizeValue`                                                              | `—`        | Overrides the preset maximum height for the selected size, capped at 80vh                        |
| `modal`          | `boolean`                                                                | `—`        | Passed to the underlying Chakra dialog to control its mode, such as outside-interaction behavior |
| `onClose`        | `() => void`                                                             | `—`        | Called when the modal is closed via the close button, escape key or outside interaction          |
| `open`           | `boolean`                                                                | `—`        | Controls whether the modal is rendered                                                           |
| `restoreFocus`   | `boolean`                                                                | `—`        | Returns focus to the previously focused element when the modal closes                            |
| `size`           | `'xsmall' \| 'small' \| 'medium' \| 'large' \| 'xlarge' \| 'full-width'` | `'medium'` | Preset controlling the modal width and maximum height, overridden by explicit width or maxHeight |
| `trapFocus`      | `boolean`                                                                | `—`        | Keeps keyboard focus inside the modal while it is open                                           |
| `unmountOnExit`  | `boolean`                                                                | `—`        | Unmounts the modal content from the DOM when it closes                                           |
| `width`          | `SizeValue`                                                              | `—`        | Overrides the preset width for the selected size                                                 |

### Supporting types

```ts
type SizeValue = number | string

type ModalLabels = {
  /** aria-label on the dialog content. Default: "Modal dialog" */
  dialogAriaLabel: string
}
```

## Small

```tsx
<Modal
  header={
    <p
      style={{
        fontWeight: 'bold',
        color: getThemedColor('neutral', 800),
      }}
    >
      Title
    </p>
  }
  content={
    <div style={{ padding: getThemedSpacing(300) }}>
      <p>Content</p>
    </div>
  }
  size='small'
  open={showModal}
  onClose={() => setShowModal(false)}
/>
```

## Large

```tsx
<Modal
  header={
    <p
      style={{
        fontWeight: 'bold',
        color: getThemedColor('neutral', 800),
      }}
    >
      Title
    </p>
  }
  content={
    <div style={{ padding: getThemedSpacing(300) }}>
      <p>Content</p>
    </div>
  }
  size='large'
  open={showModal}
  onClose={() => setShowModal(false)}
/>
```

## Extra Large

```tsx
<Modal
  header={
    <p
      style={{
        fontWeight: 'bold',
        color: getThemedColor('neutral', 800),
      }}
    >
      Title
    </p>
  }
  content={
    <div style={{ padding: getThemedSpacing(300) }}>
      <p>Content</p>
    </div>
  }
  size='xlarge'
  open={showModal}
  onClose={() => setShowModal(false)}
/>
```

## With Actions

```tsx
<Modal
  header={
    <p
      style={{
        fontWeight: 'bold',
        color: getThemedColor('neutral', 800),
      }}
    >
      Title
    </p>
  }
  content={
    <div style={{ padding: getThemedSpacing(300) }}>
      <p>Content</p>
    </div>
  }
  footer={
    <>
      <Button
        label='Cancel'
        variant='secondary'
        onClick={() => {
          setModalData({})
        }}
      />
      <Button
        label='Save'
        onClick={() => {
          setModalData({})
        }}
      />
    </>
  }
  open={showModal}
  onClose={() => setShowModal(false)}
/>
```

## Draggable

```tsx
<Modal
  header={
    <p
      style={{
        fontWeight: 'bold',
        color: getThemedColor('neutral', 800),
      }}
    >
      Title
    </p>
  }
  content={
    <div style={{ padding: getThemedSpacing(300) }}>
      <p>Content</p>
    </div>
  }
  open={showModal}
  onClose={() => setShowModal(false)}
  draggable
/>
```

## Blocking

```tsx
<Modal
  header={
    <p
      style={{
        fontWeight: 'bold',
        color: getThemedColor('neutral', 800),
      }}
    >
      Title
    </p>
  }
  content={
    <div style={{ padding: getThemedSpacing(300) }}>
      <p>Content</p>
    </div>
  }
  open={showModal}
  onClose={() => setShowModal(false)}
  blocking
/>
```
