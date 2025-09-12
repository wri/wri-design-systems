# Modal

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/containers-modal--docs)

[ModalDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Containers/Modal/ModalDemo.tsx)

## Import

```tsx
import { Modal } from '@worldresources/wri-design-systems'
```

## Props

```ts
type ModalProps = {
  title: string
  content: React.ReactNode
  size?: 'small' | 'medium' | 'large' | 'xlarge'
  draggable?: boolean
  blocking?: boolean
  open: boolean
  onClose?: () => void
  showCancelButton?: boolean
  cancelLabel?: string
  showActionButton?: boolean
  actionLabel?: string
  onActionClick?: VoidFunction
}
```

## Usage

### Menu

```tsx
<Modal
  title='Title'
  content={<p>Content</p>}
  open={showModal}
  onClose={() => setShowModal(false)}
/>
```

### Small

```tsx
<Modal
  title='Title'
  content={<p>Content</p>}
  size='small'
  open={showModal}
  onClose={() => setShowModal(false)}
/>
```

### Large

```tsx
<Modal
  title='Title'
  content={<p>Content</p>}
  size='large'
  open={showModal}
  onClose={() => setShowModal(false)}
/>
```

### Extra Large

```tsx
<Modal
  title='Title'
  content={<p>Content</p>}
  size='xlarge'
  open={showModal}
  onClose={() => setShowModal(false)}
/>
```

### With Actions

```tsx
<Modal
  title='Title'
  content={<p>Content</p>}
  open={showModal}
  onClose={() => setShowModal(false)}
  showCancelButton
  cancelLabel='Cancel'
  showActionButton
  actionLabel='Save'
  onActionClick={() => setShowModal(false)}
/>
```

### Draggable

```tsx
<Modal
  title='Title'
  content={<p>Content</p>}
  open={showModal}
  onClose={() => setShowModal(false)}
  draggable
/>
```

### Blocking

```tsx
<Modal
  title='Title'
  content={<p>Content</p>}
  open={showModal}
  onClose={() => setShowModal(false)}
  blocking
/>
```
