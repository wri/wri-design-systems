import { css } from '@emotion/react'
import {
  getThemedBorderWidth,
  getThemedColor,
  getThemedFontSize,
  getThemedLineHeight,
  getThemedRadius,
  getThemedSpacing,
} from '../../../lib/theme'

interface AlertBannerPalette {
  backgroundColor: string
  textColor: string
  borderColor: string
  iconColor: string
}

const getPalette = (variant?: string): AlertBannerPalette => {
  switch (variant) {
    case 'success':
      return {
        backgroundColor: getThemedColor('success', 100),
        textColor: getThemedColor('success', 900),
        borderColor: getThemedColor('success', 300),
        iconColor: getThemedColor('success', 500),
      }
    case 'warning':
      return {
        backgroundColor: getThemedColor('warning', 100),
        textColor: getThemedColor('warning', 900),
        borderColor: getThemedColor('warning', 300),
        iconColor: getThemedColor('warning', 500),
      }
    case 'error':
      return {
        backgroundColor: getThemedColor('error', 100),
        textColor: getThemedColor('error', 900),
        borderColor: getThemedColor('error', 300),
        iconColor: getThemedColor('error', 500),
      }
    case 'information':
      return {
        backgroundColor: getThemedColor('information', 100),
        textColor: getThemedColor('information', 900),
        borderColor: getThemedColor('information', 300),
        iconColor: getThemedColor('information', 500),
      }
    case 'general-grey':
      return {
        backgroundColor: getThemedColor('neutral', 200),
        textColor: getThemedColor('neutral', 800),
        borderColor: getThemedColor('neutral', 300),
        iconColor: getThemedColor('neutral', 700),
      }
    default: // general-white
      return {
        backgroundColor: getThemedColor('neutral', 100),
        textColor: getThemedColor('neutral', 800),
        borderColor: getThemedColor('neutral', 300),
        iconColor: getThemedColor('neutral', 700),
      }
  }
}

export const alertBannerStyles = (
  variant?: string,
  width: 'full-width' | 'inline' = 'full-width',
  isCentered = false,
) => {
  const { backgroundColor, textColor, borderColor } = getPalette(variant)
  const isInline = width === 'inline'
  const borderWidth = getThemedBorderWidth(100)
  const padTop = isInline
    ? `calc(${getThemedSpacing(200)} - ${borderWidth})`
    : getThemedSpacing(200)
  const padBottom = `calc(${getThemedSpacing(200)} - ${borderWidth})`

  return css`
    display: ${isInline ? 'inline-flex' : 'flex'};
    width: ${isInline ? 'fit-content' : '100%'};
    max-width: 100%;
    min-height: ${getThemedSpacing(1100)};
    align-items: center;
    gap: ${getThemedSpacing(200)};
    padding: ${padTop} ${getThemedSpacing(300)} ${padBottom};
    padding-right: ${getThemedSpacing(1000)};
    justify-content: ${isCentered ? 'center' : 'flex-start'};
    color: ${textColor};
    background-color: ${backgroundColor};
    ${isInline
      ? `border: ${borderWidth} solid ${borderColor};
      border-radius: ${getThemedRadius(300)};`
      : `border-bottom: ${borderWidth} solid ${borderColor};
      border-radius: ${getThemedRadius(100)};`}
    .chakra-alert__content {
      font-size: ${getThemedFontSize(400)};
      line-height: ${getThemedLineHeight(600)};
      font-weight: 400;
    }
  `
}

export const alertBannerIconStyles = (variant?: string) => {
  const { iconColor } = getPalette(variant)

  return css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: ${getThemedSpacing(400)};
    height: ${getThemedSpacing(400)};
    color: ${iconColor};
    svg {
      width: ${getThemedSpacing(400)};
      height: ${getThemedSpacing(400)};
    }
  `
}
