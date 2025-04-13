import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'
import { FooterProps } from './types'

export const footerStyles = (
  fixed?: FooterProps['fixed'],
  filled?: FooterProps['filled'],
) => css`
  min-height: 56px;
  width: 100vw;
  position: ${fixed ? 'fixed' : 'absolute'};
  bottom: 0;
  left: 0;
  background-color: ${filled ? getThemedColor('neutral', 200) : 'transparent'};
  background-color: ${getThemedColor('neutral', filled ? 200 : 100)};
  border-top: 1px solid ${getThemedColor('neutral', 400)};
  z-index: 101;
`

export const footerContainerStyles = (
  maxWidth?: FooterProps['maxWidth'],
) => css`
  height: 100%;
  width: 100%;
  max-width: ${maxWidth ? `${maxWidth}px` : '100%'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  padding: 12px 16px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const footerContentStyles = css`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;

  a {
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    color: ${getThemedColor('neutral', 700)};
    text-decoration: underline;
  }
`

export const footerLabelStyles = css`
  width: 240px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: ${getThemedColor('neutral', 600)};
  text-align: right;

  @media screen and (max-width: 768px) {
    text-align: left;
  }
`
