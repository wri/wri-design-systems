import { css } from '@emotion/react'
import {
  getThemedBorderWidth,
  getThemedColor,
  getThemedSpacing,
} from '../../../../lib/theme'
import { InputWithUnitsProps } from './types'

export const inputWithUnitsStyles = css`
  width: 100%;
  max-width: 23.125rem;
  position: relative;
`

export const inputWithUnitsContainerStyles = (
  hasError: boolean,
  unitsPosition?: InputWithUnitsProps['unitsPosition'],
) => css`
  width: 100%;

  .ds-text-input-container {
    margin-bottom: 0;

    input {
      margin-top: 0;
      ${unitsPosition === 'start'
        ? `
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          ${
            hasError
              ? `
            border: ${getThemedBorderWidth(100)} solid ${getThemedColor('error', 900)};
            border-left: none;
          `
              : ''
          }
        `
        : `
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          ${
            hasError
              ? `
            border: ${getThemedBorderWidth(100)} solid ${getThemedColor('error', 900)};
            border-right: none;
          `
              : ''
          }
        `}
    }
  }

  .ds-select-input-container {
    max-width: 5.125rem;
    margin-bottom: 0;

    .chakra-select__trigger {
      padding: ${getThemedSpacing(50)} ${getThemedSpacing(100)};
      background-color: ${getThemedColor('neutral', 300)};

      ${unitsPosition === 'start'
        ? `
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          ${
            hasError
              ? `
            border: ${getThemedBorderWidth(100)} solid ${getThemedColor('error', 900)};
            border-right: none;
          `
              : ''
          }
        `
        : `
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          ${
            hasError
              ? `
            border: ${getThemedBorderWidth(100)} solid ${getThemedColor('error', 900)};
            border-left: none;
          `
              : ''
          }
      `}

      p {
        color: ${getThemedColor('neutral', 700)};
      }

      &[data-state='open'] {
        background-color: ${getThemedColor('neutral', 400)};
      }
    }

    .chakra-select__indicatorGroup {
      padding: 0 ${getThemedSpacing(100)};
    }
  }
`
