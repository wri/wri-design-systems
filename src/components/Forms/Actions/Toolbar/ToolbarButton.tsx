/** @jsxImportSource @emotion/react */

import { Button as ChakraButton, Box } from '@chakra-ui/react'
import { toolbarBaseStyles } from './styled'
import { ToolbarButtonProps } from './types'

import Tooltip from '../Tooltip'

const ToolbarButton = ({
  isExpanded,
  ariaLabel,
  icon,
  label,
  tooltip,
  disabled,
  onClick,
  showGap,
  vertical,
}: ToolbarButtonProps) => (
  <ChakraButton
    className='toolbar-item-button'
    css={toolbarBaseStyles(isExpanded)}
    aria-label={ariaLabel}
    disabled={disabled}
    onClick={onClick}
    mr={showGap && !vertical ? '16px' : '0'}
    mb={showGap && vertical ? '16px' : '0'}
  >
    <Box
      display='flex'
      overflow='hidden'
      style={{ justifyContent: 'flex-end', alignItems: 'center' }}
      whiteSpace='nowrap'
      transition='max-width 0.3s ease, opacity 0.2s ease, margin-left 0.3s ease'
      maxWidth={isExpanded ? '150px' : '32px'}
      padding='8px'
      margin={isExpanded ? '8px' : '0'}
    >
      {icon && (
        <Box as='span' mr={icon && isExpanded ? '8px' : '0px'}>
          <Tooltip content={tooltip} disabled={!tooltip}>
            {icon}
          </Tooltip>
        </Box>
      )}

      {label && (
        <Box
          aria-hidden={!isExpanded}
          overflow='hidden'
          maxWidth={isExpanded ? '150px' : '0px'}
          whiteSpace='nowrap'
          transition='max-width 0.3s ease, opacity 0.2s ease, margin-left 0.3s ease'
        >
          <Tooltip content={tooltip} disabled={!tooltip}>
            {label}
          </Tooltip>
        </Box>
      )}
    </Box>
  </ChakraButton>
)

export default ToolbarButton
