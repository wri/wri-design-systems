import { css } from '@emotion/react'
import { getThemedColor } from '../../../../lib/theme'

export const scaleBarContainerStyles = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`

export const scaleBarGradientBarStyles = (gradient: string) => css`
  height: 20px;
  width: 100%;
  margin-bottom: 8px;
  border: 1px solid ${getThemedColor('neutral', 300)};
  border-radius: 4px;
  ${gradient ? `background: ${gradient};` : ''}
`

export const scaleBarBarStyles = css`
  height: 20px;
  width: 100%;
  margin-bottom: 8px;
  border: 1px solid ${getThemedColor('neutral', 300)};
  border-radius: 4px;
  display: flex;
  align-items: center;

  div:first-of-type {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }

  div:last-of-type {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
`

export const scaleBarLabelContainerStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export const scaleBarValueStyles = css`
  width: 100%;
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  color: ${getThemedColor('neutral', 800)};
  text-align: center;
`

export const scaleBarSubLabelsStyles = css`
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  color: ${getThemedColor('neutral', 600)};
  text-align: center;
`
