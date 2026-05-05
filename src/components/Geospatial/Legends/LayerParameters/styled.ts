import { css } from '@emotion/react'
import { getThemedColor, getThemedBorderWidth, getThemedFontSize, getThemedLineHeight, getThemedRadius, getThemedSpacing } from '../../../../lib/theme'

export const layerParametersItemStyles = css`
  margin-bottom: ${getThemedSpacing(400)};
  border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 300)};
  border-radius: ${getThemedRadius(300)};
  box-shadow: 0 1px 0.125rem 0 #0000000d;
  background-color: ${getThemedColor('neutral', 100)};
`

export const layerParametersTriggerStyles = css`
  padding: 0.375rem ${getThemedSpacing(200)};
  align-items: center;
  background-color: ${getThemedColor('neutral', 100)};
  cursor: pointer;

  &[aria-expanded='true'] {
    border-bottom: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 300)};
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  svg {
    height: 0.625rem;
    width: 0.625rem;
  }

  &:focus-visible {
    outline-color: ${getThemedColor('primary', 700)};
    box-shadow:
      0 0 0 0.125rem ${getThemedColor('neutral', 100)},
      rgba(0, 0, 0, 0.05) 0 0.125rem 0.125rem 0.25rem;
  }
`

export const layerParametersLabelStyles = css`
  font-size: ${getThemedFontSize(200)};
  font-weight: 700;
  line-height: ${getThemedLineHeight(400)};
  color: ${getThemedColor('neutral', 800)};
`

export const layerParametersItemContentStyles = css`
  padding: ${getThemedSpacing(300)} ${getThemedSpacing(200)};
  display: flex;
  flex-direction: column;

  .ds-layer-parameters-item-child {
    padding-bottom: ${getThemedSpacing(400)};
    border-bottom: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 300)};
    margin-bottom: ${getThemedSpacing(400)};

    &:last-child {
      padding-bottom: 0;
      border-bottom: none;
      margin-bottom: 0;
    }
  }
`
