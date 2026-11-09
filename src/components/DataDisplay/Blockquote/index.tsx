/** @jsxImportSource @emotion/react */

import { Blockquote as ChakraBlockquote } from '@chakra-ui/react'

import { blockquoteStyles } from './styled'
import { BlockquoteProps } from './types'

const Blockquote = ({
  children,
  cite,
  className,
  color,
  icon,
  justify,
}: BlockquoteProps) => (
  <ChakraBlockquote.Root
    css={blockquoteStyles(color, Boolean(icon))}
    className={className}
    justify={justify}
  >
    {icon ? (
      <ChakraBlockquote.Icon asChild>{icon}</ChakraBlockquote.Icon>
    ) : null}
    <ChakraBlockquote.Content>{children}</ChakraBlockquote.Content>
    {cite ? (
      <ChakraBlockquote.Caption>
        <cite>{cite}</cite>
      </ChakraBlockquote.Caption>
    ) : null}
  </ChakraBlockquote.Root>
)

export default Blockquote
