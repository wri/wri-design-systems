/* eslint-disable no-nested-ternary */
import { css } from '@emotion/react'
import {
  getThemedColor,
  getThemedFontSize,
  getThemedLineHeight,
  getThemedRadius,
  getThemedSpacing,
} from '../../../../lib/theme'

export const passwordContainerStyles = css`
  width: 100%;
  max-width: 30.375rem;
`

export const passwordLabelStyles = css`
  font-size: ${getThemedFontSize(400)};
  line-height: ${getThemedLineHeight(600)};
  font-weight: 400;
  color: ${getThemedColor('neutral', 900)};
  text-align: left;

  span {
    color: ${getThemedColor('error', 500)};
    margin-right: 0.1875rem;
  }
`

export const passwordCaptionStyles = css`
  font-size: ${getThemedFontSize(300)};
  line-height: ${getThemedLineHeight(500)};
  font-weight: 400;
  color: ${getThemedColor('neutral', 700)};
  text-align: left;
`

export const passwordContentStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${getThemedSpacing(200)};
  margin-top: ${getThemedSpacing(200)};

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
  margin-top: ${getThemedSpacing(300)};
`

export const passwordStrengthLabelStyles = (strength: string) => css`
  font-size: ${getThemedFontSize(400)};
  line-height: ${getThemedLineHeight(600)};
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
  height: ${getThemedSpacing(200)};
  width: 100%;
  background-color: ${getThemedColor('neutral', 300)};
  margin-top: ${getThemedSpacing(200)};
  margin-bottom: ${getThemedSpacing(300)};
  border-radius: ${getThemedRadius(500)};

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
    border-radius: ${getThemedRadius(500)};
  }
`

export const passwordStrengthItemStyles = (isValid: boolean) => css`
  display: flex;
  align-items: center;
  gap: ${getThemedSpacing(100)};
  font-size: ${getThemedFontSize(300)};
  line-height: ${getThemedLineHeight(500)};
  font-weight: 400;
  color: ${getThemedColor('neutral', 700)};

  div {
    height: ${getThemedSpacing(400)};
    width: ${getThemedSpacing(400)};
    background-color: ${getThemedColor(isValid ? 'success' : 'error', 100)};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
