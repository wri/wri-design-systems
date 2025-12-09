import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'
import { AvatarProps } from './types'

export const AVATAR_SIZES = {
  small: '16px',
  medium: '24px',
  large: '40px',
  default: '16px',
}
function getContainerSize(size: AvatarProps['size'], customSize: string) {
  if (typeof customSize === 'string' && customSize.trim() !== '') {
    return customSize
  }

  if (size && AVATAR_SIZES[size]) {
    return AVATAR_SIZES[size]
  }

  return AVATAR_SIZES.default
}

export function avatarContainerStyles(
  size: AvatarProps['size'],
  customSize: string,
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
    border: 1px solid ${borderColor};
    position: relative;

    &[role='button'] {
      cursor: pointer;

      &:hover {
        background-color: ${getThemedColor('primary', 500)};
        box-shadow: 0px 2px 4px -2px #0000001a;
        box-shadow: 0px 4px 6px -1px #0000001a;
        outline-offset: 3px;
        outline: 2px solid ${getThemedColor('primary', 700)};
      }

      &:active {
        outline: none;
        background-color: ${getThemedColor('primary', 600)} !important;
        border: 1px solid ${getThemedColor('primary', 700)} !important;
        box-shadow: 0px 2px 4px -2px #0000001a;
        box-shadow: 0px 4px 6px -1px #0000001a;
      }

      &:focus-visible {
        outline-offset: 3px;
        outline-color: ${getThemedColor('primary', 700)};
        background-color: ${getThemedColor('primary', 500)};
      }
    }
  `
}

export const avatarNotificationContainerStyles = (width?: string) => css`
  width: ${width || '16px'};
  position: absolute;
  top: -8px;
  left: 15px;
`

export const avatarCountContainerStyles = (width?: string) => css`
  height: 16px;
  width: auto;
  background-color: ${getThemedColor('error', 500)};
  padding: 0 3px 1px 3px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 700;
  color: ${getThemedColor('error', 100)};
`

export const avatarFallbackStyles = css`
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  color: ${getThemedColor('primary', 800)};
`
