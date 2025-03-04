import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'

export const breadcrumbItemStyles = css`
  a,
  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: ${getThemedColor('neutral', 600)};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    text-transform: capitalize;

    svg {
      height: 16px;
      width: 16px;
      color: ${getThemedColor('neutral', 600)};
    }
  }

  p {
    font-weight: 700;
    color: ${getThemedColor('neutral', 800)};

    svg {
      color: ${getThemedColor('neutral', 800)};
    }
  }

  a:hover {
    text-decoration: underline;
  }
`

export const breadcrumbSeparatorStyles = css`
  svg {
    height: 12px;
    width: 12px;
    color: ${getThemedColor('neutral', 600)};
  }
`

export const breadcrumbEllipsisStyles = css`
  cursor: pointer;
  color: ${getThemedColor('neutral', 600)};
  display: flex;
  justify-content: center;
  align-items: center;
`
