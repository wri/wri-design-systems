import { MenuItemProps } from '../../Forms/Actions/Menu/types'

export type NavbarNavigationItemsProps = {
  label: string
  link?: string
  onClick?: () => void
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  items?: MenuItemProps[]
}

export type NavbarProps = {
  logo?: React.ReactNode
  linkRouter: any // Link from react router or next.js
  pathname: string // Pathname from react router or next.js
  navigationSection?: NavbarNavigationItemsProps[]
  utilitySection?: React.ReactNode[]
  actionsSection?: {
    label: string
    onClick?: () => void
  }[]
  maxWidth?: number
  fixed?: boolean
  onNavbarHeightChange?: (height: number) => void
}
