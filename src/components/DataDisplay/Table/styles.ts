import { css } from '@emotion/react'
import {
  getThemedBorderWidth,
  getThemedColor,
  getThemedFontSize,
  getThemedLineHeight,
  getThemedRadius,
  getThemedSpacing,
} from '../../../lib/theme'

export const tableContainerStyles = (
  variant: string,
  stickyHeader?: boolean,
) => css`
  border: ${variant === 'full-width'
    ? 'none'
    : `${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 300)}`};
  border-radius: ${getThemedRadius(200)};
  box-shadow: ${variant === 'full-width'
    ? 'none'
    : `0 0 0 0.0625rem ${getThemedColor('neutral', 300)}`};

  [data-sticky] {
    position: sticky;
    background-color: ${getThemedColor('neutral', 100)};

    &::after {
      content: '';
      position: absolute;
      pointer-events: none;
      top: 0;
      bottom: -0.0625rem;
      width: ${getThemedSpacing(800)};
    }
  }

  th[data-sticky] {
    background-color: ${variant === 'full-width'
      ? getThemedColor('neutral', 100)
      : getThemedColor('neutral', 200)};
    z-index: ${stickyHeader ? 4 : 2};
    top: ${stickyHeader ? '0' : 'auto'};
  }

  thead {
    z-index: ${stickyHeader ? 3 : 'auto'};
  }

  /* Border left on first sticky column cells */
  td[data-sticky]:first-of-type,
  th[data-sticky]:first-of-type {
    box-shadow: inset 0.0625rem 0 0 ${getThemedColor('neutral', 300)};
  }

  /* Border top on sticky header cells */
  ${stickyHeader
    ? `
    thead th {
      box-shadow: inset 0 0.0625rem 0 ${getThemedColor('neutral', 300)};
    }
    thead th[data-sticky]:first-of-type {
      box-shadow: inset 0.0625rem 0.0625rem 0 ${getThemedColor('neutral', 300)};
    }
  `
    : ''}

  [data-sticky='start']::after {
    content: none;
  }

  [data-sticky-last='true']::after {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 0;
    bottom: -0.0625rem;
    inset-inline-end: 0;
    translate: 100% 0;
    width: 0.0625rem;
    background: ${getThemedColor('neutral', 400)};
    box-shadow: 0.0625rem 0 0.125rem 0 rgba(0, 0, 0, 0.2);
  }

  [data-sticky-last='true'] {
    border-inline-end: 0.0625rem solid ${getThemedColor('neutral', 400)};
  }
`

export const tableHeaderContainerStyles = (variant: string) => css`
  tr {
    background-color: ${variant === 'full-width'
      ? getThemedColor('neutral', 100)
      : getThemedColor('neutral', 200)};

    th {
      border-bottom: none !important;
      box-shadow: inset 0 -0.0625rem 0 ${getThemedColor('neutral', 300)};
    }
  }
`

export const tableHeaderLabelStyles = css`
  font-size: ${getThemedFontSize(400)};
  line-height: ${getThemedLineHeight(600)};
  font-weight: 700;
  color: ${getThemedColor('neutral', 800)};
  display: flex;
  align-items: center;
`

export const tableHeaderSortContainerStyles = css`
  height: ${getThemedLineHeight(600)};
  width: 0.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-left: ${getThemedSpacing(200)};

  button {
    height: 0.625rem;
    width: 0.625rem !important;
    min-width: 0.625rem !important;
    background-color: transparent;
    svg {
      height: 0.625rem;
      width: 0.625rem;
      path {
        fill: ${getThemedColor('neutral', 400)};
      }
    }
  }
`

export const tableHeaderSortButtonStyles = (selected: boolean) => css`
  svg {
    path {
      fill: ${selected
        ? getThemedColor('accessible', 'controls-on-neutral-lights')
        : getThemedColor('accessible', 100)} !important;
    }
  }
`

export const tableFooterContainerStyles = css`
  margin-top: ${getThemedSpacing(300)};
  display: flex;
  justify-content: space-between;
`

export const tablePaginationContainerStyles = css`
  margin-top: 0.5625rem;
`

export const tableBodyStyles = (striped?: boolean) => css`
  tr {
    height: ${getThemedSpacing(1200)};

    td {
      border-color: ${getThemedColor('neutral', 300)};
    }

    ${striped
      ? `
  &:nth-of-type(odd) td[data-sticky] {
    background-color: ${getThemedColor('neutral', 200)};
  }
  &:nth-of-type(even) td[data-sticky] {
    background-color: ${getThemedColor('neutral', 100)};
  }
`
      : ''}

    :hover {
      background-color: ${getThemedColor('neutral', 200)};

      td[data-sticky] {
        background-color: ${getThemedColor('neutral', 200)};
      }
    }

    &.selected {
      background-color: ${getThemedColor('primary', 100)} !important;
      border-bottom: 0.125rem solid ${getThemedColor('primary', 700)} !important;

      td[data-sticky] {
        background-color: ${getThemedColor('primary', 100)};
      }
    }
  }
`
export const tableScrollContainerStyles = (height: string) => css`
  overflow: auto;
  height: ${height};
  width: 100%;
`

export const tableLoaderStyles = css`
  height: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
