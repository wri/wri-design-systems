import { css } from '@emotion/react'
import { getThemedColor } from '../../../../lib/theme'

export const toolbarContainerStyles = css`
  position: relative;
`

export const toolbarBaseStyles = (showLabel: boolean) => css`
  display: flex;
  align-items: center;
  justify-content: ${showLabel ? 'space-between' : 'center'};
  gap: ${showLabel ? '0.5rem' : '0'};
  height: 3rem;
  padding: ${showLabel ? '0 0px' : '0'};
  text-align: ${showLabel ? 'left' : 'center'};
  color: black;
  min-width: 3rem;
  border-radius: 0.125rem;
  background-color: ${getThemedColor('neutral', 100)};
  border: 0.0625rem solid ${getThemedColor('neutral', 300)};
  box-shadow: 0 0.25rem 0.375rem -0.25rem #0000001a;
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
    height: 2rem;
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
      0 0 0 0.125rem ${getThemedColor('neutral', 100)},
      rgba(0, 0, 0, 0.05) 0 0.125rem 0.125rem 0.25rem;
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
  padding: 0.25rem;
  background: rgba(0, 0, 0, 0);
  border: none;
`
