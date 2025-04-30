import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'
import { ModalProps } from './types'

export const modalContainerStyles = (size: ModalProps['size']) => css`
  width: 240px;
  ${size === 'medium' && 'width: 320px;'}
  ${size === 'large' && 'width: 440px;'}
  ${size === 'xlarge' && 'width: 640px;'}

  background-color: ${getThemedColor('neutral', 100)};
  border: 1px solid ${getThemedColor('neutral', 300)};
  border-radius: 4px;
  box-shadow: 0px 4px 6px -4px #0000001a;
  box-shadow: 0px 10px 15px -3px #0000001a;
`

export const modalHeaderStyles = css`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 1px solid ${getThemedColor('neutral', 300)};
`

export const modalTitleStyles = css`
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: ${getThemedColor('neutral', 800)};
`

export const modalCloseButtonStyles = css`
  top: 10px;
`

export const modalContentStyles = css`
  padding: 12px;
`
