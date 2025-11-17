import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'

export const baseMapContainerStyles = (
  maxHeight?: string,
  maxWidth?: string,
) => css`
  height: ${maxHeight};
  width: ${maxWidth};
  border: 1px solid ${getThemedColor('neutral', 300)};
  border-bottom: none;
  border-radius: 4px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  background-color: ${getThemedColor('neutral', 100)};

  .ds-base-map-scroll-content {
    height: 100%;
    overflow-y: scroll;
  }
`

export const baseMapHeaderContainerStyles = css`
  padding: 16px 12px;
  border-bottom: 1px solid ${getThemedColor('neutral', 300)};

  .ds-base-map-header-title {
    font-size: 18px;
    line-height: 28px;
    font-weight: 700;
    color: ${getThemedColor('neutral', 900)};
    text-align: left;
    margin-bottom: 4px;

    &:focus-visible {
      outline: none;
    }
  }

  .ds-base-map-header-caption {
    font-size: 14px;
    line-height: 20x;
    color: ${getThemedColor('neutral', 700)};
    text-align: left;
  }
`

export const baseMapContentContainerStyles = css``

export const baseMapAdditionalSettingsContainerStyles = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
  border-bottom: 1px solid ${getThemedColor('neutral', 300)};
`

export const baseMapAdditionalSettingsChildrenContainerStyles = css`
  padding-top: 12px;
  padding-left: 8px;
`

export const baseMapOptionsContainerStyles = css``

export const baseMapOptionsItemContainerStyles = (active?: boolean) => css`
  display: flex;
  gap: 12px;
  padding: 12px 8px;
  border-bottom: 1px solid ${getThemedColor('neutral', 300)};
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
  height: 32px;
  width: 32px;
  border: 1px solid ${getThemedColor('neutral', 300)};
  border-radius: 4px;
  background-image: url(${imageUrl});
  background-size: cover;
  background-position: center;
`

export const baseMapOptionsItemDataContainerStyles = css`
  width: 100%;
  max-width: calc(100% - 44px);

  .ds-base-map-title-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 6px;
  }

  .ds-base-map-title {
    font-size: 14px;
    line-height: 20px;
    font-weight: 700;
    color: ${getThemedColor('neutral', 900)};
    text-align: left;
    margin-bottom: 2px;
  }

  .ds-base-map-caption {
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    color: ${getThemedColor('neutral', 700)};
    text-align: left;
  }

  .ds-base-map-children {
    margin-top: 10px;
  }
`
