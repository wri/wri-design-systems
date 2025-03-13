export type MapControlsProps = {
  items: {
    icon: React.ReactNode
    onClick?: () => void
    disabled?: boolean
    ariaLabel: string
  }[]
  vertical?: boolean
}
