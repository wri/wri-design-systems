import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'

export const menuContentStyles = css`
  width: 224px;
  border: 1px solid ${getThemedColor('neutral', 600)};
`

export const menuSubmenuTriggerStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  line-height: 24px;
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
        0 0 0 2px ${getThemedColor('neutral', 700)},
        rgba(0, 0, 0, 0.05) 0px 2px 2px 4px;
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
    height: 16px;
    width: 16px;
    color: ${getThemedColor('neutral', 700)};
    margin-top: 4px;
  }

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
      outline-color: ${getThemedColor('primary', 700)};
      box-shadow:
        0 0 0 2px ${getThemedColor('primary', 700)},
        rgba(0, 0, 0, 0.05) 0px 2px 2px 4px;
    }
  }

  &[data-disabled] {
    cursor: not-allowed;
    background-color: transparent;
    outline: none;
    box-shadow: none;

    .menu-item-label,
    .menu-item-caption {
      color: ${getThemedColor('neutral', 600)};
    }
  }
`

export const menuItemLabelAndCaptionStyles = (
  hasSartIcon: boolean,
  hasEndIcon: boolean,
) => css`
  width: 100%;
  margin-left: ${hasSartIcon ? '8px' : '0'};
  margin-right: ${hasEndIcon ? '8px' : '0'};
`

export const menuItemLabelContentStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${getThemedColor('neutral', 700)};
  width: 100%;

  .menu-item-label {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: ${getThemedColor('neutral', 900)};
  }

  .menu-item-caption {
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    color: ${getThemedColor('neutral', 700)};
  }
`

export const menuItemGroupLabelStyles = css`
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  color: ${getThemedColor('neutral', 900)};
`
