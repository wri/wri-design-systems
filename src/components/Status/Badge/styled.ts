import { css } from '@emotion/react'
import {
  getThemedColor,
  getThemedFontSize,
  getThemedLineHeight,
  getThemedRadius,
  getThemedSpacing,
} from '../../../lib/theme'

export const badgeContainerStyles = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${getThemedSpacing(200)};
`

export const badgeNotificationContainerStyles = (width?: string) => css`
  width: ${width || getThemedSpacing(400)};
  position: relative;
  display: flex;
`

export const badgeDotContainerStyles = css`
  height: ${getThemedSpacing(100)};
  width: ${getThemedSpacing(100)};
  background-color: ${getThemedColor('error', 500)};
  border-radius: ${getThemedRadius(300)};
  position: absolute;
  top: 0rem;
  right: 0rem;
`

export const badgeCountContainerStyles = css`
  height: 0.625rem;
  background-color: ${getThemedColor('error', 500)};
  padding: 0 0.1875rem 0.0625rem 0.1875rem;
  border-radius: ${getThemedRadius(500)};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -${getThemedSpacing(50)};
  left: 0.5625rem;
`

export const badgeCountStyles = css`
  font-size: ${getThemedFontSize(200)};
  line-height: ${getThemedLineHeight(400)};
  font-weight: 700;
  color: ${getThemedColor('error', 100)};
`

export const badgeMobileCountContainerStyles = css`
  height: ${getThemedSpacing(400)};
  min-width: ${getThemedSpacing(400)};
  background-color: ${getThemedColor('error', 500)};
  border-radius: ${getThemedRadius(700)};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0rem ${getThemedSpacing(100)} 0.0625rem ${getThemedSpacing(100)};
`

export const badgeMobileCountStyles = css`
  font-size: ${getThemedFontSize(400)};
  line-height: ${getThemedLineHeight(600)};
  font-weight: 700;
  color: ${getThemedColor('error', 100)};
`
