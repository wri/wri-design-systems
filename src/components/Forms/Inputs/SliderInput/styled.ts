import styled from '@emotion/styled'
import { getThemedColor } from '../../../../lib/theme'

export const SliderInputContainer = styled.div``

export const SliderInputLabel = styled.p<{ size: string }>`
  font-size: ${({ size }) => (size === 'small' ? '14px' : '16px')};
  line-height: ${({ size }) => (size === 'small' ? '20px' : '24px')};
  font-weight: 400;
  color: ${getThemedColor('neutral', 900)};

  span {
    color: ${getThemedColor('error', 500)};
    margin-right: 3px;
  }
`

export const SliderInputCaption = styled.p<{ size: string }>`
  font-size: ${({ size }) => (size === 'small' ? '12px' : '14px')};
  line-height: ${({ size }) => (size === 'small' ? '16px' : '20px')};
  font-weight: 400;
  color: ${getThemedColor('neutral', 600)};
`

export const SliderInputContent = styled.div`
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
