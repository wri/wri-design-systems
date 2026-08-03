/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import { forwardRef } from 'react'
import { Button as ChakraButton } from '@chakra-ui/react'
import {
  toolbarBaseStyles,
  toolbarItemSurfaceStyles,
  toolbarItemHighlightStyles,
  toolbarItemIconStyles,
  toolbarItemLabelStyles,
} from './styled'
import { ToolbarButtonProps } from './types'
import { useTabFocus } from '../../Inputs/FieldWrapper/useTabFocus'

import Tooltip from '../Tooltip'

const getTooltipPosition = (
  expandSide: NonNullable<ToolbarButtonProps['expandSide']>,
  vertical?: boolean,
) => {
  if (expandSide === 'left') {
    return vertical ? 'left' : 'top'
  }
  return vertical ? 'right' : 'bottom'
}

const ToolbarButton = forwardRef<HTMLButtonElement, ToolbarButtonProps>(
  (
    {
      isExpanded,
      ariaLabel,
      icon,
      label,
      tooltip,
      disabled,
      onClick,
      vertical,
      expandSide = 'right',
      active,
    },
    ref,
  ) => {
    const tabFocus = useTabFocus<HTMLButtonElement>()
    const tooltipPosition = getTooltipPosition(expandSide, vertical)

    const button = (
      <ChakraButton
        ref={ref}
        className='toolbar-item-button'
        css={toolbarBaseStyles(isExpanded, !!vertical, expandSide)}
        aria-label={ariaLabel}
        aria-pressed={typeof active === 'boolean' ? active : undefined}
        data-active={active || undefined}
        disabled={disabled}
        onClick={onClick}
        onFocus={tabFocus.onFocus}
        onBlur={tabFocus.onBlur}
        data-focus-visible={tabFocus.isTabFocused || undefined}
        focusVisibleRing='none'
      >
        <span
          className='toolbar-item-surface'
          css={toolbarItemSurfaceStyles(isExpanded, !!vertical, expandSide)}
        >
          <span
            css={toolbarItemHighlightStyles(isExpanded, !!vertical, expandSide)}
          >
            {icon ? (
              <span className='toolbar-item-icon' css={toolbarItemIconStyles}>
                {icon}
              </span>
            ) : null}
            {label ? (
              <span
                className='toolbar-item-label'
                css={toolbarItemLabelStyles(isExpanded, !!vertical, expandSide)}
                aria-hidden={!isExpanded}
              >
                <span className='toolbar-item-label-text'>{label}</span>
              </span>
            ) : null}
          </span>
        </span>
      </ChakraButton>
    )

    if (!tooltip) {
      return button
    }

    return (
      <Tooltip
        content={tooltip}
        position={tooltipPosition}
        preserveFocusOnChild
        disabled={isExpanded}
      >
        {button}
      </Tooltip>
    )
  },
)

ToolbarButton.displayName = 'ToolbarButton'

export default ToolbarButton
