export type PanelProps = {
  header?: React.ReactNode
  content: React.ReactNode
  footer?: React.ReactNode
  width?: string // 240 - 560px, default 320px
  variant?: 'fixed' | 'floating'
}
