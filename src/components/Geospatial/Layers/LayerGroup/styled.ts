import { css } from '@emotion/react'
import { getThemedColor } from '../../../../lib/theme'

export const layerGroupContainerStyles = css`
  background-color: ${getThemedColor('neutral', 100)};
`

export const layerGroupBoxStyles = css`
  padding: 1rem 1rem 0 1rem;
  &:focus-visible {
    outline-color: ${getThemedColor('primary', 700)};
  }
`
export const layerGroupTitleStyles = css`
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5rem;
  text-align: left;
  color: ${getThemedColor('neutral', 900)};
  display: flex;
  align-items: center;
  text-align: left;
  gap: 0.625rem;
`

export const layerGroupCaptionStyles = css`
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
  text-align: left;
  color: ${getThemedColor('neutral', 700)};
  margin-bottom: 0.5rem;
`
