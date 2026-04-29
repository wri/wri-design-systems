import { css } from '@emotion/react'
import { getThemedColor } from '../../../../lib/theme'

export const scaleBarContainerStyles = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`

export const scaleBarGradientBarStyles = (gradient: string) => css`
  height: 1.25rem;
  width: 100%;
  margin-bottom: 0.5rem;
  border: 1px solid ${getThemedColor('neutral', 300)};
  border-radius: 0.25rem;
  ${gradient ? `background: ${gradient};` : ''}
`

export const scaleBarBarStyles = css`
  height: 1.25rem;
  width: 100%;
  margin-bottom: 0.5rem;
  border: 1px solid ${getThemedColor('neutral', 300)};
  border-radius: 0.25rem;
  display: flex;
  align-items: center;

  div:first-of-type {
    border-top-left-radius: 0.1875rem;
    border-bottom-left-radius: 0.1875rem;
  }

  div:last-of-type {
    border-top-right-radius: 0.1875rem;
    border-bottom-right-radius: 0.1875rem;
  }
`

export const scaleBarLabelContainerStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export const scaleBarValueStyles = css`
  width: 100%;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 400;
  color: ${getThemedColor('neutral', 800)};
  text-align: center;
`

export const scaleBarSubLabelsStyles = css`
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 400;
  color: ${getThemedColor('neutral', 700)};
  text-align: center;
`
