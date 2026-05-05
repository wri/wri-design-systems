import { css } from '@emotion/react'
import {
  getThemedColor,
  getThemedBorderWidth,
  getThemedFontSize,
  getThemedLineHeight,
  getThemedRadius,
  getThemedSpacing,
} from '../../../lib/theme'

export const baseMapContainerStyles = (
  maxHeight?: string,
  maxWidth?: string,
) => css`
  height: ${maxHeight};
  width: ${maxWidth};
  border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 300)};
  border-bottom: none;
  border-radius: ${getThemedRadius(300)};
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  background-color: ${getThemedColor('neutral', 100)};

  .ds-base-map-scroll-content {
    height: 100%;
    overflow-y: scroll;
  }
`

export const baseMapHeaderContainerStyles = css`
  padding: ${getThemedSpacing(400)} ${getThemedSpacing(300)};
  border-bottom: ${getThemedBorderWidth(100)} solid
    ${getThemedColor('neutral', 300)};

  .ds-base-map-header-title {
    font-size: ${getThemedFontSize(500)};
    line-height: ${getThemedLineHeight(700)};
    font-weight: 700;
    color: ${getThemedColor('neutral', 900)};
    text-align: left;
    margin-bottom: ${getThemedSpacing(100)};

    &:focus-visible {
      outline: none;
    }
  }

  .ds-base-map-header-caption {
    font-size: ${getThemedFontSize(300)};
    line-height: ${getThemedLineHeight(500)};
    color: ${getThemedColor('neutral', 700)};
    text-align: left;
  }
`

export const baseMapContentContainerStyles = css``

export const baseMapAdditionalSettingsContainerStyles = css`
  display: flex;
  flex-direction: column;
  gap: ${getThemedSpacing(300)};
  padding: ${getThemedSpacing(300)};
  border-bottom: ${getThemedBorderWidth(100)} solid
    ${getThemedColor('neutral', 300)};
`

export const baseMapAdditionalSettingsChildrenContainerStyles = css`
  padding-top: ${getThemedSpacing(300)};
  padding-left: ${getThemedSpacing(200)};
`

export const baseMapOptionsContainerStyles = css``

export const baseMapOptionsItemContainerStyles = (active?: boolean) => css`
  display: flex;
  gap: ${getThemedSpacing(300)};
  padding: ${getThemedSpacing(300)} ${getThemedSpacing(200)};
  border-bottom: ${getThemedBorderWidth(100)} solid
    ${getThemedColor('neutral', 300)};
  cursor: pointer;

  ${active &&
  css`
    background-color: ${getThemedColor('primary', 100)};
  `}

  &:hover {
    background-color: ${getThemedColor('primary', 100)};
  }

  &:active {
    background-color: ${getThemedColor('primary', 200)};
  }

  &:focus-visible {
    outline-color: ${getThemedColor('primary', 700)};
    background-color: ${getThemedColor('primary', 100)};
    width: 99.8%;
  }
`

export const baseMapOptionsItemImageStyles = (imageUrl: string) => css`
  height: ${getThemedSpacing(800)};
  width: ${getThemedSpacing(800)};
  border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 300)};
  border-radius: ${getThemedRadius(300)};
  background-image: url(${imageUrl});
  background-size: cover;
  background-position: center;
`

export const baseMapOptionsItemDataContainerStyles = css`
  width: 100%;
  max-width: calc(100% - 2.75rem);

  .ds-base-map-title-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 0.375rem;
  }

  .ds-base-map-title {
    font-size: ${getThemedFontSize(300)};
    line-height: ${getThemedLineHeight(500)};
    font-weight: 700;
    color: ${getThemedColor('neutral', 900)};
    text-align: left;
    margin-bottom: ${getThemedSpacing(50)};
  }

  .ds-base-map-caption {
    font-size: ${getThemedFontSize(200)};
    line-height: ${getThemedLineHeight(400)};
    font-weight: 400;
    color: ${getThemedColor('neutral', 700)};
    text-align: left;
  }

  .ds-base-map-children {
    margin-top: 0.625rem;
  }
`
