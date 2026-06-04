import { css } from '@emotion/react'
import {
  getThemedBorderWidth,
  getThemedColor,
  getThemedFontSize,
  getThemedLineHeight,
  getThemedRadius,
  getThemedSpacing,
} from '../../../lib/theme'

export const mobileSearchContainerStyles = css`
  width: 100%;
  min-height: calc(${getThemedSpacing(1200)} * 12);
  background-color: ${getThemedColor('neutral', 100)};
  display: flex;
  flex-direction: column;
`

export const mobileSearchHeaderStyles = css`
  background-color: ${getThemedColor('neutral', 200)};
  padding: ${getThemedSpacing(300)};
  display: flex;
  align-items: center;
  gap: ${getThemedSpacing(300)};
`

export const mobileSearchInputWrapperStyles = css`
  flex: 1;

  .ds-text-input-container {
    margin-bottom: 0;
  }
`

export const mobileSearchCancelButtonStyles = css`
  flex-shrink: 0;
  color: ${getThemedColor('neutral', 700)};
  font-size: ${getThemedFontSize(400)};
  font-style: normal;
  font-weight: 400;
`

export const mobileSearchResultsStyles = css`
  flex: 1;
  min-height: 0;
  padding: ${getThemedSpacing(400)};
  display: flex;
  flex-direction: column;
  gap: ${getThemedSpacing(300)};
`

export const mobileSearchSectionTitleStyles = css`
  color: ${getThemedColor('neutral', 700)};
  font-size: ${getThemedFontSize(400)};
  line-height: ${getThemedLineHeight(600)};
  font-weight: 700;
`

export const mobileSearchInlineMessageStyles = css`
  width: 100%;
`

export const mobileSearchListStyles = css`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: ${getThemedSpacing(200)};
`

export const mobileSearchListItemStyles = css`
  background-color: ${getThemedColor('neutral', 200)};
  border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 300)};
  border-radius: ${getThemedRadius(300)};
  padding: ${getThemedSpacing(300)};
  min-height: ${getThemedSpacing(1600)};
  width: 100%;
  text-align: left;
  display: flex;
  align-items: center;
  gap: ${getThemedSpacing(300)};

  &:hover {
    background-color: ${getThemedColor('neutral', 300)};
    cursor: pointer;
  }

  &:focus-visible {
    outline: ${getThemedBorderWidth(200)} solid
      ${getThemedColor('primary', 700)};
    outline-offset: ${getThemedSpacing(50)};
  }

  &:active {
    background-color: ${getThemedColor('neutral', 300)};
  }
`

export const mobileSearchListItemTextStyles = css`
  display: flex;
  flex: 1;
  min-width: 0;
  flex-direction: column;
  gap: ${getThemedSpacing(50)};
`

export const mobileSearchListItemLabelStyles = css`
  color: ${getThemedColor('neutral', 900)};
  font-size: ${getThemedFontSize(300)};
  line-height: ${getThemedLineHeight(500)};
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const mobileSearchListItemCaptionStyles = css`
  color: ${getThemedColor('neutral', 700)};
  font-size: ${getThemedFontSize(300)};
  line-height: ${getThemedLineHeight(500)};
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
