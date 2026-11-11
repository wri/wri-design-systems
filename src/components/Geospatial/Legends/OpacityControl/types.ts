import type { OpacityControlLabels } from '../../../../lib/i18n/types'

export type { OpacityControlLabels }

export type OpacityControlProps = {
  /** Initial opacity value, from 0 (fully transparent) to 100 (fully opaque) */
  defaultValue: number
  /** Called with the new opacity value when the slider or input changes */
  onOpacityChanged: (value: number) => void
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<OpacityControlLabels>
}
