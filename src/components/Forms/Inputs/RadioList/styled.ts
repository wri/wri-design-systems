import { css } from '@emotion/react'
import { getThemedColor } from '../../../../lib/theme'

export const radioListContainerStyles = css`
  position: relative;
  height: 100%;
  &:focus-visible {
    outline-color: ${getThemedColor('primary', 700)};
  }
`

export const radioListContentStyles = (hasErrorMessage: boolean) => css`
  margin-left: ${hasErrorMessage ? '1.1875rem' : '0'};
`

export const radioListLabelStyles = css`
  font-size: 1rem;
  line-height: 1.5rem;
  color: ${getThemedColor('neutral', 900)};
  text-align: left;

  span {
    color: ${getThemedColor('error', 500)};
    margin-right: 0.1875rem;
  }
`

export const radioListCaptionStyles = css`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: ${getThemedColor('neutral', 700)};
  text-align: left;
`

export const radioListContentListStyles = css`
  margin-top: 0.75rem;
`

export const radioListErrorBarStyles = css`
  width: 0.1875rem;
  height: 100%;
  background-color: ${getThemedColor('error', 900)};
  position: absolute;
  top: 0;
  left: 0;
`

export const radioListErrorMessageStyles = css`
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;
  color: ${getThemedColor('error', 900)};
  text-align: left;
`

export const radioListItemStyles = css`
  height: 100%;
  min-height: 3rem;
  width: 100%;
  max-width: 22.875rem;
  border: 0.0625rem solid ${getThemedColor('neutral', 400)};
  border-radius: 0.25rem;
  background-color: ${getThemedColor('neutral', 100)};
  padding: 0.75rem;
`
