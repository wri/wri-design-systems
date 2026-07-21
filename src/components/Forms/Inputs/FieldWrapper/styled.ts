import { css } from '@emotion/react'
import {
  getThemedBorderWidth,
  getThemedColor,
  getThemedFontSize,
  getThemedLineHeight,
  getThemedSpacing,
} from '../../../../lib/theme'
import { FieldWrapperSize } from './types'

export const fieldFocusVisibleStyleObject = {
  outline: `${getThemedBorderWidth(200)} solid ${getThemedColor('primary', 700)}`,
  outlineOffset: getThemedSpacing(50),
  boxShadow: `0 0 0 0.125rem ${getThemedColor('neutral', 100)}, rgba(0, 0, 0, 0.05) 0 0.125rem 0.125rem 0.25rem`,
} as const

export const fieldFocusVisibleStyles = css`
  outline: ${fieldFocusVisibleStyleObject.outline};
  outline-offset: ${fieldFocusVisibleStyleObject.outlineOffset};
  box-shadow: ${fieldFocusVisibleStyleObject.boxShadow};
`

export const getPrimaryOverlayColor = (percentage: number) =>
  `color-mix(in srgb, ${getThemedColor('primary', 500)} ${percentage}%, transparent)`

export const fieldWrapperContainerStyles = (
  noMarginBottom?: boolean,
  hasError?: boolean,
) => css`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: ${hasError ? '1rem' : '0'};

  &:focus-visible {
    ${fieldFocusVisibleStyles}
  }
`

export const fieldWrapperErrorBarStyles = css`
  width: 0.1875rem;
  flex-shrink: 0;
  align-self: stretch;
  background-color: ${getThemedColor('error', 900)};
`

export const fieldWrapperContentStyles = css`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: ${getThemedSpacing(200)};
  width: 100%;
  flex: 1;
  min-width: 0;
`

export const fieldWrapperHeaderStyles = css`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: ${getThemedSpacing(50)};
  width: 100%;
`

export const fieldWrapperLabelStyles = (
  size: FieldWrapperSize = 'default',
  disabled?: boolean,
) => css`
  color: ${getThemedColor('neutral', disabled ? 600 : 900)};
  font-size: ${size === 'small'
    ? getThemedFontSize(300)
    : getThemedFontSize(400)};
  font-weight: 400;
  line-height: ${size === 'small'
    ? getThemedLineHeight(500)
    : getThemedLineHeight(600)};
  display: flex;
  align-items: flex-start;
  text-align: left;
  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;
  cursor: text;
  margin: 0;

  span {
    color: ${getThemedColor('neutral', disabled ? 600 : 700)};
  }

  .chakra-field__requiredIndicator {
    margin-top: ${getThemedSpacing(100)};
    color: ${disabled
      ? getThemedColor('neutral', 600)
      : getThemedColor('error', 500)};
  }

  /* Group-semantics required asterisk */
  > span[data-required-indicator] {
    color: ${disabled
      ? getThemedColor('neutral', 600)
      : getThemedColor('error', 500)};
    margin-right: 0.1875rem;
  }

  &[data-disabled] {
    color: ${getThemedColor('neutral', 600)};

    span {
      color: ${getThemedColor('neutral', 600)};
    }
  }
`

export const fieldWrapperCaptionStyles = (
  size: FieldWrapperSize = 'default',
  disabled?: boolean,
) => css`
  color: ${getThemedColor('neutral', disabled ? 600 : 700)};
  font-size: ${size === 'small'
    ? getThemedFontSize(200)
    : getThemedFontSize(300)};
  font-weight: 400;
  line-height: ${size === 'small'
    ? getThemedLineHeight(400)
    : getThemedLineHeight(500)};
  text-align: left;
  margin: 0;

  &:first-letter {
    text-transform: uppercase;
  }
`

export const fieldWrapperErrorMessageStyles = (
  size: FieldWrapperSize = 'default',
) => css`
  color: ${getThemedColor('error', 900)};
  font-size: ${size === 'small'
    ? getThemedFontSize(200)
    : getThemedFontSize(300)};
  font-weight: 700;
  line-height: ${size === 'small'
    ? getThemedLineHeight(400)
    : getThemedLineHeight(500)};
  text-align: left;
  margin: 0;
`

export const fieldWrapperFooterStyles = css`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: ${getThemedSpacing(50)};
  width: 100%;
`
