import { Blockquote as ChakraBlockquote } from '@chakra-ui/react'

export type BlockquoteProps = Omit<
  ChakraBlockquote.RootProps,
  'colorPalette' | 'variant'
> & {
  /** Quote content. */
  children: React.ReactNode
  /** Optional citation source rendered below the quote. */
  cite?: React.ReactNode
  /** Optional className to apply to the blockquote element. */
  className?: string
  /** Optional to change the quote bar color */
  color?: string
  /** Optional to render an icon instead of the quote bar */
  icon?: React.ReactNode
  justify?: 'start' | 'center' | 'end'
}
