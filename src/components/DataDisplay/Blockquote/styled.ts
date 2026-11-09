import { css } from '@emotion/react'
import {
  getThemedColor,
  getThemedFontSize,
  getThemedLineHeight,
  getThemedSpacing,
} from '../../../lib/theme'

export const blockquoteStyles = (color?: string, hasIcon?: boolean) => css`
  margin: 0;
  padding-inline: ${getThemedSpacing(500)};
  border-inline-start: ${hasIcon
    ? 'none'
    : `3px solid ${color || getThemedColor('secondary', 300)}`};
  color: ${getThemedColor('neutral', 900)};
  font-size: ${getThemedFontSize(400)};
  line-height: ${getThemedLineHeight(600)};
  font-weight: 400;
  word-break: break-word;

  & > * + * {
    margin-top: ${getThemedSpacing(300)};
  }

  & cite {
    display: block;
    color: ${getThemedColor('neutral', 700)};
    font-style: normal;
  }
`
