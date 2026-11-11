import type { RichTextEditorLabels } from '../../../../lib/i18n/types'

export type RichTextEditorControlKey =
  | 'undo'
  | 'redo'
  | 'textType'
  | 'fontSize'
  | 'alignment'
  | 'bold'
  | 'italic'
  | 'underline'
  | 'strikethrough'
  | 'bulletList'
  | 'orderedList'
  | 'link'
  | 'image'

export type RichTextEditorSize = string

export type RichTextEditorProps = {
  /** Initial HTML content */
  defaultValue?: string
  /** Disables editor interactions and toolbar controls */
  disabled?: boolean
  /** Accessible label for the editable content area */
  ariaLabel?: string
  /** Placeholder text shown when content is empty */
  placeholder?: string
  /**
   * Custom CSS `min-height` for the editor content area (for example,
   * `getThemedSpacing(1600)`). If not provided, size is defined by the container.
   */
  minHeight?: string
  /** Controls to display in the toolbar */
  visibleControls?: RichTextEditorControlKey[]
  /** Called on each editor update with current HTML value */
  onChange?: (value: string) => void
  /** Override tooltip/UI labels for localization */
  labels?: Partial<RichTextEditorLabels>
}
