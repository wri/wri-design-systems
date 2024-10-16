import styled from '@emotion/styled'
import { Button } from '@chakra-ui/react'
import { getThemedColor, ThemeProps } from '../../lib/theme'

export const BaseButton = styled(Button)`
  width: ${({ size }) => (size === 'small' ? '120px' : '227px')};
  height: ${({ size }) => (size === 'small' ? '24px' : '40px')};
  font-size: ${({ size }) => (size === 'small' ? '12px' : '16px')};
  line-height: ${({ size }) => (size === 'small' ? '16px' : '24px')};
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 4px;
  box-shadow: 0px 1px 2px 0px #0000000d;
`

export const PrimaryButton = styled(BaseButton)`
  ${(props) => {
    const theme = props.theme as ThemeProps
    if (props.isDisabled) {
      return `
        background-color: ${getThemedColor(theme.colors, 'neutral', 300)};
        border: 1px solid ${getThemedColor(theme.colors, 'neutral', 400)};
        color: ${getThemedColor(theme.colors, 'neutral', 500)};

        &:hover {
          background-color: ${getThemedColor(theme.colors, 'neutral', 300)} !important;
        }
      `
    }

    return `
      background-color: ${getThemedColor(theme.colors, 'primary', 500)};
      border: 1px solid ${getThemedColor(theme.colors, 'primary', 600)};
      color: ${getThemedColor(theme.colors, 'primary', 900)};

      &:hover {
        background-color: ${getThemedColor(theme.colors, 'primary', 500)};
        box-shadow: 0px 4px 6px -1px #0000001A;
      }

      &:active {
        outline: none;
        background-color: ${getThemedColor(theme.colors, 'primary', 600)} !important;
        border: 1px solid ${getThemedColor(theme.colors, 'primary', 700)} !important;
        box-shadow: 0px 4px 6px -1px #0000001A;
      }

      &:focus {
        outline-color: ${getThemedColor(theme.colors, 'primary', 500)};
        background-color: ${getThemedColor(theme.colors, 'primary', 500)};
        border: 2px solid ${getThemedColor(theme.colors, 'primary', 500)};
      }
    `
  }};
`

export const SecondaryButton = styled(BaseButton)`
  ${(props) => {
    const theme = props.theme as ThemeProps
    if (props.isDisabled) {
      return `
        background-color: ${getThemedColor(theme.colors, 'neutral', 200)};
        border: 1px solid ${getThemedColor(theme.colors, 'neutral', 300)};
        color: ${getThemedColor(theme.colors, 'neutral', 500)};

        &:hover {
          background-color: ${getThemedColor(theme.colors, 'neutral', 200)} !important;
        }
      `
    }

    return `
      background-color: ${getThemedColor(theme.colors, 'neutral', 100)};
      border: 1px solid ${getThemedColor(theme.colors, 'neutral', 300)};
      color: ${getThemedColor(theme.colors, 'neutral', 700)};

      &:hover {
        background-color: ${getThemedColor(theme.colors, 'neutral', 100)};
        box-shadow: 0px 4px 6px -1px #0000001A;
      }

      &:active {
        outline: none;
        background-color: ${getThemedColor(theme.colors, 'neutral', 200)} !important;
        border: 1px solid ${getThemedColor(theme.colors, 'neutral', 300)} !important;
        box-shadow: 0px 4px 6px -1px #0000001A;
      }

      &:focus {
        outline-color: ${getThemedColor(theme.colors, 'neutral', 700)};
      }
    `
  }};
`

export const BorderlessButton = styled(BaseButton)`
  ${(props) => {
    const { theme, size } = props as { theme: ThemeProps; size: string }
    if (props.isDisabled) {
      return `
        width: auto;
        height: ${size === 'small' ? '24px' : '36px'};
        background-color: transparent;
        color: ${getThemedColor(theme.colors, 'neutral', 500)};

        &:hover {
          background-color: transparent !important;
        }
      `
    }

    return `
      width: auto;
      height: ${size === 'small' ? '24px' : '36px'};
      background-color: transparent;
      border: none;
      color: ${getThemedColor(theme.colors, 'neutral', 800)};
      box-shadow: none;

      &:hover {
        background-color: ${getThemedColor(theme.colors, 'neutral', 300)};
      }

      &:active {
        outline: none;
        background-color: ${getThemedColor(theme.colors, 'neutral', 400)};
        box-shadow: 0px 4px 6px -1px #0000001A;
      }

      &:focus {
        outline-color: ${getThemedColor(theme.colors, 'neutral', 700)};
      }
    `
  }};
`

export const OutlineButton = styled(BaseButton)`
  ${(props) => {
    const theme = props.theme as ThemeProps
    if (props.isDisabled) {
      return `
        background-color: ${getThemedColor(theme.colors, 'neutral', 200)};
        border: 1px solid ${getThemedColor(theme.colors, 'neutral', 300)};
        color: ${getThemedColor(theme.colors, 'neutral', 500)};

        &:hover {
          background-color: ${getThemedColor(theme.colors, 'neutral', 200)} !important;
        }
      `
    }

    return `
      background-color: transparent;
      border: 1px solid ${getThemedColor(theme.colors, 'primary', 800)};
      color: ${getThemedColor(theme.colors, 'primary', 800)};

      &:hover {
        background-color: ${getThemedColor(theme.colors, 'primary', 100)};
        color: ${getThemedColor(theme.colors, 'primary', 900)};
      }

      &:active {
        outline: none;
        background-color: ${getThemedColor(theme.colors, 'primary', 200)} !important;
        border: 1px solid ${getThemedColor(theme.colors, 'primary', 900)} !important;
      }

      &:focus {
        outline-color: ${getThemedColor(theme.colors, 'primary', 800)};
        background-color: ${getThemedColor(theme.colors, 'primary', 100)};
      }
    `
  }};
`
