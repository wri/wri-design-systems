import { css } from '@emotion/react'
import {
  getThemedBorderWidth,
  getThemedColor,
  getThemedLineHeight,
  getThemedSpacing,
} from '../../../lib/theme'

export const listContainerStyles = (noBorder?: boolean) => css`
  border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 300)};
  ${noBorder ? 'border: none;' : ''}
`

export const listItemLabelStyles = (disabled: boolean) => css`
  color: ${disabled
    ? getThemedColor('neutral', 400)
    : getThemedColor('neutral', 700)};
  line-height: ${getThemedLineHeight(500)};
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

export const listItemIconStyles = (disabled: boolean) => css`
  width: ${getThemedSpacing(400)};
  height: ${getThemedSpacing(400)};

  path {
    fill: ${disabled
      ? getThemedColor('neutral', 400)
      : getThemedColor('neutral', 700)};
  }
`

export const listItemDataStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${getThemedSpacing(300)} ${getThemedSpacing(400)};
  background-color: white;
  border-bottom: ${getThemedBorderWidth(100)} solid
    ${getThemedColor('neutral', 200)};
  width: 100%;
  text-align: left;
`

export const listItemNavigationStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${getThemedSpacing(300)} ${getThemedSpacing(400)};
  background-color: white;
  border-bottom: ${getThemedBorderWidth(100)} solid
    ${getThemedColor('neutral', 200)};
  width: 100%;
  text-align: left;

  &:hover:not(:disabled) {
    cursor: pointer;
    background-color: ${getThemedColor('neutral', 200)};
    border-bottom: ${getThemedBorderWidth(100)} solid
      ${getThemedColor('neutral', 300)};
  }

  &:focus-visible {
    outline: ${getThemedBorderWidth(200)} solid
      ${getThemedColor('primary', 700)};
    box-shadow: 0rem 0.125rem 0.25rem -0.125rem #0000001a;
    box-shadow: 0rem 0.25rem 0.375rem -0.0625rem #0000001a;
    box-shadow:
      0 0 0 0.125rem ${getThemedColor('neutral', 100)},
      rgba(0, 0, 0, 0.05) 0rem 0.125rem 0.125rem 0.25rem;
  }

  &:active:not(:disabled) {
    background-color: ${getThemedColor('neutral', 300)};
    border-color: ${getThemedColor('neutral', 300)};
  }

  &:disabled {
    background-color: ${getThemedColor('neutral', 200)};
  }
`
