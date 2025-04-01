import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'

export const paginationPrevNextStyles = css`
  svg {
    path {
      fill: ${getThemedColor('primary', 500)};
    }
  }
`

export const paginationLabelCompactStyles = css`
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: ${getThemedColor('neutral', 900)};
`

export const paginationLabelsGroupStyles = css`
  span {
    height: 20px;
    width: 20px;
    cursor: initial;

    &:hover {
      background-color: transparent;
    }
  }
`

export const paginationLabelStyles = css`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: ${getThemedColor('neutral', 700)};

  &[data-selected] {
    color: ${getThemedColor('neutral', 900)};
    font-weight: 700;
  }
`
