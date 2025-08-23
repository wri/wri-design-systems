import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'

export const badgeContainerStyles = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`

export const badgeNotificationContainerStyles = (width?: string) => css`
  width: ${width || '16px'};
  position: relative;
  display: flex;
`

export const badgeDotContainerStyles = css`
  height: 4px;
  width: 4px;
  background-color: ${getThemedColor('error', 500)};
  border-radius: 4px;
  position: absolute;
  top: 0px;
  right: 0px;
`

export const badgeCountContainerStyles = css`
  height: 10px;
  background-color: ${getThemedColor('error', 500)};
  padding: 0 3px 1px 3px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -2px;
  left: 9px;
`

export const badgeCountStyles = css`
  font-size: 9px;
  font-weight: 700;
  color: ${getThemedColor('error', 100)};
`

export const badgeMobileCountContainerStyles = css`
  height: 16px;
  min-width: 16px;
  background-color: ${getThemedColor('error', 500)};
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 4px 1px 4px;
`

export const badgeMobileCountStyles = css`
  font-size: 16px;
  font-weight: 700;
  color: ${getThemedColor('error', 100)};
`
