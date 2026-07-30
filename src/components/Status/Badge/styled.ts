import { css } from '@emotion/react'
import {
  getThemedColor,
  getThemedLineHeight,
  getThemedRadius,
  getThemedSpacing,
} from '../../../lib/theme'
import { pxToRem } from '../../../lib/sizing'
import { BadgeSize } from './types'

const badgeCountSizeTokens: Record<
  BadgeSize,
  { fontSize: string; boxSize: string; padding: string }
> = {
  small: {
    fontSize: pxToRem(8),
    boxSize: pxToRem(10),
    padding: pxToRem(2),
  },
  large: {
    fontSize: pxToRem(12),
    boxSize: pxToRem(20),
    padding: `${pxToRem(2)} ${pxToRem(4)}`,
  },
}

export const badgeContainerStyles = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${getThemedSpacing(200)};
`

export const badgeNotificationContainerStyles = (width?: string) => css`
  position: relative;
  display: flex;
`

export const badgeDotContainerStyles = (size: BadgeSize = 'large') => {
  const boxSize =
    size === 'small' ? getThemedSpacing(100) : getThemedSpacing(200)

  return css`
    height: ${boxSize};
    width: ${boxSize};
    background-color: ${getThemedColor('error', 500)};
    border-radius: ${getThemedRadius(900)};
    position: absolute;
    top: 0rem;
    right: 0rem;
  `
}

export const badgeCountContainerStyles = (size: BadgeSize = 'large') => {
  const { boxSize, padding } = badgeCountSizeTokens[size]

  return css`
    background-color: ${getThemedColor('error', 500)};
    padding: ${padding};
    border-radius: 9999px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: calc(100% - ${boxSize} / 2);
    transform: translateY(-25%);
    width: auto;
    min-width: ${boxSize};
    height: ${boxSize};
  `
}

export const badgeCountStyles = (size: BadgeSize = 'large') => {
  const { fontSize } = badgeCountSizeTokens[size]

  return css`
    font-size: ${fontSize};
    line-height: 1;
    font-weight: 700;
    color: ${getThemedColor('error', 100)};
  `
}

export const badgeMobileCountContainerStyles = (size: BadgeSize = 'large') => {
  const { boxSize } = badgeCountSizeTokens[size]

  return css`
    height: ${boxSize};
    min-width: ${boxSize};
    background-color: ${getThemedColor('error', 500)};
    border-radius: ${getThemedRadius(700)};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0rem ${getThemedSpacing(100)} 0.0625rem ${getThemedSpacing(100)};
  `
}

export const badgeMobileCountStyles = (size: BadgeSize = 'large') => {
  const { fontSize } = badgeCountSizeTokens[size]

  return css`
    font-size: ${fontSize};
    line-height: ${getThemedLineHeight(600)};
    font-weight: 700;
    color: ${getThemedColor('error', 100)};
  `
}
