// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import { StyledIconButton } from './styled'
import { IconButtonProps } from './types'

const IconButton = ({ icon, disabled, ...rest }: IconButtonProps) => (
  <StyledIconButton
    aria-label={rest['aria-label']}
    disabled={disabled}
    {...rest}
  >
    {icon}
  </StyledIconButton>
)

export default IconButton
