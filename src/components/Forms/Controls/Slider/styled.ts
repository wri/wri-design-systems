import { css } from '@emotion/react'
import {
  getThemedBorderWidth,
  getThemedColor,
  getThemedFontSize,
  getThemedLineHeight,
  getThemedRadius,
  getThemedSpacing,
} from '../../../../lib/theme'

export const sliderRootStyles = css`
  height: 3.75rem;
  padding: ${getThemedSpacing(1000)} ${getThemedSpacing(300)};
`

export const sliderThumbStyles = css`
  height: ${getThemedSpacing(500)};
  width: ${getThemedSpacing(500)};
  background-color: ${getThemedColor('primary', 500)};
  border: ${getThemedBorderWidth(200)} solid ${getThemedColor('primary', 700)};
  box-shadow: 0 0.0625rem 0.125rem 0 #0000000d;
  cursor: pointer;

  &:hover,
  &[data-hover] {
    outline: ${getThemedSpacing(100)} solid
      color-mix(in srgb, ${getThemedColor('primary', 500)} 20%, transparent);

    .ds-slider-value-preview {
      display: flex;
    }
  }

  &[data-dragging] {
    outline: ${getThemedSpacing(100)} solid
      color-mix(in srgb, ${getThemedColor('primary', 500)} 40%, transparent);

    div {
      display: flex;
    }
  }

  &:focus-visible,
  &[data-focus-visible] {
    outline: ${getThemedBorderWidth(200)} solid
      ${getThemedColor('primary', 700)};
    outline-offset: ${getThemedSpacing(50)};
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
  font-size: ${getThemedFontSize(300)};
  line-height: ${getThemedLineHeight(500)};
  color: ${getThemedColor('neutral', 800)};
  height: 1.75rem;
  background-color: ${getThemedColor('neutral', 100)};
  border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 300)};
  border-radius: ${getThemedRadius(500)};
  padding: 0 ${getThemedSpacing(200)};
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
  border: ${getThemedBorderWidth(100)} solid ${getThemedColor('primary', 700)};
  border-radius: ${getThemedRadius(500)};

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
  font-size: ${getThemedFontSize(200)};
  line-height: ${getThemedLineHeight(400)};
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
