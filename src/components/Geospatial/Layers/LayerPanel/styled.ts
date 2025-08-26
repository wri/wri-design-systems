import { css } from '@emotion/react'
import { getThemedColor } from '../../../../lib/theme'

export const layerPanelContainerStyles = css`
  width: 100%;
  background-color: ${getThemedColor('neutral', 100)};
`

export const layerPanelHeaderStyles = css`
  padding: 16px 16px 20px 16px;
  border-bottom: 1px solid ${getThemedColor('neutral', 300)};
`

export const layerPanelTitleStyles = css`
  color: ${getThemedColor('neutral', 900)};
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  text-align: left;
`

export const layerPanelDescriptionStyles = css`
  color: ${getThemedColor('neutral', 700)};
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: left;
`
