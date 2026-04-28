import { css } from '@emotion/react'
import { getThemedColor } from '../../../../lib/theme'

export const layerParametersItemStyles = css`
  margin-bottom: 1rem;
  border: 1px solid ${getThemedColor('neutral', 300)};
  border-radius: 0.25rem;
  box-shadow: 0 1px 0.125rem 0 #0000000d;
  background-color: ${getThemedColor('neutral', 100)};
`

export const layerParametersTriggerStyles = css`
  padding: 0.375rem 0.5rem;
  align-items: center;
  background-color: ${getThemedColor('neutral', 100)};
  cursor: pointer;

  &[aria-expanded='true'] {
    border-bottom: 1px solid ${getThemedColor('neutral', 300)};
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  svg {
    height: 0.625rem;
    width: 0.625rem;
  }

  &:focus-visible {
    outline-color: ${getThemedColor('primary', 700)};
    box-shadow:
      0 0 0 0.125rem ${getThemedColor('neutral', 100)},
      rgba(0, 0, 0, 0.05) 0 0.125rem 0.125rem 0.25rem;
  }
`

export const layerParametersLabelStyles = css`
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1rem;
  color: ${getThemedColor('neutral', 800)};
`

export const layerParametersItemContentStyles = css`
  padding: 0.75rem 0.5rem;
  display: flex;
  flex-direction: column;

  .ds-layer-parameters-item-child {
    padding-bottom: 1rem;
    border-bottom: 1px solid ${getThemedColor('neutral', 300)};
    margin-bottom: 1rem;

    &:last-child {
      padding-bottom: 0;
      border-bottom: none;
      margin-bottom: 0;
    }
  }
`
