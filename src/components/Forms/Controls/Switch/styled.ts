import { css } from '@emotion/react'
import { getThemedColor } from '../../../../lib/theme'

export const rootSwitchStyles = css`
  --switch-height: 24px;
  --switch-width: 40px;

  .chakra-switch__control-container {
    width: 42px;
    height: 26px;
    border-radius: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${getThemedColor('neutral', 700)};
  }

  &[data-state='checked'] .chakra-switch__control-container {
    background-color: ${getThemedColor('primary', 700)};
  }

  &[data-disabled] .chakra-switch__control-container {
    background-color: transparent;
  }

  .chakra-switch__control {
    display: flex;
    align-items: center;
    background-color: ${getThemedColor('neutral', 600)};

    &:focus-visible,
    &[data-focus-visible] {
      outline: none;
      outline: 2px solid ${getThemedColor('primary', 700)};
      outline-offset: 3px;
      box-shadow:
        0 0 0 2px ${getThemedColor('neutral', 100)},
        rgba(0, 0, 0, 0.05) 0px 2px 2px 4px;
    }

    &[data-state='checked'] {
      background-color: ${getThemedColor('primary', 500)};
    }

    &[data-disabled] {
      background-color: ${getThemedColor('neutral', 300)};
    }
  }

  .chakra-switch__thumb {
    height: 20px;
    width: 20px;
    translate: calc((var(--switch-width) - var(--switch-height)) / 8) 0;

    svg {
      width: 12px;

      path {
        fill: ${getThemedColor('accessible', 'controls-on-neutral-lights') ||
        getThemedColor('primary', 700)};
      }
    }

    &:hover,
    &[data-hover] {
      outline: 9px solid
        color-mix(in srgb, ${getThemedColor('primary', 500)} 20%, transparent);
    }

    &:is(
        :checked,
        [data-checked],
        [aria-checked='true'],
        [data-state='checked']
      ) {
      translate: calc(var(--switch-width) + 2px - var(--switch-height)) 0;
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

  .chakra-switch__label {
    cursor: pointer;

    &[data-disabled] {
      cursor: not-allowed;
    }
  }
`
