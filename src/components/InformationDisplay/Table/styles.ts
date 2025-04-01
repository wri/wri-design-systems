import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'

export const tableContainerStyles = css`
  border: 1px solid ${getThemedColor('neutral', 300)};
  border-radius: 2px;
  box-shadow: 0 0 0 1px ${getThemedColor('neutral', 300)};
`

export const tableHeaderContainerStyles = css`
  tr {
    background-color: ${getThemedColor('neutral', 200)};
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
    background-color: transparent;

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
        : getThemedColor('neutral', 400)} !important;
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
