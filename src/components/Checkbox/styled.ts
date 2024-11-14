import styled from '@emotion/styled'
import { Checkbox } from '@chakra-ui/react'
import { getThemedColor, ThemeProps } from '../../lib/theme'

export const StyledCheckbox = styled(Checkbox)<{
  theme?: ThemeProps
}>`
  .chakra-checkbox__control {
    width: 20px;
    height: 20px;
    border: 1px solid
      ${({ theme }) => getThemedColor(theme.colors, 'neutral', 600)};

    svg path {
      fill: transparent;
    }

    &:hover,
    &[data-hover] {
      outline: 4px solid
        ${({ theme }) => getThemedColor(theme.colors, 'primary', 500)}20;
    }

    &:active,
    &[data-active] {
      outline: 4px solid
        ${({ theme }) => getThemedColor(theme.colors, 'primary', 500)}40;
    }

    &:focus-visible,
    &[data-focus-visible] {
      box-shadow: none;
      outline: 2px solid
        ${({ theme }) => getThemedColor(theme.colors, 'primary', 700)};
      outline-offset: 2px;
    }

    &[data-checked] {
      border: 1px solid
        ${({ theme }) => getThemedColor(theme.colors, 'primary', 700)};
      background: ${({ theme }) =>
        getThemedColor(theme.colors, 'primary', 500)} !important;

      svg path {
        fill: ${({ theme }) => getThemedColor(theme.colors, 'primary', 900)};
      }
    }

    &[data-disabled] {
      border: 1px solid
        ${({ theme }) => getThemedColor(theme.colors, 'neutral', 400)};
      background: transparent !important;

      &:hover,
      &[data-hover],
      &:active,
      &[data-active] {
        outline: none;
      }

      &[data-checked] {
        border: 1px solid
          ${({ theme }) => getThemedColor(theme.colors, 'neutral', 300)};
        background: ${({ theme }) =>
          getThemedColor(theme.colors, 'neutral', 300)} !important;

        svg path {
          fill: ${({ theme }) => getThemedColor(theme.colors, 'neutral', 500)};
        }
      }
    }
  }
`
