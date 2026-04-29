import { css } from '@emotion/react'
import { getThemedColor } from '../../../../lib/theme'

export const layerPanelContainerStyles = css`
  width: 100%;
  background-color: ${getThemedColor('neutral', 100)};
`

export const layerPanelHeaderStyles = css`
  padding: 1rem 1rem 1.25rem 1rem;
  border-bottom: 1px solid ${getThemedColor('neutral', 300)};
`

export const layerPanelTitleStyles = css`
  color: ${getThemedColor('neutral', 900)};
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.75rem;
  text-align: left;
`

export const layerPanelDescriptionStyles = css`
  color: ${getThemedColor('neutral', 700)};
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: left;
`
