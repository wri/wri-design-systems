import { css } from '@emotion/react'
import {
  getThemedBorderWidth,
  getThemedColor,
  getThemedFontSize,
  getThemedLineHeight,
  getThemedRadius,
  getThemedSpacing,
} from '../../../../lib/theme'
import { fieldFocusVisibleStyles } from '../../Inputs/FieldWrapper/styled'

export const sliderRootStyles = css`
  height: fit-content;
`

export const sliderMarkLabelsRowStyles = css`
  position: relative;
  height: ${getThemedLineHeight(400)};
`

export const sliderMarkLabelStyles = css`
  position: absolute;
  top: 0;
  font-size: ${getThemedFontSize(200)};
  line-height: ${getThemedLineHeight(400)};
  color: ${getThemedColor('neutral', 800)};
  white-space: nowrap;
`

export const sliderThumbStyles = css`
  height: ${getThemedSpacing(500)};
  width: ${getThemedSpacing(500)};
  background-color: ${getThemedColor('primary', 500)};
  border: ${getThemedBorderWidth(200)} solid ${getThemedColor('primary', 700)};
  box-shadow: 0 0.0625rem 0.125rem 0 #0000000d;
  cursor: pointer;
  z-index: 1;

  &:hover,
  &[data-hover] {
    z-index: 2;
    outline: ${getThemedSpacing(100)} solid
      color-mix(in srgb, ${getThemedColor('primary', 500)} 20%, transparent);

    .ds-slider-value-preview {
      display: flex;
    }
  }

  &[data-dragging] {
    z-index: 2;
    outline: ${getThemedSpacing(100)} solid
      color-mix(in srgb, ${getThemedColor('primary', 500)} 40%, transparent);

    div {
      display: flex;
    }
  }

  &:focus-visible,
  &[data-focus-visible] {
    z-index: 2;
    ${fieldFocusVisibleStyles}

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
  height: ${getThemedSpacing(700)};
  background-color: ${getThemedColor('neutral', 100)};
  border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 300)};
  border-radius: ${getThemedRadius(500)};
  padding: 0 ${getThemedSpacing(200)};
  display: none;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: calc(100% + ${getThemedSpacing(200)});
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  pointer-events: none;
  white-space: nowrap;
`

export const sliderTrackStyles = css`
  background-color: ${getThemedColor('neutral', 300)};
  border: none;
  box-shadow: none;
`

export const sliderRangeStyles = (isCentred?: boolean) => css`
  background-color: ${getThemedColor('primary', 500)};
  border: ${getThemedBorderWidth(100)} solid ${getThemedColor('primary', 700)};
  border-radius: ${isCentred ? '0' : getThemedRadius(500)};

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
    --translate-y: -24% !important;

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
