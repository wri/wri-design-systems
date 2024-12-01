import styled from '@emotion/styled'
import { Button } from '@chakra-ui/react'
import { getThemedColor } from '../../../lib/theme'
import { ButtonProps } from './types'

export const BaseButton = styled(Button)<ButtonProps>`
  width: auto;
  height: ${({ size }) => (size === 'small' ? '28px' : '40px')};
  font-size: ${({ size }) => (size === 'small' ? '12px' : '16px')};
  line-height: ${({ size }) => (size === 'small' ? '16px' : '24px')};
  font-weight: 700;
  padding: ${({ size }) => (size === 'small' ? '6px 8px' : '8px 16px')};
  border-radius: 4px;
  box-shadow: 0px 1px 2px 0px #0000000d;

  &:focus-visible {
    box-shadow: none;
  }

  svg {
    width: ${({ size }) => (size === 'small' ? '10px' : '16px')};
    height: ${({ size }) => (size === 'small' ? '10px' : '16px')};
  }
`

export const PrimaryButton = styled(BaseButton)`
  ${({ disabled }) => {
    if (disabled) {
      return `
        background-color: ${getThemedColor('neutral', 300)};
        border: 1px solid ${getThemedColor('neutral', 400)};
        color: ${getThemedColor('neutral', 500)};

        &:hover {
          background-color: ${getThemedColor('neutral', 300)} !important;
        }
      `
    }

    return `
      background-color: ${getThemedColor('primary', 500)};
      border: 1px solid ${getThemedColor('primary', 600)};
      color: ${getThemedColor('primary', 900)};
      box-shadow: 0px 1px 2px 0px #0000000D;

      &:hover {
        background-color: ${getThemedColor('primary', 500)};
        box-shadow: 0px 2px 4px -2px #0000001A;
        box-shadow: 0px 4px 6px -1px #0000001A;
      }

      &:active {
        outline: none;
        background-color: ${getThemedColor('primary', 600)} !important;
        border: 1px solid ${getThemedColor('primary', 700)} !important;
        box-shadow: 0px 2px 4px -2px #0000001A;
        box-shadow: 0px 4px 6px -1px #0000001A;
      }

      &:focus-visible {
        outline-color: ${getThemedColor('primary', 700)};
        background-color: ${getThemedColor('primary', 500)};
        border: 2px solid ${getThemedColor('primary', 500)};
        box-shadow: 0px 1px 2px 0px #0000000D;
      }
    `
  }};
`

export const SecondaryButton = styled(BaseButton)`
  ${({ disabled }) => {
    if (disabled) {
      return `
        background-color: ${getThemedColor('neutral', 200)};
        border: 1px solid ${getThemedColor('neutral', 300)};
        color: ${getThemedColor('neutral', 500)};

        &:hover {
          background-color: ${getThemedColor('neutral', 200)} !important;
        }
      `
    }

    return `
      background-color: ${getThemedColor('neutral', 100)};
      border: 1px solid ${getThemedColor('neutral', 300)};
      color: ${getThemedColor('neutral', 700)};
      box-shadow: 0px 1px 2px 0px #0000000D;

      &:hover {
        background-color: ${getThemedColor('neutral', 100)};
        box-shadow: 0px 2px 4px -2px #0000001A;
        box-shadow: 0px 4px 6px -1px #0000001A;
      }

      &:active {
        outline: none;
        background-color: ${getThemedColor('neutral', 200)} !important;
        border: 1px solid ${getThemedColor('neutral', 300)} !important;
        box-shadow: 0px 2px 4px -2px #0000001A;
        box-shadow: 0px 4px 6px -1px #0000001A;
      }

      &:focus-visible {
        outline-color: ${getThemedColor('primary', 700)};
        box-shadow: 0px 1px 2px 0px #0000000D;
      }
    `
  }};
`

export const BorderlessButton = styled(BaseButton)`
  ${({ disabled }) => {
    if (disabled) {
      return `
        background-color: transparent;
        color: ${getThemedColor('neutral', 500)};

        &:hover {
          background-color: transparent !important;
        }
      `
    }

    return `
      background-color: transparent;
      border: none;
      color: ${getThemedColor('neutral', 800)};
      box-shadow: none;

      &:hover {
        background-color: color-mix(in srgb, ${getThemedColor('primary', 500)} 20%, transparent);
      }

      &:active {
        outline: none;
        background-color: color-mix(in srgb, ${getThemedColor('primary', 500)} 40%, transparent);
        box-shadow: 0px 4px 6px -1px #0000001A;
      }

      &:focus-visible {
        outline-color: ${getThemedColor('primary', 700)};
        box-shadow: 0px 1px 2px 0px #0000000D;
      }
    `
  }};
`

export const OutlineButton = styled(BaseButton)`
  ${({ disabled }) => {
    if (disabled) {
      return `
        background-color: ${getThemedColor('neutral', 200)};
        border: 1px solid ${getThemedColor('neutral', 300)};
        color: ${getThemedColor('neutral', 500)};

        &:hover {
          background-color: ${getThemedColor('neutral', 200)} !important;
        }
      `
    }

    return `
      background-color: transparent;
      border: 1px solid ${getThemedColor('primary', 800)};
      color: ${getThemedColor('primary', 800)};

      &:hover {
        background-color: ${getThemedColor('primary', 100)};
        color: ${getThemedColor('primary', 900)};
      }

      &:active {
        outline: none;
        background-color: ${getThemedColor('primary', 200)} !important;
        border: 1px solid ${getThemedColor('primary', 900)} !important;
        color: ${getThemedColor('primary', 900)};
      }

      &:focus-visible {
        outline-color: ${getThemedColor('primary', 800)};
        background-color: ${getThemedColor('primary', 100)};
      }
    `
  }};
`
