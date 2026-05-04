import { css } from '@emotion/react'
import {
  getThemedBorderWidth,
  getThemedColor,
  getThemedRadius,
  getThemedSpacing,
} from '../../../../lib/theme'

export const toolbarContainerStyles = css`
  position: relative;
`

export const toolbarBaseStyles = (showLabel: boolean) => css`
  display: flex;
  align-items: center;
  justify-content: ${showLabel ? 'space-between' : 'center'};
  gap: ${showLabel ? getThemedSpacing(200) : '0'};
  height: ${getThemedSpacing(1200)};
  padding: ${showLabel ? '0 0px' : '0'};
  text-align: ${showLabel ? 'left' : 'center'};
  color: black;
  min-width: ${getThemedSpacing(1200)};
  border-radius: ${getThemedRadius(200)};
  background-color: ${getThemedColor('neutral', 100)};
  border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 300)};
  box-shadow: 0 ${getThemedSpacing(100)} 0.375rem -${getThemedSpacing(100)} #0000001a;
  box-shadow: 0 0.625rem 0.9375rem -0.1875rem #0000001a;

  svg {
    width: 1rem;
    height: 1rem;

    path {
      fill: ${getThemedColor('neutral', 800)};
    }
  }

  > div {
    flex: ${showLabel ? '1 1 auto' : '0 0 auto'};
    text-align: right;
    border-radius: 0.3125rem;
    height: ${getThemedSpacing(800)};
    &:hover {
      background-color: ${getThemedColor('primary', 300)};
    }
  }

  &:active {
    background-color: ${getThemedColor('neutral', 300)} !important;
  }

  &:focus-visible {
    outline-color: ${getThemedColor('primary', 700)};
    background-color: ${getThemedColor('neutral', 200)};
    box-shadow:
      0 0 0 ${getThemedSpacing(50)} ${getThemedColor('neutral', 100)},
      rgba(0, 0, 0, 0.05) 0 ${getThemedSpacing(50)} ${getThemedSpacing(50)} ${getThemedSpacing(100)};
  }

  &:disabled {
    background-color: ${getThemedColor('neutral', 300)} !important;

    svg {
      path {
        fill: ${getThemedColor('neutral', 500)};
      }
    }
  }
`

export const overflowMenuItemStyles = css`
  padding: ${getThemedSpacing(100)};
  background: rgba(0, 0, 0, 0);
  border: none;
`
