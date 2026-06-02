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
