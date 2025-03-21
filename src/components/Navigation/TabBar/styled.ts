import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'
import { TabBarProps } from './types'

export const tabBarContainerStyles = (variant: TabBarProps['variant']) => css`
  width: 100%;
  display: flex;
  align-items: center;
  height: 40px;

  ${variant === 'view' &&
  `
    border: 1px solid ${getThemedColor('neutral', 400)};
    background-color: ${getThemedColor('neutral', 200)};
    border-radius: 4px;
    padding: 4px;
  `}
`

export const defaultTabStyles = css`
  width: 99%;
  height: 40px;
  padding: 8px 16px;
  border-radius: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;

  &:focus-visible {
    box-shadow: none;
  }
`

export const tabBarItemPanelStyles = css`
  background-color: ${getThemedColor('neutral', 200)};
  color: ${getThemedColor('neutral', 600)};

  &:hover {
    background-color: ${getThemedColor('neutral', 100)};
  }

  &:active {
    background-color: ${getThemedColor('neutral', 300)};
  }

  &:focus-visible {
    background-color: ${getThemedColor('neutral', 300)};
    outline-color: ${getThemedColor('primary', 700)};
    outline-offset: 2px;
  }

  &[data-selected] {
    background-color: ${getThemedColor('neutral', 100)};
    color: ${getThemedColor('neutral', 800)};

    &:hover {
      background-color: ${getThemedColor('neutral', 200)};
    }

    &:active {
      background-color: ${getThemedColor('neutral', 300)};
    }

    &:focus-visible {
      background-color: ${getThemedColor('neutral', 100)};
      outline-color: ${getThemedColor('primary', 700)};
      outline-offset: 2px;
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
  width: 4px;
  height: 24px;
  background-color: ${getThemedColor('neutral', 400)};
`

export const tabBarItemViewStyles = css`
  height: 32px;
  border-radius: 2px;
  background-color: ${getThemedColor('neutral', 200)};
  color: ${getThemedColor('neutral', 600)};

  &:hover {
    background-color: ${getThemedColor('neutral', 300)};
    box-shadow: 0px 1px 2px 0px #0000000d;
  }

  &:active {
    background-color: ${getThemedColor('neutral', 300)};
    box-shadow: 0px 2px 4px -2px #0000001a;
    box-shadow: 0px 4px 6px -1px #0000001a;
  }

  &:focus-visible {
    outline-color: ${getThemedColor('primary', 700)};
    outline-offset: 2px;
  }

  &[data-selected] {
    background-color: ${getThemedColor('neutral', 100)};
    border: 1px solid ${getThemedColor('neutral', 300)};
    box-shadow: 0px 1px 2px 0px #0000000d;
    color: ${getThemedColor('neutral', 800)};

    &:hover {
      background-color: ${getThemedColor('neutral', 200)};
      border: 1px solid ${getThemedColor('neutral', 300)};
      box-shadow: 0px 2px 4px -2px #0000001a;
      box-shadow: 0px 4px 6px -1px #0000001a;
    }

    &:active {
      background-color: ${getThemedColor('neutral', 300)};
      border: 1px solid ${getThemedColor('neutral', 300)};
      box-shadow: 0px 2px 4px -2px #0000001a;
      box-shadow: 0px 4px 6px -1px #0000001a;
    }

    &:focus-visible {
      outline-color: ${getThemedColor('primary', 700)};
      outline-offset: 2px;
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
