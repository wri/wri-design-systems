import { css } from '@emotion/react'
import {
  getThemedColor,
  getThemedFontSize,
  getThemedLineHeight,
  getThemedSpacing,
} from '../../../lib/theme'
import { BreadcrumbProps } from './types'

export const breadcrumbItemStyles = (size: BreadcrumbProps['size']) => css`
  a,
  p {
    font-size: ${size === 'small'
      ? getThemedFontSize(200)
      : getThemedFontSize(400)};
    font-weight: 400;
    line-height: ${size === 'small'
      ? getThemedLineHeight(400)
      : getThemedLineHeight(600)};
    color: ${getThemedColor('neutral', 600)};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3125rem;
    text-transform: capitalize;

    svg {
      height: ${size === 'small'
        ? getThemedSpacing(300)
        : getThemedSpacing(400)};
      width: ${size === 'small'
        ? getThemedSpacing(300)
        : getThemedSpacing(400)};
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

export const breadcrumbSeparatorStyles = (size: BreadcrumbProps['size']) => css`
  svg {
    height: ${size === 'small' ? getThemedSpacing(200) : getThemedSpacing(300)};
    width: ${size === 'small' ? getThemedSpacing(200) : getThemedSpacing(300)};
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
