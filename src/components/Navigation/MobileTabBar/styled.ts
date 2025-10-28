import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'

export const mobileTabBarContainerStyles = css`
  width: 100%;
  display: flex;
  align-items: center;
  height: 56px;
  background-color: ${getThemedColor('neutral', 200)};
`

export const mobileTabBarItemStyles = css`
  height: 56px;
  width: 99%;
  background-color: ${getThemedColor('neutral', 200)};
  color: ${getThemedColor('neutral', 700)};
  padding: 10px 4px 8px 4px;
  border-radius: 0px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 6px;
  font-size: 10px;
  line-height: 14px;
  font-weight: 400;
  border-bottom: 2px solid transparent;

  svg {
    height: 16px;
    width: 16px;

    path {
      fill: ${getThemedColor('neutral', 600)};
    }
  }

  &:hover {
    background-color: ${getThemedColor('neutral', 300)};
  }

  &:active {
    background-color: ${getThemedColor('neutral', 400)};
  }

  &:focus-visible {
    background-color: ${getThemedColor('neutral', 300)};
    outline-color: ${getThemedColor('primary', 700)};
    outline-offset: 2px;
    box-shadow:
      0 0 0 2px ${getThemedColor('neutral', 100)},
      rgba(0, 0, 0, 0.05) 0px 2px 2px 4px;
  }

  &[data-selected] {
    background-color: ${getThemedColor('neutral', 100)};
    color: ${getThemedColor('neutral', 800)};
    font-weight: 700;
    border-bottom: 2px solid ${getThemedColor('primary', 500)};

    svg path {
      fill: ${getThemedColor('neutral', 700)};
    }

    &:hover {
      background-color: ${getThemedColor('neutral', 300)};
    }

    &:active {
      background-color: ${getThemedColor('neutral', 400)};
    }

    &:focus-visible {
      background-color: ${getThemedColor('neutral', 100)};
      outline-color: ${getThemedColor('primary', 700)};
      outline-offset: 2px;
      box-shadow:
        0 0 0 2px ${getThemedColor('neutral', 100)},
        rgba(0, 0, 0, 0.05) 0px 2px 2px 4px;
    }

    &::before {
      content: none;
    }
  }

  &[data-disabled] {
    background-color: ${getThemedColor('neutral', 200)};
    color: ${getThemedColor('neutral', 400)};
    border-bottom: 2px solid transparent;

    svg path {
      fill: ${getThemedColor('neutral', 400)};
    }

    .ds-badge-count {
      background-color: ${getThemedColor('error', 300)};
    }

    &[data-selected] {
      background-color: ${getThemedColor('neutral', 100)};
      color: ${getThemedColor('neutral', 400)};
      opacity: 1;
    }
  }
`

export const mobileTabBarItemIconContainerStyles = css`
  position: relative;
`

export const mobileTabBarItemBadgeStyles = css`
  position: absolute;
  top: -5px;
  right: -5px;
  height: 12px;
  width: 12px;
  border-radius: 6px;
  background-color: ${getThemedColor('error', 500)};
  font-weight: 700;
  font-size: 8px;
  line-height: 10px;
  color: ${getThemedColor('neutral', 100)};
  display: flex;
  justify-content: center;
  align-items: center;
`
