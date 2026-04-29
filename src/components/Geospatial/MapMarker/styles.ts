import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'
import { MapMarkerProps } from './types'

export const mapMarkerContainerStyles = (hasIcon: boolean) => css`
  outline: 0.125rem solid ${getThemedColor('primary', 700)};
  outline-offset: 0.125rem;
  border-radius: 50%;
  box-shadow:
    0 0 0 0.125rem ${getThemedColor('neutral', 100)},
    rgba(0, 0, 0, 0.05) 0 0.125rem 0.125rem 0.25rem;
`

const getBackgroundColor = (
  backgroundColor: MapMarkerProps['backgroundColor'],
  mode: MapMarkerProps['mode'],
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

export const mapMarkerStyles = (
  backgroundColor: MapMarkerProps['backgroundColor'],
  hasOnClick: boolean,
  hasIcon: boolean,
  mode: MapMarkerProps['mode'],
  count: MapMarkerProps['count'],
  variant: MapMarkerProps['variant'] = 'icon',
) => {
  let size = '1rem'
  let border = `0.25rem solid ${getThemedColor('neutral', 100)}`

  if (variant === 'cluster') {
    const baseSize = 1.75
    const maxSize = 6
    const increment = 0.03125
    border = `0.25rem solid ${getThemedColor('neutral', 100)}`
    if (count !== undefined && count > 1) {
      const calculatedSize = baseSize + (count - 1) * increment
      size = `${Math.min(calculatedSize, maxSize)}rem`
    } else {
      size = `${baseSize}rem`
    }
  } else if (variant === 'simple-pin') {
    border = `0.25rem solid ${getThemedColor('error', 500)}`
    size = '1.5rem'
  } else if (hasIcon) {
    size = '1.75rem'
    border = `0.125rem solid ${getThemedColor('neutral', 100)}`
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
    box-shadow: 0 0.125rem 0.25rem -0.125rem #0000001a;
    box-shadow: 0 0.25rem 0.375rem -1px #0000001a;
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
        left: 0.125rem;
        transform: translateX(-50%);
        width: 0.25rem;
        height: 0.625rem;
        background-color: ${getThemedColor('error', 500)};
        pointer-events: none;
      }
    `}
    &:focus-visible {
      outline: 0.125rem solid ${getThemedColor('primary', 700)};
      outline-offset: 0.125rem;
      box-shadow:
        0 0 0 0.125rem ${getThemedColor('neutral', 100)},
        rgba(0, 0, 0, 0.05) 0 0.125rem 0.125rem 0.25rem;
    }

    svg {
      height: 0.875rem;
      width: 0.875rem;
    }
  `
}
