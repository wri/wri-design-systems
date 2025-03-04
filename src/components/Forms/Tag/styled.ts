import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'
import { TagProps } from './types'

export const baseTagStyles = (size: TagProps['size']) => css`
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0;
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: 700;
  color: ${getThemedColor('neutral', 700)};
  box-shadow: none;

  height: 24px;
  font-size: 12px;
  line-height: 16px;

  .chakra-tag__startElement {
    width: 14px;
    height: 10px;
  }

  svg {
    width: 10px;
    height: 10px;
    margin-right: 4px;
  }

  .chakra-tag__endElement {
    width: 18px;
    height: 10px;
  }

  .chakra-tag__closeTrigger {
    margin-left: 8px;

    svg {
      margin-right: 0px;
    }
  }

  ${size === 'small'
    ? `
    height: 16px;
    border: none !important;
    font-size: 10px;
    line-height: 12px;

    .chakra-tag__startElement {
      width: 12px;
      height: 8px;
    }

    svg {
      width: 8px;
      height: 8px;
      margin-right: 4px;
    }

    .chakra-tag__closeTrigger {
      margin-left: 6px;

      svg {
        margin-right: 0px;
      }
    }
  `
    : ''}

  ${size === 'large'
    ? `
    height: 32px;
    font-size: 16px;
    line-height: 24px;

    .chakra-tag__startElement {
      width: 18px;
      height: 12px;
    }

    svg {
      width: 12px;
      height: 12px;
      margin-right: 6px;
    }

    .chakra-tag__endElement {
      width: 22px;
      height: 12px;
    }

    .chakra-tag__closeTrigger {
      margin-left: 12px;

      svg {
        margin-right: 0px;
      }
    }
  `
    : ''}

  .chakra-tag__startElement,
  .chakra-tag__endElement {
    margin: 0;
  }

  .chakra-tag__startElement,
  .chakra-tag__endElement,
  .chakra-tag__closeTrigger {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .chakra-tag__closeTrigger {
    cursor: pointer;

    &:focus-visible {
      outline-offset: 2px;
      outline: 2px solid ${getThemedColor('primary', 700)};
      outline-style: auto;
    }
  }

  &[data-disabled='true'] {
    border: 1px solid ${getThemedColor('neutral', 400)};
    background-color: ${getThemedColor('neutral', 300)};
    color: ${getThemedColor('neutral', 600)};
  }
`

export const infoWhiteTagStyles = css`
  background-color: ${getThemedColor('neutral', 100)};
  border: 1px solid ${getThemedColor('neutral', 300)};
`

export const infoGreyTagStyles = css`
  background-color: ${getThemedColor('neutral', 200)};
  border: 1px solid ${getThemedColor('neutral', 400)};
`

export const successTagStyles = css`
  background-color: ${getThemedColor('success', 100)};
  border: 1px solid ${getThemedColor('success', 200)};
  color: ${getThemedColor('success', 500)};
`

export const warningTagStyles = css`
  background-color: ${getThemedColor('warning', 100)};
  border: 1px solid ${getThemedColor('warning', 200)};
  color: ${getThemedColor('warning', 500)};
`

export const errorTagStyles = css`
  background-color: ${getThemedColor('error', 100)};
  border: 1px solid ${getThemedColor('error', 200)};
  color: ${getThemedColor('error', 500)};
`
