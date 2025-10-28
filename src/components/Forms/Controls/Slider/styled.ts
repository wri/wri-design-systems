import { css } from '@emotion/react'
import { getThemedColor } from '../../../../lib/theme'

export const sliderRootStyles = css`
  height: 60px;
  padding: 40px 12px;
`

export const sliderThumbStyles = css`
  height: 20px;
  width: 20px;
  background-color: ${getThemedColor('primary', 500)};
  border: 2px solid ${getThemedColor('primary', 700)};
  box-shadow: 0px 1px 2px 0px #0000000d;
  cursor: pointer;

  &:hover,
  &[data-hover] {
    outline: 4px solid
      color-mix(in srgb, ${getThemedColor('primary', 500)} 20%, transparent);

    .ds-slider-value-preview {
      display: flex;
    }
  }

  &[data-dragging] {
    outline: 4px solid
      color-mix(in srgb, ${getThemedColor('primary', 500)} 40%, transparent);

    div {
      display: flex;
    }
  }

  &:focus-visible,
  &[data-focus-visible] {
    outline: 2px solid ${getThemedColor('primary', 700)};
    outline-offset: 2px;
    box-shadow:
      0 0 0 2px ${getThemedColor('neutral', 100)},
      rgba(0, 0, 0, 0.05) 0px 2px 2px 4px;

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
  font-size: 14px;
  line-height: 20px;
  color: ${getThemedColor('neutral', 800)};
  height: 28px;
  background-color: ${getThemedColor('neutral', 100)};
  border: 1px solid ${getThemedColor('neutral', 300)};
  border-radius: 8px;
  padding: 0 8px;
  display: none;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -30px;
`

export const sliderTrackStyles = css`
  background-color: ${getThemedColor('neutral', 300)};
  border: none;
  box-shadow: none;
`

export const sliderRangeStyles = css`
  background-color: ${getThemedColor('primary', 500)};
  border: 1px solid ${getThemedColor('primary', 700)};
  border-radius: 8px;

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
  font-size: 12px;
  line-height: 16px;
  color: ${getThemedColor('neutral', 800)};

  p {
    position: relative;
    top: -40px;
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
    --ty: -6px !important;

    .chakra-slider__markerIndicator {
      height: 16px;
      width: 4px;
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
