import { css } from '@emotion/react'
import { getThemedColor } from '../../../../lib/theme'
import { InputWithUnitsProps } from './types'

export const inputWithUnitsStyles = css`
  width: 100%;
  max-width: 23.125rem;
  position: relative;
`

export const inputWithUnitsLabelStyles = (
  disabled?: InputWithUnitsProps['disabled'],
) => css`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  color: ${getThemedColor('neutral', disabled ? 600 : 900)};
  text-align: left;

  span {
    color: ${disabled
      ? getThemedColor('neutral', 600)
      : getThemedColor('error', 500)};
    margin-right: 0.1875rem;
  }
`

export const inputWithUnitsCaptionStyles = (
  disabled?: InputWithUnitsProps['disabled'],
) => css`
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 400;
  color: ${getThemedColor('neutral', disabled ? 600 : 700)};
  text-align: left;
`

export const errorBarStyles = css`
  width: 0.1875rem;
  height: 100%;
  background-color: ${getThemedColor('error', 900)};
  position: absolute;
  top: 0;
  left: 0;
`

export const inputWithUnitsErrorMessageStyles = css`
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;
  color: ${getThemedColor('error', 900)};
  text-align: left;
`

export const inputWithUnitsContainerStyles = (
  hasError: boolean,
  unitsPosition?: InputWithUnitsProps['unitsPosition'],
) => css`
  width: 100%;
  margin-top: 0.5rem;

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
            border: 0.0625rem solid ${getThemedColor('error', 900)};
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
            border: 0.0625rem solid ${getThemedColor('error', 900)};
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
      padding: 0.375rem 0.25rem;
      background-color: ${getThemedColor('neutral', 300)};

      ${unitsPosition === 'start'
        ? `
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          ${
            hasError
              ? `
            border: 0.0625rem solid ${getThemedColor('error', 900)};
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
            border: 0.0625rem solid ${getThemedColor('error', 900)};
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
      padding: 0 0.25rem;
    }
  }
`
