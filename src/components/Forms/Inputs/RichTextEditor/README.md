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
  // Text type dropdown (Normal text, H1, H2, H3, Quote, Divider)
  | 'textType'
  | 'fontSize'
  // Alignment dropdown (icon trigger)
  | 'alignment'
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

## Toolbar Controls

- `textType`: Text type dropdown with these block options:
  - `Normal text`
  - `Heading 1`
  - `Heading 2`
  - `Heading 3`
  - `Quote`
  - `Divider`
- `alignment`: Icon-based alignment dropdown (left, center, right, justify).
- `bold`: Supports localized icon text via `labels.boldIconText` (for example `B` or `N`).
- `link`: Opens an inline popover with URL and optional label inputs instead of browser `prompt`.

## Notes

- `onChange` returns HTML markup; use this to render or persist rich text content.
- The editable area includes default styles for headings, blockquotes, lists, links, and dividers so formatting changes are visible while typing.
