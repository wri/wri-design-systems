# Sheet

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/containers-sheet--docs)

[SheetDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Containers/Sheet/SheetDemo.tsx)

## Import

```tsx
import { Sheet } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
const [isOpen, setIsOpen] = useState(false)
.
.
.


<Sheet
  header={
    <div
      style={{
        width: '100%',
        padding: '0 16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <p>Header</p>
      <IconButton
        icon={<CloseIcon />}
        aria-label='Close'
        onClick={() => setIsOpen(false)}
      />
    </div>
  }
  content={<div style={{ padding: '0 16px' }}>{content}</div>}
  footer={<div>Footer</div>}
  defaultSnap='closed'
  open={isOpen}
  onClose={() => setIsOpen(false)}
/>

<Button
  style={{ width: '200px' }}
  label='Show Closed Sheet'
  onClick={() => setIsOpen(true)}
/>
```

## Props

```ts
type SheetProps = {
  header?: React.ReactNode
  content: React.ReactNode
  footer?: React.ReactNode
  open: boolean
  onClose?: () => void
  minimizedHeight?: number // default 50px
  midHeight?: number // default 200px
  maxFullHeight?: number // default 1000px
  defaultSnap?: 'closed' | 'minimized' | 'mid' | 'full'
  className?: string
  blocking?: boolean
  zIndex?: number // default 1000
}
```
