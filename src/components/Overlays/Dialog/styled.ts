import { css } from '@emotion/react'
import {
  getThemedBorderWidth,
  getThemedColor,
  getThemedFontSize,
  getThemedLineHeight,
  getThemedRadius,
  getThemedSpacing,
} from '../../../lib/theme'
import { resolveSizeValue, SizeValue } from '../../../lib/sizing'

export const dialogBackdropStyles = css`
  background: rgba(0, 0, 0, 0.64);
`

export const dialogContainerStyles = (
  width?: SizeValue,
  isScrollOutside?: boolean,
) => css`
  width: ${width ? resolveSizeValue(width) : '27.5rem'};
  max-width: calc(100% - 2.5rem);
  max-height: ${isScrollOutside ? 'initial' : 'calc(100dvh - 8.5rem)'};
  background-color: ${getThemedColor('neutral', 100)};
  border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 300)};
  border-radius: ${getThemedRadius(400)};
  box-shadow:
    0 0.25rem 0.375rem -0.25rem #0000001a,
    0 0.625rem 0.9375rem -0.1875rem #0000001a;
  padding: ${getThemedSpacing(400)};
`

export const dialogHeaderStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${getThemedSpacing(300)};
  padding: 0;
  margin-bottom: ${getThemedSpacing(300)};
`

export const dialogTitleStyles = css`
  font-size: ${getThemedFontSize(500)};
  line-height: ${getThemedLineHeight(700)};
  font-weight: bold;
  color: ${getThemedColor('neutral', 800)};
`

export const dialogCloseButtonStyles = css`
  top: ${getThemedSpacing(400)};
  right: ${getThemedSpacing(400)};
  margin-left: ${getThemedSpacing(300)};
`

export const dialogBodyStyles = css`
  padding: 0;
  font-size: ${getThemedFontSize(400)};
  line-height: ${getThemedLineHeight(600)};
  color: ${getThemedColor('neutral', 700)};
  margin-bottom: ${getThemedSpacing(300)};
`

export const dialogFooterStyles = css`
  display: flex;
  justify-content: flex-end;
  gap: ${getThemedSpacing(400)};
  padding: 0;
  margin-top: ${getThemedSpacing(300)};
`
