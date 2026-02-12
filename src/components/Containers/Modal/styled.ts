import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'
import { ModalProps } from './types'

export const modalContainerStyles = (
  size: ModalProps['size'] = 'medium',
  width?: string,
  height?: string,
  maxHeight?: string,
) => {
  const widthMap = {
    xsmall: '240px',
    small: '320px',
    medium: '480px',
    large: '640px',
    xlarge: '960px',
    'full-width': '90%',
  }
  const maxHeightMap = {
    xsmall: '560px',
    small: '720px',
    medium: '720px',
    large: '720px',
    xlarge: '720px',
    'full-width': 'unset',
  }
  const computedWidth = width || widthMap[size] || '240px'
  const computedMaxHeight = maxHeight || maxHeightMap[size] || '560px'
  let computedHeight = 'auto'
  if (height) {
    computedHeight = height
  } else if (size === 'full-width') {
    computedHeight = '90%'
  }

  return css`
    max-width: 100%;
    width: ${computedWidth};
    height: ${computedHeight};
    max-height: ${computedMaxHeight};
    background-color: ${getThemedColor('neutral', 100)};
    border: 1px solid ${getThemedColor('neutral', 300)};
    border-radius: 4px;
    box-shadow: 0px 4px 6px -4px #0000001a;
    box-shadow: 0px 10px 15px -3px #0000001a;
  `
}

export const modalHeaderStyles = css`
  height: 100%;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 1px solid ${getThemedColor('neutral', 300)};
`

export const modalCloseButtonStyles = css`
  top: 10px;
`

export const modalContentStyles = css`
  padding: 12px;
`
