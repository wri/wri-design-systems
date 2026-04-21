import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'
import { TabBarProps } from './types'

export const tabBarContainerStyles = (variant: TabBarProps['variant']) => css`
  width: 100%;
  display: flex;
  align-items: center;
  height: 2.5rem;

  ${variant === 'view' &&
  `
    border: 0.0625rem solid ${getThemedColor('neutral', 400)};
    background-color: ${getThemedColor('neutral', 200)};
    border-radius: 0.25rem;
    padding: 0.25rem;
  `}

  ${variant === 'transparent' &&
  `
    border: none;
    background-color: transparent;
    border-radius: 0.25rem;
    padding: 0rem 1rem;

    .chakra-tabs__list {
      gap: 2rem;
    }
  `}
`

export const defaultTabStyles = css`
  width: 99%;
  height: 2.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.125rem;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;

  &:focus-visible {
    box-shadow: none;
  }
`

export const tabBarItemPanelStyles = css`
  background-color: ${getThemedColor('neutral', 200)};
  color: ${getThemedColor('neutral', 700)};

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
    color: ${getThemedColor('neutral', 900)};

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

    &[data-selected] {
      background-color: ${getThemedColor('neutral', 100)};
      color: ${getThemedColor('neutral', 400)};
      opacity: 1;
    }
  }
`

export const tabBarItemViewDividerStyles = css`
  width: 0.25rem;
  height: 1.5rem;
  background-color: ${getThemedColor('neutral', 400)};
`

export const tabBarItemViewStyles = css`
  height: 2rem;
  border-radius: 0.125rem;
  background-color: ${getThemedColor('neutral', 200)};
  color: ${getThemedColor('neutral', 700)};

  &:hover {
    background-color: ${getThemedColor('neutral', 300)};
    box-shadow: 0rem 0.0625rem 0.125rem 0rem #0000000d;
  }

  &:active {
    background-color: ${getThemedColor('neutral', 300)};
    box-shadow: 0rem 0.125rem 0.25rem -0.125rem #0000001a;
    box-shadow: 0rem 0.25rem 0.375rem -0.0625rem #0000001a;
  }

  &:focus-visible {
    outline-color: ${getThemedColor('primary', 700)};
    outline-offset: 0.125rem;
    box-shadow:
      0 0 0 0.125rem ${getThemedColor('neutral', 100)},
      rgba(0, 0, 0, 0.05) 0rem 0.125rem 0.125rem 0.25rem;
  }

  &[data-selected] {
    background-color: ${getThemedColor('neutral', 100)};
    border: 0.0625rem solid ${getThemedColor('neutral', 300)};
    box-shadow: 0rem 0.0625rem 0.125rem 0rem #0000000d;
    color: ${getThemedColor('neutral', 900)};

    &:hover {
      background-color: ${getThemedColor('neutral', 200)};
      border: 0.0625rem solid ${getThemedColor('neutral', 300)};
      box-shadow: 0rem 0.125rem 0.25rem -0.125rem #0000001a;
      box-shadow: 0rem 0.25rem 0.375rem -0.0625rem #0000001a;
    }

    &:active {
      background-color: ${getThemedColor('neutral', 300)};
      border: 0.0625rem solid ${getThemedColor('neutral', 300)};
      box-shadow: 0rem 0.125rem 0.25rem -0.125rem #0000001a;
      box-shadow: 0rem 0.25rem 0.375rem -0.0625rem #0000001a;
    }

    &:focus-visible {
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
    box-shadow: none;

    &:hover {
      box-shadow: none;
    }

    &[data-selected] {
      background-color: ${getThemedColor('neutral', 100)};
      color: ${getThemedColor('neutral', 400)};
      opacity: 1;
    }
  }
`

export const tabBarItemTransparentStyles = css`
  background-color: transparent;
  color: ${getThemedColor('neutral', 600)};
  width: auto;
  padding: 0rem;
  justify-content: flex-start;
  border-bottom: 0.125rem solid transparent;

  &:hover {
    background-color: ${getThemedColor('neutral', 100)};
    border-bottom: 0.125rem solid ${getThemedColor('primary', 500)};
  }

  &:active {
    background-color: ${getThemedColor('neutral', 100)};
    border-bottom: 0.125rem solid ${getThemedColor('primary', 500)};
  }

  &:focus-visible {
    background-color: ${getThemedColor('neutral', 100)};
    border-bottom: 0.125rem solid ${getThemedColor('primary', 500)};
    outline-color: ${getThemedColor('primary', 700)};
    outline-offset: 0.125rem;
    box-shadow:
      0 0 0 0.125rem ${getThemedColor('neutral', 100)},
      rgba(0, 0, 0, 0.05) 0rem 0.125rem 0.125rem 0.25rem;
  }

  &[data-selected] {
    background-color: ${getThemedColor('neutral', 100)};
    border-bottom: 0.125rem solid ${getThemedColor('primary', 500)};
    color: ${getThemedColor('neutral', 800)};

    &:hover {
      background-color: ${getThemedColor('neutral', 100)};
      border-bottom: 0.125rem solid ${getThemedColor('primary', 500)};
      color: ${getThemedColor('neutral', 800)};
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
    background-color: transparent;
    color: ${getThemedColor('neutral', 400)};

    &:hover {
      border-bottom: 0.125rem solid transparent;
    }

    &[data-selected] {
      background-color: ${getThemedColor('neutral', 100)};
      color: ${getThemedColor('neutral', 400)};
      opacity: 1;

      &:hover {
        border-bottom: 0.125rem solid ${getThemedColor('primary', 500)};
      }
    }
  }
`
