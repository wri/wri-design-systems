/* eslint-disable no-nested-ternary */
import styled from '@emotion/styled'
import { getThemedColor } from '../../../../lib/theme'

export const StyledPassword = styled.div`
  width: 100%;
  max-width: 486px;
`

export const PasswordLabel = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: ${getThemedColor('neutral', 900)};

  span {
    color: ${getThemedColor('error', 500)};
    margin-right: 3px;
  }
`

export const PasswordCaption = styled.p`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: ${getThemedColor('neutral', 600)};
`

export const PasswordContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: 8px;

  .text-input-container {
    margin-bottom: 0px;

    input {
      margin-top: 0px;
    }
  }

  button {
    width: 98px;
  }
`

export const PasswordStrengthContainer = styled.div`
  margin-top: 12px;
`

export const PasswordStrengthLabel = styled.p<{ strength: string }>`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: ${getThemedColor('neutral', 800)};

  span {
    font-weight: 700;
    color: ${({ strength }) =>
      getThemedColor(
        strength === 'Medium'
          ? 'warning'
          : strength === 'Strong' || strength === 'Very Strong'
            ? 'success'
            : 'error',
        500,
      )};
  }
`

export const PasswordStrengthBar = styled.div<{ strength: string }>`
  height: 8px;
  width: 100%;
  background-color: ${getThemedColor('neutral', 300)};
  margin-top: 8px;
  margin-bottom: 12px;
  border-radius: 8px;

  div {
    height: 100%;
    width: ${({ strength }) =>
      strength === 'Weak'
        ? '25%'
        : strength === 'Medium'
          ? '50%'
          : strength === 'Strong'
            ? '75%'
            : strength === 'Very Strong'
              ? ' 100%'
              : '5%'};
    background-color: ${({ strength }) =>
      getThemedColor(
        strength === 'Medium'
          ? 'warning'
          : strength === 'Strong' || strength === 'Very Strong'
            ? 'success'
            : 'error',
        500,
      )};
    border-radius: 8px;
  }
`

export const PasswordStrengthItem = styled.div<{ isValid: boolean }>`
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
    background-color: ${({ isValid }) =>
      getThemedColor(isValid ? 'success' : 'error', 100)};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
