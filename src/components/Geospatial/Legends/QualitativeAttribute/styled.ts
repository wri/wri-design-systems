import { css } from '@emotion/react'
import { getThemedColor } from '../../../../lib/theme'
import { QualitativeAttributeProps } from './types'

export const rasterIndicatorStyles = (
  color: QualitativeAttributeProps['color'],
) => css`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background-color: ${color};
  border: 1px solid ${getThemedColor('neutral', 400)};
`

export const lineIndicatorStyles = (
  color: QualitativeAttributeProps['color'],
) => css`
  width: 1.25rem;
  height: 0.5rem;
  border-radius: 0.125rem;
  background-color: ${color};
  border: 1px solid ${getThemedColor('neutral', 400)};
  margin-top: 0.375rem;
`

export const pointIndicatorStyles = (
  color: QualitativeAttributeProps['color'],
) => css`
  width: 1.25rem;
  height: 1.25rem;
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
  gap: 0.5rem;
  margin-bottom: 1rem;
`

export const qualitativeAttributeLabelContainerStyles = css`
  display: flex;
  gap: 0.5rem;
`

export const qualitativeAttributeLabelStyles = css`
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 400;
  color: ${getThemedColor('neutral', 800)};
`

export const qualitativeAttributeCaptionStyles = css`
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 400;
  color: ${getThemedColor('neutral', 700)};
`

export const qualitativeAttributeActionContainerStyles = css`
  button {
    height: 1.5625rem;
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 400;
    color: ${getThemedColor('neutral', 600)};
    padding: 0 0.625rem;
  }
`
