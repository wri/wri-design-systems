import styled from '@emotion/styled'
import { Slider } from '@chakra-ui/react'
import { getThemedColor } from '../../lib/theme'

export const ChakraSliderRoot = styled(Slider.Root)`
  height: 60px;
  width: 100%;
  padding: 40px 12px;
`

export const StyledSliderThumb = styled(Slider.Thumb)`
  height: 20px;
  width: 20px;
  background-color: ${getThemedColor('primary', 500)};
  border: 2px solid ${getThemedColor('primary', 700)};
  box-shadow: 0px 1px 2px 0px #0000000d;

  &:hover,
  &[data-hover] {
    outline: 4px solid
      color-mix(in srgb, ${getThemedColor('primary', 500)} 20%, transparent);
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
    box-shadow: none;
    outline: 2px solid ${getThemedColor('primary', 700)};
    outline-offset: 2px;
  }

  &[data-disabled] {
    background-color: ${getThemedColor('neutral', 400)};
    border: none;
    box-shadow: none;
    outline: none;
    cursor: not-allowed;
  }
`

export const StyledSliderThumbLabel = styled.div`
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

export const StyledSliderTrack = styled(Slider.Track)`
  background-color: ${getThemedColor('neutral', 300)};
  border: none;
  box-shadow: none;
`

export const StyledSliderRange = styled(Slider.Range)`
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

export const StyledSliderMarker = styled(Slider.Marker)<{
  isCentred?: boolean
  isMiddleMark?: boolean
}>`
  font-size: 12px;
  line-height: 16px;
  color: ${getThemedColor('neutral', 800)};

  p {
    position: relative;
    top: -40px;
  }

  &[data-state='under-value'] {
    .chakra-slider__markerIndicator {
      background-color: ${({ isCentred }) =>
        isCentred
          ? getThemedColor('neutral', 500)
          : getThemedColor('neutral', 200)};
    }

    &[data-disabled] {
      .chakra-slider__markerIndicator {
        background-color: ${({ isCentred }) =>
          isCentred
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

  ${({ isMiddleMark }) =>
    isMiddleMark
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
