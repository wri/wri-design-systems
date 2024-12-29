import styled from '@emotion/styled'
import { getThemedColor } from '../../../lib/theme'

export const RasterIndicator = styled.div<{ color: string }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  border: 1px solid ${getThemedColor('neutral', 400)};
`

export const LineIndicator = styled.div<{ color: string }>`
  width: 20px;
  height: 8px;
  border-radius: 2px;
  background-color: ${({ color }) => color};
  border: 1px solid ${getThemedColor('neutral', 400)};
`

export const PointIndicator = styled.div<{ color: string }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 10px;
    height: 10px;
  }
`

export const QualitativeLegendContainer = styled.div`
  min-height: 36px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 16px;
`

export const QualitativeLegendLabelContainer = styled.div`
  display: flex;
  gap: 8px;
`

export const QualitativeLegendLabel = styled.p`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: ${getThemedColor('neutral', 800)};
`

export const QualitativeLegendCaption = styled.p`
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  color: ${getThemedColor('neutral', 700)};
`

export const QualitativeLegendActionContainer = styled.div`
  button {
    height: 25px;
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    color: ${getThemedColor('neutral', 600)};
    padding: 0 10px;
  }
`
