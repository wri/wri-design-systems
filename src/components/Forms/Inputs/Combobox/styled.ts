import { css } from '@emotion/react'
import {
  getThemedBorderWidth,
  getThemedColor,
  getThemedFontSize,
  getThemedLineHeight,
  getThemedRadius,
  getThemedSpacing,
} from '../../../../lib/theme'
import {
  fieldFocusVisibleStyles,
  getPrimaryOverlayColor,
} from '../FieldWrapper/styled'
import { FieldWrapperSize } from '../FieldWrapper/types'

const getComboboxConnectColor = (hasErrorMessage: boolean) =>
  hasErrorMessage
    ? getThemedColor('error', 900)
    : getThemedColor('neutral', 700)

export const comboboxInputStyles = (placement: string) => css`
  &[data-state='open'] {
    ${placement.startsWith('top')
      ? `
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border-top-color: transparent;
    `
      : `
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom-color: transparent;
    `}
  }
`

export const comboboxIndicatorGroupStyles = css`
  &[data-disabled],
  [data-disabled] & {
    color: ${getThemedColor('neutral', 500)};
  }
`

export const comboboxContentStyles = (
  hasErrorMessage: boolean,
  size: FieldWrapperSize = 'default',
) => css`
  margin-top: calc(${getThemedSpacing(200)} * -1);
  border-radius: ${getThemedRadius(300)};
  border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 400)};
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-top: ${getThemedBorderWidth(100)} solid
    ${getComboboxConnectColor(hasErrorMessage)};
  background-color: ${getThemedColor('neutral', 100)};
  padding: ${getThemedSpacing(300)};
  gap: ${getThemedSpacing(200)};
  box-shadow:
    0 0.25rem 0.375rem -0.25rem #0000001a,
    0 0.625rem 0.9375rem -0.1875rem #0000001a;

  &[data-placement^='top'] {
    margin-top: 0;
    margin-bottom: calc(${getThemedSpacing(200)} * -1);
    border-top-left-radius: ${getThemedRadius(300)};
    border-top-right-radius: ${getThemedRadius(300)};
    border-top: ${getThemedBorderWidth(100)} solid
      ${getThemedColor('neutral', 400)};
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: ${getThemedBorderWidth(100)} solid
      ${getComboboxConnectColor(hasErrorMessage)};
    box-shadow:
      0 -0.25rem 0.375rem -0.25rem #0000001a,
      0 -0.625rem 0.9375rem -0.1875rem #0000001a;
  }
`

export const comboboxClearTriggerStyles = css`
  &:focus-visible {
    ${fieldFocusVisibleStyles}
  }
`

export const comboboxItemStyles = css`
  cursor: pointer;
  color: ${getThemedColor('neutral', 900)};
  font-size: ${getThemedFontSize(400)};
  line-height: ${getThemedLineHeight(600)};
  padding: 0;
  border-radius: ${getThemedRadius(200)};

  &[data-highlighted] {
    background-color: ${getPrimaryOverlayColor(20)};
  }

  [data-nav-source='keyboard'] &[data-highlighted] {
    ${fieldFocusVisibleStyles}
    outline-offset: -${getThemedBorderWidth(200)};
  }

  &:active {
    background-color: ${getPrimaryOverlayColor(40)};
  }

  &[data-disabled] {
    cursor: not-allowed;
    color: ${getThemedColor('neutral', 600)};
  }
`

export const comboboxCreateItemStyles = css`
  ${comboboxItemStyles}

  svg {
    width: ${getThemedSpacing(200)};
    height: ${getThemedSpacing(200)};
    flex-shrink: 0;
    color: ${getThemedColor('neutral', 900)};
  }
`

export const comboboxEmptyStyles = css`
  color: ${getThemedColor('neutral', 700)};
  font-size: ${getThemedFontSize(400)};
  line-height: ${getThemedLineHeight(600)};
  padding: 0;
`

export const comboboxSelectedItemsStyles = css`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: ${getThemedSpacing(100)};
  padding-top: ${getThemedSpacing(100)};
`
