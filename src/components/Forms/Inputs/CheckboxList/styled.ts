import { css } from '@emotion/react'
import { getThemedColor } from '../../../../lib/theme'

export const checkboxListContainerStyles = css`
  position: relative;
  height: 100%;
`

export const checkboxListContentStyles = (hasErrorMessage: boolean) => css`
  margin-left: ${hasErrorMessage ? '19px' : '0px'};
`

export const checkboxListLabelStyles = css`
  font-size: 16px;
  line-height: 24px;
  color: ${getThemedColor('neutral', 900)};
  text-align: left;

  span {
    color: ${getThemedColor('error', 500)};
    margin-right: 3px;
  }
`

export const checkboxListCaptionStyles = css`
  font-size: 14px;
  line-height: 20px;
  color: ${getThemedColor('neutral', 600)};
  text-align: left;
`

export const checkboxListContentListStyles = (horizontal?: boolean) => css`
  margin-top: 12px;
  display: flex;
  flex-direction: ${horizontal ? 'row' : 'column'};
  flex-wrap: wrap;
  gap: ${horizontal ? '20px' : '12px'};
`

export const checkboxListErrorBarStyles = css`
  width: 3px;
  height: 100%;
  background-color: ${getThemedColor('error', 500)};
  position: absolute;
  top: 0;
  left: 0;
`

export const checkboxListErrorMessageStyles = css`
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  color: ${getThemedColor('error', 500)};
  text-align: left;
`
