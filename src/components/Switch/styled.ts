import styled from '@emotion/styled'
import { CheckIcon } from '@chakra-ui/icons'
import { SwitchContainerProps } from './types'

export const SwitchContainer = styled.div<SwitchContainerProps>`
  display: flex;
  align-items: center;

  .chakra-switch__track {
    background-color: ${({ backgroundColor }) => backgroundColor};
    height: 20px;
    width: 36px;
    opacity: 1 !important;
  }

  .chakra-switch__thumb {
    background-color: ${({ isChecked, isDisabled, primary200 }) =>
      isChecked && isDisabled ? primary200 : 'white'};
    height: 16px;
    width: 16px;
    position: relative;
    top: 2px;
    left: ${({ isChecked }) => (isChecked ? '5px' : '2px')};
  }

  ${({ isChecked, backgroundColor, isDisabled }) =>
    !isDisabled &&
    `
    &:hover .switch-icon-hover {
      background-color: ${backgroundColor};
      opacity: 20%;
      left: ${isChecked ? '13px' : '-5px'};
    }
  `}

  ${({ isChecked, isFocused, backgroundColor, isDisabled }) =>
    isFocused &&
    !isDisabled &&
    `
    .switch-icon-hover {
      background-color: ${backgroundColor};
      opacity: 40%;
      left: ${isChecked ? '13px' : '-5px'};
    }
  `}
`

export const SwitchContent = styled.div`
  width: 34px;
  display: flex;
  align-items: center;
  position: relative;
`

export const SwitchIconHover = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  position: absolute;
  top: -4px;
  left: -5px;
`

export const SwitchIconContainer = styled.div`
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  top: 4px;
  left: 21px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const SwitchIcon = styled(CheckIcon)`
  width: 10.5px;
`
