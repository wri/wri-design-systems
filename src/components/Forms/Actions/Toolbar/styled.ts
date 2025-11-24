import { css } from '@emotion/react'
import { getThemedColor } from '../../../../lib/theme'

export const toolbarContainerStyles = (breakpoint: number) => css`
  position: relative;

  .toolbar-overflow-menu {
    display: none;
  }

  @media (max-width: ${breakpoint}px) {
    .toolbar-item-button:nth-of-type(n + 4) {
      display: none;
    }

    .toolbar-overflow-menu {
      display: inline-flex;
    }
  }
`

export const toolbarBaseStyles = (showLabel: boolean) => css`
  display: flex;
  align-items: center;
  justify-content: ${showLabel ? 'space-between' : 'center'};
  gap: ${showLabel ? '8px' : '0'};
  height: 48px;
  padding: ${showLabel ? '0 0px' : '0'};
  text-align: ${showLabel ? 'left' : 'center'};
  color: black;
  min-width: 48px;
  border-radius: 2px;
  background-color: ${getThemedColor('neutral', 100)};
  border: 1px solid ${getThemedColor('neutral', 300)};
  box-shadow: 0px 4px 6px -4px #0000001a;
  box-shadow: 0px 10px 15px -3px #0000001a;

  svg {
    width: 16px;
    height: 16px;

    path {
      fill: ${getThemedColor('neutral', 800)};
    }
  }

  > div {
    flex: ${showLabel ? '1 1 auto' : '0 0 auto'};
    text-align: right;
    border-radius: 5px;
    height: 32px;
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
      0 0 0 2px ${getThemedColor('neutral', 100)},
      rgba(0, 0, 0, 0.05) 0px 2px 2px 4px;
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
