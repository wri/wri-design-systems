import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'
import { PanelProps } from './types'

export const panelContainerStyles = (width?: PanelProps['width']) => css`
  height: 100%;
  width: ${width || '320px'};
  background-color: ${getThemedColor('neutral', 100)};
  box-shadow: 0px 1px 2px -1px #0000001a;
  box-shadow: 0px 1px 3px 0px #0000001a;
  position: relative;
`

export const panelFixedContainerStyles = css`
  border-right: 1px solid ${getThemedColor('neutral', 300)};
`

export const panelFloatingContainerStyles = css`
  border: 1px solid ${getThemedColor('neutral', 300)};
  border-radius: 4px;
`

export const panelHeaderContainerStyles = css`
  min-height: 48px;
  width: 100%;
  border-bottom: 1px solid ${getThemedColor('neutral', 300)};
`

const getContentHeight = (headerHeight?: number, footerHeight?: number) => {
  if (headerHeight && footerHeight)
    return `calc(100% - ${headerHeight + footerHeight}px)`
  if (headerHeight) return `calc(100% - ${headerHeight}px)`
  if (footerHeight) return `calc(100% - ${footerHeight}px)`
  return '100%'
}

export const panelContentContainerStyles = (
  headerHeight?: number,
  footerHeight?: number,
) => css`
  height: ${getContentHeight(headerHeight, footerHeight)};
  width: 100%;
  overflow-y: auto;
`

export const panelFooterContainerStyles = css`
  min-height: 64px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  bottom: 0;
  left: 0;
  border-top: 1px solid ${getThemedColor('neutral', 300)};
`
