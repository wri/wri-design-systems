import type { OpacityControlLabels } from '../../../../lib/i18n/types'

export type { OpacityControlLabels }

export type OpacityControlProps = {
  defaultValue: number
  onOpacityChanged: (value: number) => void
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<OpacityControlLabels>
}
