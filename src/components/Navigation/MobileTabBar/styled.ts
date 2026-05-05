import { css } from '@emotion/react'
import {
  getThemedColor,
  getThemedBorderWidth,
  getThemedRadius,
  getThemedSpacing,
} from '../../../lib/theme'

export const mobileTabBarContainerStyles = css`
  width: 100%;
  display: flex;
  align-items: center;
  height: ${getThemedSpacing(1400)};
  background-color: ${getThemedColor('neutral', 200)};
`

export const mobileTabBarItemStyles = css`
  height: ${getThemedSpacing(1400)};
  width: 99%;
  background-color: ${getThemedColor('neutral', 200)};
  color: ${getThemedColor('neutral', 700)};
  padding: 0.625rem ${getThemedSpacing(100)} ${getThemedSpacing(200)}
    ${getThemedSpacing(100)};
  border-radius: ${getThemedRadius(100)};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 0.375rem;
  font-size: 0.625rem;
  line-height: 0.875rem;
  font-weight: 400;
  border-bottom: ${getThemedBorderWidth(200)} solid transparent;

  svg {
    height: ${getThemedSpacing(400)};
    width: ${getThemedSpacing(400)};

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
    outline-offset: ${getThemedSpacing(50)};
    box-shadow:
      0 0 0 0.125rem ${getThemedColor('neutral', 100)},
      rgba(0, 0, 0, 0.05) 0rem 0.125rem 0.125rem ${getThemedSpacing(100)};
  }

  &[data-selected] {
    background-color: ${getThemedColor('neutral', 100)};
    color: ${getThemedColor('neutral', 800)};
    font-weight: 700;
    border-bottom: ${getThemedBorderWidth(200)} solid
      ${getThemedColor('primary', 500)};

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
      outline-offset: ${getThemedSpacing(50)};
      box-shadow:
        0 0 0 0.125rem ${getThemedColor('neutral', 100)},
        rgba(0, 0, 0, 0.05) 0rem 0.125rem 0.125rem ${getThemedSpacing(100)};
    }

    &::before {
      content: none;
    }
  }

  &[data-disabled] {
    background-color: ${getThemedColor('neutral', 200)};
    color: ${getThemedColor('neutral', 400)};
    border-bottom: ${getThemedBorderWidth(200)} solid transparent;

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
  top: -0.3125rem;
  right: -0.3125rem;
  height: ${getThemedSpacing(300)};
  width: ${getThemedSpacing(300)};
  border-radius: ${getThemedRadius(400)};
  background-color: ${getThemedColor('error', 500)};
  font-weight: 700;
  font-size: ${getThemedSpacing(200)};
  line-height: 0.625rem;
  color: ${getThemedColor('neutral', 100)};
  display: flex;
  justify-content: center;
  align-items: center;
`
