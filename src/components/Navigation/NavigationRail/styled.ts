import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'
import { NavigationRailProps } from './types'

export const navigationRailContainerStyles = css`
  width: 64px;
  height: 100%;
  z-index: 100;
  border-right: 1px solid ${getThemedColor('neutral', 300)};
  background-color: ${getThemedColor('neutral', 200)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const navigationRailTabStyles = css`
  width: 64px;
  height: 64px;
  background-color: ${getThemedColor('neutral', 200)};
  border-radius: initial;
  border-style: solid;
  border-width: 1px 1px 0px 0px;
  border-color: ${getThemedColor('neutral', 300)};
  cursor: pointer;
  border-left: 2px solid transparent;
  padding: 0 5px;
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
    outline-offset: 2px;
    box-shadow: none;
  }

  .ds-tab-label p {
    font-size: 10px;
    font-weight: 400;
    line-height: 14px;
    text-align: center;
    color: ${getThemedColor('neutral', 700)};
  }

  &[data-selected] {
    background-color: ${getThemedColor('neutral', 100)};
    border-left: 2px solid ${getThemedColor('secondary', 500)};

    &:hover {
      background-color: ${getThemedColor('neutral', 200)};
    }

    &:focus-visible {
      background-color: ${getThemedColor('neutral', 100)};
      outline-color: ${getThemedColor('primary', 700)};
      outline-offset: 2px;
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
    width: 16px;
    height: 16px;

    path {
      fill: ${getThemedColor('neutral', 600)};
    }
  }
`

export const navigationRailTriggerStyles = css`
  width: 64px;
  height: 64px;
  background-color: ${getThemedColor('neutral', 200)};
  border-radius: initial;
  border-style: solid;
  border-width: 1px 1px 0px 0px;
  border-color: ${getThemedColor('neutral', 300)};
  cursor: pointer;
  border-left: 2px solid transparent;
  padding: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;

  &:hover {
    background-color: ${getThemedColor('neutral', 100)};
  }

  &:active {
    background-color: ${getThemedColor('neutral', 300)} !important;
  }

  &:focus-visible {
    outline-color: ${getThemedColor('primary', 700)};
    outline-offset: 2px;
    box-shadow: none;
  }

  .ds-tab-label p {
    font-size: 10px;
    font-weight: 400;
    line-height: 14px;
    text-align: center;
    color: ${getThemedColor('neutral', 600)};
  }
`

export const navigationRailChildrenContainerStyles = css`
  width: 320px;
  height: 100%;
  z-index: 100;
  box-shadow: 2px 0px 2px 0px #0000000d;
  background-color: ${getThemedColor('neutral', 100)};
  overflow-y: auto;
  overflow-x: hidden;
  border-right: 1px solid ${getThemedColor('neutral', 300)};
`
