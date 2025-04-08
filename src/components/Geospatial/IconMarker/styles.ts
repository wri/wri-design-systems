import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'
import { IconMarkerProps } from './types'

export const iconMarkerStyles = (
  backgroundColor: IconMarkerProps['backgroundColor'],
  hasOnClick: boolean,
) => css`
  height: 28px;
  width: 28px;
  background-color: ${backgroundColor || getThemedColor('success', 300)};
  border: 1px solid ${getThemedColor('neutral', 100)};
  border-radius: 50%;
  box-shadow: 0px 2px 4px -2px #0000001a;
  box-shadow: 0px 4px 6px -1px #0000001a;
  cursor: ${hasOnClick ? 'pointer' : 'default'};
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus-visible {
    outline-color: ${getThemedColor('primary', 700)};
    outline-offset: 2px;
    box-shadow: 0 0 0 2px ${getThemedColor('neutral', 100)}, rgba(0, 0, 0, 0.05) 0px 2px 2px 4px;
  }

  svg {
    height: 14px;
    width: 14px;
  }
`
