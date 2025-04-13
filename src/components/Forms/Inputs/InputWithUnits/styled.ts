import { css } from '@emotion/react'
import { getThemedColor } from '../../../../lib/theme'
import { InputWithUnitsProps } from './types'

export const inputWithUnitsStyles = css`
  width: 100%;
  max-width: 370px;
  position: relative;
`

export const inputWithUnitsLabelStyles = (
  disabled?: InputWithUnitsProps['disabled'],
) => css`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: ${getThemedColor('neutral', disabled ? 600 : 900)};
  text-align: left;

  span {
    color: ${disabled
      ? getThemedColor('neutral', 600)
      : getThemedColor('error', 500)};
    margin-right: 3px;
  }
`

export const inputWithUnitsCaptionStyles = (
  disabled?: InputWithUnitsProps['disabled'],
) => css`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: ${getThemedColor('neutral', disabled ? 600 : 700)};
  text-align: left;
`

export const errorBarStyles = css`
  width: 3px;
  height: 100%;
  background-color: ${getThemedColor('error', 900)};
  position: absolute;
  top: 0;
  left: 0;
`

export const inputWithUnitsErrorMessageStyles = css`
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  color: ${getThemedColor('error', 900)};
  text-align: left;
`

export const inputWithUnitsContainerStyles = (
  hasError: boolean,
  unitsPosition?: InputWithUnitsProps['unitsPosition'],
) => css`
  width: 100%;
  margin-top: 8px;

  .text-input-container {
    margin-bottom: 0px;

    input {
      margin-top: 0px;
      ${unitsPosition === 'start'
        ? `
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          ${
            hasError
              ? `
            border: 1px solid ${getThemedColor('error', 900)};
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
            border: 1px solid ${getThemedColor('error', 900)};
            border-right: none;
          `
              : ''
          }
        `}
    }
  }

  .select-input-container {
    max-width: 82px;
    margin-bottom: 0px;

    .chakra-select__trigger {
      padding: 6px 4px;
      background-color: ${getThemedColor('neutral', 300)};

      ${unitsPosition === 'start'
        ? `
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          ${
            hasError
              ? `
            border: 1px solid ${getThemedColor('error', 900)};
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
            border: 1px solid ${getThemedColor('error', 900)};
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
      padding: 0 4px;
    }
  }
`
