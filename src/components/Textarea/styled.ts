import styled from '@emotion/styled'
import { Textarea, Field } from '@chakra-ui/react'
import { getThemedColor } from '../../lib/theme'

export const TextareaContainer = styled.div<{ size: 'small' | 'default' }>`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${({ size }) => (size === 'small' ? '12px' : '16px')};
  margin-bottom: 20px;
`
const getHeight = (
  size: 'small' | 'default',
  hasHelperText: boolean,
  hasErrorMessage: boolean,
) => {
  const isSmall = size === 'small'
  if (hasHelperText && hasErrorMessage) {
    return isSmall ? '192px' : '208px'
  }

  if (hasHelperText) {
    return isSmall ? '174px' : '186px'
  }

  if (hasErrorMessage) {
    return isSmall ? '168px' : '180px'
  }

  return isSmall ? '169px' : '180px'
}

export const ErrorBar = styled.div<{
  size: 'small' | 'default'
  hasHelperText: boolean
  hasErrorMessage: boolean
}>`
  width: 3px;
  height: 100%;
  min-height: ${({ size, hasHelperText, hasErrorMessage }) =>
    getHeight(size, hasHelperText, hasErrorMessage)};
  background-color: ${getThemedColor('error', 500)};
`

export const StyledFieldLabel = styled(Field.Label)<{
  size: 'small' | 'default'
  disabled?: boolean
}>`
  color: ${({ disabled }) => getThemedColor('neutral', disabled ? 600 : 900)};
  font-size: ${({ size }) => (size === 'small' ? '14px' : '16px')};
  font-weight: 400;
  line-height: ${({ size }) => (size === 'small' ? '20px' : '24px')};
  margin-bottom: 2px;

  .chakra-field__requiredIndicator {
    color: ${({ disabled }) =>
      disabled ? getThemedColor('neutral', 600) : getThemedColor('error', 500)};
  }
`

export const StyledFieldCaption = styled(Field.HelperText)<{
  size: 'small' | 'default'
  disabled?: boolean
}>`
  color: ${({ disabled }) => getThemedColor('neutral', disabled ? 500 : 600)};
  font-size: ${({ size }) => (size === 'small' ? '12px' : '14px')};
  font-weight: 400;
  line-height: ${({ size }) => (size === 'small' ? '16px' : '20px')};
`

export const StyledFieldHelperText = styled(Field.HelperText)`
  color: ${getThemedColor('neutral', 600)};
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  margin-top: 8px;
`

export const StyledFieldErrorMessage = styled(Field.ErrorText)`
  color: ${getThemedColor('error', 500)};
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  margin-top: 2px;
`

export const StyledTextarea = styled(Textarea)<{ size: 'small' | 'default' }>`
  height: 104px;
  width: 100%;
  border-radius: 4px;
  padding: ${({ size }) => (size === 'small' ? '8px' : '12px')};
  margin-top: 8px;
  background-color: ${getThemedColor('neutral', 100)};
  color: ${getThemedColor('neutral', 800)};
  border: 1px solid ${getThemedColor('neutral', 400)};
  box-shadow: 0px 1px 2px 0px #0000000d;

  &:focus-visible,
  &[data-focus-visible] {
    border: 2px solid ${getThemedColor('neutral', 700)};
    outline: 2px solid ${getThemedColor('primary', 700)};
    outline-offset: 2px;
  }

  &:active {
    border: 1px solid ${getThemedColor('primary', 600)} !important;
    outline: none !important;
    box-shadow: 0px 1px 2px 0px #0000000d;
  }

  &[data-invalid] {
    border: 1px solid ${getThemedColor('error', 500)} !important;
  }

  &:disabled {
    background-color: ${getThemedColor('neutral', 200)};
    border: 1px solid ${getThemedColor('neutral', 300)} !important;
  }

  ${({ value, defaultValue }) =>
    value || defaultValue
      ? `
    border: 1px solid ${getThemedColor('neutral', 700)};
  `
      : ''}
`
