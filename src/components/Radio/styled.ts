import styled from '@emotion/styled'
import { Radio } from '@chakra-ui/react'
import { getThemedColor, ThemeProps } from '../../lib/theme'

export const StyledRadio = styled(Radio)<{
  theme?: ThemeProps
}>`
  width: 20px;
  height: 20px;
  border: 1px solid
    ${({ theme }) => getThemedColor(theme.colors, 'neutral', 600)};

  &:hover {
    outline: 4px solid
      ${({ theme }) => getThemedColor(theme.colors, 'primary', 500)}20;
  }

  &:active {
    outline: 4px solid
      ${({ theme }) => getThemedColor(theme.colors, 'primary', 500)}40;
  }

  &:focus-visible,
  &[data-focus-visible] {
    outline: 2px solid
      ${({ theme }) => getThemedColor(theme.colors, 'primary', 700)};
    outline-offset: 2px;
    box-shadow: none;

    &[data-checked] {
      border: 2px solid
        ${({ theme, isDisabled }) =>
          isDisabled
            ? getThemedColor(theme.colors, 'neutral', 400)
            : getThemedColor(theme.colors, 'primary', 700)} !important;
    }
  }

  &[data-checked] {
    border: 1px solid
      ${({ theme, isDisabled }) =>
        isDisabled
          ? getThemedColor(theme.colors, 'neutral', 400)
          : getThemedColor(theme.colors, 'primary', 700)} !important;
    background: ${({ theme }) =>
      getThemedColor(theme.colors, 'neutral', 100)} !important;
    color: ${({ theme, isDisabled }) =>
      isDisabled
        ? getThemedColor(theme.colors, 'neutral', 400)
        : getThemedColor(theme.colors, 'primary', 700)} !important;

    &::before {
      width: 10px !important;
      height: 10px !important;
    }
  }

  ${({ theme, isDisabled }) => {
    if (isDisabled) {
      return `
        border: 1px solid ${getThemedColor(theme.colors, 'neutral', 400)} !important;
        background: ${getThemedColor(theme.colors, 'neutral', 100)} !important;
  
        &:hover {
          outline: none;
        }
      `
    }

    return ''
  }}
`
