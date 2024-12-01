import styled from '@emotion/styled'
import { Button } from '@chakra-ui/react'
import { getThemedColor } from '../../../lib/theme'

export const StyledIconButton = styled(Button)`
  width: 20px !important;
  padding: 0 !important;
  min-width: 20px !important;
  height: 20px;
  border-radius: 2px;
  background-color: transparent;

  svg {
    width: 15px;
    height: 15px;

    path {
      fill: ${getThemedColor('neutral', 800)};
    }
  }

  &:hover {
    background-color: color-mix(
      in srgb,
      ${getThemedColor('primary', 500)} 20%,
      transparent
    );
  }

  &:active {
    background-color: color-mix(
      in srgb,
      ${getThemedColor('primary', 500)} 40%,
      transparent
    );
  }

  &:focus-visible {
    outline-color: ${getThemedColor('primary', 700)};
  }

  &:disabled {
    background-color: transparent;

    svg {
      path {
        fill: ${getThemedColor('neutral', 500)};
      }
    }
  }
`
