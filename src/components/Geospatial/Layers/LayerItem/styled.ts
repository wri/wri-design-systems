import styled from '@emotion/styled'
import { getThemedColor } from '../../../../lib/theme'

export const LayerItemContainer = styled.div`
  width: 268px;
  padding: 16px 0;
  border-bottom: 1px solid ${getThemedColor('neutral', 300)};
`
export const SwitchContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`
export const SwitchContent = styled.div`
  display: flex;
  flex-direction: column;
`
export const LayerName = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: ${getThemedColor('neutral', 800)};
`
export const LayerCaption = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: ${getThemedColor('neutral', 600)};
`
