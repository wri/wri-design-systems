import { css } from '@emotion/react'
import { getThemedColor } from '../../../../lib/theme'

export const rootSwitchStyles = css`
  --switch-height: 1.5rem;
  --switch-width: 2.5rem;

  .chakra-switch__control-container {
    width: 2.625rem;
    height: 1.625rem;
    border-radius: 0.8125rem;
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
      outline: 0.125rem solid ${getThemedColor('primary', 700)};
      outline-offset: 0.1875rem;
      box-shadow:
        0 0 0 0.125rem ${getThemedColor('neutral', 100)},
        rgba(0, 0, 0, 0.05) 0 0.125rem 0.125rem 0.25rem;
    }

    &[data-state='checked'] {
      background-color: ${getThemedColor('primary', 500)};
    }

    &[data-disabled] {
      background-color: ${getThemedColor('neutral', 300)};
    }
  }

  .chakra-switch__thumb {
    height: 1.25rem;
    width: 1.25rem;
    translate: calc((var(--switch-width) - var(--switch-height)) / 8) 0;

    svg {
      width: 0.75rem;

      path {
        fill: ${getThemedColor('accessible', 'controls-on-neutral-lights') ||
        getThemedColor('primary', 700)};
      }
    }

    &:hover,
    &[data-hover] {
      outline: 0.5625rem solid
        color-mix(in srgb, ${getThemedColor('primary', 500)} 20%, transparent);
    }

    &:is(
        :checked,
        [data-checked],
        [aria-checked='true'],
        [data-state='checked']
      ) {
      translate: calc(var(--switch-width) + 0.125rem - var(--switch-height)) 0;
    }

    &[data-active] {
      outline: 0.5625rem solid
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
