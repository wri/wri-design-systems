import { css } from '@emotion/react'
import { getThemedColor } from '../../../../lib/theme'

export const legendItemContainerStyles = css`
  padding: 12px;
  padding-bottom: 20px;
  display: flex;
  gap: 12px;
  border-bottom: 1px solid ${getThemedColor('neutral', 300)};
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
  gap: 12px;
  margin-bottom: 16px;
`

export const legendItemLayerNameStyles = css`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  text-align: left;
  color: ${getThemedColor('neutral', 900)};
`

export const legendItemDataUnitStyles = css`
  font-size: 14px;
  line-height: 20px;
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
