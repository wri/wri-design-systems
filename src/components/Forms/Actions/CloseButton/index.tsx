/** @jsxImportSource @emotion/react */

import { closeButtonStyles } from './styled'
import { CloseButtonProps } from './types'
import { CloseIcon } from '../../../icons'
import IconButton from '../IconButton'
import { useLabels } from '../../../../lib/i18n/useLabels'

const CloseButton = ({ disabled, labels, ...rest }: CloseButtonProps) => {
  const l = useLabels('CloseButton', labels)
  return (
    <IconButton
      css={closeButtonStyles}
      icon={<CloseIcon />}
      aria-label={rest['aria-label'] || l.closeLabel}
      disabled={disabled}
      {...rest}
    />
  )
}

export default CloseButton
