import { css } from '@emotion/react'
import {
  getThemedColor,
  getThemedBorderWidth,
  getThemedFontSize,
  getThemedLineHeight,
  getThemedSpacing,
} from '../../../../lib/theme'

export const layerPanelContainerStyles = css`
  width: 100%;
  background-color: ${getThemedColor('neutral', 100)};
`

export const layerPanelHeaderStyles = css`
  padding: ${getThemedSpacing(400)} ${getThemedSpacing(400)}
    ${getThemedSpacing(500)} ${getThemedSpacing(400)};
  border-bottom: ${getThemedBorderWidth(100)} solid
    ${getThemedColor('neutral', 300)};
`

export const layerPanelTitleStyles = css`
  color: ${getThemedColor('neutral', 900)};
  font-weight: 700;
  font-size: ${getThemedFontSize(600)};
  line-height: ${getThemedLineHeight(700)};
  text-align: left;
`

export const layerPanelDescriptionStyles = css`
  color: ${getThemedColor('neutral', 700)};
  font-weight: 400;
  font-size: ${getThemedFontSize(300)};
  line-height: ${getThemedLineHeight(500)};
  text-align: left;
`
