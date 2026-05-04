import { css } from '@emotion/react'
import {
  getThemedBorderWidth,
  getThemedColor,
  getThemedFontSize,
  getThemedLineHeight,
  getThemedSpacing,
} from '../../../../lib/theme'

export const menuStyles = (theme?: 'light' | 'dark', fontSize?: string) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${getThemedSpacing(100)};
  padding: ${getThemedSpacing(50)} ${getThemedSpacing(300)};
  cursor: pointer;
  font-size: ${fontSize ?? '1rem'};
  color: ${theme === 'dark' ? getThemedColor('neutral', 100) : 'default'};
  background-color: ${theme === 'dark' ? 'default' : 'transparent'};
  &:hover {
    background-color: ${theme === 'dark'
      ? 'default'
      : getThemedColor('neutral', 200)};
  }

  &:focus-visible {
    border-radius: 0;
    box-shadow:
      0 0 0 ${getThemedSpacing(50)} ${getThemedColor('neutral', 100)},
      rgba(0, 0, 0, 0.05) 0 ${getThemedSpacing(50)} ${getThemedSpacing(50)}
        ${getThemedSpacing(100)};
    outline-color: ${getThemedColor('primary', 700)};
    outline-offset: ${getThemedSpacing(50)};
    outline-style: solid;
    outline-width: ${getThemedBorderWidth(200)};
  }
`

export const menuContentStyles = css`
  width: 14rem;
  border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 600)};
  box-shadow: 0 ${getThemedSpacing(100)} 0.375rem -${getThemedSpacing(100)} #0000001a;
  box-shadow: 0 0.625rem 0.9375rem -0.1875rem #0000001a;
  padding: ${getThemedSpacing(300)};
  display: flex;
  flex-direction: column;
  gap: ${getThemedSpacing(200)};
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
        0 0 0 ${getThemedSpacing(50)} ${getThemedColor('neutral', 700)},
        rgba(0, 0, 0, 0.05) 0 ${getThemedSpacing(50)} ${getThemedSpacing(50)}
          ${getThemedSpacing(100)};
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

export const menuItemContainerStyles = css`
  display: flex;
  align-items: flex-start;
  gap: 0;
  cursor: pointer;

  svg {
    height: 1rem;
    width: 1rem;
    color: ${getThemedColor('neutral', 700)};
    margin-top: ${getThemedSpacing(100)};
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
      outline-color: ${getThemedColor('primary', 700)};
      box-shadow:
        0 0 0 ${getThemedSpacing(50)} ${getThemedColor('primary', 700)},
        rgba(0, 0, 0, 0.05) 0 ${getThemedSpacing(50)} ${getThemedSpacing(50)} ${getThemedSpacing(100)};
    }
  }

  &[data-disabled] {
    cursor: not-allowed;
    background-color: transparent;
    outline: none;
    box-shadow: none;

    .ds-menu-item-label,
    .ds-menu-item-caption {
      color: ${getThemedColor('neutral', 600)};
    }
  }
`

export const menuItemLabelAndCaptionStyles = (
  hasStartIcon: boolean,
  hasEndIcon: boolean,
) => css`
  width: 100%;
  margin-left: ${hasStartIcon ? getThemedSpacing(200) : '0'};
  margin-right: ${hasEndIcon ? getThemedSpacing(200) : '0'};
`

export const menuItemLabelContentStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${getThemedColor('neutral', 700)};
  width: 100%;

  .ds-menu-item-label {
    font-size: ${getThemedFontSize(400)};
    line-height: ${getThemedLineHeight(600)};
    font-weight: 400;
    color: ${getThemedColor('neutral', 900)};
  }

  .ds-menu-item-caption {
    font-size: ${getThemedFontSize(300)};
    line-height: ${getThemedLineHeight(500)};
    font-weight: 400;
    color: ${getThemedColor('neutral', 700)};
  }
`

export const menuItemGroupLabelStyles = css`
  font-size: ${getThemedFontSize(300)};
  line-height: ${getThemedLineHeight(500)};
  font-weight: 700;
  color: ${getThemedColor('neutral', 900)};
`
