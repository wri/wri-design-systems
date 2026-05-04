import { css } from '@emotion/react'
import {
  getThemedBorderWidth,
  getThemedColor,
  getThemedFontSize,
  getThemedLineHeight,
  getThemedRadius,
  getThemedSpacing,
} from '../../../../lib/theme'
import { TooltipProps } from './types'

export const tooltipTriggerStyles = css`
  &:focus-visible {
    outline: none;
  }
`

export const tooltipContentStyles = (variant: TooltipProps['variant']) => css`
  background-color: ${getThemedColor('neutral', 800)};
  border-radius: ${getThemedRadius(300)};
  border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 800)};
  padding: ${getThemedSpacing(50)} ${getThemedSpacing(200)};
  box-shadow: 0px ${getThemedBorderWidth(100)} ${getThemedSpacing(50)} 0px #0000000d;
  color: ${getThemedColor('neutral', 200)};
  font-size: ${getThemedFontSize(300)};
  line-height: ${getThemedLineHeight(500)};

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
    font-size: ${getThemedFontSize(400)};
    line-height: ${getThemedLineHeight(600)};
    text-shadow: 0 0 ${getThemedBorderWidth(100)} ${getThemedColor('neutral', 100)};
  `}
`
