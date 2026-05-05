import { css } from '@emotion/react'
import {
  getThemedColor,
  getThemedFontSize,
  getThemedLineHeight,
  getThemedSpacing,
} from '../../../lib/theme'

export const paginationPrevNextStyles = css`
  background: transparent;
  svg {
    path {
      fill: ${getThemedColor('primary', 500)};
    }
  }
`

export const paginationLabelCompactStyles = css`
  font-size: ${getThemedFontSize(400)};
  line-height: ${getThemedLineHeight(600)};
  font-weight: 700;
  color: ${getThemedColor('neutral', 900)};
`

export const paginationLabelsGroupStyles = css`
  span {
    height: ${getThemedSpacing(500)};
    width: ${getThemedSpacing(500)};
    cursor: initial;

    &:hover {
      background-color: transparent;
    }
  }
`

export const paginationLabelStyles = css`
  font-size: ${getThemedFontSize(400)};
  line-height: ${getThemedLineHeight(600)};
  font-weight: 400;
  color: ${getThemedColor('neutral', 700)};
  background: transparent;
  &[data-selected] {
    color: ${getThemedColor('neutral', 900)};
    font-weight: 700;
  }
`
