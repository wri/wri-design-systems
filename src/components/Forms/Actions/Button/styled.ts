import { css } from '@emotion/react'
import {
  getThemedColor,
  getThemedBorderWidth,
  getThemedFontSize,
  getThemedLineHeight,
  getThemedRadius,
  getThemedSpacing,
} from '../../../../lib/theme'
import { ButtonProps } from './types'

export const baseButtonStyles = (size: ButtonProps['size']) => css`
  width: auto;
  height: ${size === 'small' ? getThemedSpacing(700) : getThemedSpacing(1000)};
  font-size: ${size === 'small'
    ? getThemedFontSize(200)
    : getThemedFontSize(400)};
  line-height: ${size === 'small'
    ? getThemedLineHeight(400)
    : getThemedLineHeight(600)};
  font-weight: 700;
  padding: ${size === 'small'
    ? `0.375rem ${getThemedSpacing(200)}`
    : `${getThemedSpacing(200)} ${getThemedSpacing(400)}`};
  border-radius: ${getThemedRadius(300)};
  box-shadow: 0 ${getThemedBorderWidth(100)} ${getThemedSpacing(50)} 0
    #0000000d;
  cursor: pointer;
  gap: 0;

  &:focus-visible {
    box-shadow:
      0 0 0 ${getThemedSpacing(50)} ${getThemedColor('neutral', 100)},
      rgba(0, 0, 0, 0.05) 0 ${getThemedSpacing(50)} ${getThemedSpacing(50)}
        ${getThemedSpacing(100)};
  }

  svg {
    width: ${size === 'small' ? '0.625rem' : '1rem'};
    height: ${size === 'small' ? '0.625rem' : '1rem'};
  }

  &[data-disabled] svg path {
    fill: ${getThemedColor('neutral', 500)};
  }
`

export const primaryButtonStyles = (disabled?: boolean) => css`
  ${disabled
    ? `
    background-color: ${getThemedColor('neutral', 300)};
    border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 400)};
    color: ${getThemedColor('neutral', 500)};
    cursor: not-allowed !important;

    &:hover {
      background-color: ${getThemedColor('neutral', 300)} !important;
    }
  `
    : `
    background-color: ${getThemedColor('primary', 500)};
    border: ${getThemedBorderWidth(100)} solid ${getThemedColor('primary', 600)};
    color: ${getThemedColor('accessible', 'text-on-primary-mids') || getThemedColor('primary', 900)};
    box-shadow: 0 ${getThemedBorderWidth(100)} ${getThemedSpacing(50)} 0 #0000000D;

    &:hover {
      background-color: ${getThemedColor('primary', 500)};
      box-shadow: 0 ${getThemedSpacing(50)} ${getThemedSpacing(100)} -${getThemedSpacing(50)} #0000001A;
      box-shadow: 0 ${getThemedSpacing(100)} 0.375rem -${getThemedBorderWidth(100)} #0000001A;
    }

    &:active {
      outline: none;
      background-color: ${getThemedColor('primary', 600)} !important;
      border: ${getThemedBorderWidth(100)} solid ${getThemedColor('primary', 700)} !important;
      box-shadow: 0 ${getThemedSpacing(50)} ${getThemedSpacing(100)} -${getThemedSpacing(50)} #0000001A;
      box-shadow: 0 ${getThemedSpacing(100)} 0.375rem -${getThemedBorderWidth(100)} #0000001A;
    }

    &:focus-visible {
      outline-color: ${getThemedColor('primary', 700)};
      background-color: ${getThemedColor('primary', 500)};
    }
  `}
`

export const secondaryButtonStyles = (disabled?: boolean) => css`
  ${disabled
    ? `
    background-color: ${getThemedColor('neutral', 200)};
    border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 300)};
    color: ${getThemedColor('neutral', 500)};
    cursor: not-allowed !important;

    &:hover {
      background-color: ${getThemedColor('neutral', 200)} !important;
    }
  `
    : `
    background-color: ${getThemedColor('neutral', 100)};
    border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 300)};
    color: ${getThemedColor('neutral', 800)};
    box-shadow: 0 ${getThemedBorderWidth(100)} ${getThemedSpacing(50)} 0 #0000000D;

    &:hover {
      background-color: ${getThemedColor('neutral', 100)};
      box-shadow: 0 ${getThemedSpacing(50)} ${getThemedSpacing(100)} -${getThemedSpacing(50)} #0000001A;
      box-shadow: 0 ${getThemedSpacing(100)} 0.375rem -${getThemedBorderWidth(100)} #0000001A;
    }

    &:active {
      outline: none;
      background-color: ${getThemedColor('neutral', 200)} !important;
      border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 300)} !important;
      box-shadow: 0 ${getThemedSpacing(50)} ${getThemedSpacing(100)} -${getThemedSpacing(50)} #0000001A;
      box-shadow: 0 ${getThemedSpacing(100)} 0.375rem -${getThemedBorderWidth(100)} #0000001A;
    }

    &:focus-visible {
      outline-color: ${getThemedColor('primary', 700)};
    }
  `}
`

export const borderlessButtonStyles = (disabled?: boolean) => css`
  ${disabled
    ? `
    background-color: transparent;
    color: ${getThemedColor('neutral', 500)};
    cursor: not-allowed !important;

    &:hover {
      background-color: transparent !important;
    }
  `
    : `
    background-color: transparent;
    border: none;
    color: ${getThemedColor('neutral', 900)};
    box-shadow: none;

    &:hover {
      background-color: color-mix(in srgb, ${getThemedColor('primary', 500)} 20%, transparent);
    }

    &:active {
      outline: none;
      background-color: color-mix(in srgb, ${getThemedColor('primary', 500)} 40%, transparent);
      box-shadow: 0 ${getThemedSpacing(100)} 0.375rem -${getThemedBorderWidth(100)} #0000001A;
    }

    &:focus-visible {
      outline-color: ${getThemedColor('primary', 700)};
    }
  `}
`

export const outlineButtonStyles = (disabled?: boolean) => css`
  ${disabled
    ? `
    background-color: ${getThemedColor('neutral', 200)};
    border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 300)};
    color: ${getThemedColor('neutral', 500)};
    cursor: not-allowed !important;

    &:hover {
      background-color: ${getThemedColor('neutral', 200)} !important;
    }
  `
    : `
    background-color: transparent;
    border: ${getThemedBorderWidth(100)} solid ${getThemedColor('primary', 800)};
    color: ${getThemedColor('primary', 800)};

    &:hover {
      background-color: ${getThemedColor('primary', 100)};
      color: ${getThemedColor('primary', 900)};
    }

    &:active {
      outline: none;
      background-color: ${getThemedColor('primary', 200)} !important;
      border: ${getThemedBorderWidth(100)} solid ${getThemedColor('primary', 900)} !important;
      color: ${getThemedColor('primary', 900)};
    }

    &:focus-visible {
      outline-color: ${getThemedColor('primary', 700)};
      background-color: ${getThemedColor('primary', 100)};
    }
  `}
`
