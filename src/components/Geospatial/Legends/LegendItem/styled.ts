import { css } from '@emotion/react'
import {
  getThemedColor,
  getThemedBorderWidth,
  getThemedFontSize,
  getThemedLineHeight,
  getThemedSpacing,
} from '../../../../lib/theme'

export const legendItemContainerStyles = css`
  padding: ${getThemedSpacing(300)};
  padding-bottom: ${getThemedSpacing(500)};
  display: flex;
  gap: ${getThemedSpacing(300)};
  border-bottom: ${getThemedBorderWidth(100)} solid
    ${getThemedColor('neutral', 300)};
  background-color: ${getThemedColor('neutral', 100)};
`

export const legendItemDragAndDropActionsStyles = css`
  display: flex;
  flex-direction: column;

  svg {
    path {
      fill: ${getThemedColor('neutral', 700)} !important;
    }
  }
`

export const legendItemHeaderContainerStyles = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${getThemedSpacing(300)};
  margin-bottom: ${getThemedSpacing(400)};
`

export const legendItemLayerNameStyles = css`
  font-size: ${getThemedFontSize(400)};
  line-height: ${getThemedLineHeight(600)};
  font-weight: 400;
  text-align: left;
  color: ${getThemedColor('neutral', 900)};
`

export const legendItemDataUnitStyles = css`
  font-size: ${getThemedFontSize(300)};
  line-height: ${getThemedLineHeight(500)};
  font-weight: 400;
  text-align: left;
  color: ${getThemedColor('neutral', 700)};
`

export const legendItemButtonsContainerStyles = css`
  display: flex;
  justify-content: space-between;

  button {
    width: 46%;
  }
`
