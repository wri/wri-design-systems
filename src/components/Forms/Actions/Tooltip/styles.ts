import { css } from '@emotion/react'
import { getThemedColor } from '../../../../lib/theme'
import { TooltipProps } from './types'

export const tooltipTriggerStyles = css`
  &:focus-visible {
    outline: none;
  }
`

export const tooltipContentStyles = (variant: TooltipProps['variant']) => css`
  background-color: ${getThemedColor('neutral', 800)};
  border-radius: 4px;
  border: 1px solid ${getThemedColor('neutral', 800)};
  padding: 2px 8px;
  box-shadow: 0px 1px 2px 0px #0000000d;
  color: ${getThemedColor('neutral', 200)};
  font-size: 14px;
  line-height: 20px;

  .chakra-tooltip__arrowTip {
    border-color: ${getThemedColor('neutral', 800)} !important;
    background-color: ${getThemedColor('neutral', 800)} !important;
  }

  ${variant === 'text' &&
  `
    background-color: transparent;
    border: none;
    box-shadow: none;
    color: ${getThemedColor('neutral', 800)};
    font-size: 16px;
    line-height: 24px;
    text-shadow: 0 0 1px ${getThemedColor('neutral', 100)};
  `}
`
