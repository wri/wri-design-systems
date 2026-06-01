# Rich Text Editor

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/forms-inputs-rich-text-editor--docs)

[RichTextEditorDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Forms/Inputs/RichTextEditor/RichTextEditorDemo.tsx)

## Import

```tsx
import { RichTextEditor } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<RichTextEditor />
```

## Props

```ts
type RichTextEditorControlKey =
  | 'undo'
  | 'redo'
  | 'fontFamily'
  | 'fontSize'
  | 'bold'
  | 'italic'
  | 'underline'
  | 'strikethrough'
  | 'bulletList'
  | 'orderedList'
  | 'link'
  | 'image'

type RichTextEditorSize = string

type RichTextEditorProps = {
  defaultValue?: string
  disabled?: boolean
  ariaLabel?: string
  placeholder?: string
  /**
   * Custom minimum height for the editor content area.
   * If omitted, the component size is defined by its container.
   */
  minHeight?: string
  visibleControls?: RichTextEditorControlKey[]
  onChange?: (value: string) => void
  /** Override internal labels for i18n. */
  labels?: Partial<RichTextEditorLabels>
}
```

## Props

| Prop              | Type                            | Default                  | Description                                                                                                                                     |
| ----------------- | ------------------------------- | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `defaultValue`    | `string`                        | `''`                     | Initial HTML content.                                                                                                                           |
| `disabled`        | `boolean`                       | `false`                  | Disables editor interactions and toolbar controls.                                                                                              |
| `ariaLabel`       | `string`                        | `labels.editorAriaLabel` | Accessible label for the editable content area.                                                                                                 |
| `placeholder`     | `string`                        | `labels.placeholder`     | Placeholder text shown when content is empty.                                                                                                   |
| `minHeight`       | `string`                        | `undefined`              | Custom CSS `min-height` for the editor content area (for example, `getThemedSpacing(1600)`). If not provided, size is defined by the container. |
| `visibleControls` | `RichTextEditorControlKey[]`    | All controls             | Controls to display in the toolbar.                                                                                                             |
| `onChange`        | `(value: string) => void`       | `undefined`              | Called on each editor update with current HTML value.                                                                                           |
| `labels`          | `Partial<RichTextEditorLabels>` | `undefined`              | Override tooltip/UI labels for localization.                                                                                                    |
