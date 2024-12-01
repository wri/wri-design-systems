import styled from '@emotion/styled'
import { Button } from '@chakra-ui/react'
import { getThemedColor } from '../../../lib/theme'

export const StyledCloseButton = styled(Button)`
  width: 20px !important;
  padding: 0 !important;
  min-width: 20px !important;
  height: 20px;
  border-radius: 2px;
  background-color: ${getThemedColor('neutral', 300)};

  svg {
    width: 10px;
    height: 10px;

    path {
      fill: ${getThemedColor('neutral', 800)};
    }
  }

  &:hover {
    box-shadow: 0px 1px 2px -1px #0000001a;
    box-shadow: 0px 1px 3px 0px #0000001a;
  }

  &:active {
    background-color: ${getThemedColor('neutral', 400)};
    box-shadow: 0px 1px 2px -1px #0000001a;
    box-shadow: 0px 1px 3px 0px #0000001a;
  }

  &:focus-visible {
    outline-color: ${getThemedColor('primary', 700)};
  }

  &:disabled {
    background-color: ${getThemedColor('neutral', 200)} !important;
    box-shadow: none;

    svg {
      path {
        fill: ${getThemedColor('neutral', 400)};
      }
    }
  }
`
