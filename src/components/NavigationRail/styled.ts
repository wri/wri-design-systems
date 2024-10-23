import styled from '@emotion/styled'
import { Button } from '@chakra-ui/react'
import { getThemedColor, ThemeProps } from '../../lib/theme'

export const NavigationRailContainer = styled.div<{
  isOnLeft: boolean
  theme?: ThemeProps
}>`
  width: 64px;
  height: 100%;
  z-index: 100;
  position: fixed;
  top: 0;
  ${({ isOnLeft, theme }) =>
    isOnLeft
      ? `
      left: 0;
      border-right: 1px solid ${getThemedColor(theme.colors, 'neutral', 300)};
    `
      : `
      right: 0;
      border-left: 1px solid ${getThemedColor(theme.colors, 'neutral', 300)};
    `};
  background-color: ${({ theme }) =>
    getThemedColor(theme.colors, 'neutral', 200)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const DefaultTab = styled(Button)<{
  theme?: ThemeProps
  isOnLeft: boolean
}>`
  width: 64px;
  height: 64px;
  background-color: ${({ theme }) =>
    getThemedColor(theme.colors, 'neutral', 200)};
  border-radius: initial;
  border-top: 1px solid
    ${({ theme }) => getThemedColor(theme.colors, 'neutral', 300)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  ${({ isOnLeft, theme }) =>
    isOnLeft
      ? `border-right: 1px solid ${getThemedColor(theme.colors, 'neutral', 300)};`
      : ''};

  &:hover {
    background-color: ${({ theme }) =>
      getThemedColor(theme.colors, 'neutral', 100)};
  }

  &:focus {
    background-color: ${({ theme }) =>
      getThemedColor(theme.colors, 'neutral', 100)};
  }

  &:focus-visible {
    box-shadow: none;
  }
`

export const NavigationRailTab = styled(DefaultTab)<{
  theme?: ThemeProps
  isOnLeft: boolean
  isSelected: boolean
}>`
  ${({ isSelected, theme, isOnLeft }) => {
    if (isSelected && isOnLeft) {
      return `
        background-color: ${getThemedColor(theme.colors, 'neutral', 100)};
        border-right: 2px solid ${getThemedColor(theme.colors, 'secondary', 500)};
      `
    }

    if (isSelected) {
      return `
        background-color: ${getThemedColor(theme.colors, 'neutral', 100)};
        border-left: 2px solid ${getThemedColor(theme.colors, 'secondary', 500)};
      `
    }

    return ''
  }};
`

export const NavigationRailTabIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 16px;
    height: 16px;
  }
`

export const NavigationRailTabLabel = styled.div<{
  theme?: ThemeProps
  isSelected?: boolean
}>`
  font-size: 10px;
  font-weight: ${({ isSelected }) => (isSelected ? 700 : 400)};
  line-height: 14px;
  text-align: center;
  color: ${({ theme }) => getThemedColor(theme.colors, 'neutral', 700)};
`

export const NavigationRailToggle = styled(DefaultTab)``
