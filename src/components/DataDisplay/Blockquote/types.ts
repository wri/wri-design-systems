import { Blockquote as ChakraBlockquote } from '@chakra-ui/react'

export type BlockquoteProps = Omit<
  ChakraBlockquote.RootProps,
  'colorPalette' | 'variant'
> & {
  /** Quote content */
  children: React.ReactNode
  /** Optional citation source rendered below the quote */
  cite?: React.ReactNode
  /** Additional className applied to the blockquote root */
  className?: string
  /** Quote bar color */
  color?: string
  /** Icon rendered instead of the quote bar */
  icon?: React.ReactNode
  /** Aligns the blockquote content */
  justify?: 'start' | 'center' | 'end'
}
