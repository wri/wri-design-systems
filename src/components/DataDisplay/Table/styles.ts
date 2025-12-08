import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'

export const tableContainerStyles = (variant: string) => css`
  border: ${variant === 'full-width'
    ? 'none'
    : `1px solid ${getThemedColor('neutral', 300)}`};
  border-radius: 2px;
  box-shadow: ${variant === 'full-width'
    ? 'none'
    : `0 0 0 1px ${getThemedColor('neutral', 300)}`};
`

export const tableHeaderContainerStyles = (variant: string) => css`
  tr {
    background-color: ${variant === 'full-width'
      ? getThemedColor('neutral', 100)
      : getThemedColor('neutral', 200)};

    th {
      border-color: ${getThemedColor('neutral', 300)};
    }
  }
`

export const tableHeaderLabelStyles = css`
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: ${getThemedColor('neutral', 800)};
  display: flex;
  align-items: center;
`

export const tableHeaderSortContainerStyles = css`
  height: 24px;
  width: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-left: 8px;

  button {
    height: 10px;
    width: 10px !important;
    min-width: 10px !important;

    svg {
      height: 10px;
      width: 10px;
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
        ? getThemedColor('primary', 600)
        : getThemedColor(
            'accessible',
            'controls-on-neutral-lights',
          )} !important;
    }
  }
`

export const tableFooterContainerStyles = css`
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
`

export const tablePaginationContainerStyles = css`
  margin-top: 9px;
`

export const tableBodyStyles = css`
  tr {
    height: 48px;

    td {
      border-color: ${getThemedColor('neutral', 300)};
    }

    :hover {
      background-color: ${getThemedColor('neutral', 200)};
    }
  }
`

export const tableLoaderStyles = css`
  height: 480px;
  display: flex;
  align-items: center;
  justify-content: center;
`
