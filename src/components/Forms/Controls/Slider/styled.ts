import { css } from '@emotion/react'
import { getThemedColor } from '../../../../lib/theme'

export const sliderRootStyles = css`
  height: 3.75rem;
  padding: 2.5rem 0.75rem;
`

export const sliderThumbStyles = css`
  height: 1.25rem;
  width: 1.25rem;
  background-color: ${getThemedColor('primary', 500)};
  border: 0.125rem solid ${getThemedColor('primary', 700)};
  box-shadow: 0 0.0625rem 0.125rem 0 #0000000d;
  cursor: pointer;

  &:hover,
  &[data-hover] {
    outline: 0.25rem solid
      color-mix(in srgb, ${getThemedColor('primary', 500)} 20%, transparent);

    .ds-slider-value-preview {
      display: flex;
    }
  }

  &[data-dragging] {
    outline: 0.25rem solid
      color-mix(in srgb, ${getThemedColor('primary', 500)} 40%, transparent);

    div {
      display: flex;
    }
  }

  &:focus-visible,
  &[data-focus-visible] {
    outline: 0.125rem solid ${getThemedColor('primary', 700)};
    outline-offset: 0.125rem;
    box-shadow:
      0 0 0 0.125rem ${getThemedColor('neutral', 100)},
      rgba(0, 0, 0, 0.05) 0 0.125rem 0.125rem 0.25rem;

    .ds-slider-value-preview {
      display: flex;
    }
  }

  &[data-disabled] {
    background-color: ${getThemedColor('neutral', 400)};
    border: none;
    box-shadow: none;
    outline: none;
    cursor: not-allowed;
  }
`

export const sliderThumbLabelStyles = css`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: ${getThemedColor('neutral', 800)};
  height: 1.75rem;
  background-color: ${getThemedColor('neutral', 100)};
  border: 0.0625rem solid ${getThemedColor('neutral', 300)};
  border-radius: 0.5rem;
  padding: 0 0.5rem;
  display: none;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -1.875rem;
`

export const sliderTrackStyles = css`
  background-color: ${getThemedColor('neutral', 300)};
  border: none;
  box-shadow: none;
`

export const sliderRangeStyles = css`
  background-color: ${getThemedColor('primary', 500)};
  border: 0.0625rem solid ${getThemedColor('primary', 700)};
  border-radius: 0.5rem;

  &:disabled,
  &[disabled],
  &[data-disabled],
  &[aria-disabled='true'] {
    --chakra-colors-border-emphasized: ${getThemedColor('neutral', 400)};
    background-color: ${getThemedColor('neutral', 400)};
    border: none;
  }
`

export const sliderMarkerStyles = (
  isCentred?: boolean,
  isMiddleMark?: boolean,
) => css`
  font-size: 0.75rem;
  line-height: 1rem;
  color: ${getThemedColor('neutral', 800)};

  p {
    position: relative;
    top: -2.5rem;
  }

  &[data-state='under-value'] {
    .chakra-slider__markerIndicator {
      background-color: ${isCentred
        ? getThemedColor('neutral', 500)
        : getThemedColor('neutral', 200)};
    }

    &[data-disabled] {
      .chakra-slider__markerIndicator {
        background-color: ${isCentred
          ? getThemedColor('neutral', 400)
          : getThemedColor('neutral', 500)};
      }
    }
  }

  &[data-state='over-value'] {
    .chakra-slider__markerIndicator {
      background-color: ${getThemedColor('neutral', 500)};
    }

    &[data-disabled] {
      .chakra-slider__markerIndicator {
        background-color: ${getThemedColor('neutral', 400)};
      }
    }
  }

  ${isMiddleMark
    ? `
    --ty: -0.375rem !important;

    .chakra-slider__markerIndicator {
      height: 1rem;
      width: 0.25rem;
      background-color: ${getThemedColor('primary', 700)} !important;
    }

    &[data-disabled] {
      .chakra-slider__markerIndicator {
        background-color: ${getThemedColor('neutral', 400)} !important;
      }
    }
  `
    : ''};
`
