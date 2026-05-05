import { css } from '@emotion/react'
import {
  getThemedBorderWidth,
  getThemedColor,
  getThemedFontSize,
  getThemedLineHeight,
  getThemedRadius,
  getThemedSpacing,
} from '../../../lib/theme'
import { TagProps } from './types'

export const baseTagStyles = (size: TagProps['size']) => css`
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0;
  padding: ${getThemedSpacing(100)} ${getThemedSpacing(200)};
  border-radius: ${getThemedRadius(300)};
  font-weight: 700;
  color: ${getThemedColor('neutral', 700)};
  box-shadow: none;

  height: ${getThemedSpacing(600)};
  font-size: ${getThemedFontSize(200)};
  line-height: ${getThemedLineHeight(400)};

  .chakra-tag__startElement {
    width: 0.875rem;
    height: 0.625rem;
  }

  svg {
    width: 0.625rem;
    height: 0.625rem;
    margin-right: ${getThemedSpacing(100)};
  }

  .chakra-tag__endElement {
    width: 1.125rem;
    height: 0.625rem;
  }

  .chakra-tag__closeTrigger {
    margin-left: ${getThemedSpacing(200)};

    svg {
      margin-right: 0;
    }
  }

  ${size === 'small'
    ? `
    height: ${getThemedSpacing(400)};
    border: none !important;
    font-size: 0.625rem;
    line-height: ${getThemedLineHeight(300)};

    .chakra-tag__startElement {
      width: ${getThemedSpacing(300)};
      height: ${getThemedSpacing(200)};
    }

    svg {
      width: ${getThemedSpacing(200)};
      height: ${getThemedSpacing(200)};
      margin-right: ${getThemedSpacing(100)};
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
    height: ${getThemedSpacing(800)};
    font-size: ${getThemedFontSize(400)};
    line-height: ${getThemedLineHeight(600)};

    .chakra-tag__startElement {
      width: 1.125rem;
      height: ${getThemedSpacing(300)};
    }

    svg {
      width: ${getThemedSpacing(300)};
      height: ${getThemedSpacing(300)};
      margin-right: 0.375rem;
    }

    .chakra-tag__endElement {
      width: 1.375rem;
      height: ${getThemedSpacing(300)};
    }

    .chakra-tag__closeTrigger {
      margin-left: ${getThemedSpacing(300)};

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
      outline-offset: ${getThemedSpacing(50)};
      outline: ${getThemedBorderWidth(200)} solid
        ${getThemedColor('primary', 700)};
      outline-style: auto;
    }
  }

  &[data-disabled='true'] {
    border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 400)};
    background-color: ${getThemedColor('neutral', 300)};
    color: ${getThemedColor('neutral', 600)};
  }
`

export const infoWhiteTagStyles = css`
  background-color: ${getThemedColor('neutral', 100)};
  border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 300)};
`

export const infoGreyTagStyles = css`
  background-color: ${getThemedColor('neutral', 200)};
  border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 400)};
`

export const successTagStyles = css`
  background-color: ${getThemedColor('success', 100)};
  border: ${getThemedBorderWidth(100)} solid ${getThemedColor('success', 300)};
  color: ${getThemedColor('success', 900)};
`

export const warningTagStyles = css`
  background-color: ${getThemedColor('warning', 100)};
  border: ${getThemedBorderWidth(100)} solid ${getThemedColor('warning', 300)};
  color: ${getThemedColor('warning', 900)};
`

export const errorTagStyles = css`
  background-color: ${getThemedColor('error', 100)};
  border: ${getThemedBorderWidth(100)} solid ${getThemedColor('error', 300)};
  color: ${getThemedColor('error', 900)};
`
