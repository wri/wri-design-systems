import styled from '@emotion/styled'
import { Switch } from '@chakra-ui/react'
import { getThemedColor, ThemeProps } from '../../lib/theme'

export const SwitchAndLabelContainer = styled.div`
  display: flex;
  align-items: center;
`

export const StyledSwitch = styled(Switch)<{
  theme?: ThemeProps
}>`
  .chakra-switch__track {
    background-color: ${({ theme }) =>
      getThemedColor(theme.colors, 'neutral', 500)};
    border: 1px solid
      ${({ theme }) => getThemedColor(theme.colors, 'neutral', 600)};
    padding: 3px 4px;

    &:focus-visible,
    &[data-focus-visible] {
      box-shadow: none;
      outline: none;
      outline: 2px solid
        ${({ theme }) => getThemedColor(theme.colors, 'primary', 700)};
      outline-offset: 2px;
    }

    &[data-checked] {
      background-color: ${({ theme }) =>
        getThemedColor(theme.colors, 'primary', 500)};
      border: 1px solid
        ${({ theme }) => getThemedColor(theme.colors, 'primary', 700)};
    }

    &[data-disabled] {
      background-color: ${({ theme }) =>
        getThemedColor(theme.colors, 'neutral', 300)};
      border: 1px solid
        ${({ theme }) => getThemedColor(theme.colors, 'neutral', 300)};
    }
  }

  .chakra-switch__thumb {
    &:hover,
    &[data-hover] {
      outline: 8px solid
        ${({ theme }) => getThemedColor(theme.colors, 'primary', 500)}20;
    }

    &[data-active] {
      outline: 8px solid
        ${({ theme }) => getThemedColor(theme.colors, 'primary', 500)}40;
    }

    &[data-checked] {
      &::before {
        position: absolute;
        left: -3.5px;
        top: 7.5px;
        height: 4px;
        width: 1px;
        background-color: ${({ theme }) =>
          getThemedColor(theme.colors, 'primary', 700)};
        content: '';
        transform: translateX(10px) rotate(-45deg);
        transform-origin: left bottom;
      }

      &::after {
        position: absolute;
        left: -3px;
        bottom: 5px;
        height: 1px;
        width: 7px;
        background-color: ${({ theme }) =>
          getThemedColor(theme.colors, 'primary', 700)};
        content: '';
        transform: translateX(10px) rotate(-45deg);
        transform-origin: left bottom;
      }
    }

    &[data-disabled] {
      outline: none;

      &[data-checked] {
        &::before {
          background-color: ${({ theme }) =>
            getThemedColor(theme.colors, 'neutral', 500)};
        }

        &::after {
          background-color: ${({ theme }) =>
            getThemedColor(theme.colors, 'neutral', 500)};
        }
      }
    }
  }
`
