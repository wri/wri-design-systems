import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'

export const badgeContainerStyles = css`
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

export const badgeLabelContainerStyles = css`
  height: 8px;
  background-color: ${getThemedColor('error', 500)};
  padding: 0 2px 1px 2px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -2px;
  left: 9px;
`

export const badgeLabelStyles = css`
  font-size: 8px;
  font-weight: 700;
  color: ${getThemedColor('error', 100)};
`
