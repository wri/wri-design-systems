import { css } from '@emotion/react'
import { getThemedColor } from '../../../../lib/theme'
import { QualitativeAttributeProps } from './types'

export const rasterIndicatorStyles = (
  color: QualitativeAttributeProps['color'],
) => css`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${color};
  border: 1px solid ${getThemedColor('neutral', 400)};
`

export const lineIndicatorStyles = (
  color: QualitativeAttributeProps['color'],
) => css`
  width: 20px;
  height: 8px;
  border-radius: 2px;
  background-color: ${color};
  border: 1px solid ${getThemedColor('neutral', 400)};
`

export const pointIndicatorStyles = (
  color: QualitativeAttributeProps['color'],
) => css`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${color};
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 10px;
    height: 10px;
  }
`

export const qualitativeAttributeContainerStyles = css`
  min-height: 36px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 16px;
`

export const qualitativeAttributeLabelContainerStyles = css`
  display: flex;
  gap: 8px;
`

export const qualitativeAttributeLabelStyles = css`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: ${getThemedColor('neutral', 800)};
`

export const qualitativeAttributeCaptionStyles = css`
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  color: ${getThemedColor('neutral', 700)};
`

export const qualitativeAttributeActionContainerStyles = css`
  button {
    height: 25px;
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    color: ${getThemedColor('neutral', 600)};
    padding: 0 10px;
  }
`
