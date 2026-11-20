import { css } from '@emotion/react'
import {
  getThemedBorderWidth,
  getThemedColor,
  getThemedFontSize,
  getThemedLineHeight,
  getThemedRadius,
  getThemedSpacing,
} from '../../../lib/theme'

export const menuTriggerChevronStyles = css`
  & > :last-child {
    margin-left: 0.375rem !important;
  }

  svg {
    width: 0.625rem;
    height: 0.625rem;
  }
`

/**
 * Legacy navigation trigger: the plain button that used to be the Menu's
 * built-in trigger, kept as the `navbarItem` variant.
 */
export const menuNavbarItemStyles = (
  size?: 'default' | 'small',
  theme?: 'light' | 'dark',
  active?: boolean,
) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${getThemedSpacing(100)};
  padding: ${getThemedSpacing(50)} ${getThemedSpacing(300)};
  cursor: pointer;
  font-size: ${size === 'small'
    ? getThemedFontSize(200)
    : getThemedFontSize(400)};
  font-weight: ${active ? 700 : 400};
  color: ${theme === 'dark'
    ? getThemedColor('neutral', 100)
    : getThemedColor('neutral', 900)};
  background-color: transparent;
  border: none;

  &:hover {
    background-color: ${theme === 'dark'
      ? 'transparent'
      : getThemedColor('neutral', 200)};
  }

  &:focus-visible {
    border-radius: 0;
    box-shadow:
      0 0 0 0.125rem ${getThemedColor('neutral', 100)},
      rgba(0, 0, 0, 0.05) 0 0.125rem 0.125rem 0.25rem;
    outline-color: ${getThemedColor('primary', 700)};
    outline-offset: ${getThemedSpacing(50)};
    outline-style: solid;
    outline-width: ${getThemedBorderWidth(200)};
  }

  ${active && theme !== 'dark'
    ? `color: ${getThemedColor('accessible', 'controls-on-neutral-lights')};`
    : ''}
`

export const menuContentStyles = (width: string | 'content' = '14rem') => css`
  width: ${width === 'content' ? 'max-content' : width};
  border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 600)};
  box-shadow: 0 0.25rem 0.375rem -0.25rem #0000001a;
  box-shadow: 0 0.625rem 0.9375rem -0.1875rem #0000001a;
  border-radius: ${getThemedRadius(300)};
  padding: ${getThemedSpacing(100)} ${getThemedSpacing(200)};
  display: flex;
  flex-direction: column;
  gap: 0;
`

export const menuSubmenuTriggerStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${getThemedFontSize(400)};
  line-height: ${getThemedLineHeight(600)};
  font-weight: 400;
  color: ${getThemedColor('neutral', 900)};

  &:hover {
    background-color: color-mix(
      in srgb,
      ${getThemedColor('primary', 500)} 20%,
      transparent
    );
  }

  &:active {
    background-color: color-mix(
      in srgb,
      ${getThemedColor('primary', 500)} 40%,
      transparent
    );
  }

  &[data-highlighted] {
    background-color: color-mix(
      in srgb,
      ${getThemedColor('primary', 500)} 20%,
      transparent
    );

    &:not(:hover) {
      background-color: ${getThemedColor('neutral', 100)};
      outline-color: ${getThemedColor('success', 500)};
      box-shadow:
        0 0 0 0.125rem ${getThemedColor('neutral', 700)},
        rgba(0, 0, 0, 0.05) 0 0.125rem 0.125rem 0.25rem;
    }

    &[aria-expanded='true'] {
      background-color: color-mix(
        in srgb,
        ${getThemedColor('primary', 500)} 20%,
        transparent
      );
      outline: none;
      box-shadow: none;
    }
  }
`

export const menuItemGroupLabelStyles = css`
  font-size: ${getThemedFontSize(300)};
  line-height: ${getThemedLineHeight(500)};
  font-weight: 700;
  color: ${getThemedColor('neutral', 900)};
`
