import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'

export const sheetPositionContainerStyles = css`
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 999;
  display: block;
`

export const sheetContainerStyles = css`
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  max-width: 1024px;
  bottom: 0;
  background-color: ${getThemedColor('neutral', 100)};
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  box-shadow: 0px -2px 8px 0px #0000001f;
  display: flex;
  flex-direction: column;
  padding-bottom: env(safe-area-inset-bottom);
  transition:
    height 300ms ease,
    transform 300ms ease;
  overflow: hidden;
`

export const sheetGrabberContainerStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const sheetGrabberStyles = css`
  height: 2px;
  width: 32px;
  background-color: ${getThemedColor('neutral', 300)};
  margin: 8px 0;
`

export const sheetHeaderContainerStyles = css`
  min-height: 50px;
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

export const sheetContentContainerStyles = (
  headerHeight?: number,
  footerHeight?: number,
) => css`
  height: ${getContentHeight(headerHeight, footerHeight)};
  width: 100%;
  overflow-y: scroll;
`

export const sheetFooterContainerStyles = css`
  min-height: 64px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  bottom: 0;
  left: 0;
  border-top: 1px solid ${getThemedColor('neutral', 300)};
  background-color: ${getThemedColor('neutral', 100)};
`
