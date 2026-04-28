import { css } from '@emotion/react'
import { getThemedColor } from '../../../../lib/theme'

export const opacityControlContainerStyles = css`
  width: 14.625rem;
  border: 1px solid ${getThemedColor('neutral', 600)};
  border-radius: 0.25rem;
`

export const opacityControlBodyStyles = css`
  padding: 0.75rem;
`

export const opacityControlLabelStyles = css`
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 400;
  text-align: left;
  color: ${getThemedColor('neutral', 900)};
`

export const opacityControlTextInputContainerStyles = css`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  .ds-text-input-container {
    width: 3rem;
    margin: 0;

    .chakra-input {
      padding: 0.25rem;
      width: 3rem;
    }
  }

  .chakra-slider__root {
    padding: 0 0.75rem;
    height: 1.875rem;
    margin-top: 1.125rem;
    width: 100%;
  }
`
