import { css } from '@emotion/react'
import {
  getThemedColor,
  getThemedBorderWidth,
  getThemedFontSize,
  getThemedLineHeight,
  getThemedSpacing,
} from '../../../lib/theme'
import { resolveSizeValue } from '../../../lib/sizing'
import { FooterProps } from './types'

export const footerStyles = (
  fixed?: FooterProps['fixed'],
  filled?: FooterProps['filled'],
) => css`
  min-height: ${getThemedSpacing(1400)};
  width: 100vw;
  position: ${fixed ? 'sticky' : 'absolute'};
  bottom: 0;
  left: 0;
  background-color: ${filled ? getThemedColor('neutral', 200) : 'transparent'};
  border-top: ${getThemedBorderWidth(100)} solid
    ${getThemedColor('neutral', 400)};
  z-index: 101;
`

export const footerContainerStyles = (
  maxWidth?: FooterProps['maxWidth'],
) => css`
  height: 100%;
  width: 100%;
  max-width: ${maxWidth != null ? resolveSizeValue(maxWidth) : '100%'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${getThemedSpacing(800)};
  padding: ${getThemedSpacing(300)} ${getThemedSpacing(400)};
  margin: 0 auto;

  @media screen and (max-width: 48rem) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const footerContentStyles = css`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${getThemedSpacing(600)};

  a {
    font-size: ${getThemedFontSize(300)};
    line-height: ${getThemedLineHeight(500)};
    font-weight: 400;
    color: ${getThemedColor('neutral', 700)};
    text-decoration: underline;
  }
`

export const footerLabelStyles = css`
  width: 15rem;
  font-size: ${getThemedFontSize(300)};
  line-height: ${getThemedLineHeight(500)};
  font-weight: 400;
  color: ${getThemedColor('neutral', 600)};
  text-align: right;

  @media screen and (max-width: 48rem) {
    text-align: left;
  }
`

export const footerLogosContainerStyles = css`
  display: flex;
  align-items: center;
  gap: ${getThemedSpacing(400)};
`
