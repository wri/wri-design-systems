import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'
import { BreadcrumbProps } from './types'

export const breadcrumbItemStyles = (size: BreadcrumbProps['size']) => css`
  a,
  p {
    font-size: ${size === 'small' ? '12px' : '16px'};
    font-weight: 400;
    line-height: ${size === 'small' ? '16px' : '24px'};
    color: ${getThemedColor('neutral', 600)};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    text-transform: capitalize;

    svg {
      height: ${size === 'small' ? '12px' : '16px'};
      width: ${size === 'small' ? '12px' : '16px'};
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
    height: ${size === 'small' ? '8px' : '12px'};
    width: ${size === 'small' ? '8px' : '12px'};
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
