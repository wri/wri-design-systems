import styled from '@emotion/styled'
import { RadioCard } from '@chakra-ui/react'
import { getThemedColor } from '../../../../lib/theme'

export const OptionCardContainer = styled(RadioCard.Item)`
  width: 241px;
  min-height: 70px;
  padding: 12px;
  background-color: ${getThemedColor('neutral', 100)};
  border: 1px solid ${getThemedColor('neutral', 300)};
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0px 1px 2px 0px #0000000d;
  flex: none;

  &:hover {
    box-shadow: 0px 2px 4px -2px #0000001a;
    box-shadow: 0px 4px 6px -1px #0000001a;
  }

  &:focus-visible,
  &[data-focus-visible] {
    outline: 2px solid ${getThemedColor('primary', 700)};
    outline-offset: 2px;
    box-shadow: 0px 2px 4px -2px #0000001a;
    box-shadow: 0px 4px 6px -1px #0000001a;
  }

  &[data-state='checked'] {
    background-color: ${getThemedColor('primary', 100)};
    border: 1px solid ${getThemedColor('primary', 700)};
  }

  &[data-disabled] {
    outline: none;
    box-shadow: none;
    border: 1px solid ${getThemedColor('neutral', 300)};
    background-color: ${getThemedColor('neutral', 100)};
    color: ${getThemedColor('neutral', 500)};
    cursor: not-allowed;
  }
`

export const OptionCardItemHiddenInput = styled(RadioCard.ItemHiddenInput)``

export const OptionCardControl = styled(RadioCard.ItemControl)`
  width: 100%;
  padding: 0;
  display: flex;
  justify-content: space-between;
  position: relative;

  &[data-disabled] {
    background-color: ${getThemedColor('neutral', 100)};
  }
`

export const OptionCardHeader = styled.div<{ variant: string }>`
  width: 100%;
  display: flex;
  flex-direction: ${({ variant }) =>
    variant === 'centered' ? 'column' : 'row'};
  align-items: center;
  gap: 12px;
`

export const OptionCardIconContainer = styled.div`
  svg {
    height: 32px;
    width: 32px;
  }
`

export const OptionCardHeaderContent = styled.div`
  width: 100%;
`

export const OptionCardHeaderLabel = styled.p<{
  variant: string
  disabled?: boolean
}>`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: ${({ disabled }) => getThemedColor('neutral', disabled ? 500 : 800)};
  text-align: ${({ variant }) => (variant === 'centered' ? 'center' : 'left')};
`

export const OptionCardHeaderCaption = styled.p<{
  variant: string
  disabled?: boolean
}>`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: ${({ disabled }) => getThemedColor('neutral', disabled ? 500 : 700)};
  text-align: ${({ variant }) => (variant === 'centered' ? 'center' : 'left')};
`

export const OptionCardItemIndicator = styled(RadioCard.ItemIndicator)`
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
  border: 1px solid ${getThemedColor('neutral', 600)};
  cursor: pointer;

  .dot {
    width: 10px !important;
    height: 10px !important;
    scale: 1 !important;
  }

  &[data-checked] {
    border: 1px solid ${getThemedColor('primary', 700)};
    background-color: ${getThemedColor('neutral', 100)} !important;
    color: ${getThemedColor('primary', 700)};

    &[data-disabled] {
      border: 1px solid ${getThemedColor('neutral', 400)};
      color: ${getThemedColor('neutral', 400)};
    }
  }

  &[data-disabled] {
    border: 1px solid ${getThemedColor('neutral', 400)};
  }
`

export const OptionCardExpandedContainer = styled.div<{ disabled?: boolean }>`
  width: 100%;
  border-top: 1px solid ${getThemedColor('neutral', 300)};
  margin-top: 12px;
  padding-top: 8px;
  color: ${({ disabled }) =>
    disabled ? getThemedColor('neutral', 500) : 'inherit'};
`
