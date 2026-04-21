import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'

export const mobileTabBarContainerStyles = css`
  width: 100%;
  display: flex;
  align-items: center;
  height: 3.5rem;
  background-color: ${getThemedColor('neutral', 200)};
`

export const mobileTabBarItemStyles = css`
  height: 3.5rem;
  width: 99%;
  background-color: ${getThemedColor('neutral', 200)};
  color: ${getThemedColor('neutral', 700)};
  padding: 0.625rem 0.25rem 0.5rem 0.25rem;
  border-radius: 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 0.375rem;
  font-size: 0.625rem;
  line-height: 0.875rem;
  font-weight: 400;
  border-bottom: 0.125rem solid transparent;

  svg {
    height: 1rem;
    width: 1rem;

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
    outline-offset: 0.125rem;
    box-shadow:
      0 0 0 0.125rem ${getThemedColor('neutral', 100)},
      rgba(0, 0, 0, 0.05) 0rem 0.125rem 0.125rem 0.25rem;
  }

  &[data-selected] {
    background-color: ${getThemedColor('neutral', 100)};
    color: ${getThemedColor('neutral', 800)};
    font-weight: 700;
    border-bottom: 0.125rem solid ${getThemedColor('primary', 500)};

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
      outline-offset: 0.125rem;
      box-shadow:
        0 0 0 0.125rem ${getThemedColor('neutral', 100)},
        rgba(0, 0, 0, 0.05) 0rem 0.125rem 0.125rem 0.25rem;
    }

    &::before {
      content: none;
    }
  }

  &[data-disabled] {
    background-color: ${getThemedColor('neutral', 200)};
    color: ${getThemedColor('neutral', 400)};
    border-bottom: 0.125rem solid transparent;

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
  height: 0.75rem;
  width: 0.75rem;
  border-radius: 0.375rem;
  background-color: ${getThemedColor('error', 500)};
  font-weight: 700;
  font-size: 0.5rem;
  line-height: 0.625rem;
  color: ${getThemedColor('neutral', 100)};
  display: flex;
  justify-content: center;
  align-items: center;
`
