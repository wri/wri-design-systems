import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'

export const mapPopUpContainerStyles = css`
  height: auto;
  max-height: 512px;
  width: 100%;
  max-width: 320px;
  position: absolute;
  z-index: 1000;
  background-color: ${getThemedColor('neutral', 100)};
  border: 1px solid ${getThemedColor('neutral', 300)};
  border-radius: 4px;
  box-shadow:
    0px 4px 6px -4px #0000001a,
    0px 10px 15px -3px #0000001a;
  outline: 0;
`

export const mapPopUpHeaderContainerStyles = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 12px;
  border-bottom: 1px solid ${getThemedColor('neutral', 300)};
  min-height: 64px;

  .ds-map-pop-up-close-button {
    margin-top: 4px;
  }
`

export const mapPopUpContentContainerStyles = css`
  height: 100%;
  max-height: 400px;
  overflow-y: auto;

  &:focus-visible {
    outline-color: ${getThemedColor('primary', 700)};
  }
`

export const mapPopUpFooterContainerStyles = css`
  padding: 8px 12px;
  border-top: 1px solid ${getThemedColor('neutral', 300)};
  min-height: 44px;
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
