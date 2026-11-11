import type { SizeValue } from '../../../lib/sizing'

export type FooterProps = {
  /** Footer content, typically legal links rendered in the center of the footer */
  children: React.ReactNode
  /** Copyright label text rendered with the current year appended. Defaults to `'© World Resources Institute'` */
  label?: string
  /** Sticks the footer to the bottom of the viewport when true, otherwise it is absolutely positioned at the bottom of the page */
  fixed?: boolean
  /** Applies a neutral background color to the footer when true */
  filled?: boolean
  /** Maximum width of the footer content container, numbers resolve to spacing-scale rem values. Defaults to `100%` */
  maxWidth?: SizeValue
  /** Additional logo nodes displayed next to the WRI logo */
  additionalLogos?: React.ReactNode[]
}
