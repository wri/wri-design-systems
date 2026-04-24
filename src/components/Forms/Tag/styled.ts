import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'
import { TagProps } from './types'

export const baseTagStyles = (size: TagProps['size']) => css`
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-weight: 700;
  color: ${getThemedColor('neutral', 700)};
  box-shadow: none;

  height: 1.5rem;
  font-size: 0.75rem;
  line-height: 1rem;

  .chakra-tag__startElement {
    width: 0.875rem;
    height: 0.625rem;
  }

  svg {
    width: 0.625rem;
    height: 0.625rem;
    margin-right: 0.25rem;
  }

  .chakra-tag__endElement {
    width: 1.125rem;
    height: 0.625rem;
  }

  .chakra-tag__closeTrigger {
    margin-left: 0.5rem;

    svg {
      margin-right: 0;
    }
  }

  ${size === 'small'
    ? `
    height: 1rem;
    border: none !important;
    font-size: 0.625rem;
    line-height: 0.75rem;

    .chakra-tag__startElement {
      width: 0.75rem;
      height: 0.5rem;
    }

    svg {
      width: 0.5rem;
      height: 0.5rem;
      margin-right: 0.25rem;
    }

    .chakra-tag__closeTrigger {
      margin-left: 0.375rem;

      svg {
        margin-right: 0;
      }
    }
  `
    : ''}

  ${size === 'large'
    ? `
    height: 2rem;
    font-size: 1rem;
    line-height: 1.5rem;

    .chakra-tag__startElement {
      width: 1.125rem;
      height: 0.75rem;
    }

    svg {
      width: 0.75rem;
      height: 0.75rem;
      margin-right: 0.375rem;
    }

    .chakra-tag__endElement {
      width: 1.375rem;
      height: 0.75rem;
    }

    .chakra-tag__closeTrigger {
      margin-left: 0.75rem;

      svg {
        margin-right: 0;
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
      outline-offset: 0.125rem;
      outline: 0.125rem solid ${getThemedColor('primary', 700)};
      outline-style: auto;
    }
  }

  &[data-disabled='true'] {
    border: 0.0625rem solid ${getThemedColor('neutral', 400)};
    background-color: ${getThemedColor('neutral', 300)};
    color: ${getThemedColor('neutral', 600)};
  }
`

export const infoWhiteTagStyles = css`
  background-color: ${getThemedColor('neutral', 100)};
  border: 0.0625rem solid ${getThemedColor('neutral', 300)};
`

export const infoGreyTagStyles = css`
  background-color: ${getThemedColor('neutral', 200)};
  border: 0.0625rem solid ${getThemedColor('neutral', 400)};
`

export const successTagStyles = css`
  background-color: ${getThemedColor('success', 100)};
  border: 0.0625rem solid ${getThemedColor('success', 300)};
  color: ${getThemedColor('success', 900)};
`

export const warningTagStyles = css`
  background-color: ${getThemedColor('warning', 100)};
  border: 0.0625rem solid ${getThemedColor('warning', 300)};
  color: ${getThemedColor('warning', 900)};
`

export const errorTagStyles = css`
  background-color: ${getThemedColor('error', 100)};
  border: 0.0625rem solid ${getThemedColor('error', 300)};
  color: ${getThemedColor('error', 900)};
`
