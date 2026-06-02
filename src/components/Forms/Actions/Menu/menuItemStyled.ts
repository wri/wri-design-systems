import { css } from '@emotion/react'
import {
  getThemedColor,
  getThemedFontSize,
  getThemedLineHeight,
  getThemedSpacing,
} from '../../../../lib/theme'

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
  }

  &:hover {
    background-color: color-mix(
      in srgb,
      ${getThemedColor('primary', 500)} 20%,
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
        0 0 0 0.125rem ${getThemedColor('primary', 700)},
        rgba(0, 0, 0, 0.05) 0 0.125rem 0.125rem 0.25rem;
    }
  }

  &:active,
  &[data-highlighted]:active {
    background-color: color-mix(
      in srgb,
      ${getThemedColor('primary', 500)} 40%,
      transparent
    );
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

export const menuItemLabelContentStyles = (isChecked = false) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${getThemedColor('neutral', 700)};
  width: 100%;

  .ds-menu-item-label {
    font-size: ${getThemedFontSize(400)};
    line-height: ${getThemedLineHeight(600)};
    font-weight: ${isChecked ? 700 : 400};
    color: ${getThemedColor('neutral', 900)};
  }

  .ds-menu-item-caption {
    font-size: ${getThemedFontSize(300)};
    line-height: ${getThemedLineHeight(500)};
    font-weight: 400;
    color: ${getThemedColor('neutral', 700)};
  }
`
