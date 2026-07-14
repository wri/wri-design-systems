# Modal

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/containers-modal--docs)

[ModalDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Containers/Modal/ModalDemo.tsx)

## Import

```tsx
import { Modal } from '@worldresources/wri-design-systems'
```

## Props

```ts
type SizeValue = number | string

type ModalLabels = {
  /** aria-label on the dialog content. Default: "Modal dialog" */
  dialogAriaLabel: string
}

type ModalProps = {
  header: React.ReactNode
  content: React.ReactNode
  footer?: React.ReactNode
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'full-width'
  draggable?: boolean
  blocking?: boolean
  open: boolean
  onClose?: () => void
  width?: SizeValue
  height?: SizeValue
  maxHeight?: SizeValue
  labels?: Partial<ModalLabels>
  lazyMount?: boolean
  unmountOnExit?: boolean
  restoreFocus?: boolean
  modal?: boolean
  initialFocusEl?: () => MaybeElement
  finalFocusEl?: () => MaybeElement
  trapFocus?: boolean
}
```

## Usage

### Menu

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

### Small

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

### Large

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

### Extra Large

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

### With Actions

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

### Draggable

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

### Blocking

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
