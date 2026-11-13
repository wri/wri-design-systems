import { ButtonProps } from '../../Forms/Actions/Button/types'
import { MenuItemProps } from '../../Overlays/Menu/types'
import type { NavbarLabels } from '../../../lib/i18n/types'
import type { SizeValue } from '../../../lib/sizing'

export type { NavbarLabels }

export type NavbarNavigationItemsProps = {
  /** Visible label for the navigation item */
  label: string
  /** Target link, when provided the item renders as a link, otherwise as a dropdown menu */
  link?: string
  /** Click handler for the navigation item */
  onClick?: () => void
  /** Icon rendered before the label */
  leftIcon?: React.ReactNode
  /** Icon rendered after the label */
  rightIcon?: React.ReactNode
  /** Menu items rendered in the dropdown when no link is provided */
  items?: MenuItemProps[]
}

export type NavbarProps = {
  /** Navbar height variant, 'condensed' renders a shorter bar. Defaults to `'default'` */
  variant?: 'default' | 'condensed'
  /** Color theme of the navbar. Defaults to `'light'` */
  theme?: 'light' | 'dark'
  /** Logo node rendered at the left of the navbar */
  logo?: React.ReactNode
  /** Link component from react router or next.js used to render navigation links */
  linkRouter: any // Link from react router or next.js
  /** Current pathname from react router or next.js used to highlight the active link */
  pathname: string // Pathname from react router or next.js
  /** Navigation items rendered after the logo, items with a link render as links and items with menu items render as dropdown menus */
  navigationSection?: NavbarNavigationItemsProps[]
  /** Custom nodes rendered in the right side of the navbar, hidden on mobile */
  utilitySection?: React.ReactNode[]
  /** Action buttons rendered at the far right of the navbar, each rendered as a Button */
  actionsSection?: {
    ariaLabel: ButtonProps['aria-label']
    children?: ButtonProps['children']
    variant?: ButtonProps['variant']
    size?: ButtonProps['size']
    onClick?: ButtonProps['onClick']
  }[]
  /** Maximum width of the navbar content container, numbers resolve to spacing-scale rem values. Defaults to `100%` */
  maxWidth?: SizeValue
  /** Sticks the navbar to the top of the viewport when true, otherwise it is absolutely positioned at the top of the page */
  fixed?: boolean
  /** Called with the navbar height whenever it changes between single and double bar layouts */
  onNavbarHeightChange?: (height: number) => void
  /** Custom background color of the navbar, overrides the theme default */
  backgroundColor?: string
  /** Override internal UI labels for internationalization support */
  labels?: Partial<NavbarLabels>
}
