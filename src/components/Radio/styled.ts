import styled from '@emotion/styled'
import { RadioGroup as ChakraRadioGroup } from '@chakra-ui/react'
import { getThemedColor } from '../../lib/theme'

export const StyledRadio = styled(ChakraRadioGroup.Item)`
  .radio-item-indicator {
    width: 20px;
    height: 20px;
    border: 1px solid ${getThemedColor('neutral', 600)};

    .dot {
      width: 10px !important;
      height: 10px !important;
      scale: 1 !important;
    }

    &:hover {
      outline: 4px solid
        color-mix(in srgb, ${getThemedColor('primary', 500)} 20%, transparent);
    }

    &:active {
      outline: 4px solid
        color-mix(in srgb, ${getThemedColor('primary', 500)} 40%, transparent);
    }

    &:focus-visible,
    &[data-focus-visible] {
      outline: 2px solid ${getThemedColor('primary', 700)};
      outline-offset: 2px;
      box-shadow: none;

      &[data-checked] {
        border: 2px solid ${getThemedColor('primary', 700)};

        &[data-disabled] {
          border: 2px solid ${getThemedColor('neutral', 400)};
        }
      }
    }

    &[data-checked] {
      border: 1px solid ${getThemedColor('primary', 700)};
      background-color: ${getThemedColor('neutral', 100)} !important;
      color: ${getThemedColor('primary', 700)};

      &[data-disabled] {
        border: 1px solid ${getThemedColor('neutral', 400)};
        color: ${getThemedColor('neutral', 400)};
      }
    }

    &[data-disabled] {
      border: 1px solid ${getThemedColor('neutral', 400)} !important;
      background-color: ${getThemedColor('neutral', 100)} !important;

      &:hover,
      &:active {
        outline: none;
      }
    }
  }
`
