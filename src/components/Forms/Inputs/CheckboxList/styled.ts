import { css } from '@emotion/react'
import {
  getThemedColor,
  getThemedFontSize,
  getThemedSpacing,
} from '../../../../lib/theme'

export const checkboxListContentListStyles = (
  horizontal?: boolean,
  isExpanded?: boolean,
) => css`
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

export const checkboxListLabelRowStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
