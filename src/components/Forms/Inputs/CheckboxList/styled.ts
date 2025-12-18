import { css } from '@emotion/react'
import { getThemedColor } from '../../../../lib/theme'

export const checkboxListContainerStyles = css`
  position: relative;
  height: 100%;
  width: 100%;
  &:focus-visible {
    outline-color: ${getThemedColor('primary', 700)};
  }
`

export const checkboxListContentStyles = (hasErrorMessage: boolean) => css`
  margin-left: ${hasErrorMessage ? '19px' : '0px'};
  width: 100%;
`

export const checkboxListLabelStyles = css`
  font-size: 16px;
  line-height: 24px;
  color: ${getThemedColor('neutral', 900)};
  text-align: left;
  width: 100%;
  #required-symbol {
    color: ${getThemedColor('error', 500)};
    margin-right: 3px;
  }
`

export const checkboxListCaptionStyles = css`
  font-size: 14px;
  line-height: 20px;
  color: ${getThemedColor('neutral', 700)};
  text-align: left;
`

export const checkboxListContentListStyles = (
  horizontal?: boolean,
  isExpanded?: boolean,
) => css`
  margin-top: 12px;
  display: flex;
  flex-direction: ${horizontal ? 'row' : 'column'};
  flex-wrap: wrap;
  gap: ${horizontal ? '20px' : '12px'};
  max-height: ${isExpanded ? '1000px' : '0'};
  overflow: hidden;
  opacity: ${isExpanded ? 1 : 0};
  transition:
    max-height 250ms ease,
    opacity 200ms ease;
`

export const checkboxListErrorBarStyles = css`
  width: 3px;
  height: 100%;
  background-color: ${getThemedColor('error', 900)};
  position: absolute;
  top: 0;
  left: 0;
`

export const checkboxListErrorMessageStyles = css`
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  color: ${getThemedColor('error', 900)};
  text-align: left;
`

export const checkboxCounterTextStyles = css`
  color: ${getThemedColor('neutral', 700)};
  margin-left: 4px;
`

export const expandButtonStyles = css`
  color: ${getThemedColor('neutral', 700)};
  display: flex;
  align-items: center;
  gap: 4;
  font-size: 14;
  background: none;
  border: none;
  cursor: pointer;
  > span {
    margin-left: 6px;
  }
`
