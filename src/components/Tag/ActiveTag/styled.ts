import styled from '@emotion/styled'
import { getThemedColor, ThemeProps } from '../../../lib/theme'

export const ActiveTagContainer = styled.div<{
  theme?: ThemeProps
  count: number
}>`
  min-width: 56px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  border-radius: 4px;
  background-color: ${({ theme, count }) => count > 0
    ? getThemedColor(theme.colors, 'success', 100)
    : getThemedColor(theme.colors, 'neutral', 300)
  };

  font-size: 10px;
  line-height: 16px;
  font-weight: 700;
  color: ${({ theme, count }) => count > 0
    ? getThemedColor(theme.colors, 'success', 500)
    : getThemedColor(theme.colors, 'neutral', 600)
  };
`
