import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'

export const listContainerStyles = css`
  border: 1px solid ${getThemedColor('neutral', 300)};
`

export const listItemLabelStyles = css`
  color: ${getThemedColor('neutral', 700)};
  line-height: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const listItemCaptionStyles = css`
  font-weight: 400;
  color: ${getThemedColor('neutral', 700)};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const listItemValueStyles = css`
  color: ${getThemedColor('neutral', 700)};
  text-align: right;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const listItemNavigationButtonStyles = css`
  svg {
    path {
      fill: ${getThemedColor('neutral', 800)};
    }
  }
`
export const listItemIconStyles = css`
  width: 16px;
  height: 16px;
  path {
    fill: ${getThemedColor('neutral', 700)};
  }
`
export const listItemContainerStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background-color: white;
  border-bottom: 1px solid ${getThemedColor('neutral', 200)};
  cursor: default;

  &:hover {
    background-color: ${getThemedColor('neutral', 200)};
  }

  &:active {
    background-color: ${getThemedColor('neutral', 300)};
  }
`
