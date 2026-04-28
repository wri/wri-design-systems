import { css } from '@emotion/react'
import { getThemedColor } from '../../../../lib/theme'
import { SliderInputProps } from './types'

export const sliderInputLabelStyles = (size: SliderInputProps['size']) => css`
  font-size: ${size === 'small' ? '0.875rem' : '1rem'};
  line-height: ${size === 'small' ? '1.25rem' : '1.5rem'};
  font-weight: 400;
  color: ${getThemedColor('neutral', 900)};
  text-align: left;

  span {
    color: ${getThemedColor('error', 500)};
    margin-right: 0.1875rem;
  }
`

export const sliderInputCaptionStyles = (size: SliderInputProps['size']) => css`
  font-size: ${size === 'small' ? '0.75rem' : '0.875rem'};
  line-height: ${size === 'small' ? '1rem' : '1.25rem'};
  font-weight: 400;
  color: ${getThemedColor('neutral', 700)};
  text-align: left;
`

export const sliderInputContentStyles = css`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  .ds-text-input-container {
    width: 3.9375rem;
    margin: 0;

    .chakra-input {
      padding: 0.25rem;
      width: 3.9375rem;
    }
  }

  .chakra-slider__root {
    padding: 0 0.75rem;
    height: 1.875rem;
    margin-top: 1.125rem;
    width: 100%;
  }
`
