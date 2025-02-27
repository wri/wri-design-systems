/** @jsxImportSource @emotion/react */

import { Button as ChakraButton } from '@chakra-ui/react'

import { iconButtonStyles } from './styled'
import { IconButtonProps } from './types'

const IconButton = ({ icon, disabled, ...rest }: IconButtonProps) => (
  <ChakraButton
    css={iconButtonStyles}
    aria-label={rest['aria-label']}
    disabled={disabled}
    {...rest}
  >
    {icon}
  </ChakraButton>
)

export default IconButton
