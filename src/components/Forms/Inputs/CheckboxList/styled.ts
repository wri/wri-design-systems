import { css } from '@emotion/react'
import {
  getThemedColor,
  getThemedFontSize,
  getThemedLineHeight,
  getThemedSpacing,
} from '../../../../lib/theme'

export const checkboxListContainerStyles = css`
  position: relative;
  height: 100%;
  width: 100%;
  &:focus-visible {
    outline-color: ${getThemedColor('primary', 700)};
  }
`

export const checkboxListContentStyles = (hasErrorMessage: boolean) => css`
  margin-left: ${hasErrorMessage ? '1.1875rem' : '0'};
  width: 100%;
`

export const checkboxListLabelStyles = css`
  font-size: ${getThemedFontSize(400)};
  line-height: ${getThemedLineHeight(600)};
  color: ${getThemedColor('neutral', 900)};
  text-align: left;
  width: 100%;
  #required-symbol {
    color: ${getThemedColor('error', 500)};
    margin-right: 0.1875rem;
  }
`

export const checkboxListCaptionStyles = css`
  font-size: ${getThemedFontSize(300)};
  line-height: ${getThemedLineHeight(500)};
  color: ${getThemedColor('neutral', 700)};
  text-align: left;
`

export const checkboxListContentListStyles = (
  horizontal?: boolean,
  isExpanded?: boolean,
) => css`
  margin-top: ${getThemedSpacing(300)};
  display: flex;
  flex-direction: ${horizontal ? 'row' : 'column'};
  flex-wrap: wrap;
  gap: ${horizontal ? getThemedSpacing(500) : getThemedSpacing(300)};
  max-height: ${isExpanded ? '62.5rem' : '0'};
  overflow: hidden;
  opacity: ${isExpanded ? 1 : 0};
  transition:
    max-height 250ms ease,
    opacity 200ms ease;
`

export const checkboxListErrorBarStyles = css`
  width: 0.1875rem;
  height: 100%;
  background-color: ${getThemedColor('error', 900)};
  position: absolute;
  top: 0;
  left: 0;
`

export const checkboxListErrorMessageStyles = css`
  font-size: ${getThemedFontSize(300)};
  line-height: ${getThemedLineHeight(500)};
  font-weight: 700;
  color: ${getThemedColor('error', 900)};
  text-align: left;
`

export const checkboxCounterTextStyles = css`
  color: ${getThemedColor('neutral', 700)};
  margin-left: ${getThemedSpacing(100)};
`

export const expandButtonStyles = css`
  color: ${getThemedColor('neutral', 700)};
  display: flex;
  align-items: center;
  gap: ${getThemedSpacing(100)};
  font-size: ${getThemedFontSize(300)};
  background: none;
  border: none;
  cursor: pointer;
  > span {
    margin-left: 0.375rem;
  }
`
