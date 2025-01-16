import styled from '@emotion/styled'
import { getThemedColor } from '../../../../lib/theme'
import {
  SelectLabel,
  SelectContent,
  SelectTrigger,
  SelectItem,
} from './BaseSelect'

export const SelectContainer = styled.div<{ size: string }>`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${({ size }) => (size === 'small' ? '12px' : '16px')};
  margin-bottom: 16px;
`

const getErrorBarHeight = (size: string, isFilled: boolean) => {
  if (isFilled) {
    return size === 'small' ? '132px' : '152px'
  }

  return size === 'small' ? '104px' : '122px'
}
export const SelectErrorBar = styled.div<{ size: string; isFilled: boolean }>`
  width: 3px;
  height: 100%;
  height: ${({ size, isFilled }) => getErrorBarHeight(size, isFilled)};
  background-color: ${getThemedColor('error', 500)};
`

export const StyledSelectLabel = styled(SelectLabel)<{ size: string }>`
  font-size: ${({ size }) => (size === 'small' ? '14px' : '16px')};
  line-height: ${({ size }) => (size === 'small' ? '20px' : '24px')};
  font-weight: 400;
  color: ${getThemedColor('neutral', 900)};

  span {
    color: ${getThemedColor('error', 500)};
    margin-right: 3px;
  }

  &[data-disabled] {
    color: ${getThemedColor('neutral', 600)};

    span {
      color: ${getThemedColor('neutral', 600)};
    }
  }
`

export const StyledSelectCaption = styled.p<{
  size: string
  disabled?: boolean
}>`
  font-size: ${({ size }) => (size === 'small' ? '12px' : '14px')};
  line-height: ${({ size }) => (size === 'small' ? '16px' : '20px')};
  font-weight: 400;
  color: ${getThemedColor('neutral', 600)};

  &[disabled] {
    color: ${getThemedColor('neutral', 500)};
  }
`

const getTriggerBorderColor = (isFilled: boolean, hasErrorMessage: boolean) => {
  if (hasErrorMessage) {
    return getThemedColor('error', 500)
  }

  return getThemedColor('neutral', isFilled ? 700 : 400)
}

export const StyledSelectTrigger = styled(SelectTrigger)<{
  size: string
  isFilled: boolean
  hasErrorMessage: boolean
}>`
  .chakra-select__trigger {
    min-height: ${({ size }) => (size === 'small' ? '32px' : '40px')};
    border-radius: 4px;
    padding: 6px 8px;
    border: 1px solid
      ${({ isFilled, hasErrorMessage }) =>
        getTriggerBorderColor(isFilled, hasErrorMessage)};
    box-shadow: 0px 1px 2px 0px #0000000d;

    .chakra-select__valueText {
      font-size: ${({ size }) => (size === 'small' ? '14px' : '16px')};
      line-height: ${({ size }) => (size === 'small' ? '20px' : '24px')};
      color: ${getThemedColor('neutral', 700)};
    }

    &[data-state='open'] {
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
      border-bottom: none;
    }

    &:is(:focus-visible, [data-focus-visible]) {
      outline-offset: 2px;
      outline-width: 2px;
      outline-color: ${getThemedColor('primary', 700)};
      border: 2px solid ${getThemedColor('neutral', 700)};
    }

    &[data-disabled] {
      border: 1px solid ${getThemedColor('neutral', 300)};
      background-color: ${getThemedColor('neutral', 200)};
    }
  }

  .chakra-select__indicator {
    svg {
      width: ${({ size }) => (size === 'small' ? '12px' : '16px')};

      path {
        fill: ${getThemedColor('neutral', 700)};
      }
    }

    &[data-disabled] {
      svg path {
        fill: ${getThemedColor('neutral', 500)};
      }
    }
  }
`
export const StyledSelectContent = styled(SelectContent)`
  margin-top: -8px;
  border-radius: 4px;
  border: 1px solid ${getThemedColor('neutral', 400)};
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top: none;
`

export const StyledSelectItem = styled(SelectItem)`
  &[data-highlighted] {
    background-color: ${getThemedColor('neutral', 200)};
  }
`

export const SelectItemLabel = styled.p<{ size: string; disabled?: boolean }>`
  font-size: ${({ size }) => (size === 'small' ? '14px' : '16px')};
  line-height: ${({ size }) => (size === 'small' ? '20px' : '24px')};
  color: ${getThemedColor('neutral', 800)};

  &[disabled] {
    color: ${getThemedColor('neutral', 500)} !important;
  }
`

export const SelectItemCaption = styled.p<{ size: string; disabled?: boolean }>`
  font-size: ${({ size }) => (size === 'small' ? '14px' : '16px')};
  line-height: ${({ size }) => (size === 'small' ? '20px' : '24px')};
  color: ${getThemedColor('neutral', 700)};

  &[disabled] {
    color: ${getThemedColor('neutral', 500)};
  }
`

export const SelectErrorMessage = styled.p<{ size: string }>`
  font-size: ${({ size }) => (size === 'small' ? '12px' : '14px')};
  line-height: ${({ size }) => (size === 'small' ? '16px' : '20px')};
  font-weight: 700;
  color: ${getThemedColor('error', 500)};
`
