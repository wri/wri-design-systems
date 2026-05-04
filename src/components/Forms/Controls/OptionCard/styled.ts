import { css } from '@emotion/react'
import {
  getThemedBorderWidth,
  getThemedColor,
  getThemedFontSize,
  getThemedLineHeight,
  getThemedRadius,
  getThemedSpacing,
} from '../../../../lib/theme'
import { OptionCardItemProps } from './types'

export const optionCardContainerStyles = css`
  width: 15.0625rem;
  min-height: 4.375rem;
  padding: ${getThemedSpacing(300)};
  background-color: ${getThemedColor('neutral', 100)};
  border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 300)};
  border-radius: ${getThemedRadius(300)};
  cursor: pointer;
  box-shadow: 0 ${getThemedBorderWidth(100)} ${getThemedSpacing(50)} 0 #0000000d;
  flex: none;

  &:hover {
    box-shadow: 0 ${getThemedSpacing(50)} ${getThemedSpacing(100)} -${getThemedSpacing(
        50,
      )} #0000001a;
    box-shadow: 0 ${getThemedSpacing(100)} 0.375rem -${getThemedBorderWidth(
        100,
      )} #0000001a;
  }

  &:focus-visible,
  &[data-focus-visible] {
    outline: ${getThemedBorderWidth(200)} solid
      ${getThemedColor('primary', 700)};
    outline-offset: ${getThemedSpacing(50)};
    box-shadow: 0 ${getThemedSpacing(50)} ${getThemedSpacing(100)} -${getThemedSpacing(
        50,
      )} #0000001a;
    box-shadow: 0 ${getThemedSpacing(100)} 0.375rem -${getThemedBorderWidth(
        100,
      )} #0000001a;
    box-shadow:
      0 0 0 ${getThemedSpacing(50)} ${getThemedColor('neutral', 100)},
      rgba(0, 0, 0, 0.05) 0 ${getThemedSpacing(50)} ${getThemedSpacing(50)}
        ${getThemedSpacing(100)};
  }

  &[data-state='checked'] {
    background-color: ${getThemedColor('primary', 100)};
    border: ${getThemedBorderWidth(100)} solid ${getThemedColor('primary', 700)};
  }

  &[data-disabled] {
    outline: none;
    box-shadow: none;
    border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 300)};
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
  gap: ${getThemedSpacing(300)};
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
  font-size: ${getThemedFontSize(400)};
  line-height: ${getThemedLineHeight(600)};
  font-weight: 400;
  color: ${getThemedColor('neutral', disabled ? 600 : 900)};
  text-align: ${variant === 'centered' ? 'center' : 'left'};
`

export const optionCardHeaderCaptionStyles = (
  variant: OptionCardItemProps['variant'],
  disabled?: OptionCardItemProps['disabled'],
) => css`
  font-size: ${getThemedFontSize(300)};
  line-height: ${getThemedLineHeight(500)};
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
  width: ${getThemedSpacing(500)};
  height: ${getThemedSpacing(500)};
  border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 700)};
  cursor: pointer;

  .dot {
    width: 0.625rem !important;
    height: 0.625rem !important;
    scale: 1 !important;
  }

  &[data-checked] {
    border: ${getThemedBorderWidth(100)} solid ${getThemedColor('primary', 700)};
    background-color: ${getThemedColor('primary', 100)};
    color: ${getThemedColor('primary', 700)};

    &[data-disabled] {
      border: ${getThemedBorderWidth(100)} solid
        ${getThemedColor('neutral', 400)};
      color: ${getThemedColor('neutral', 400)};
    }
  }

  &[data-disabled] {
    border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 400)};
    cursor: not-allowed;
  }
`

export const optionCardExpandedContainerStyles = (
  disabled?: OptionCardItemProps['disabled'],
) => css`
  width: 100%;
  border-top: ${getThemedBorderWidth(100)} solid
    ${getThemedColor('neutral', 300)};
  margin-top: ${getThemedSpacing(300)};
  padding: 0;
  padding-top: ${getThemedSpacing(200)};
  color: ${disabled ? getThemedColor('neutral', 500) : 'inherit'};
`
