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
        padding: '0 1rem',
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
  content={<div style={{ padding: '0 1rem' }}>{content}</div>}
  footer={<div>Footer</div>}
  defaultSnap='closed'
  open={isOpen}
  onClose={() => setIsOpen(false)}
/>

<Button
  style={{ width: '12.5rem' }}
  label='Show Closed Sheet'
  onClick={() => setIsOpen(true)}
/>
```

## Props

| Prop              | Type                                         | Default       | Description                                                                                   |
| ----------------- | -------------------------------------------- | ------------- | --------------------------------------------------------------------------------------------- |
| `blocking`        | `boolean`                                    | `—`           | Prevents interaction with the page behind the sheet                                           |
| `className`       | `string`                                     | `—`           | Class name applied to the sheet container                                                     |
| `content`         | `React.ReactNode`                            | `—`           | Main content rendered in the sheet body                                                       |
| `defaultSnap`     | `'closed' \| 'minimized' \| 'mid' \| 'full'` | `'minimized'` | Snap point the sheet opens at; one of closed, minimized, mid or full. Defaults to `minimized` |
| `footer`          | `React.ReactNode`                            | `—`           | Optional content rendered in the sheet footer                                                 |
| `header`          | `React.ReactNode`                            | `—`           | Optional content rendered in the sheet header, next to the grabber                            |
| `labels`          | `Partial<SheetLabels>`                       | `—`           | Overrides the grabber aria-labels for localization                                            |
| `maxFullHeight`   | `number`                                     | `—`           | Fully expanded snap height in pixels; falls back to five sixths of the available height       |
| `midHeight`       | `number`                                     | `200`         | Intermediate snap height in pixels. Defaults to `200`                                         |
| `minimizedHeight` | `number`                                     | `—`           | Minimized snap height in pixels; falls back to the header height when omitted                 |
| `onClose`         | `() => void`                                 | `—`           | Called when the sheet is dismissed                                                            |
| `open`            | `boolean`                                    | `—`           | Controls whether the sheet is open. Defaults to `false`                                       |
| `zIndex`          | `number`                                     | `1000`        | z-index applied to the sheet overlay. Defaults to `1000`                                      |

### Supporting types

```ts
type SheetLabels = {
  /** aria-label for the grabber button when collapsed/minimized. Default: "Expand sheet" */
  expandSheetLabel: string
  /** aria-label for the grabber button at intermediate snap points. Default: "Make full screen" */
  makeFullScreenLabel: string
  /** aria-label for the grabber button when fully expanded. Default: "Expanded sheet" */
  expandedSheetLabel: string
}
```
