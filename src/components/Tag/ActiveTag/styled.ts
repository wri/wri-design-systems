import styled from '@emotion/styled'
import { getThemedColor } from '../../../lib/theme'

export const ActiveTagContainer = styled.div<{
  count: number
}>`
  min-width: 56px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  border-radius: 4px;
  background-color: ${({ count }) =>
    count > 0
      ? getThemedColor('success', 100)
      : getThemedColor('neutral', 300)};

  font-size: 10px;
  line-height: 16px;
  font-weight: 700;
  color: ${({ count }) =>
    count > 0
      ? getThemedColor('success', 500)
      : getThemedColor('neutral', 600)};
`
