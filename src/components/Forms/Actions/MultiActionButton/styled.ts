import { css } from '@emotion/react'
import { getThemedColor } from '../../../../lib/theme'
import { MultiActionButtonProps } from './types'

export const menuContentStyles = css`
  width: 12.5rem;
  border: 0.0625rem solid ${getThemedColor('neutral', 600)};
  border-radius: 0.25rem;
  padding: 0.5rem;
`

export const menuTriggerStyles = (
  variant: MultiActionButtonProps['variant'],
) => css`
  &[data-state='open'] {
    background-color: ${variant === 'primary'
      ? getThemedColor('primary', 600)
      : getThemedColor('neutral', 200)} !important;
    border: 0.0625rem solid ${getThemedColor('primary', 800)} !important;
  }
`

export const menuItemStyles = (size: MultiActionButtonProps['size']) => css`
  font-size: ${size === 'small' ? '0.875rem' : '1rem'};
  line-height: ${size === 'small' ? '1.25rem' : '1.5rem'};
  color: ${getThemedColor('neutral', 800)};
  padding: 0.25rem;
  cursor: pointer;

  &[data-highlighted] {
    background-color: ${getThemedColor('neutral', 200)};
  }
`
export const disabledGroupStyles = css`
  &:focus-visible {
    outline-color: ${getThemedColor('primary', 700)};
  }
`
