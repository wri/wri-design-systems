import { css } from '@emotion/react'
import { getThemedBorderWidth, getThemedColor } from '../../../lib/theme'

export const alertBannerStyles = (variant?: string) => {
  let backgroundColor = ''
  let color = ''
  let borderColor = ''
  if (variant === 'success') {
    backgroundColor = getThemedColor('success', 100)
    color = getThemedColor('success', 500)
    borderColor = getThemedColor('success', 300)
  } else if (variant === 'warning') {
    backgroundColor = getThemedColor('warning', 100)
    color = getThemedColor('warning', 500)
    borderColor = getThemedColor('warning', 300)
  } else if (variant === 'error') {
    backgroundColor = getThemedColor('error', 100)
    color = getThemedColor('error', 500)
    borderColor = getThemedColor('error', 300)
  } else if (variant === 'information') {
    backgroundColor = getThemedColor('secondary', 100)
    color = getThemedColor('secondary', 500)
    borderColor = getThemedColor('secondary', 200)
  } else if (variant === 'general-grey') {
    backgroundColor = getThemedColor('neutral', 200)
    color = getThemedColor('neutral', 700)
    borderColor = getThemedColor('neutral', 300)
  } else {
    backgroundColor = getThemedColor('neutral', 100)
    color = getThemedColor('neutral', 700)
    borderColor = getThemedColor('neutral', 300)
  }

  return css`
    display: flex;
    color: ${color};
    align-items: center;
    background-color: ${backgroundColor};
    border-bottom: ${getThemedBorderWidth(100)} solid ${borderColor};
    border-radius: 0;
  `
}
