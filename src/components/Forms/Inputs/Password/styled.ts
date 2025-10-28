/* eslint-disable no-nested-ternary */
import { css } from '@emotion/react'
import { getThemedColor } from '../../../../lib/theme'

export const passwordContainerStyles = css`
  width: 100%;
  max-width: 486px;
`

export const passwordLabelStyles = css`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: ${getThemedColor('neutral', 900)};
  text-align: left;

  span {
    color: ${getThemedColor('error', 500)};
    margin-right: 3px;
  }
`

export const passwordCaptionStyles = css`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: ${getThemedColor('neutral', 700)};
  text-align: left;
`

export const passwordContentStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: 8px;

  .ds-text-input-container {
    margin-bottom: 0px;

    input {
      margin-top: 0px;
    }
  }

  button {
    width: 98px;
  }
`

export const passwordStrengthContainerStyles = css`
  margin-top: 12px;
`

export const passwordStrengthLabelStyles = (strength: string) => css`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: ${getThemedColor('neutral', 800)};
  text-align: left;

  span {
    font-weight: 700;
    color: ${getThemedColor(
      strength === 'Medium'
        ? 'warning'
        : strength === 'Strong' || strength === 'Very Strong'
          ? 'success'
          : 'error',
      900,
    )};
  }
`

export const passwordStrengthBarStyles = (strength: string) => css`
  height: 8px;
  width: 100%;
  background-color: ${getThemedColor('neutral', 300)};
  margin-top: 8px;
  margin-bottom: 12px;
  border-radius: 8px;

  div {
    height: 100%;
    width: ${strength === 'Weak'
      ? '25%'
      : strength === 'Medium'
        ? '50%'
        : strength === 'Strong'
          ? '75%'
          : strength === 'Very Strong'
            ? ' 100%'
            : '5%'};
    background-color: ${getThemedColor(
      strength === 'Medium'
        ? 'warning'
        : strength === 'Strong' || strength === 'Very Strong'
          ? 'success'
          : 'error',
      900,
    )};
    border-radius: 8px;
  }
`

export const passwordStrengthItemStyles = (isValid: boolean) => css`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: ${getThemedColor('neutral', 700)};

  div {
    height: 16px;
    width: 16px;
    background-color: ${getThemedColor(isValid ? 'success' : 'error', 100)};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
