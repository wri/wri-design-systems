import styled from '@emotion/styled'
import { Button } from '@chakra-ui/react'
import { getThemedColor, ThemeProps } from '../../lib/theme'

export const TabBarContainer = styled.div<{
  variant: string
  theme?: ThemeProps
}>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;

  ${({ variant, theme }) =>
    variant === 'view' &&
    `
    border: 1px solid ${getThemedColor(theme.colors, 'neutral', 400)};
    background-color: ${getThemedColor(theme.colors, 'neutral', 200)};
    border-radius: 2px;
    padding: 4px;
  `}
`

export const DefaultTab = styled(Button)<{
  variant: string
  theme?: ThemeProps
}>`
  width: 100%;
  height: 40px;
  ${({ variant }) =>
    variant === 'view' &&
    `
    height: 32px;
  `}
  padding: 8px 16px;
  border-radius: initial;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;

  &:focus-visible {
    box-shadow: none;
  }
`

export const TabBarItem = styled(DefaultTab)<{
  theme?: ThemeProps
  variant: string
  isSelected: boolean
  isDisabled?: boolean
}>`
  ${({ variant, isSelected, isDisabled, theme }) => {
    if (variant === 'panel') {
      if (isSelected) {
        return `
          background-color: ${getThemedColor(theme.colors, 'secondary', 600)};
          box-shadow: 0px 1px 2px 0px #0000000D;
          color: ${getThemedColor(theme.colors, 'neutral', 100)};

          &:hover {
            background-color: ${getThemedColor(theme.colors, 'secondary', 700)};
            box-shadow: 0px 2px 4px -2px #0000001A;
            box-shadow: 0px 4px 6px -1px #0000001A;
          }

          &:active {
            background-color: ${getThemedColor(theme.colors, 'secondary', 700)};
            box-shadow: 0px 2px 4px -2px #0000001A;
            box-shadow: 0px 4px 6px -1px #0000001A;
          }

          &:focus-visible {
            outline-color: ${getThemedColor(theme.colors, 'secondary', 700)};
            background-color: ${getThemedColor(theme.colors, 'secondary', 700)};
          }
        `
      }

      if (isDisabled) {
        return `
          background-color: ${getThemedColor(theme.colors, 'neutral', 200)};
          color: ${getThemedColor(theme.colors, 'neutral', 500)};

          &:hover {
            background-color: ${getThemedColor(theme.colors, 'neutral', 200)} !important;
            color: ${getThemedColor(theme.colors, 'neutral', 500)} !important;
          }
        `
      }

      return `
        background-color: ${getThemedColor(theme.colors, 'neutral', 200)};
        color: ${getThemedColor(theme.colors, 'neutral', 800)};

        &:hover {
          background-color: ${getThemedColor(theme.colors, 'neutral', 300)};
          box-shadow: 0px 1px 2px 0px #0000000D;
        }

        &:active {
          background-color: ${getThemedColor(theme.colors, 'neutral', 300)};
          box-shadow: 0px 2px 4px -2px #0000001A;
          box-shadow: 0px 4px 6px -1px #0000001A;
        }

        &:focus-visible {
          background-color: ${getThemedColor(theme.colors, 'neutral', 300)};
          outline-color: ${getThemedColor(theme.colors, 'secondary', 700)};
        }
      `
    }

    if (variant === 'view') {
      if (isSelected) {
        return `
          background-color: ${getThemedColor(theme.colors, 'neutral', 100)};
          border: 1px solid ${getThemedColor(theme.colors, 'neutral', 300)};
          box-shadow: 0px 1px 2px 0px #0000000D;
          color: ${getThemedColor(theme.colors, 'neutral', 800)};
          font-weight: 400;

          &:hover {
            background-color: ${getThemedColor(theme.colors, 'neutral', 200)};
            box-shadow: 0px 2px 4px -2px #0000001A;
            box-shadow: 0px 4px 6px -1px #0000001A;
          }

          &:active {
            box-shadow: 0px 2px 4px -2px #0000001A;
            box-shadow: 0px 4px 6px -1px #0000001A;
          }

          &:focus-visible {
            outline-color: ${getThemedColor(theme.colors, 'neutral', 700)};
            outline-style: auto;
            outline-offset: 4px;
          }
        `
      }

      if (isDisabled) {
        return `
          background-color: ${getThemedColor(theme.colors, 'neutral', 200)};
          color: ${getThemedColor(theme.colors, 'neutral', 500)};
          font-weight: 400;

          &:hover {
            background-color: ${getThemedColor(theme.colors, 'neutral', 200)} !important;
            color: ${getThemedColor(theme.colors, 'neutral', 500)} !important;
          }
        `
      }

      return `
        background-color: ${getThemedColor(theme.colors, 'neutral', 200)};
        color: ${getThemedColor(theme.colors, 'neutral', 800)};
        font-weight: 400;

        &:hover {
          background-color: ${getThemedColor(theme.colors, 'neutral', 300)};
          box-shadow: 0px 1px 2px 0px #0000000D;
        }

        &:active {
          background-color: ${getThemedColor(theme.colors, 'neutral', 300)};
          box-shadow: 0px 2px 4px -2px #0000001A;
          box-shadow: 0px 4px 6px -1px #0000001A;
        }

        &:focus-visible {
          outline-color: ${getThemedColor(theme.colors, 'neutral', 700)};
          outline-style: auto;
          outline-offset: 4px;
        }
      `
    }

    return ''
  }};
`
