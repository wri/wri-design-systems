/** @jsxImportSource @emotion/react */

import { closeButtonStyles } from './styled'
import { CloseButtonProps } from './types'
import { CloseIcon } from '../../../icons'
import { IconButton } from '../../..'

const CloseButton = ({ disabled, ...rest }: CloseButtonProps) => (
  <IconButton
    css={closeButtonStyles}
    icon={<CloseIcon />}
    aria-label={rest['aria-label'] || 'Close'}
    disabled={disabled}
    {...rest}
  />
)

export default CloseButton
