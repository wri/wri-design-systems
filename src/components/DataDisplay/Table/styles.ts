import { css } from '@emotion/react'
import {
  getThemedBorderWidth,
  getThemedColor,
  getThemedFontSize,
  getThemedLineHeight,
  getThemedRadius,
  getThemedSpacing,
} from '../../../lib/theme'

export const tableContainerStyles = (variant: string) => css`
  border: ${variant === 'full-width'
    ? 'none'
    : `${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 300)}`};
  border-radius: ${getThemedRadius(200)};
  box-shadow: ${variant === 'full-width'
    ? 'none'
    : `0 0 0 0.0625rem ${getThemedColor('neutral', 300)}`};
`

export const tableHeaderContainerStyles = (variant: string) => css`
  tr {
    background-color: ${variant === 'full-width'
      ? getThemedColor('neutral', 100)
      : getThemedColor('neutral', 200)};

    th {
      border-bottom: none !important;
      box-shadow: inset 0 -1px 0 ${getThemedColor('neutral', 300)};
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

export const tableBodyStyles = css`
  tr {
    height: ${getThemedSpacing(1200)};

    td {
      border-color: ${getThemedColor('neutral', 300)};
    }

    :hover {
      background-color: ${getThemedColor('neutral', 200)};
    }

    &.selected {
      background-color: ${getThemedColor('primary', 100)} !important;
      border-bottom: 2px solid ${getThemedColor('primary', 700)} !important;
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
