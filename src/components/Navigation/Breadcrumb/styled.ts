import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'
import { BreadcrumbProps } from './types'

export const breadcrumbItemStyles = (size: BreadcrumbProps['size']) => css`
  a,
  p {
    font-size: ${size === 'small' ? '0.75rem' : '1rem'};
    font-weight: 400;
    line-height: ${size === 'small' ? '1rem' : '1.5rem'};
    color: ${getThemedColor('neutral', 600)};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3125rem;
    text-transform: capitalize;

    svg {
      height: ${size === 'small' ? '0.75rem' : '1rem'};
      width: ${size === 'small' ? '0.75rem' : '1rem'};
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
    height: ${size === 'small' ? '0.5rem' : '0.75rem'};
    width: ${size === 'small' ? '0.5rem' : '0.75rem'};
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
