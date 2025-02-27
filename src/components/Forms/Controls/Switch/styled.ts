import { css } from '@emotion/react'
import { getThemedColor } from '../../../../lib/theme'

export const rootSwitchStyles = css`
  .chakra-switch__control-container {
    width: 42px;
    height: 26px;
    border-radius: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${getThemedColor('neutral', 600)};
  }

  &[data-state='checked'] .chakra-switch__control-container {
    background-color: ${getThemedColor('primary', 700)};
  }

  &[data-disabled] .chakra-switch__control-container {
    background-color: transparent;
  }

  .chakra-switch__control {
    height: 24px;
    width: 40px;
    display: flex;
    align-items: center;
    background-color: ${getThemedColor('neutral', 500)};

    &:focus-visible,
    &[data-focus-visible] {
      box-shadow: none;
      outline: none;
      outline: 2px solid ${getThemedColor('primary', 700)};
      outline-offset: 3px;
    }

    &[data-state='checked'] {
      background-color: ${getThemedColor('primary', 500)};
    }

    &[data-disabled] {
      background-color: ${getThemedColor('neutral', 300)};
    }
  }

  .chakra-switch__thumb {
    svg {
      width: 12px;

      path {
        fill: ${getThemedColor('primary', 700)};
      }
    }

    &:hover,
    &[data-hover] {
      outline: 9px solid
        color-mix(in srgb, ${getThemedColor('primary', 500)} 20%, transparent);
    }

    &[data-active] {
      outline: 9px solid
        color-mix(in srgb, ${getThemedColor('primary', 500)} 40%, transparent);
    }

    &[data-disabled] {
      outline: none;

      &[data-state='checked'] {
        svg {
          path {
            fill: ${getThemedColor('neutral', 500)};
          }
        }
      }
    }
  }
`
