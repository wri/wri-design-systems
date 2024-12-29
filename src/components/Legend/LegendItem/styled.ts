import styled from '@emotion/styled'
import { getThemedColor } from '../../../lib/theme'

export const LegendItemContainer = styled.div`
  padding: 12px;
  padding-bottom: 20px;
  display: flex;
  gap: 12px;
  border-bottom: 1px solid ${getThemedColor('neutral', 300)};
`

export const LegendItemDragAndDropActions = styled.div`
  display: flex;
  flex-direction: column;

  svg {
    path {
      fill: ${getThemedColor('neutral', 500)} !important;
    }
  }
`

export const LegendItemHeaderContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
`

export const LegendItemLayerName = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  text-align: left;
  color: ${getThemedColor('neutral', 800)};
`

export const LegendItemDataUnit = styled.p`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  text-align: left;
  color: ${getThemedColor('neutral', 600)};
`

export const LegendItemButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    width: 110px;
  }
`
