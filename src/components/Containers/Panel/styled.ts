import { css } from '@emotion/react'
import {
  getThemedBorderWidth,
  getThemedColor,
  getThemedRadius,
  getThemedSpacing,
} from '../../../lib/theme'
import { PanelProps } from './types'

export const panelContainerStyles = (width?: PanelProps['width']) => css`
  height: 100%;
  width: ${width || '20rem'};
  background-color: ${getThemedColor('neutral', 100)};
  box-shadow: 0 0.0625rem 0.125rem -0.0625rem #0000001a;
  box-shadow: 0 0.0625rem 0.1875rem 0 #0000001a;
  position: relative;
`

export const panelFixedContainerStyles = css`
  border-right: ${getThemedBorderWidth(100)} solid
    ${getThemedColor('neutral', 300)};
`

export const panelFloatingContainerStyles = css`
  border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 300)};
  border-radius: ${getThemedRadius(300)};
`

export const panelHeaderContainerStyles = css`
  min-height: ${getThemedSpacing(1200)};
  width: 100%;
  border-bottom: ${getThemedBorderWidth(100)} solid
    ${getThemedColor('neutral', 300)};
`

const getContentHeight = (headerHeight?: number, footerHeight?: number) => {
  if (headerHeight && footerHeight)
    return `calc(100% - ${(headerHeight + footerHeight) / 16}rem)`
  if (headerHeight) return `calc(100% - ${headerHeight / 16}rem)`
  if (footerHeight) return `calc(100% - ${footerHeight / 16}rem)`
  return '100%'
}

export const panelContentContainerStyles = (
  headerHeight?: number,
  footerHeight?: number,
) => css`
  height: ${getContentHeight(headerHeight, footerHeight)};
  width: 100%;
  overflow-y: auto;

  &:focus-visible {
    outline-color: ${getThemedColor('primary', 700)};
  }
`

export const panelFooterContainerStyles = css`
  min-height: ${getThemedSpacing(1600)};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  bottom: 0;
  left: 0;
  border-top: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 300)};
`
