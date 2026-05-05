import { css } from '@emotion/react'
import {
  getThemedColor,
  getThemedBorderWidth,
  getThemedFontSize,
  getThemedLineHeight,
  getThemedRadius,
  getThemedSpacing,
} from '../../../../lib/theme'

export const scaleBarContainerStyles = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: ${getThemedSpacing(400)};
`

export const scaleBarGradientBarStyles = (gradient: string) => css`
  height: ${getThemedSpacing(500)};
  width: 100%;
  margin-bottom: ${getThemedSpacing(200)};
  border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 300)};
  border-radius: ${getThemedRadius(300)};
  ${gradient ? `background: ${gradient};` : ''}
`

export const scaleBarBarStyles = css`
  height: ${getThemedSpacing(500)};
  width: 100%;
  margin-bottom: ${getThemedSpacing(200)};
  border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 300)};
  border-radius: ${getThemedRadius(300)};
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
  font-size: ${getThemedFontSize(200)};
  line-height: ${getThemedLineHeight(400)};
  font-weight: 400;
  color: ${getThemedColor('neutral', 800)};
  text-align: center;
`

export const scaleBarSubLabelsStyles = css`
  font-size: ${getThemedFontSize(200)};
  line-height: ${getThemedLineHeight(400)};
  font-weight: 400;
  color: ${getThemedColor('neutral', 700)};
  text-align: center;
`
