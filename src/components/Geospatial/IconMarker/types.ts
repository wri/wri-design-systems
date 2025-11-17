export type IconMarkerProps = {
  ariaLabel?: string
  icon?: React.ReactNode
  backgroundColor?: string
  onClick?: () => void
  count?: number
  mode?: 'dark' | 'light'
  variant?: 'cluster' | 'simple-pin' | 'icon'
}
