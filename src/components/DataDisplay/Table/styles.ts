import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'

export const tableContainerStyles = (variant: string) => css`
  border: ${variant === 'full-width'
    ? 'none'
    : `0.0625rem solid ${getThemedColor('neutral', 300)}`};
  border-radius: 0.125rem;
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
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 700;
  color: ${getThemedColor('neutral', 800)};
  display: flex;
  align-items: center;
`

export const tableHeaderSortContainerStyles = css`
  height: 1.5rem;
  width: 0.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-left: 0.5rem;

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
  margin-top: 0.75rem;
  display: flex;
  justify-content: space-between;
`

export const tablePaginationContainerStyles = css`
  margin-top: 0.5625rem;
`

export const tableBodyStyles = css`
  tr {
    height: 3rem;

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
