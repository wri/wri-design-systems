import { css } from '@emotion/react'
import { getThemedColor } from '../../../../lib/theme'
import { MapControlProps } from './types'

export const mapControlContainerStyles = css`
  position: relative;
`

export const mapControlBaseStyles = css`
  height: 32px;
  width: 32px;
  padding: 0;
  min-width: 32px;
  border-radius: 2px;
  background-color: ${getThemedColor('neutral', 100)};
  border: 1px solid ${getThemedColor('neutral', 300)};
  box-shadow: 0px 4px 6px -4px #0000001a;
  box-shadow: 0px 10px 15px -3px #0000001a;

  svg {
    width: 20px;
    height: 20px;

    path {
      fill: ${getThemedColor('neutral', 800)};
    }
  }

  &:hover {
    background-color: ${getThemedColor('neutral', 200)};
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

export const topSeparatorStyles = (
  vertical: MapControlProps['vertical'],
) => css`
  position: absolute;
  height: ${vertical ? '1px' : '6px'};
  width: ${vertical ? '6px' : '1px'};
  top: ${vertical ? '31px' : '1px'};
  left: ${vertical ? '1px' : '31px'};
  background-color: ${getThemedColor('neutral', 100)};
  z-index: 1;
`

export const bottomSeparatorStyles = (
  vertical: MapControlProps['vertical'],
) => css`
  position: absolute;
  height: ${vertical ? '1px' : '6px'};
  width: ${vertical ? '6px' : '1px'};
  bottom: ${vertical ? '31px' : '1px'};
  left: ${vertical ? '25px' : '31px'};
  background-color: ${getThemedColor('neutral', 100)};
`
