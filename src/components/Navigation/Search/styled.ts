import { css } from '@emotion/react'
import {
  getThemedBorderWidth,
  getThemedColor,
  getThemedRadius,
  getThemedSpacing,
} from '../../../lib/theme'
import {
  fieldFocusVisibleStyles,
  getPrimaryOverlayColor,
} from '../../Forms/Inputs/FieldWrapper/styled'

const connectColor = getThemedColor('neutral', 700)

export const searchContainerStyles = css`
  position: relative;
  width: 100%;

  &[data-open='true'] input {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-color: transparent;
  }

  &[data-open='true'][data-placement='top'] input {
    border-bottom-left-radius: ${getThemedRadius(300)};
    border-bottom-right-radius: ${getThemedRadius(300)};
    border-bottom-color: ${connectColor};
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-top-color: transparent;
  }
`
export const searchResultsStyles = css`
  width: 100%;
  z-index: 1000;
  overflow-y: auto;
  background-color: ${getThemedColor('neutral', 100)};
  border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 400)};
  border-radius: ${getThemedRadius(300)};
  box-shadow:
    0 0.25rem 0.375rem -0.25rem #0000001a,
    0 0.625rem 0.9375rem -0.1875rem #0000001a;

  margin-top: calc(${getThemedBorderWidth(100)} * -1);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-top: ${getThemedBorderWidth(100)} solid ${connectColor};

  &[data-placement^='top'] {
    margin-top: 0;
    margin-bottom: calc(${getThemedBorderWidth(100)} * -1);
    border-top-left-radius: ${getThemedRadius(300)};
    border-top-right-radius: ${getThemedRadius(300)};
    border-top: ${getThemedBorderWidth(100)} solid
      ${getThemedColor('neutral', 400)};
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: ${getThemedBorderWidth(100)} solid ${connectColor};
    box-shadow:
      0 -0.25rem 0.375rem -0.25rem #0000001a,
      0 -0.625rem 0.9375rem -0.1875rem #0000001a;
  }
`

export const searchItemStyles = css`
  padding: ${getThemedSpacing(200)};
  border-radius: ${getThemedRadius(300)};
  cursor: pointer;

  &:hover {
    background-color: ${getPrimaryOverlayColor(20)};
  }

  &[data-highlighted] {
    background-color: ${getPrimaryOverlayColor(20)};
  }

  [data-nav-source='keyboard'] &[data-highlighted] {
    ${fieldFocusVisibleStyles}
    outline-offset: -${getThemedBorderWidth(200)};
  }

  &:active {
    background-color: ${getPrimaryOverlayColor(40)};
  }
`
