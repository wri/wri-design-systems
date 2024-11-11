import styled from '@emotion/styled'
import { Box } from '@chakra-ui/react'
import { getThemedColor, ThemeProps } from '../../../lib/theme'

export const LayerGroupTitle = styled(Box)<{
  theme?: ThemeProps
}>`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  color: ${({ theme }) => getThemedColor(theme.colors, 'neutral', 800)};
  display: flex;
  align-items: center;
  text-align: left;
  gap: 10px;
`

export const LayerGroupCaption = styled(Box)<{
  theme?: ThemeProps
}>`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  color: ${({ theme }) => getThemedColor(theme.colors, 'neutral', 600)};
  margin-left: 16px;
  margin-bottom: 24px;
`
