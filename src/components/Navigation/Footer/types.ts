import type { SizeValue } from '../../../lib/sizing'

export type FooterProps = {
  children: React.ReactNode
  label?: string
  fixed?: boolean
  filled?: boolean
  maxWidth?: SizeValue
  additionalLogos?: React.ReactNode[]
}
