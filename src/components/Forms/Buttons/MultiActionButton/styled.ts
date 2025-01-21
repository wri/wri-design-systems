import styled from '@emotion/styled'
import { Menu as ChakraMenu } from '@chakra-ui/react'
import { getThemedColor } from '../../../../lib/theme'

export const StyledMenuContent = styled(ChakraMenu.Content)`
  width: 200px;
  border: 1px solid ${getThemedColor('neutral', 600)};
  border-radius: 4px;
  padding: 8px;
`

export const StyledMenuTrigger = styled(ChakraMenu.Trigger)<{
  variant: string
}>`
  &[data-state='open'] {
    background-color: ${({ variant }) =>
      variant === 'primary'
        ? getThemedColor('primary', 600)
        : getThemedColor('neutral', 200)} !important;
    border: 1px solid ${getThemedColor('primary', 800)} !important;
  }
`

export const StyledMenuItem = styled(ChakraMenu.Item)<{ size: string }>`
  font-size: ${({ size }) => (size === 'small' ? '14px' : '16px')};
  line-height: ${({ size }) => (size === 'small' ? '20px' : '24px')};
  color: ${getThemedColor('neutral', 800)};
  padding: 4px;
  cursor: pointer;

  &[data-highlighted] {
    background-color: ${getThemedColor('neutral', 200)};
  }
`
