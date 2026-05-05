import { css } from '@emotion/react'
import {
  getThemedColor,
  getThemedBorderWidth,
  getThemedFontSize,
  getThemedLineHeight,
  getThemedSpacing,
} from '../../../../lib/theme'
import { LayerItemProps } from './types'

export const layerItemContainerStyles = css`
  width: 100%;
  padding: ${getThemedSpacing(400)} 0;
  border-bottom: ${getThemedBorderWidth(100)} solid
    ${getThemedColor('neutral', 300)};

  &:last-of-type {
    border-bottom: none;
  }
`
export const switchContainerStyles = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`
export const switchContentStyles = css`
  display: flex;
  flex-direction: column;
`
export const layerNameStyles = (disabled?: LayerItemProps['disabled']) => css`
  font-size: ${getThemedFontSize(400)};
  font-weight: 400;
  line-height: ${getThemedLineHeight(600)};
  text-align: left;
  color: ${getThemedColor('neutral', disabled ? 500 : 800)};
`
export const layerCaptionStyles = (
  disabled?: LayerItemProps['disabled'],
) => css`
  font-size: ${getThemedFontSize(300)};
  font-weight: 400;
  line-height: ${getThemedLineHeight(500)};
  text-align: left;
  color: ${getThemedColor('neutral', disabled ? 500 : 700)};
`
