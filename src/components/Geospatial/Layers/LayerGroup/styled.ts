import { css } from '@emotion/react'
import { getThemedColor } from '../../../../lib/theme'

export const layerGroupContainerStyles = css`
  background-color: ${getThemedColor('neutral', 100)};
`

export const layerGroupTitleStyles = css`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  color: ${getThemedColor('neutral', 800)};
  display: flex;
  align-items: center;
  text-align: left;
  gap: 10px;
`

export const layerGroupCaptionStyles = css`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  color: ${getThemedColor('neutral', 600)};
  margin-bottom: 8px;
`
