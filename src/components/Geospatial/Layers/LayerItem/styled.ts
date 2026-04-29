import { css } from '@emotion/react'
import { getThemedColor } from '../../../../lib/theme'
import { LayerItemProps } from './types'

export const layerItemContainerStyles = css`
  width: 100%;
  padding: 1rem 0;
  border-bottom: 1px solid ${getThemedColor('neutral', 300)};

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
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  text-align: left;
  color: ${getThemedColor('neutral', disabled ? 500 : 800)};
`
export const layerCaptionStyles = (
  disabled?: LayerItemProps['disabled'],
) => css`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
  text-align: left;
  color: ${getThemedColor('neutral', disabled ? 500 : 700)};
`
