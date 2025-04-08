import { css } from '@emotion/react'
import { getThemedColor } from '../../../../lib/theme'

export const layerParametersItemStyles = css`
  margin-bottom: 16px;
  border: 1px solid ${getThemedColor('neutral', 300)};
  border-radius: 4px;
  box-shadow: 0px 1px 2px 0px #0000000d;
`

export const layerParametersTriggerStyles = css`
  padding: 6px 8px;
  align-items: center;
  background-color: ${getThemedColor('neutral', 100)};
  cursor: pointer;

  &[aria-expanded='true'] {
    border-bottom: 1px solid ${getThemedColor('neutral', 300)};
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
  }

  svg {
    height: 10px;
    width: 10px;
  }
`

export const layerParametersLabelStyles = css`
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  color: ${getThemedColor('neutral', 700)};
`

export const layerParametersItemContentStyles = css`
  padding: 12px 8px;
  display: flex;
  flex-direction: column;

  .layer-parameters-item-child {
    padding-bottom: 16px;
    border-bottom: 1px solid ${getThemedColor('neutral', 300)};
    margin-bottom: 16px;

    &:last-child {
      padding-bottom: 0px;
      border-bottom: none;
      margin-bottom: 0px;
    }
  }
`
