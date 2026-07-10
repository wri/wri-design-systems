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
  box-shadow: 0 0.0625rem 0.125rem 0 #0000000d;
  cursor: pointer;
  gap: 0;

  &:focus-visible {
    box-shadow:
      0 0 0 0.125rem ${getThemedColor('neutral', 100)},
      rgba(0, 0, 0, 0.05) 0 0.125rem 0.125rem 0.25rem;
  }

  svg {
    width: ${size === 'small' ? '0.625rem' : '1rem'};
    height: ${size === 'small' ? '0.625rem' : '1rem'};
  }

  &[data-disabled] svg path {
    fill: ${getThemedColor('neutral', 500)};
  }
`

export const primaryButtonStyles = css`
  background-color: ${getThemedColor('primary', 500)};
  border: ${getThemedBorderWidth(100)} solid ${getThemedColor('primary', 600)};
  color: ${getThemedColor('accessible', 'text-on-primary-mids') ||
  getThemedColor('primary', 900)};
  box-shadow: 0 0.0625rem 0.125rem 0 #0000000d;

  &:hover {
    background-color: ${getThemedColor('primary', 500)};
    box-shadow: 0 0.125rem 0.25rem -0.125rem #0000001a;
    box-shadow: 0 0.25rem 0.375rem -0.0625rem #0000001a;
  }

  &:active {
    outline: none;
    background-color: ${getThemedColor('primary', 600)} !important;
    border: ${getThemedBorderWidth(100)} solid ${getThemedColor('primary', 700)} !important;
    box-shadow: 0 0.125rem 0.25rem -0.125rem #0000001a;
    box-shadow: 0 0.25rem 0.375rem -0.0625rem #0000001a;
  }

  &:focus-visible {
    outline-color: ${getThemedColor('primary', 700)};
    background-color: ${getThemedColor('primary', 500)};
  }

  &:disabled,
  &[data-disabled] {
    background-color: ${getThemedColor('neutral', 300)};
    border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 400)};
    color: ${getThemedColor('neutral', 500)};
    cursor: not-allowed;
    opacity: 1;

    &:hover {
      background-color: ${getThemedColor('neutral', 300)};
    }
  }
`

export const secondaryButtonStyles = css`
  background-color: ${getThemedColor('neutral', 100)};
  border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 300)};
  color: ${getThemedColor('neutral', 800)};
  box-shadow: 0 0.0625rem 0.125rem 0 #0000000d;

  &:hover {
    background-color: ${getThemedColor('neutral', 100)};
    box-shadow: 0 0.125rem 0.25rem -0.125rem #0000001a;
    box-shadow: 0 0.25rem 0.375rem -0.0625rem #0000001a;
  }

  &:active {
    outline: none;
    background-color: ${getThemedColor('neutral', 200)} !important;
    border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 300)} !important;
    box-shadow: 0 0.125rem 0.25rem -0.125rem #0000001a;
    box-shadow: 0 0.25rem 0.375rem -0.0625rem #0000001a;
  }

  &:focus-visible {
    outline-color: ${getThemedColor('primary', 700)};
  }

  &:disabled,
  &[data-disabled] {
    background-color: ${getThemedColor('neutral', 200)};
    border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 300)};
    color: ${getThemedColor('neutral', 500)};
    cursor: not-allowed;
    opacity: 1;

    &:hover {
      background-color: ${getThemedColor('neutral', 200)};
    }
  }
`

export const borderlessButtonStyles = css`
  background-color: transparent;
  border: none;
  color: ${getThemedColor('neutral', 900)};
  box-shadow: none;

  &:hover {
    background-color: color-mix(
      in srgb,
      ${getThemedColor('primary', 500)} 20%,
      transparent
    );
  }

  &:active {
    outline: none;
    background-color: color-mix(
      in srgb,
      ${getThemedColor('primary', 500)} 40%,
      transparent
    );
    box-shadow: 0 0.25rem 0.375rem -0.0625rem #0000001a;
  }

  &:focus-visible {
    outline-color: ${getThemedColor('primary', 700)};
  }

  &:disabled,
  &[data-disabled] {
    background-color: transparent;
    color: ${getThemedColor('neutral', 500)};
    cursor: not-allowed;
    opacity: 1;

    &:hover {
      background-color: transparent;
    }
  }
`

export const outlineButtonStyles = css`
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

  &:disabled,
  &[data-disabled] {
    background-color: ${getThemedColor('neutral', 200)};
    border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 300)};
    color: ${getThemedColor('neutral', 500)};
    cursor: not-allowed;
    opacity: 1;

    &:hover {
      background-color: ${getThemedColor('neutral', 200)};
    }
  }
`

export const negativeButtonStyles = css`
  background-color: ${getThemedColor('error', 100)};
  border: ${getThemedBorderWidth(100)} solid ${getThemedColor('error', 300)};
  color: ${getThemedColor('accessible', 'text-on-negative-mids') ||
  getThemedColor('error', 900)};
  box-shadow: 0 0.0625rem 0.125rem 0 #0000000d;

  &:hover {
    background-color: ${getThemedColor('error', 100)};
    box-shadow: 0 0.125rem 0.25rem -0.125rem #0000001a;
    box-shadow: 0 0.25rem 0.375rem -0.0625rem #0000001a;
  }

  &:active {
    outline: none;
    background-color: ${getThemedColor('error', 400)} !important;
    box-shadow: 0 0.125rem 0.25rem -0.125rem #0000001a;
    box-shadow: 0 0.25rem 0.375rem -0.0625rem #0000001a;
  }

  &:focus-visible {
    outline-color: ${getThemedColor('primary', 700)};
  }

  &:disabled,
  &[data-disabled] {
    background-color: ${getThemedColor('neutral', 200)};
    border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 300)};
    color: ${getThemedColor('neutral', 500)};
    cursor: not-allowed;
    opacity: 1;
  }
`
