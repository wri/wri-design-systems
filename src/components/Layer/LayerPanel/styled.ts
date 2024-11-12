import styled from '@emotion/styled'
import { getThemedColor, ThemeProps } from '../../../lib/theme'

export const LayerPanelContainer = styled.div<{
  theme?: ThemeProps
}>`
  width: 300px;
  background-color: ${({ theme }) => getThemedColor(theme.colors, 'neutral', 100)};
`

export const LayerPanelHeader = styled.div<{
  theme?: ThemeProps
}>`
  padding: 16px 16px 20px 16px;
  border-bottom: 1px solid ${({ theme }) => getThemedColor(theme.colors, 'neutral', 300)};
`

export const LayerPanelTitle = styled.p<{
  theme?: ThemeProps
}>`
  color: ${({ theme }) => getThemedColor(theme.colors, 'neutral', 700)};
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
`

export const LayerPanelDescription = styled.p<{
  theme?: ThemeProps
}>`
  color: ${({ theme }) => getThemedColor(theme.colors, 'neutral', 600)};
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
`
