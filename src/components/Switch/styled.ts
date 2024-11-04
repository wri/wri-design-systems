import styled from '@emotion/styled'
import { CheckIcon } from '@chakra-ui/icons'
import { SwitchContainerProps } from './types'

export const SwitchAndLabelContainer = styled.div`
  display: flex;
  align-items: center;
`

export const SwitchContainer = styled.div<SwitchContainerProps>`
  width: 41px;
  .chakra-switch__track {
    background-color: ${({ backgroundColor }) => backgroundColor};
    height: 20px;
    width: 36px;
    opacity: 1 !important;
    box-shadow: none;
  }

  .chakra-switch__thumb {
    background-color: ${({ checkedAndDisabledColor }) =>
      checkedAndDisabledColor};
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
  background-color: transparent;
  position: absolute;
  top: 4px;
  left: 21px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: -1;
  transform: translateX(-18px);
  transition-property: transform;
  transition-duration: 200ms;

  &.move-me {
    z-index: 1;
    transform: translateX(0px);
    transition-property: transform;
    transition-duration: 100ms;
  }
`

export const SwitchIcon = styled(CheckIcon)`
  width: 10.5px;
`
