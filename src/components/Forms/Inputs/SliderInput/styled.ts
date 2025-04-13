import { css } from '@emotion/react'
import { getThemedColor } from '../../../../lib/theme'
import { SliderInputProps } from './types'

export const sliderInputLabelStyles = (size: SliderInputProps['size']) => css`
  font-size: ${size === 'small' ? '14px' : '16px'};
  line-height: ${size === 'small' ? '20px' : '24px'};
  font-weight: 400;
  color: ${getThemedColor('neutral', 900)};
  text-align: left;

  span {
    color: ${getThemedColor('error', 500)};
    margin-right: 3px;
  }
`

export const sliderInputCaptionStyles = (size: SliderInputProps['size']) => css`
  font-size: ${size === 'small' ? '12px' : '14px'};
  line-height: ${size === 'small' ? '16px' : '20px'};
  font-weight: 400;
  color: ${getThemedColor('neutral', 700)};
  text-align: left;
`

export const sliderInputContentStyles = css`
  display: flex;
  align-items: center;
  gap: 12px;

  .text-input-container {
    width: 63px;
    margin: 0px;

    .chakra-input {
      padding: 4px;
      width: 63px;
    }
  }

  .chakra-slider__root {
    padding: 0 12px;
    height: 30px;
    margin-top: 18px;
    width: 100%;
  }
`
