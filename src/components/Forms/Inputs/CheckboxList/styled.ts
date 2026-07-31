import { css } from '@emotion/react'
import {
  getThemedColor,
  getThemedFontSize,
  getThemedSpacing,
} from '../../../../lib/theme'

export const checkboxListCollapseStyles = (isExpanded?: boolean) => css`
  display: grid;
  grid-template-rows: ${isExpanded ? '1fr' : '0fr'};
  opacity: ${isExpanded ? 1 : 0};
  transition:
    grid-template-rows 300ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 200ms ease;
`

export const checkboxListCollapseInnerStyles = css`
  overflow: hidden;
  min-height: 0;
`

export const checkboxListContentListStyles = (horizontal?: boolean) => css`
  display: flex;
  flex-direction: ${horizontal ? 'row' : 'column'};
  flex-wrap: wrap;
  gap: ${horizontal ? getThemedSpacing(500) : getThemedSpacing(300)};
  padding: ${getThemedSpacing(100)};
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
    display: inline-flex;
    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`

export const expandIconStyles = (isExpanded?: boolean) => css`
  transform: rotate(${isExpanded ? '180deg' : '0deg'});
`

export const checkboxListLabelRowStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
