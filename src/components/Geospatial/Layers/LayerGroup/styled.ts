import styled from '@emotion/styled'
import { getThemedColor } from '../../../../lib/theme'

export const StyledLayerGroupContainer = styled.div`
  background-color: ${getThemedColor('neutral', 100)};
`

export const LayerGroupTitle = styled.span`
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

export const LayerGroupCaption = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  color: ${getThemedColor('neutral', 600)};
  margin-bottom: 8px;
`
