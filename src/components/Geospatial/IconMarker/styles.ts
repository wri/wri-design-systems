import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'
import { IconMarkerProps } from './types'

const getBackgroundColor = (
  backgroundColor: IconMarkerProps['backgroundColor'],
  mode: IconMarkerProps['mode'],
) => {
  if (backgroundColor) {
    return backgroundColor
  }

  if (mode === 'dark') {
    return getThemedColor('neutral', 800)
  }
  if (mode === 'light') {
    return getThemedColor('neutral', 100)
  }

  return getThemedColor('success', 300)
}

export const iconMarkerStyles = (
  backgroundColor: IconMarkerProps['backgroundColor'],
  hasOnClick: boolean,
  hasIcon: boolean,
  mode: IconMarkerProps['mode'],
  count: IconMarkerProps['count'],
  variant: IconMarkerProps['variant'] = 'icon',
) => {
  let size = '16px'
  let border = `4px solid ${getThemedColor('neutral', 100)}`

  if (variant === 'cluster') {
    const baseSize = 28
    const maxSize = 96
    const increment = 0.5
    border = `4px solid ${getThemedColor('neutral', 100)}`
    if (count !== undefined && count > 1) {
      const calculatedSize = baseSize + (count - 1) * increment
      size = `${Math.min(calculatedSize, maxSize)}px`
    } else {
      size = `${baseSize}px`
    }
  } else if (variant === 'simple-pin') {
    border = `4px solid ${getThemedColor('error', 500)}`
    size = '24px'
  } else if (hasIcon) {
    size = '28px'
    border = `2px solid ${getThemedColor('neutral', 100)}`
  }

  return css`
    text-overflow: ellipsis;
    height: ${size};
    width: ${size};
    background-color: ${variant === 'simple-pin'
      ? getThemedColor('neutral', 100)
      : getBackgroundColor(backgroundColor, mode)};
    color: ${mode === 'dark'
      ? getThemedColor('neutral', 100)
      : getThemedColor('neutral', 800)};
    border: ${border};
    border-radius: 50%;
    box-shadow: 0px 2px 4px -2px #0000001a;
    box-shadow: 0px 4px 6px -1px #0000001a;
    cursor: ${hasOnClick ? 'pointer' : 'default'};
    display: flex;
    align-items: center;
    justify-content: center;

    ${variant === 'simple-pin' &&
    css`
      &::after {
        content: '';
        position: relative;
        top: 100%;
        left: 2px;
        transform: translateX(-50%);
        width: 4px;
        height: 10px;
        background-color: ${getThemedColor('error', 500)};
        pointer-events: none;
      }
    `}
    &:focus-visible {
      outline: 2px solid ${getThemedColor('primary', 700)};
      outline-offset: 2px;
      box-shadow:
        0 0 0 2px ${getThemedColor('neutral', 100)},
        rgba(0, 0, 0, 0.05) 0px 2px 2px 4px;
    }

    svg {
      height: 14px;
      width: 14px;
    }
  `
}
