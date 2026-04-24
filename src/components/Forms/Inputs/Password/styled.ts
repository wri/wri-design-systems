/* eslint-disable no-nested-ternary */
import { css } from '@emotion/react'
import { getThemedColor } from '../../../../lib/theme'

export const passwordContainerStyles = css`
  width: 100%;
  max-width: 30.375rem;
`

export const passwordLabelStyles = css`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  color: ${getThemedColor('neutral', 900)};
  text-align: left;

  span {
    color: ${getThemedColor('error', 500)};
    margin-right: 0.1875rem;
  }
`

export const passwordCaptionStyles = css`
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 400;
  color: ${getThemedColor('neutral', 700)};
  text-align: left;
`

export const passwordContentStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-top: 0.5rem;

  .ds-text-input-container {
    margin-bottom: 0;

    input {
      margin-top: 0;
    }
  }

  button {
    width: 6.125rem;
  }
`

export const passwordStrengthContainerStyles = css`
  margin-top: 0.75rem;
`

export const passwordStrengthLabelStyles = (strength: string) => css`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  color: ${getThemedColor('neutral', 800)};
  text-align: left;

  span {
    font-weight: 700;
    color: ${getThemedColor(
      strength === 'medium'
        ? 'warning'
        : strength === 'strong' || strength === 'very-strong'
          ? 'success'
          : 'error',
      900,
    )};
  }
`

export const passwordStrengthBarStyles = (strength: string) => css`
  height: 0.5rem;
  width: 100%;
  background-color: ${getThemedColor('neutral', 300)};
  margin-top: 0.5rem;
  margin-bottom: 0.75rem;
  border-radius: 0.5rem;

  div {
    height: 100%;
    width: ${strength === 'weak'
      ? '25%'
      : strength === 'medium'
        ? '50%'
        : strength === 'strong'
          ? '75%'
          : strength === 'very-strong'
            ? ' 100%'
            : '5%'};
    background-color: ${getThemedColor(
      strength === 'medium'
        ? 'warning'
        : strength === 'strong' || strength === 'very-strong'
          ? 'success'
          : 'error',
      900,
    )};
    border-radius: 0.5rem;
  }
`

export const passwordStrengthItemStyles = (isValid: boolean) => css`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 400;
  color: ${getThemedColor('neutral', 700)};

  div {
    height: 1rem;
    width: 1rem;
    background-color: ${getThemedColor(isValid ? 'success' : 'error', 100)};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
