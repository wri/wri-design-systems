import { css } from '@emotion/react'
import { getThemedColor } from '../../../../lib/theme'

export const legendItemContainerStyles = css`
  padding: 0.75rem;
  padding-bottom: 1.25rem;
  display: flex;
  gap: 0.75rem;
  border-bottom: 1px solid ${getThemedColor('neutral', 300)};
  background-color: ${getThemedColor('neutral', 100)};
`

export const legendItemDragAndDropActionsStyles = css`
  display: flex;
  flex-direction: column;

  svg {
    path {
      fill: ${getThemedColor('neutral', 700)} !important;
    }
  }
`

export const legendItemHeaderContainerStyles = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 1rem;
`

export const legendItemLayerNameStyles = css`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  text-align: left;
  color: ${getThemedColor('neutral', 900)};
`

export const legendItemDataUnitStyles = css`
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 400;
  text-align: left;
  color: ${getThemedColor('neutral', 700)};
`

export const legendItemButtonsContainerStyles = css`
  display: flex;
  justify-content: space-between;

  button {
    width: 46%;
  }
`
