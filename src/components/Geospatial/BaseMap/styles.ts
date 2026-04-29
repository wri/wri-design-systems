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
  border-radius: 0.25rem;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  background-color: ${getThemedColor('neutral', 100)};

  .ds-base-map-scroll-content {
    height: 100%;
    overflow-y: scroll;
  }
`

export const baseMapHeaderContainerStyles = css`
  padding: 1rem 0.75rem;
  border-bottom: 1px solid ${getThemedColor('neutral', 300)};

  .ds-base-map-header-title {
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 700;
    color: ${getThemedColor('neutral', 900)};
    text-align: left;
    margin-bottom: 0.25rem;

    &:focus-visible {
      outline: none;
    }
  }

  .ds-base-map-header-caption {
    font-size: 0.875rem;
    line-height: 20x;
    color: ${getThemedColor('neutral', 700)};
    text-align: left;
  }
`

export const baseMapContentContainerStyles = css``

export const baseMapAdditionalSettingsContainerStyles = css`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0.75rem;
  border-bottom: 1px solid ${getThemedColor('neutral', 300)};
`

export const baseMapAdditionalSettingsChildrenContainerStyles = css`
  padding-top: 0.75rem;
  padding-left: 0.5rem;
`

export const baseMapOptionsContainerStyles = css``

export const baseMapOptionsItemContainerStyles = (active?: boolean) => css`
  display: flex;
  gap: 0.75rem;
  padding: 0.75rem 0.5rem;
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
  height: 2rem;
  width: 2rem;
  border: 1px solid ${getThemedColor('neutral', 300)};
  border-radius: 0.25rem;
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
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 700;
    color: ${getThemedColor('neutral', 900)};
    text-align: left;
    margin-bottom: 0.125rem;
  }

  .ds-base-map-caption {
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 400;
    color: ${getThemedColor('neutral', 700)};
    text-align: left;
  }

  .ds-base-map-children {
    margin-top: 0.625rem;
  }
`
