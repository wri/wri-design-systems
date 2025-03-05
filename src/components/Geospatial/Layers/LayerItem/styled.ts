import { css } from '@emotion/react'
import { getThemedColor } from '../../../../lib/theme'
import { LayerItemProps } from './types'

export const layerItemContainerStyles = css`
  width: 268px;
  padding: 16px 0;
  border-bottom: 1px solid ${getThemedColor('neutral', 300)};
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
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: ${getThemedColor('neutral', disabled ? 500 : 800)};
`
export const layerCaptionStyles = (
  disabled?: LayerItemProps['disabled'],
) => css`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: ${getThemedColor('neutral', disabled ? 500 : 600)};
`
