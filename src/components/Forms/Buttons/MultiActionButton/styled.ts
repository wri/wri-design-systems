import { css } from '@emotion/react'
import { getThemedColor } from '../../../../lib/theme'
import { MultiActionButtonProps } from './types'

export const menuContentStyles = css`
  width: 200px;
  border: 1px solid ${getThemedColor('neutral', 600)};
  border-radius: 4px;
  padding: 8px;
`

export const menuTriggerStyles = (
  variant: MultiActionButtonProps['variant'],
) => css`
  &[data-state='open'] {
    background-color: ${variant === 'primary'
      ? getThemedColor('primary', 600)
      : getThemedColor('neutral', 200)} !important;
    border: 1px solid ${getThemedColor('primary', 800)} !important;
  }
`

export const menuItemStyles = (size: MultiActionButtonProps['size']) => css`
  font-size: ${size === 'small' ? '14px' : '16px'};
  line-height: ${size === 'small' ? '20px' : '24px'};
  color: ${getThemedColor('neutral', 800)};
  padding: 4px;
  cursor: pointer;

  &[data-highlighted] {
    background-color: ${getThemedColor('neutral', 200)};
  }
`
