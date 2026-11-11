import { SizeValue } from '../../../lib/sizing'

export type PanelProps = {
  /** Optional content rendered in the panel header; used as the accessible name for the region */
  header?: React.ReactNode
  /** Main content rendered in the panel body */
  content: React.ReactNode
  /** Optional content rendered in the panel footer */
  footer?: React.ReactNode
  /** Panel width, recommended between 15rem and 35rem. Defaults to `20rem` */
  width?: SizeValue // 15rem - 35rem, default 20rem
  /** Visual treatment of the panel; fixed adds a right border, floating adds a full border with rounded corners. Defaults to `fixed` */
  variant?: 'fixed' | 'floating'
}
