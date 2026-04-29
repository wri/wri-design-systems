import { css } from '@emotion/react'
import { getThemedColor } from '../../../../lib/theme'

export const selectContainerStyles = (size: string) => css`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${size === 'small' ? '0.75rem' : '1rem'};
  margin-bottom: 1rem;
  &:focus-visible {
    outline-color: ${getThemedColor('primary', 700)};
  }
`

export const selectErrorBarStyles = css`
  width: 0.1875rem;
  height: 100%;
  background-color: ${getThemedColor('error', 900)};
  position: absolute;
  top: 0;
  left: 0;
`

export const selectLabelStyles = (size: string) => css`
  font-size: ${size === 'small' ? '0.875rem' : '1rem'};
  line-height: ${size === 'small' ? '1.25rem' : '1.5rem'};
  font-weight: 400;
  color: ${getThemedColor('neutral', 900)};
  text-align: left;

  span {
    color: ${getThemedColor('error', 500)};
    margin-right: 0.1875rem;
  }

  &[data-disabled] {
    color: ${getThemedColor('neutral', 600)};

    span {
      color: ${getThemedColor('neutral', 600)};
    }
  }
`

export const selectCaptionStyles = (size: string, disabled?: boolean) => css`
  font-size: ${size === 'small' ? '0.75rem' : '0.875rem'};
  line-height: ${size === 'small' ? '1rem' : '1.25rem'};
  font-weight: 400;
  color: ${getThemedColor('neutral', 700)};
  text-align: left;

  ${disabled ? `color: ${getThemedColor('neutral', 600)} !important;` : ''}
`

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
  .chakra-select__trigger {
    min-height: ${size === 'small' ? '2rem' : '2.5rem'};
    border-radius: 0.25rem;
    padding: 0.375rem 0.5rem;
    border: 0.0625rem solid ${getTriggerBorderColor(isFilled, hasErrorMessage)};
    box-shadow: 0 0.0625rem 0.125rem 0 #0000000d;
    cursor: pointer;
    background-color: ${getThemedColor('neutral', 100)};

    .chakra-select__valueText {
      font-size: ${size === 'small' ? '0.875rem' : '1rem'};
      line-height: ${size === 'small' ? '1.25rem' : '1.5rem'};
      color: ${getThemedColor('neutral', 700)};

      ${multiple
        ? `
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
      `
        : ''}
    }

    &[data-state='open'] {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
    }

    &:is(:focus-visible, [data-focus-visible]) {
      outline-offset: 0.125rem;
      outline-width: 0.125rem;
      outline-color: ${getThemedColor('primary', 700)};
      border: 0.125rem solid ${getThemedColor('neutral', 700)};
      box-shadow:
        0 0 0 0.125rem ${getThemedColor('neutral', 100)},
        rgba(0, 0, 0, 0.05) 0 0.125rem 0.125rem 0.25rem;
    }

    &[data-disabled] {
      border: 0.0625rem solid ${getThemedColor('neutral', 300)};
      background-color: ${getThemedColor('neutral', 200)};
    }
  }

  .chakra-select__indicator {
    svg {
      width: ${size === 'small' ? '0.75rem' : '1rem'};

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
  margin-top: -0.5rem;
  border-radius: 0.25rem;
  border: 0.0625rem solid ${getThemedColor('neutral', 400)};
  border-top-left-radius: 0;
  border-top-right-radius: 0;
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
  font-size: ${size === 'small' ? '0.875rem' : '1rem'};
  line-height: ${size === 'small' ? '1.25rem' : '1.5rem'};
  color: ${getThemedColor('neutral', 800)};
  text-align: left;

  ${disabled ? `color: ${getThemedColor('neutral', 600)} !important;` : ''}
`

export const selectItemCaptionStyles = (
  size: string,
  disabled?: boolean,
) => css`
  font-size: ${size === 'small' ? '0.875rem' : '1rem'};
  line-height: ${size === 'small' ? '1.25rem' : '1.5rem'};
  color: ${getThemedColor('neutral', 700)};
  text-align: left;

  ${disabled ? `color: ${getThemedColor('neutral', 600)} !important;` : ''}
`

export const selectErrorMessageStyles = (size: string) => css`
  font-size: ${size === 'small' ? '0.75rem' : '0.875rem'};
  line-height: ${size === 'small' ? '1rem' : '1.25rem'};
  font-weight: 700;
  color: ${getThemedColor('error', 900)};
  text-align: left;
`
