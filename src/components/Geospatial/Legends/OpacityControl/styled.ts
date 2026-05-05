import { css } from '@emotion/react'
import { getThemedColor, getThemedBorderWidth, getThemedFontSize, getThemedLineHeight, getThemedRadius, getThemedSpacing } from '../../../../lib/theme'

export const opacityControlContainerStyles = css`
  width: 14.625rem;
  border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 600)};
  border-radius: ${getThemedRadius(300)};
`

export const opacityControlBodyStyles = css`
  padding: ${getThemedSpacing(300)};
`

export const opacityControlLabelStyles = css`
  font-size: ${getThemedFontSize(300)};
  line-height: ${getThemedLineHeight(500)};
  font-weight: 400;
  text-align: left;
  color: ${getThemedColor('neutral', 900)};
`

export const opacityControlTextInputContainerStyles = css`
  display: flex;
  align-items: center;
  gap: ${getThemedSpacing(300)};

  .ds-text-input-container {
    width: ${getThemedSpacing(1200)};
    margin: 0;

    .chakra-input {
      padding: ${getThemedSpacing(100)};
      width: ${getThemedSpacing(1200)};
    }
  }

  .chakra-slider__root {
    padding: 0 ${getThemedSpacing(300)};
    height: 1.875rem;
    margin-top: 1.125rem;
    width: 100%;
  }
`
