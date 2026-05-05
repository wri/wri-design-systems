import { css } from '@emotion/react'
import {
  getThemedColor,
  getThemedFontSize,
  getThemedLineHeight,
  getThemedSpacing,
} from '../../../../lib/theme'
import { SliderInputProps } from './types'

export const sliderInputLabelStyles = (size: SliderInputProps['size']) => css`
  font-size: ${size === 'small'
    ? getThemedFontSize(300)
    : getThemedFontSize(400)};
  line-height: ${size === 'small'
    ? getThemedLineHeight(500)
    : getThemedLineHeight(600)};
  font-weight: 400;
  color: ${getThemedColor('neutral', 900)};
  text-align: left;

  span {
    color: ${getThemedColor('error', 500)};
    margin-right: 0.1875rem;
  }
`

export const sliderInputCaptionStyles = (size: SliderInputProps['size']) => css`
  font-size: ${size === 'small'
    ? getThemedFontSize(200)
    : getThemedFontSize(300)};
  line-height: ${size === 'small'
    ? getThemedLineHeight(400)
    : getThemedLineHeight(500)};
  font-weight: 400;
  color: ${getThemedColor('neutral', 700)};
  text-align: left;
`

export const sliderInputContentStyles = css`
  display: flex;
  align-items: center;
  gap: ${getThemedSpacing(300)};

  .ds-text-input-container {
    width: 3.9375rem;
    margin: 0;

    .chakra-input {
      padding: ${getThemedSpacing(100)};
      width: 3.9375rem;
    }
  }

  .chakra-slider__root {
    padding: 0 ${getThemedSpacing(300)};
    height: 1.875rem;
    margin-top: 1.125rem;
    width: 100%;
  }
`
