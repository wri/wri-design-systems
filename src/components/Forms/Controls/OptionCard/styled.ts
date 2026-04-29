import { css } from '@emotion/react'
import { getThemedColor } from '../../../../lib/theme'
import { OptionCardItemProps } from './types'

export const optionCardContainerStyles = css`
  width: 15.0625rem;
  min-height: 4.375rem;
  padding: 0.75rem;
  background-color: ${getThemedColor('neutral', 100)};
  border: 0.0625rem solid ${getThemedColor('neutral', 300)};
  border-radius: 0.25rem;
  cursor: pointer;
  box-shadow: 0 0.0625rem 0.125rem 0 #0000000d;
  flex: none;

  &:hover {
    box-shadow: 0 0.125rem 0.25rem -0.125rem #0000001a;
    box-shadow: 0 0.25rem 0.375rem -0.0625rem #0000001a;
  }

  &:focus-visible,
  &[data-focus-visible] {
    outline: 0.125rem solid ${getThemedColor('primary', 700)};
    outline-offset: 0.125rem;
    box-shadow: 0 0.125rem 0.25rem -0.125rem #0000001a;
    box-shadow: 0 0.25rem 0.375rem -0.0625rem #0000001a;
    box-shadow:
      0 0 0 0.125rem ${getThemedColor('neutral', 100)},
      rgba(0, 0, 0, 0.05) 0 0.125rem 0.125rem 0.25rem;
  }

  &[data-state='checked'] {
    background-color: ${getThemedColor('primary', 100)};
    border: 0.0625rem solid ${getThemedColor('primary', 700)};
  }

  &[data-disabled] {
    outline: none;
    box-shadow: none;
    border: 0.0625rem solid ${getThemedColor('neutral', 300)};
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
  gap: 0.75rem;
`

export const optionCardIconContainerStyles = css`
  svg {
    height: 2rem;
    width: 2rem;
  }
`

export const optionCardHeaderLabelStyles = (
  variant: OptionCardItemProps['variant'],
  disabled?: OptionCardItemProps['disabled'],
) => css`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  color: ${getThemedColor('neutral', disabled ? 600 : 900)};
  text-align: ${variant === 'centered' ? 'center' : 'left'};
`

export const optionCardHeaderCaptionStyles = (
  variant: OptionCardItemProps['variant'],
  disabled?: OptionCardItemProps['disabled'],
) => css`
  font-size: 0.875rem;
  line-height: 1.25rem;
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
  width: 1.25rem;
  height: 1.25rem;
  border: 0.0625rem solid ${getThemedColor('neutral', 700)};
  cursor: pointer;

  .dot {
    width: 0.625rem !important;
    height: 0.625rem !important;
    scale: 1 !important;
  }

  &[data-checked] {
    border: 0.0625rem solid ${getThemedColor('primary', 700)};
    background-color: ${getThemedColor('primary', 100)};
    color: ${getThemedColor('primary', 700)};

    &[data-disabled] {
      border: 0.0625rem solid ${getThemedColor('neutral', 400)};
      color: ${getThemedColor('neutral', 400)};
    }
  }

  &[data-disabled] {
    border: 0.0625rem solid ${getThemedColor('neutral', 400)};
    cursor: not-allowed;
  }
`

export const optionCardExpandedContainerStyles = (
  disabled?: OptionCardItemProps['disabled'],
) => css`
  width: 100%;
  border-top: 0.0625rem solid ${getThemedColor('neutral', 300)};
  margin-top: 0.75rem;
  padding: 0;
  padding-top: 0.5rem;
  color: ${disabled ? getThemedColor('neutral', 500) : 'inherit'};
`
