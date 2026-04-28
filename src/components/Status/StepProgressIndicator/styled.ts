import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'

export const stepProgressIndicatorContainerStyles = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`

export const stepProgressIndicatorItemStyles = css`
  height: 3.75rem;
  width: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const stepProgressIndicatorItemIndicatorStyles = (
  active: boolean,
  disabled: boolean,
) => css`
  height: 2rem;
  width: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  background-color: ${getThemedColor('neutral', 300)};
  color: ${getThemedColor('neutral', 500)};
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
  cursor: not-allowed;

  ${active
    ? `
    background-color: ${getThemedColor('primary', 100)};
    color: ${getThemedColor('primary', 800)};
    border: 0.0625rem solid ${getThemedColor('primary', 400)};
    box-shadow: 0rem 0.0625rem 0.125rem -0.0625rem #0000001A;
    box-shadow: 0rem 0.0625rem 0.1875rem 0rem #0000001A;
    cursor: pointer;
  `
    : ''}

  &:hover {
    background-color: ${getThemedColor('primary', 200)};
    box-shadow: 0rem 0.125rem 0.25rem -0.125rem #0000001a;
    box-shadow: 0rem 0.25rem 0.375rem -0.0625rem #0000001a;
  }

  &:active {
    background-color: ${getThemedColor('primary', 300)};
    box-shadow: 0rem 0.125rem 0.25rem -0.125rem #0000001a;
    box-shadow: 0rem 0.25rem 0.375rem -0.0625rem #0000001a;
  }

  &:focus-visible {
    outline-color: ${getThemedColor('primary', 700)};
    outline-offset: 0.1875rem;
    box-shadow: 0rem 0.125rem 0.25rem -0.125rem #0000001a;
    box-shadow: 0rem 0.25rem 0.375rem -0.0625rem #0000001a;
  }

  ${disabled
    ? `
    background-color: ${getThemedColor('neutral', 300)};
  
    &:hover {
      background-color: ${getThemedColor('neutral', 300)};
      box-shadow: none;
    }
    `
    : ''}
`

export const stepProgressIndicatorItemLabelStyles = (active: boolean) => css`
  color: ${getThemedColor('neutral', active ? 800 : 600)};
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 400;
`

export const stepProgressIndicatorLineContainerStyles = css`
  height: 0.0625rem;
  width: 100%;
  padding: 0 1.875rem;
  position: absolute;
  top: 1rem;
  left: 0;
  z-index: -1;
`
export const stepProgressIndicatorLineStyles = css`
  height: 0.0625rem;
  width: 100%;
  background-color: ${getThemedColor('neutral', 400)};
`
