import { css } from '@emotion/react'
import {
  getThemedColor,
  getThemedBorderWidth,
  getThemedFontSize,
  getThemedLineHeight,
  getThemedRadius,
  getThemedSpacing,
} from '../../../lib/theme'
import { TabBarProps } from './types'

export const tabBarContainerStyles = (variant: TabBarProps['variant']) => css`
  width: 100%;
  display: flex;
  align-items: center;
  height: ${getThemedSpacing(1000)};

  ${variant === 'view' &&
  `
    border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 400)};
    background-color: ${getThemedColor('neutral', 200)};
    border-radius: ${getThemedRadius(300)};
    padding: ${getThemedSpacing(100)};
  `}

  ${variant === 'transparent' &&
  `
    border: none;
    background-color: transparent;
    border-radius: ${getThemedRadius(300)};
    padding: 0 ${getThemedSpacing(400)};

    .chakra-tabs__list {
      gap: ${getThemedSpacing(800)};
    }
  `}
`

export const defaultTabStyles = css`
  width: 99%;
  height: ${getThemedSpacing(1000)};
  padding: ${getThemedSpacing(200)} ${getThemedSpacing(400)};
  border-radius: ${getThemedRadius(100)};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${getThemedSpacing(50)};
  font-size: ${getThemedFontSize(400)};
  line-height: ${getThemedLineHeight(600)};
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
    outline-offset: ${getThemedSpacing(50)};
    box-shadow:
      0 0 0 ${getThemedSpacing(50)} ${getThemedColor('neutral', 100)},
      rgba(0, 0, 0, 0.05) 0rem ${getThemedSpacing(50)} ${getThemedSpacing(50)}
        ${getThemedSpacing(100)};
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
      outline-offset: ${getThemedSpacing(50)};
      box-shadow:
        0 0 0 ${getThemedSpacing(50)} ${getThemedColor('neutral', 100)},
        rgba(0, 0, 0, 0.05) 0rem ${getThemedSpacing(50)} ${getThemedSpacing(50)}
          ${getThemedSpacing(100)};
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
  width: ${getThemedSpacing(100)};
  height: ${getThemedSpacing(600)};
  background-color: ${getThemedColor('neutral', 400)};
`

export const tabBarItemViewStyles = css`
  height: ${getThemedSpacing(800)};
  border-radius: ${getThemedRadius(200)};
  background-color: ${getThemedColor('neutral', 200)};
  color: ${getThemedColor('neutral', 700)};

  &:hover {
    background-color: ${getThemedColor('neutral', 300)};
    box-shadow: 0rem 0.0625rem ${getThemedSpacing(50)} 0rem #0000000d;
  }

  &:active {
    background-color: ${getThemedColor('neutral', 300)};
    box-shadow: 0rem ${getThemedSpacing(50)} ${getThemedSpacing(100)} -${getThemedSpacing(
        50,
      )} #0000001a;
    box-shadow: 0rem ${getThemedSpacing(100)} 0.375rem -0.0625rem #0000001a;
  }

  &:focus-visible {
    outline-color: ${getThemedColor('primary', 700)};
    outline-offset: ${getThemedSpacing(50)};
    box-shadow:
      0 0 0 ${getThemedSpacing(50)} ${getThemedColor('neutral', 100)},
      rgba(0, 0, 0, 0.05) 0rem ${getThemedSpacing(50)} ${getThemedSpacing(50)}
        ${getThemedSpacing(100)};
  }

  &[data-selected] {
    background-color: ${getThemedColor('neutral', 100)};
    border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 300)};
    box-shadow: 0rem 0.0625rem ${getThemedSpacing(50)} 0rem #0000000d;
    color: ${getThemedColor('neutral', 900)};

    &:hover {
      background-color: ${getThemedColor('neutral', 200)};
      border: ${getThemedBorderWidth(100)} solid
        ${getThemedColor('neutral', 300)};
      box-shadow: 0rem ${getThemedSpacing(50)} ${getThemedSpacing(100)} -${getThemedSpacing(
          50,
        )} #0000001a;
      box-shadow: 0rem ${getThemedSpacing(100)} 0.375rem -0.0625rem #0000001a;
    }

    &:active {
      background-color: ${getThemedColor('neutral', 300)};
      border: ${getThemedBorderWidth(100)} solid
        ${getThemedColor('neutral', 300)};
      box-shadow: 0rem ${getThemedSpacing(50)} ${getThemedSpacing(100)} -${getThemedSpacing(
          50,
        )} #0000001a;
      box-shadow: 0rem ${getThemedSpacing(100)} 0.375rem -0.0625rem #0000001a;
    }

    &:focus-visible {
      outline-color: ${getThemedColor('primary', 700)};
      outline-offset: ${getThemedSpacing(50)};
      box-shadow:
        0 0 0 ${getThemedSpacing(50)} ${getThemedColor('neutral', 100)},
        rgba(0, 0, 0, 0.05) 0rem ${getThemedSpacing(50)} ${getThemedSpacing(50)}
          ${getThemedSpacing(100)};
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
  border-bottom: ${getThemedBorderWidth(200)} solid transparent;

  &:hover {
    background-color: ${getThemedColor('neutral', 100)};
    border-bottom: ${getThemedBorderWidth(200)} solid
      ${getThemedColor('primary', 500)};
  }

  &:active {
    background-color: ${getThemedColor('neutral', 100)};
    border-bottom: ${getThemedBorderWidth(200)} solid
      ${getThemedColor('primary', 500)};
  }

  &:focus-visible {
    background-color: ${getThemedColor('neutral', 100)};
    border-bottom: ${getThemedBorderWidth(200)} solid
      ${getThemedColor('primary', 500)};
    outline-color: ${getThemedColor('primary', 700)};
    outline-offset: ${getThemedSpacing(50)};
    box-shadow:
      0 0 0 ${getThemedSpacing(50)} ${getThemedColor('neutral', 100)},
      rgba(0, 0, 0, 0.05) 0rem ${getThemedSpacing(50)} ${getThemedSpacing(50)}
        ${getThemedSpacing(100)};
  }

  &[data-selected] {
    background-color: ${getThemedColor('neutral', 100)};
    border-bottom: ${getThemedBorderWidth(200)} solid
      ${getThemedColor('primary', 500)};
    color: ${getThemedColor('neutral', 800)};

    &:hover {
      background-color: ${getThemedColor('neutral', 100)};
      border-bottom: ${getThemedBorderWidth(200)} solid
        ${getThemedColor('primary', 500)};
      color: ${getThemedColor('neutral', 800)};
    }

    &:focus-visible {
      background-color: ${getThemedColor('neutral', 100)};
      outline-color: ${getThemedColor('primary', 700)};
      outline-offset: ${getThemedSpacing(50)};
      box-shadow:
        0 0 0 ${getThemedSpacing(50)} ${getThemedColor('neutral', 100)},
        rgba(0, 0, 0, 0.05) 0rem ${getThemedSpacing(50)} ${getThemedSpacing(50)}
          ${getThemedSpacing(100)};
    }

    &::before {
      content: none;
    }
  }

  &[data-disabled] {
    background-color: transparent;
    color: ${getThemedColor('neutral', 400)};

    &:hover {
      border-bottom: ${getThemedBorderWidth(200)} solid transparent;
    }

    &[data-selected] {
      background-color: ${getThemedColor('neutral', 100)};
      color: ${getThemedColor('neutral', 400)};
      opacity: 1;

      &:hover {
        border-bottom: ${getThemedBorderWidth(200)} solid
          ${getThemedColor('primary', 500)};
      }
    }
  }
`
