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
  border-radius: 0.25rem;
  border: 0.0625rem solid ${getThemedColor('neutral', 800)};
  padding: 0.125rem 0.5rem;
  box-shadow: 0px 0.0625rem 0.125rem 0px #0000000d;
  color: ${getThemedColor('neutral', 200)};
  font-size: 0.875rem;
  line-height: 1.25rem;

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
    font-size: 1rem;
    line-height: 1.5rem;
    text-shadow: 0 0 0.0625rem ${getThemedColor('neutral', 100)};
  `}
`
