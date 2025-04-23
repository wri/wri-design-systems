import { css } from '@emotion/react'
import { getThemedColor } from '../../../../lib/theme'
import { OptionCardItemProps } from './types'

export const optionCardContainerStyles = css`
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
    box-shadow:
      0 0 0 2px ${getThemedColor('neutral', 100)},
      rgba(0, 0, 0, 0.05) 0px 2px 2px 4px;
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
    color: ${getThemedColor('neutral', 600)};
    cursor: not-allowed;
  }
`

export const optionCardControlStyles = css`
  width: 100%;
  padding: 0;
  display: flex;
  justify-content: space-between;
  position: relative;

  &[data-disabled] {
    background-color: ${getThemedColor('neutral', 100)};
  }
`

export const optionCardHeaderStyles = (
  variant: OptionCardItemProps['variant'],
) => css`
  width: 100%;
  display: flex;
  flex-direction: ${variant === 'centered' ? 'column' : 'row'};
  align-items: center;
  gap: 12px;
`

export const optionCardIconContainerStyles = css`
  svg {
    height: 32px;
    width: 32px;
  }
`

export const optionCardHeaderLabelStyles = (
  variant: OptionCardItemProps['variant'],
  disabled?: OptionCardItemProps['disabled'],
) => css`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: ${getThemedColor('neutral', disabled ? 600 : 900)};
  text-align: ${variant === 'centered' ? 'center' : 'left'};
`

export const optionCardHeaderCaptionStyles = (
  variant: OptionCardItemProps['variant'],
  disabled?: OptionCardItemProps['disabled'],
) => css`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: ${getThemedColor('neutral', disabled ? 600 : 700)};
  text-align: ${variant === 'centered' ? 'center' : 'left'};
`

export const optionCardItemIndicatorStyles = (
  variant: OptionCardItemProps['variant'],
) => css`
  position: ${variant === 'centered' ? 'absolute' : 'relative'};
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
  border: 1px solid ${getThemedColor('neutral', 700)};
  cursor: pointer;

  .dot {
    width: 10px !important;
    height: 10px !important;
    scale: 1 !important;
  }

  &[data-checked] {
    border: 1px solid ${getThemedColor('primary', 700)};
    background-color: ${getThemedColor('primary', 100)};
    color: ${getThemedColor('primary', 700)};

    &[data-disabled] {
      border: 1px solid ${getThemedColor('neutral', 400)};
      color: ${getThemedColor('neutral', 400)};
    }
  }

  &[data-disabled] {
    border: 1px solid ${getThemedColor('neutral', 400)};
    cursor: not-allowed;
  }
`

export const optionCardExpandedContainerStyles = (
  disabled?: OptionCardItemProps['disabled'],
) => css`
  width: 100%;
  border-top: 1px solid ${getThemedColor('neutral', 300)};
  margin-top: 12px;
  padding: 0px;
  padding-top: 8px;
  color: ${disabled ? getThemedColor('neutral', 500) : 'inherit'};
`
