import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'

export const listContainerStyles = css`
  border: 1px solid ${getThemedColor('neutral', 300)};
`

export const listItemLabelStyles = css`
  color: ${getThemedColor('neutral', 700)};
  line-height: 20px;
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

export const listItemIconStyles = css`
  width: 16px;
  height: 16px;
  path {
    fill: ${getThemedColor('neutral', 700)};
  }
`

export const listItemDataStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background-color: white;
  border-bottom: 1px solid ${getThemedColor('neutral', 200)};
  width: 100%;
  text-align: left;
`

export const listItemNavigationStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background-color: white;
  border-bottom: 1px solid ${getThemedColor('neutral', 200)};
  width: 100%;
  text-align: left;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 2px 4px -2px #0000001a;
    box-shadow: 0px 4px 6px -1px #0000001a;
  }
  &:hover {
    background-color: color-mix(
      in srgb,
      ${getThemedColor('primary', 500)} 20%,
      transparent
    );
  }

  &:focus-visible {
    outline: 2px solid ${getThemedColor('primary', 700)};
    outline-offset: 2px;
    box-shadow: 0px 2px 4px -2px #0000001a;
    box-shadow: 0px 4px 6px -1px #0000001a;
    box-shadow:
      0 0 0 2px ${getThemedColor('neutral', 100)},
      rgba(0, 0, 0, 0.05) 0px 2px 2px 4px;
  }

  &:active {
    background-color: ${getThemedColor('primary', 100)};
    border: 1px solid ${getThemedColor('primary', 700)};
  }
`
