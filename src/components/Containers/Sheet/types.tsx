export type SheetProps = {
  header?: React.ReactNode
  content: React.ReactNode
  footer?: React.ReactNode
  open: boolean
  onClose?: () => void
  minimizedHeight?: number // default 50px
  midHeight?: number // default 200px
  maxFullHeight?: number // default 1000px
  defaultSnap?: 'closed' | 'minimized' | 'mid' | 'full'
}
