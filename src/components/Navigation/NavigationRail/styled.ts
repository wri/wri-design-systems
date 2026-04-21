import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'
import { NavigationRailProps } from './types'

export const navigationRailContainerStyles = css`
  width: 4rem;
  height: 100%;
  z-index: 100;
  border-right: 0.0625rem solid ${getThemedColor('neutral', 300)};
  background-color: ${getThemedColor('neutral', 200)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const navigationRailTabStyles = css`
  width: 4rem;
  height: 4rem;
  background-color: ${getThemedColor('neutral', 200)};
  border-radius: initial;
  border-style: solid;
  border-width: 0.0625rem 0.0625rem 0rem 0rem;
  border-color: ${getThemedColor('neutral', 300)};
  cursor: pointer;
  border-left: 0.125rem solid transparent;
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
    outline-offset: 0.125rem;
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
    border-left: 0.125rem solid ${getThemedColor('secondary', 500)};

    &:hover {
      background-color: ${getThemedColor('neutral', 200)};
    }

    &:focus-visible {
      background-color: ${getThemedColor('neutral', 100)};
      outline-color: ${getThemedColor('primary', 700)};
      outline-offset: 0.125rem;
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
    width: 1rem;
    height: 1rem;

    path {
      fill: ${getThemedColor('neutral', 600)};
    }
  }
`

export const navigationRailTriggerStyles = css`
  width: 4rem;
  height: 4rem;
  background-color: ${getThemedColor('neutral', 200)};
  border-radius: initial;
  border-style: solid;
  border-width: 0.0625rem 0.0625rem 0rem 0rem;
  border-color: ${getThemedColor('neutral', 300)};
  cursor: pointer;
  border-left: 0.125rem solid transparent;
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
    outline-offset: 0.125rem;
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
  border-right: 0.0625rem solid ${getThemedColor('neutral', 300)};
`
