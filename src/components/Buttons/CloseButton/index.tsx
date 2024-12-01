// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import { StyledCloseButton } from './styled'
import { CloseButtonProps } from './types'
import { CloseIcon } from '../../icons'

const CloseButton = ({ disabled, ...rest }: CloseButtonProps) => (
  <StyledCloseButton
    aria-label={rest['aria-label'] || 'Close'}
    disabled={disabled}
    {...rest}
  >
    <CloseIcon />
  </StyledCloseButton>
)

export default CloseButton
