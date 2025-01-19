import styled from '@emotion/styled'
import { getThemedColor } from '../../../../lib/theme'

export const LayerPanelContainer = styled.div`
  width: 300px;
  background-color: ${getThemedColor('neutral', 100)};
`

export const LayerPanelHeader = styled.aside`
  padding: 16px 16px 20px 16px;
  border-bottom: 1px solid ${getThemedColor('neutral', 300)};
`

export const LayerPanelTitle = styled.h2`
  color: ${getThemedColor('neutral', 700)};
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  text-align: left;
`

export const LayerPanelDescription = styled.p`
  color: ${getThemedColor('neutral', 600)};
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: left;
`
