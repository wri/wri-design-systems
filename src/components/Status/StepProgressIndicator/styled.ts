import { css } from '@emotion/react'
import {
  getThemedBorderWidth,
  getThemedColor,
  getThemedFontSize,
  getThemedLineHeight,
  getThemedRadius,
  getThemedSpacing,
} from '../../../lib/theme'

export const stepProgressIndicatorContainerStyles = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`

export const stepProgressIndicatorItemStyles = css`
  height: 3.75rem;
  width: ${getThemedSpacing(2000)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const stepProgressIndicatorItemIndicatorStyles = (
  active: boolean,
  disabled: boolean,
) => css`
  height: ${getThemedSpacing(800)};
  width: ${getThemedSpacing(800)};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${getThemedRadius(300)};
  background-color: ${getThemedColor('neutral', 300)};
  color: ${getThemedColor('neutral', 500)};
  font-size: ${getThemedFontSize(600)};
  line-height: ${getThemedLineHeight(700)};
  font-weight: 700;
  cursor: not-allowed;

  ${active
    ? `
	    background-color: ${getThemedColor('primary', 100)};
	    color: ${getThemedColor('primary', 800)};
	    border: ${getThemedBorderWidth(100)} solid ${getThemedColor('primary', 400)};
	    box-shadow: 0rem ${getThemedBorderWidth(100)} ${getThemedSpacing(50)} -${getThemedBorderWidth(100)} #0000001A;
	    box-shadow: 0rem 0.0625rem 0.1875rem 0rem #0000001A;
	    cursor: pointer;
	  `
	    : ''}

	  &:hover {
	    background-color: ${getThemedColor('primary', 200)};
	    box-shadow: 0rem ${getThemedSpacing(50)} ${getThemedSpacing(100)} -${getThemedSpacing(50)} #0000001a;
	    box-shadow: 0rem ${getThemedSpacing(100)} 0.375rem -${getThemedBorderWidth(100)} #0000001a;
	  }

	  &:active {
	    background-color: ${getThemedColor('primary', 300)};
	    box-shadow: 0rem ${getThemedSpacing(50)} ${getThemedSpacing(100)} -${getThemedSpacing(50)} #0000001a;
	    box-shadow: 0rem ${getThemedSpacing(100)} 0.375rem -${getThemedBorderWidth(100)} #0000001a;
	  }

	  &:focus-visible {
	    outline-color: ${getThemedColor('primary', 700)};
	    outline-offset: 0.1875rem;
	    box-shadow: 0rem ${getThemedSpacing(50)} ${getThemedSpacing(100)} -${getThemedSpacing(50)} #0000001a;
	    box-shadow: 0rem ${getThemedSpacing(100)} 0.375rem -${getThemedBorderWidth(100)} #0000001a;
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
  font-size: ${getThemedFontSize(300)};
  line-height: ${getThemedLineHeight(500)};
  font-weight: 400;
`

export const stepProgressIndicatorLineContainerStyles = css`
  height: ${getThemedBorderWidth(100)};
  width: 100%;
  padding: 0 1.875rem;
  position: absolute;
  top: ${getThemedSpacing(400)};
  left: 0;
  z-index: -1;
`
export const stepProgressIndicatorLineStyles = css`
  height: ${getThemedBorderWidth(100)};
  width: 100%;
  background-color: ${getThemedColor('neutral', 400)};
`
