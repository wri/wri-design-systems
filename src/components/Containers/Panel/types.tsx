import { SizeValue } from '../../../lib/sizing'

export type PanelProps = {
  header?: React.ReactNode
  content: React.ReactNode
  footer?: React.ReactNode
  width?: SizeValue // 15rem - 35rem, default 20rem
  variant?: 'fixed' | 'floating'
}
