import { css } from '@emotion/react'
import { getThemedColor } from '../../../../lib/theme'

export const selectContainerStyles = (size: string) => css`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${size === 'small' ? '12px' : '16px'};
  margin-bottom: 16px;
`

export const selectErrorBarStyles = css`
  width: 3px;
  height: 100%;
  background-color: ${getThemedColor('error', 500)};
  position: absolute;
  top: 0;
  left: 0;
`

export const selectLabelStyles = (size: string) => css`
  font-size: ${size === 'small' ? '14px' : '16px'};
  line-height: ${size === 'small' ? '20px' : '24px'};
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

export const selectCaptionStyles = (size: string, disabled?: boolean) => css`
  font-size: ${size === 'small' ? '12px' : '14px'};
  line-height: ${size === 'small' ? '16px' : '20px'};
  font-weight: 400;
  color: ${getThemedColor('neutral', 600)};

  ${disabled ? `color: ${getThemedColor('neutral', 500)} !important;` : ''}
`

const getTriggerBorderColor = (isFilled: boolean, hasErrorMessage: boolean) => {
  if (hasErrorMessage) {
    return getThemedColor('error', 500)
  }

  return getThemedColor('neutral', isFilled ? 700 : 400)
}

export const selectTriggerStyles = (
  size: string,
  isFilled: boolean,
  hasErrorMessage: boolean,
  multiple?: boolean,
) => css`
  .chakra-select__trigger {
    min-height: ${size === 'small' ? '32px' : '40px'};
    border-radius: 4px;
    padding: 6px 8px;
    border: 1px solid ${getTriggerBorderColor(isFilled, hasErrorMessage)};
    box-shadow: 0px 1px 2px 0px #0000000d;

    .chakra-select__valueText {
      font-size: ${size === 'small' ? '14px' : '16px'};
      line-height: ${size === 'small' ? '20px' : '24px'};
      color: ${getThemedColor('neutral', 700)};

      ${multiple
        ? `
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      `
        : ''}
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
      width: ${size === 'small' ? '12px' : '16px'};

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
  margin-top: -8px;
  border-radius: 4px;
  border: 1px solid ${getThemedColor('neutral', 400)};
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top: none;
`

export const selectItemStyles = css`
  align-items: flex-start;
  &[data-highlighted] {
    background-color: ${getThemedColor('neutral', 200)};
    cursor: pointer;
  }
`

export const selectItemLabelStyles = (size: string, disabled?: boolean) => css`
  font-size: ${size === 'small' ? '14px' : '16px'};
  line-height: ${size === 'small' ? '20px' : '24px'};
  color: ${getThemedColor('neutral', 800)};

  ${disabled ? `color: ${getThemedColor('neutral', 500)} !important;` : ''}
`

export const selectItemCaptionStyles = (
  size: string,
  disabled?: boolean,
) => css`
  font-size: ${size === 'small' ? '14px' : '16px'};
  line-height: ${size === 'small' ? '20px' : '24px'};
  color: ${getThemedColor('neutral', 700)};

  ${disabled ? `color: ${getThemedColor('neutral', 500)} !important;` : ''}
`

export const selectErrorMessageStyles = (size: string) => css`
  font-size: ${size === 'small' ? '12px' : '14px'};
  line-height: ${size === 'small' ? '16px' : '20px'};
  font-weight: 700;
  color: ${getThemedColor('error', 500)};
`
