import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'

export const mapPopUpContainerStyles = css`
  height: auto;
  max-height: 32rem;
  width: 100%;
  max-width: 20rem;
  position: absolute;
  z-index: 1000;
  background-color: ${getThemedColor('neutral', 100)};
  border: 1px solid ${getThemedColor('neutral', 300)};
  border-radius: 0.25rem;
  box-shadow:
    0 0.25rem 0.375rem -0.25rem #0000001a,
    0 0.625rem 0.9375rem -0.1875rem #0000001a;
  outline: 0;
`

export const mapPopUpHeaderContainerStyles = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.5rem 0.75rem;
  border-bottom: 1px solid ${getThemedColor('neutral', 300)};
  min-height: 4rem;

  .ds-map-pop-up-close-button {
    margin-top: 0.25rem;
  }
`

export const mapPopUpContentContainerStyles = css`
  height: 100%;
  max-height: 25rem;
  overflow-y: auto;

  &:focus-visible {
    outline-color: ${getThemedColor('primary', 700)};
  }
`

export const mapPopUpFooterContainerStyles = css`
  padding: 0.5rem 0.75rem;
  border-top: 1px solid ${getThemedColor('neutral', 300)};
  min-height: 2.75rem;
`

export const mapPopUpConnectorStyles = (
  connectorHeight: number,
  connectorWidth: number,
  arrowX: number | undefined | null,
  arrowY: number | undefined | null,
  staticSide: string,
  offset: number,
) => css`
  height: ${connectorHeight}px;
  width: ${connectorWidth}px;
  position: absolute;
  left: ${arrowX != null ? `${arrowX}px` : ''};
  top: ${arrowY != null ? `${arrowY}px` : ''};
  ${`${staticSide}: -${offset - 1}px`};
  background-color: ${getThemedColor('neutral', 100)};
  border: 1px solid ${getThemedColor('neutral', 300)};
`
