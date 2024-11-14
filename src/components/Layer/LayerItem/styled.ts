import styled from '@emotion/styled'
import { getThemedColor, ThemeProps } from '../../../lib/theme'

export const LayerItemContainer = styled.div<{
  isDisabled?: boolean
  theme?: ThemeProps
}>`
  width: 268px;
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid
    ${({ theme }) => getThemedColor(theme.colors, 'neutral', 300)};
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
export const LayerName = styled.p<{ theme?: ThemeProps }>`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: ${({ theme }) => getThemedColor(theme.colors, 'neutral', 800)};
`
export const LayerCaption = styled.p<{ theme?: ThemeProps }>`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: ${({ theme }) => getThemedColor(theme.colors, 'neutral', 600)};
`
