import { css } from '@emotion/react'
import {
  getThemedBorderWidth,
  getThemedColor,
  getThemedFontSize,
  getThemedLineHeight,
  getThemedRadius,
  getThemedSpacing,
} from '../../../../lib/theme'
import { fieldFocusVisibleStyles } from '../FieldWrapper/styled'

const getTriggerBorderColor = (isFilled: boolean, hasErrorMessage: boolean) => {
  if (hasErrorMessage) {
    return getThemedColor('error', 900)
  }

  return getThemedColor('neutral', isFilled ? 700 : 400)
}

export const selectTriggerStyles = (
  size: string,
  isFilled: boolean,
  hasErrorMessage: boolean,
  multiple?: boolean,
) => css`
  border-radius: ${getThemedRadius(300)};
  overflow: visible;

  &:has(
      .chakra-select__trigger:is(
          :focus-visible,
          [data-focus-visible],
          [data-state='open']
        )
    ) {
    ${fieldFocusVisibleStyles}
  }

  .chakra-select__trigger {
    min-height: ${size === 'small'
    ? getThemedSpacing(800)
    : getThemedSpacing(1000)};
    border-radius: ${getThemedRadius(300)};
    padding: ${getThemedSpacing(50)} ${getThemedSpacing(200)};
    border: ${getThemedBorderWidth(100)} solid
      ${getTriggerBorderColor(isFilled, hasErrorMessage)};
    box-shadow: 0 0.0625rem 0.125rem 0 #0000000d;
    cursor: pointer;
    background-color: ${getThemedColor('neutral', 100)};

    .chakra-select__valueText {
      font-size: ${size === 'small'
    ? getThemedFontSize(300)
    : getThemedFontSize(400)};
      line-height: ${size === 'small'
    ? getThemedLineHeight(500)
    : getThemedLineHeight(600)};
      color: ${getThemedColor('neutral', 700)};

      ${multiple
    ? `
        display: flex;
        flex-wrap: wrap;
        gap: ${getThemedSpacing(200)};
      `
    : ''}
    }

    &[data-state='open'] {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom-color: transparent;

      &[data-placement^='top'] {
        border-bottom-left-radius: ${getThemedRadius(300)};
        border-bottom-right-radius: ${getThemedRadius(300)};
        border-bottom-color: ${getTriggerBorderColor(
      isFilled,
      hasErrorMessage,
    )};

        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-top-color: transparent;
      }
    }

    &[data-disabled] {
      border: ${getThemedBorderWidth(100)} solid
        ${getThemedColor('neutral', 300)};
      background-color: ${getThemedColor('neutral', 200)};
    }
  }

  .chakra-select__indicator {
    svg {
      width: ${size === 'small'
    ? getThemedSpacing(300)
    : getThemedSpacing(400)};

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
export const selectContentStyles = css`
  margin-top: calc(${getThemedSpacing(200)} * -1);
  border-radius: ${getThemedRadius(300)};
  border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 400)};
  border-top-left-radius: 0;
  border-top-right-radius: 0;
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
    box-shadow:
      0 -0.25rem 0.375rem -0.25rem #0000001a,
      0 -0.625rem 0.9375rem -0.1875rem #0000001a;
  }
`

export const selectItemStyles = css`
  align-items: flex-start;
  &[data-highlighted] {
    background-color: ${getThemedColor('neutral', 200)};
    cursor: pointer;
  }
`

export const selectItemLabelStyles = (size: string, disabled?: boolean) => css`
  font-size: ${size === 'small'
    ? getThemedFontSize(300)
    : getThemedFontSize(400)};
  line-height: ${size === 'small'
    ? getThemedLineHeight(500)
    : getThemedLineHeight(600)};
  color: ${getThemedColor('neutral', 800)};
  text-align: left;
  margin: 0;

  ${disabled ? `color: ${getThemedColor('neutral', 600)} !important;` : ''}
`

export const selectItemCaptionStyles = (
  size: string,
  disabled?: boolean,
) => css`
  font-size: ${size === 'small'
    ? getThemedFontSize(300)
    : getThemedFontSize(400)};
  line-height: ${size === 'small'
    ? getThemedLineHeight(500)
    : getThemedLineHeight(600)};
  color: ${getThemedColor('neutral', 700)};
  text-align: left;
  margin: 0;

  ${disabled ? `color: ${getThemedColor('neutral', 600)} !important;` : ''}
`
