import { ButtonProps } from '../../Forms/Actions/Button/types'
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
  variant?: 'default' | 'condensed'
  theme?: 'light' | 'dark'
  logo?: React.ReactNode
  linkRouter: any // Link from react router or next.js
  pathname: string // Pathname from react router or next.js
  navigationSection?: NavbarNavigationItemsProps[]
  utilitySection?: React.ReactNode[]
  actionsSection?: {
    ariaLabel: ButtonProps['aria-label']
    children?: ButtonProps['children']
    variant?: ButtonProps['variant']
    size?: ButtonProps['size']
    onClick?: ButtonProps['onClick']
  }[]
  maxWidth?: number
  fixed?: boolean
  onNavbarHeightChange?: (height: number) => void
  backgroundColor?: string
}
