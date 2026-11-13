import { css } from '@emotion/react'
import {
  getThemedColor,
  getThemedBorderWidth,
  getThemedRadius,
  getThemedSpacing,
} from '../../../lib/theme'
import { MapPopUpProps } from './types'

export type MapPopUpStyleVariant = NonNullable<MapPopUpProps['variant']>

/**
 * `default` keeps the light surface tokens, `dark` switches the surface to
 * neutral/800 with neutral/100 text and a neutral/900 connector (arrow).
 */
const getSurfaceColor = (variant: MapPopUpStyleVariant) =>
  variant === 'dark'
    ? getThemedColor('neutral', 800)
    : getThemedColor('neutral', 100)

const getBorderColor = (variant: MapPopUpStyleVariant) =>
  variant === 'dark'
    ? getThemedColor('neutral', 900)
    : getThemedColor('neutral', 300)

export const mapPopUpContainerStyles = (variant: MapPopUpStyleVariant) => css`
  height: auto;
  max-height: 32rem;
  width: 100%;
  max-width: 20rem;
  position: absolute;
  z-index: 1000;
  background-color: ${getSurfaceColor(variant)};
  border: ${getThemedBorderWidth(100)} solid ${getBorderColor(variant)};
  border-radius: ${getThemedRadius(300)};
  box-shadow:
    0 0.25rem 0.375rem -0.25rem #0000001a,
    0 0.625rem 0.9375rem -0.1875rem #0000001a;
  outline: 0;

  ${variant === 'dark' &&
  css`
    color: ${getThemedColor('neutral', 100)};

    .ds-map-pop-up-close-button {
      background-color: ${getThemedColor('neutral', 300)};

      svg {
        path {
          fill: ${getThemedColor('neutral', 800)};
        }
      }

      &:hover {
        background-color: ${getThemedColor('neutral', 200)};
      }

      &:active {
        background-color: ${getThemedColor('neutral', 400)};
      }

      &:disabled {
        background-color: ${getThemedColor('neutral', 500)};

        svg {
          path {
            fill: ${getThemedColor('neutral', 700)};
          }
        }
      }
    }
  `}
`

export const mapPopUpHeaderContainerStyles = (
  variant: MapPopUpStyleVariant,
) => css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${getThemedSpacing(300)};
  padding: ${getThemedSpacing(200)} ${getThemedSpacing(300)};
  border-bottom: ${getThemedBorderWidth(100)} solid ${getBorderColor(variant)};
  min-height: ${getThemedSpacing(1000)};

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

export const mapPopUpFooterContainerStyles = (
  variant: MapPopUpStyleVariant,
) => css`
  padding: ${getThemedSpacing(200)} ${getThemedSpacing(300)};
  border-top: ${getThemedBorderWidth(100)} solid ${getBorderColor(variant)};
  min-height: 2.75rem;
`

export const mapPopUpConnectorStyles = (
  connectorHeight: number,
  connectorWidth: number,
  arrowX: number | undefined | null,
  arrowY: number | undefined | null,
  staticSide: string,
  offset: number,
  variant: MapPopUpStyleVariant,
) => css`
  height: ${connectorHeight}px;
  width: ${connectorWidth}px;
  position: absolute;
  left: ${arrowX != null ? `${arrowX}px` : ''};
  top: ${arrowY != null ? `${arrowY}px` : ''};
  ${`${staticSide}: -${offset - 1}px`};
  background-color: ${variant === 'dark'
    ? getThemedColor('neutral', 900)
    : getThemedColor('neutral', 100)};
  border: ${getThemedBorderWidth(100)} solid ${getBorderColor(variant)};
`
