import { css } from '@emotion/react'
import { getThemedColor } from '../../../../lib/theme'

export const opacityControlContainerStyles = css`
  width: 234px;
  border: 1px solid ${getThemedColor('neutral', 600)};
  border-radius: 4px;
`

export const opacityControlBodyStyles = css`
  padding: 12px;
`

export const opacityControlLabelStyles = css`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  text-align: left;
  color: ${getThemedColor('neutral', 900)};
`

export const opacityControlTextInputContainerStyles = css`
  display: flex;
  align-items: center;
  gap: 12px;

  .ds-text-input-container {
    width: 48px;
    margin: 0px;

    .chakra-input {
      padding: 4px;
      width: 48px;
    }
  }

  .chakra-slider__root {
    padding: 0 12px;
    height: 30px;
    margin-top: 18px;
    width: 100%;
  }
`
