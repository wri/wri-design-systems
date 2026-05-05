import { css } from '@emotion/react'
import { getThemedColor, getThemedBorderWidth, getThemedFontSize, getThemedLineHeight, getThemedRadius, getThemedSpacing } from '../../../../lib/theme'
import { QualitativeAttributeProps } from './types'

export const rasterIndicatorStyles = (
  color: QualitativeAttributeProps['color'],
) => css`
  width: ${getThemedSpacing(500)};
  height: ${getThemedSpacing(500)};
  border-radius: 50%;
  background-color: ${color};
  border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 400)};
`

export const lineIndicatorStyles = (
  color: QualitativeAttributeProps['color'],
) => css`
  width: ${getThemedSpacing(500)};
  height: ${getThemedSpacing(200)};
  border-radius: ${getThemedRadius(200)};
  background-color: ${color};
  border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 400)};
  margin-top: 0.375rem;
`

export const pointIndicatorStyles = (
  color: QualitativeAttributeProps['color'],
) => css`
  width: ${getThemedSpacing(500)};
  height: ${getThemedSpacing(500)};
  border-radius: 50%;
  background-color: ${color};
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 0.625rem;
    height: 0.625rem;
  }
`

export const qualitativeAttributeContainerStyles = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: ${getThemedSpacing(200)};
  margin-bottom: ${getThemedSpacing(400)};
`

export const qualitativeAttributeLabelContainerStyles = css`
  display: flex;
  gap: ${getThemedSpacing(200)};
`

export const qualitativeAttributeLabelStyles = css`
  font-size: ${getThemedFontSize(300)};
  line-height: ${getThemedLineHeight(500)};
  font-weight: 400;
  color: ${getThemedColor('neutral', 800)};
`

export const qualitativeAttributeCaptionStyles = css`
  font-size: ${getThemedFontSize(200)};
  line-height: ${getThemedLineHeight(400)};
  font-weight: 400;
  color: ${getThemedColor('neutral', 700)};
`

export const qualitativeAttributeActionContainerStyles = css`
  button {
    height: 1.5625rem;
    font-size: ${getThemedFontSize(200)};
    line-height: ${getThemedLineHeight(400)};
    font-weight: 400;
    color: ${getThemedColor('neutral', 600)};
    padding: 0 0.625rem;
  }
`
