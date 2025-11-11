import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'

export const avatarContainerStyles = css`
  height: 28px;
  width: 28px;
  border-radius: 50%;
  background-color: ${getThemedColor('primary', 300)};
  border: 1px solid ${getThemedColor('primary', 800)};
  position: relative;

  &[role='button'] {
    cursor: pointer;

    &:hover {
      background-color: ${getThemedColor('primary', 500)};
      box-shadow: 0px 2px 4px -2px #0000001a;
      box-shadow: 0px 4px 6px -1px #0000001a;
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

export const avatarFallbackStyles = css`
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  color: ${getThemedColor('primary', 800)};
`

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
