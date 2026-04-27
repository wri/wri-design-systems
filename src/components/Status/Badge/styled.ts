import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'

export const badgeContainerStyles = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`

export const badgeNotificationContainerStyles = (width?: string) => css`
  width: ${width || '1rem'};
  position: relative;
  display: flex;
`

export const badgeDotContainerStyles = css`
  height: 0.25rem;
  width: 0.25rem;
  background-color: ${getThemedColor('error', 500)};
  border-radius: 0.25rem;
  position: absolute;
  top: 0rem;
  right: 0rem;
`

export const badgeCountContainerStyles = css`
  height: 0.625rem;
  background-color: ${getThemedColor('error', 500)};
  padding: 0 0.1875rem 0.0625rem 0.1875rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -0.125rem;
  left: 0.5625rem;
`

export const badgeCountStyles = css`
  font-size: 0.5625rem;
  font-weight: 700;
  color: ${getThemedColor('error', 100)};
`

export const badgeMobileCountContainerStyles = css`
  height: 1rem;
  min-width: 1rem;
  background-color: ${getThemedColor('error', 500)};
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0rem 0.25rem 0.0625rem 0.25rem;
`

export const badgeMobileCountStyles = css`
  font-size: 1rem;
  font-weight: 700;
  color: ${getThemedColor('error', 100)};
`
