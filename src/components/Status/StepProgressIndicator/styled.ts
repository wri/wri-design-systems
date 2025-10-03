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
  height: 60px;
  width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const stepProgressIndicatorItemIndicatorStyles = (
  active: boolean,
  disabled: boolean,
) => css`
  height: 32px;
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: ${getThemedColor('neutral', 300)};
  color: ${getThemedColor('neutral', 500)};
  font-size: 20px;
  line-height: 28px;
  font-weight: 700;
  cursor: not-allowed;

  ${active
    ? `
    background-color: ${getThemedColor('primary', 100)};
    color: ${getThemedColor('primary', 800)};
    border: 1px solid ${getThemedColor('primary', 400)};
    box-shadow: 0px 1px 2px -1px #0000001A;
    box-shadow: 0px 1px 3px 0px #0000001A;
    cursor: pointer;
  `
    : ''}

  &:hover {
    background-color: ${getThemedColor('primary', 200)};
    box-shadow: 0px 2px 4px -2px #0000001a;
    box-shadow: 0px 4px 6px -1px #0000001a;
  }

  &:active {
    background-color: ${getThemedColor('primary', 300)};
    box-shadow: 0px 2px 4px -2px #0000001a;
    box-shadow: 0px 4px 6px -1px #0000001a;
  }

  &:focus-visible {
    outline-color: ${getThemedColor('primary', 700)};
    outline-offset: 3px;
    box-shadow: 0px 2px 4px -2px #0000001a;
    box-shadow: 0px 4px 6px -1px #0000001a;
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
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
`

export const stepProgressIndicatorLineContainerStyles = css`
  height: 1px;
  width: 100%;
  padding: 0 30px;
  position: absolute;
  top: 16px;
  left: 0;
  z-index: -1;
`
export const stepProgressIndicatorLineStyles = css`
  height: 1px;
  width: 100%;
  background-color: ${getThemedColor('neutral', 400)};
`
