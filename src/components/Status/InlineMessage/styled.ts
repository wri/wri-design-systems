import { css } from '@emotion/react'
import {
  getThemedBorderWidth,
  getThemedColor,
  getThemedFontSize,
  getThemedLineHeight,
  getThemedRadius,
  getThemedSpacing,
} from '../../../lib/theme'
import type { InlineMessageSize } from './types'

const isSmallSize = (size: InlineMessageSize) =>
  size === 'small' || size === 'small-full-width'

const isFullWidthSize = (size: InlineMessageSize) =>
  size === 'full-width' || size === 'small-full-width'

export const defaultInlineMessageStyles = (
  size: InlineMessageSize,
  isButtonRight?: boolean,
) => {
  let maxWidth = '14.875rem'
  if (isFullWidthSize(size)) {
    maxWidth = '100%'
  } else if (size === 'large') {
    maxWidth = '22.875rem'
  }

  return css`
    width: 100%;
    max-width: ${maxWidth};
    border-radius: ${getThemedRadius(300)};
    padding: ${isSmallSize(size)
      ? `${getThemedSpacing(200)} ${getThemedSpacing(200)} ${getThemedSpacing(300)} ${getThemedSpacing(200)}`
      : `${getThemedSpacing(200)} ${getThemedSpacing(300)} ${getThemedSpacing(300)} ${getThemedSpacing(300)}`};
    display: flex;
    align-items: ${isButtonRight ? 'center' : 'flex-start'};
    justify-content: ${isButtonRight ? 'space-between' : 'flex-start'};
    flex-direction: ${isButtonRight ? 'row' : 'column'};
    gap: ${getThemedSpacing(200)};

    button {
      margin-left: ${isButtonRight ? 0 : getThemedSpacing(600)};
    }
  `
}

export const inlineMessageHeaderStyles = css`
  display: flex;
  align-items: baseline;
  gap: ${getThemedSpacing(200)};

  svg {
    margin-top: 0.1875rem;
  }
`

export const inlineMessageTitleStyles = (size: InlineMessageSize) => css`
  color: ${getThemedColor('neutral', 800)};
  font-size: ${isSmallSize(size)
    ? getThemedFontSize(300)
    : getThemedFontSize(500)};
  line-height: ${isSmallSize(size)
    ? getThemedLineHeight(500)
    : getThemedLineHeight(700)};
  font-weight: 400;
  text-align: left;
`

export const inlineMessageCaptionStyles = (
  size: InlineMessageSize,
  hasIcon: boolean,
) => css`
  color: ${getThemedColor('neutral', 700)};
  font-size: ${isSmallSize(size)
    ? getThemedFontSize(200)
    : getThemedFontSize(400)};
  line-height: ${isSmallSize(size)
    ? getThemedLineHeight(400)
    : getThemedLineHeight(600)};
  font-weight: 400;
  margin-left: ${hasIcon ? getThemedSpacing(600) : '0'};
  text-align: left;
`

export const inlineMessageCaptionContainerStyles = (
  size: InlineMessageSize,
  hasIcon: boolean,
) => css`
  color: ${getThemedColor('neutral', 700)};
  font-size: ${isSmallSize(size)
    ? getThemedFontSize(200)
    : getThemedFontSize(400)};
  line-height: ${isSmallSize(size)
    ? getThemedLineHeight(400)
    : getThemedLineHeight(600)};
  font-weight: 400;
  margin-left: ${hasIcon ? getThemedSpacing(600) : '0'};
  text-align: left;
`

export const infoWhiteInlineMessageStyles = css`
  background-color: ${getThemedColor('neutral', 100)};
  border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 300)};
  color: ${getThemedColor('neutral', 700)};
`

export const infoGreyInlineMessageStyles = css`
  background-color: ${getThemedColor('neutral', 200)};
  border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 300)};
  color: ${getThemedColor('neutral', 700)};
`

export const successInlineMessageStyles = css`
  background-color: ${getThemedColor('success', 100)};
  border: ${getThemedBorderWidth(100)} solid ${getThemedColor('success', 300)};
  color: ${getThemedColor('success', 500)};

  p {
    color: ${getThemedColor('success', 900)};
  }
`

export const warningInlineMessageStyles = css`
  background-color: ${getThemedColor('warning', 100)};
  border: ${getThemedBorderWidth(100)} solid ${getThemedColor('warning', 300)};
  color: ${getThemedColor('warning', 500)};

  p {
    color: ${getThemedColor('warning', 900)};
  }
`

export const errorInlineMessageStyles = css`
  background-color: ${getThemedColor('error', 100)};
  border: ${getThemedBorderWidth(100)} solid ${getThemedColor('error', 300)};
  color: ${getThemedColor('error', 500)};

  p {
    color: ${getThemedColor('error', 900)};
  }
`
