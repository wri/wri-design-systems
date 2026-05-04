import { css } from '@emotion/react'
import { resolveSizeValue } from '../../../lib/sizing'
import {
  getThemedBorderWidth,
  getThemedColor,
  getThemedFontSize,
  getThemedLineHeight,
  getThemedRadius,
  getThemedSpacing,
} from '../../../lib/theme'
import { AvatarProps } from './types'

export const AVATAR_SIZES = {
  small: getThemedSpacing(400),
  medium: getThemedSpacing(600),
  large: getThemedSpacing(1000),
  default: getThemedSpacing(400),
}
function getContainerSize(
  size: AvatarProps['size'],
  customSize?: AvatarProps['customSize'],
) {
  if (customSize != null && customSize !== '') {
    return resolveSizeValue(customSize)
  }

  if (size && AVATAR_SIZES[size]) {
    return AVATAR_SIZES[size]
  }

  return AVATAR_SIZES.default
}

export function avatarContainerStyles(
  size: AvatarProps['size'],
  customSize: AvatarProps['customSize'],
  disabled: boolean,
  customBackgroundColor: string,
) {
  const containerSize = getContainerSize(size, customSize)

  const defaultBackgroundColor = disabled
    ? getThemedColor('neutral', 200)
    : getThemedColor('primary', 300)

  const backgroundColor = customBackgroundColor ?? defaultBackgroundColor
  const opacity = customBackgroundColor && disabled ? 'opacity: 0.7;' : ''
  const borderColor = disabled
    ? getThemedColor('neutral', 400)
    : getThemedColor('neutral', 800)

  return css`
    height: ${containerSize};
    width: ${containerSize};
    border-radius: 50%;
    ${opacity}
    background-color: ${backgroundColor};
    border: ${getThemedBorderWidth(100)} solid ${borderColor};
    position: relative;

    &[role='button'] {
      cursor: pointer;

      &:hover {
        background-color: ${getThemedColor('primary', 500)};
        box-shadow: 0rem ${getThemedSpacing(50)} ${getThemedSpacing(100)} -${getThemedSpacing(50)} #0000001a;
        box-shadow: 0rem ${getThemedSpacing(100)} 0.375rem -0.0625rem #0000001a;
        outline-offset: 0.1875rem;
        outline: ${getThemedSpacing(50)} solid ${getThemedColor('primary', 700)};
      }

      &:active {
        outline: none;
        background-color: ${getThemedColor('primary', 600)} !important;
        border: ${getThemedBorderWidth(100)} solid ${getThemedColor('primary', 700)} !important;
        box-shadow: 0rem ${getThemedSpacing(50)} ${getThemedSpacing(100)} -${getThemedSpacing(50)} #0000001a;
        box-shadow: 0rem ${getThemedSpacing(100)} 0.375rem -0.0625rem #0000001a;
      }

      &:focus-visible {
        outline-offset: 0.1875rem;
        outline-color: ${getThemedColor('primary', 700)};
        background-color: ${getThemedColor('primary', 500)};
      }
    }
  `
}

export const avatarNotificationContainerStyles = (width?: string) => css`
  width: ${width || getThemedSpacing(400)};
  position: absolute;
  top: -${getThemedSpacing(200)};
  left: 0.9375rem;
`

export const avatarCountContainerStyles = (width?: string) => css`
  height: ${getThemedSpacing(400)};
  width: auto;
  background-color: ${getThemedColor('error', 500)};
  padding: 0 0.1875rem 0.0625rem 0.1875rem;
  border-radius: ${getThemedRadius(500)};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${getThemedFontSize(200)};
  line-height: ${getThemedLineHeight(400)};
  font-weight: 700;
  color: ${getThemedColor('error', 100)};
`

export const avatarFallbackStyles = css`
  font-size: ${getThemedFontSize(200)};
  line-height: ${getThemedLineHeight(400)};
  font-weight: 700;
  color: ${getThemedColor('primary', 800)};
`
