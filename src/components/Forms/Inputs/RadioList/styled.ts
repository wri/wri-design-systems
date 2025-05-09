import { css } from '@emotion/react'
import { getThemedColor } from '../../../../lib/theme'

export const radioListContainerStyles = css`
  position: relative;
  height: 100%;
`

export const radioListContentStyles = (hasErrorMessage: boolean) => css`
  margin-left: ${hasErrorMessage ? '19px' : '0px'};
`

export const radioListLabelStyles = css`
  font-size: 16px;
  line-height: 24px;
  color: ${getThemedColor('neutral', 900)};
  text-align: left;

  span {
    color: ${getThemedColor('error', 500)};
    margin-right: 3px;
  }
`

export const radioListCaptionStyles = css`
  font-size: 14px;
  line-height: 20px;
  color: ${getThemedColor('neutral', 700)};
  text-align: left;
`

export const radioListContentListStyles = css`
  margin-top: 12px;
`

export const radioListErrorBarStyles = css`
  width: 3px;
  height: 100%;
  background-color: ${getThemedColor('error', 900)};
  position: absolute;
  top: 0;
  left: 0;
`

export const radioListErrorMessageStyles = css`
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  color: ${getThemedColor('error', 900)};
  text-align: left;
`

export const radioListItemStyles = css`
  height: 100%;
  min-height: 48px;
  width: 100%;
  max-width: 366px;
  border: 1px solid ${getThemedColor('neutral', 400)};
  border-radius: 4px;
  background-color: ${getThemedColor('neutral', 100)};
  padding: 12px;
`
