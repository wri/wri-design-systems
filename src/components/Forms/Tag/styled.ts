import { Tag as ChakraTag } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { getThemedColor } from '../../../lib/theme'

export const DefaultTag = styled(ChakraTag.Root)<{ size: string }>`
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: 700;
  color: ${getThemedColor('neutral', 700)};
  box-shadow: none;

  height: 24px;
  font-size: 12px;
  line-height: 16px;

  svg {
    width: 10px;
    height: 10px;
  }

  button svg {
    width: 14px;
    height: 14px;
  }

  ${({ size }) =>
    size === 'small'
      ? `
    height: 16px;
    border: none !important;
    font-size: 10px;
    line-height: 12px;

    svg {
      width: 8px;
      height: 8px;
    }

    button svg {
      width: 12px;
      height: 12px;
    }
  `
      : ''}

  ${({ size }) =>
    size === 'large'
      ? `
    height: 32px;
    font-size: 16px;
    line-height: 24px;

    svg {
      width: 12px;
      height: 12px;
    }

    button svg {
      width: 16px;
      height: 16px;
    }
  `
      : ''}

  .chakra-tag__startElement,
  .chakra-tag__endElement,
  .chakra-tag__closeTrigger {
    display: flex;
    justify-content: center;
    align-items: center;

    &:focus-visible {
      --focus-ring-color: ${getThemedColor('primary', 700)};
    }
  }

  .chakra-tag__closeTrigger {
    cursor: pointer;
  }

  &[data-disabled='true'] {
    border: 1px solid ${getThemedColor('neutral', 400)};
    background-color: ${getThemedColor('neutral', 300)};
    color: ${getThemedColor('neutral', 600)};
  }
`

export const InfoWhiteTag = styled(DefaultTag)`
  background-color: ${getThemedColor('neutral', 100)};
  border: 1px solid ${getThemedColor('neutral', 300)};
`

export const InfoGreyTag = styled(DefaultTag)`
  background-color: ${getThemedColor('neutral', 200)};
  border: 1px solid ${getThemedColor('neutral', 400)};
`

export const SuccessTag = styled(DefaultTag)`
  background-color: ${getThemedColor('success', 100)};
  border: 1px solid ${getThemedColor('success', 200)};
  color: ${getThemedColor('success', 500)};
`

export const WarningTag = styled(DefaultTag)`
  background-color: ${getThemedColor('warning', 100)};
  border: 1px solid ${getThemedColor('warning', 200)};
  color: ${getThemedColor('warning', 500)};
`

export const ErrorTag = styled(DefaultTag)`
  background-color: ${getThemedColor('error', 100)};
  border: 1px solid ${getThemedColor('error', 200)};
  color: ${getThemedColor('error', 500)};
`
