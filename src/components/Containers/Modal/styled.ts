import { css } from '@emotion/react'
import {
  getThemedBorderWidth,
  getThemedColor,
  getThemedRadius,
  getThemedSpacing,
} from '../../../lib/theme'
import { resolveSizeValue, SizeValue } from '../../../lib/sizing'
import { ModalProps } from './types'

export const modalContainerStyles = (
  size: ModalProps['size'] = 'medium',
  width?: SizeValue,
  height?: SizeValue,
  maxHeight?: SizeValue,
) => {
  const widthMap = {
    xsmall: '15rem',
    small: '20rem',
    medium: '30rem',
    large: '40rem',
    xlarge: '60rem',
    'full-width': '90%',
  }
  const maxHeightMap = {
    xsmall: '35rem',
    small: '45rem',
    medium: '45rem',
    large: '45rem',
    xlarge: '45rem',
    'full-width': 'unset',
  }
  const computedWidth = width
    ? resolveSizeValue(width)
    : widthMap[size] || '15rem'
  const computedMaxHeight = maxHeight
    ? resolveSizeValue(maxHeight)
    : maxHeightMap[size] || '35rem'
  const cappedMaxHeight =
    computedMaxHeight === 'unset' ? '80vh' : `min(${computedMaxHeight}, 80vh)`
  let computedHeight = 'auto'
  if (height) {
    computedHeight = resolveSizeValue(height)
  } else if (size === 'full-width') {
    computedHeight = '90%'
  }

  return css`
    max-width: 100%;
    width: ${computedWidth};
    height: ${computedHeight};
    max-height: ${cappedMaxHeight};
    background-color: ${getThemedColor('neutral', 100)};
    border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 300)};
    border-radius: ${getThemedRadius(300)};
    box-shadow: 0 0.25rem 0.375rem -0.25rem #0000001a;
    box-shadow: 0 0.625rem 0.9375rem -0.1875rem #0000001a;
  `
}

export const modalHeaderStyles = css`
  height: 100%;
  min-height: ${getThemedSpacing(1000)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${getThemedSpacing(200)};
  border-bottom: ${getThemedBorderWidth(100)} solid
    ${getThemedColor('neutral', 300)};
`

export const modalCloseButtonStyles = css`
  top: ${getThemedSpacing(300)};
`

export const modalContentStyles = css`
  padding: ${getThemedSpacing(300)};
`
