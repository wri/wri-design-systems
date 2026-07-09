import { css } from '@emotion/react'
import {
  getThemedBorderWidth,
  getThemedColor,
  getThemedRadius,
  getThemedSpacing,
} from '../../../lib/theme'
import { PanelProps } from './types'

export const panelContainerStyles = (width?: PanelProps['width']) => css`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: ${width || '20rem'};
  background-color: ${getThemedColor('neutral', 100)};
  box-shadow: 0 0.0625rem 0.125rem -0.0625rem #0000001a;
  box-shadow: 0 0.0625rem 0.1875rem 0 #0000001a;
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
  flex-shrink: 0;
  min-height: ${getThemedSpacing(1200)};
  width: 100%;
  border-bottom: ${getThemedBorderWidth(100)} solid
    ${getThemedColor('neutral', 300)};
`

export const panelContentContainerStyles = css`
  flex: 1;
  min-height: 0;
  width: 100%;
  overflow-y: auto;

  &:focus-visible {
    outline-color: ${getThemedColor('primary', 700)};
  }
`

export const panelFooterContainerStyles = css`
  flex-shrink: 0;
  min-height: ${getThemedSpacing(1600)};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-top: ${getThemedBorderWidth(100)} solid
    ${getThemedColor('neutral', 300)};
`
