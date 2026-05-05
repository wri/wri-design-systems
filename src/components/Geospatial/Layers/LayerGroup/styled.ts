import { css } from '@emotion/react'
import { getThemedColor, getThemedFontSize, getThemedLineHeight, getThemedSpacing } from '../../../../lib/theme'

export const layerGroupContainerStyles = css`
  background-color: ${getThemedColor('neutral', 100)};
`

export const layerGroupBoxStyles = css`
  padding: ${getThemedSpacing(400)} ${getThemedSpacing(400)} 0 ${getThemedSpacing(400)};
  &:focus-visible {
    outline-color: ${getThemedColor('primary', 700)};
  }
`
export const layerGroupTitleStyles = css`
  font-size: ${getThemedFontSize(400)};
  font-weight: 700;
  line-height: ${getThemedLineHeight(600)};
  text-align: left;
  color: ${getThemedColor('neutral', 900)};
  display: flex;
  align-items: center;
  text-align: left;
  gap: 0.625rem;
`

export const layerGroupCaptionStyles = css`
  font-size: ${getThemedFontSize(200)};
  font-weight: 400;
  line-height: ${getThemedLineHeight(400)};
  text-align: left;
  color: ${getThemedColor('neutral', 700)};
  margin-bottom: ${getThemedSpacing(200)};
`
