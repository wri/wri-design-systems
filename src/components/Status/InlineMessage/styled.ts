import { css } from '@emotion/react'
import {
  getThemedBorderWidth,
  getThemedColor,
  getThemedFontSize,
  getThemedLineHeight,
  getThemedRadius,
  getThemedSpacing,
} from '../../../lib/theme'

export const defaultInlineMessageStyles = (
  size: string,
  isButtonRight?: boolean,
) => {
  let maxWidth = '14.625rem'
  if (size === 'full-width') {
    maxWidth = '100%'
  } else if (size === 'large') {
    maxWidth = '20rem'
  }

  return css`
    width: 100%;
    max-width: ${maxWidth};
    border-radius: ${getThemedRadius(300)};
    padding: ${size === 'small'
      ? `${getThemedSpacing(200)} ${getThemedSpacing(200)} ${getThemedSpacing(300)} ${getThemedSpacing(200)}`
      : `${getThemedSpacing(200)} ${getThemedSpacing(300)} ${getThemedSpacing(300)} ${getThemedSpacing(300)}`};
    display: flex;
    align-items: ${isButtonRight ? 'center' : 'flex-start'};
    justify-content: ${isButtonRight ? 'space-between' : 'flex-start'};
    flex-direction: ${isButtonRight ? 'row' : 'column'};
    gap: ${getThemedSpacing(200)};
    margin-bottom: ${getThemedSpacing(400)};

    button {
      margin-left: ${isButtonRight ? 0 : getThemedSpacing(600)};
    }
  `
}

export const inlineMessageHeaderStyles = css`
  display: flex;
  align-items: flex-start;
  gap: ${getThemedSpacing(200)};

  svg {
    margin-top: 0.375rem;
  }
`

export const inlineMessageTitleStyles = (size: string) => css`
  max-width: 45rem;
  color: ${getThemedColor('neutral', 800)};
  font-size: ${size === 'small'
    ? getThemedFontSize(300)
    : getThemedFontSize(500)};
  line-height: ${size === 'small'
    ? getThemedLineHeight(500)
    : getThemedLineHeight(700)};
  font-weight: 400;
  text-align: left;
`

export const inlineMessageCaptionStyles = (
  size: string,
  hasIcon: boolean,
) => css`
  max-width: 45rem;
  color: ${getThemedColor('neutral', 700)};
  font-size: ${size === 'small'
    ? getThemedFontSize(200)
    : getThemedFontSize(400)};
  line-height: ${size === 'small'
    ? getThemedLineHeight(400)
    : getThemedLineHeight(600)};
  font-weight: 400;
  margin-left: ${hasIcon ? getThemedSpacing(600) : '0'};
  text-align: left;
`

export const inlineMessageCaptionContainerStyles = (
  size: string,
  hasIcon: boolean,
) => css`
  max-width: 45rem;
  color: ${getThemedColor('neutral', 700)};
  font-size: ${size === 'small'
    ? getThemedFontSize(200)
    : getThemedFontSize(400)};
  line-height: ${size === 'small'
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
