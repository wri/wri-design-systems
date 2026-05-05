import { css } from '@emotion/react'
import { getThemedColor, getThemedBorderWidth, getThemedRadius, getThemedSpacing } from '../../../lib/theme'

export const mapPopUpContainerStyles = css`
  height: auto;
  max-height: 32rem;
  width: 100%;
  max-width: 20rem;
  position: absolute;
  z-index: 1000;
  background-color: ${getThemedColor('neutral', 100)};
  border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 300)};
  border-radius: ${getThemedRadius(300)};
  box-shadow:
    0 0.25rem 0.375rem -0.25rem #0000001a,
    0 0.625rem 0.9375rem -0.1875rem #0000001a;
  outline: 0;
`

export const mapPopUpHeaderContainerStyles = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${getThemedSpacing(300)};
  padding: ${getThemedSpacing(200)} ${getThemedSpacing(300)};
  border-bottom: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 300)};
  min-height: ${getThemedSpacing(1600)};

  .ds-map-pop-up-close-button {
    margin-top: ${getThemedSpacing(100)};
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
  padding: ${getThemedSpacing(200)} ${getThemedSpacing(300)};
  border-top: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 300)};
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
  border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 300)};
`
