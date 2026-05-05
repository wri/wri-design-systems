import { css } from '@emotion/react'
import {
  getThemedColor,
  getThemedBorderWidth,
  getThemedSpacing,
} from '../../../lib/theme'
import { NavigationRailProps } from './types'

export const navigationRailContainerStyles = css`
  width: ${getThemedSpacing(1600)};
  height: 100%;
  z-index: 100;
  border-right: ${getThemedBorderWidth(100)} solid
    ${getThemedColor('neutral', 300)};
  background-color: ${getThemedColor('neutral', 200)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const navigationRailTabStyles = css`
  width: ${getThemedSpacing(1600)};
  height: ${getThemedSpacing(1600)};
  background-color: ${getThemedColor('neutral', 200)};
  border-radius: initial;
  border-style: solid;
  border-width: ${getThemedBorderWidth(100)} ${getThemedBorderWidth(100)} 0 0;
  border-color: ${getThemedColor('neutral', 300)};
  cursor: pointer;
  border-left: ${getThemedBorderWidth(200)} solid transparent;
  padding: 0 0.3125rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${getThemedColor('neutral', 100)};
  }

  &:active {
    background-color: ${getThemedColor('neutral', 300)} !important;
  }

  &:focus-visible {
    background-color: ${getThemedColor('neutral', 200)};
    outline-color: ${getThemedColor('primary', 700)};
    outline-offset: ${getThemedSpacing(50)};
    box-shadow: none;
  }

  .ds-tab-label p {
    font-size: 0.625rem;
    font-weight: 400;
    line-height: 0.875rem;
    text-align: center;
    color: ${getThemedColor('neutral', 700)};
  }

  &[data-selected] {
    background-color: ${getThemedColor('neutral', 100)};
    border-left: ${getThemedBorderWidth(200)} solid
      ${getThemedColor('secondary', 500)};

    &:hover {
      background-color: ${getThemedColor('neutral', 200)};
    }

    &:focus-visible {
      background-color: ${getThemedColor('neutral', 100)};
      outline-color: ${getThemedColor('primary', 700)};
      outline-offset: ${getThemedSpacing(50)};
      box-shadow: none;
    }

    .ds-tab-label {
      p {
        font-weight: 700;
        color: ${getThemedColor('neutral', 800)};
      }

      svg {
        path {
          fill: ${getThemedColor('neutral', 700)};
        }
      }
    }

    &::before {
      content: none;
    }
  }

  &[data-disabled] {
    background-color: ${getThemedColor('neutral', 200)} !important;

    &[data-selected] {
      background-color: ${getThemedColor('neutral', 100)} !important;
    }

    .ds-tab-label {
      p {
        color: ${getThemedColor('neutral', 400)};
      }

      svg {
        path {
          fill: ${getThemedColor('neutral', 400)};
        }
      }
    }
  }
`

export const navigationRailTabIconStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: ${getThemedSpacing(400)};
    height: ${getThemedSpacing(400)};

    path {
      fill: ${getThemedColor('neutral', 600)};
    }
  }
`

export const navigationRailTriggerStyles = css`
  width: ${getThemedSpacing(1600)};
  height: ${getThemedSpacing(1600)};
  background-color: ${getThemedColor('neutral', 200)};
  border-radius: initial;
  border-style: solid;
  border-width: ${getThemedBorderWidth(100)} ${getThemedBorderWidth(100)} 0 0;
  border-color: ${getThemedColor('neutral', 300)};
  cursor: pointer;
  border-left: ${getThemedBorderWidth(200)} solid transparent;
  padding: 0 0.3125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.3125rem;

  &:hover {
    background-color: ${getThemedColor('neutral', 100)};
  }

  &:active {
    background-color: ${getThemedColor('neutral', 300)} !important;
  }

  &:focus-visible {
    outline-color: ${getThemedColor('primary', 700)};
    outline-offset: ${getThemedSpacing(50)};
    box-shadow: none;
  }

  .ds-tab-label p {
    font-size: 0.625rem;
    font-weight: 400;
    line-height: 0.875rem;
    text-align: center;
    color: ${getThemedColor('neutral', 600)};
  }
`

export const navigationRailChildrenContainerStyles = css`
  width: 20rem;
  height: 100%;
  z-index: 100;
  box-shadow: 0.125rem 0rem 0.125rem 0rem #0000000d;
  background-color: ${getThemedColor('neutral', 100)};
  overflow-y: auto;
  overflow-x: hidden;
  border-right: ${getThemedBorderWidth(100)} solid
    ${getThemedColor('neutral', 300)};
`
