import styled from '@emotion/styled'
import { Popover as ChakraPopover } from '@chakra-ui/react'
import { getThemedColor } from '../../../lib/theme'

export const OpacityControlContainer = styled(ChakraPopover.Content)`
  width: 234px;
  border: 1px solid ${getThemedColor('neutral', 600)};
  border-radius: 4px;
`

export const OpacityControlBody = styled(ChakraPopover.Body)`
  padding: 12px;
`

export const OpacityControlLabel = styled.p`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  text-align: left;
  color: ${getThemedColor('neutral', 900)};
`

export const OpacityControlInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  .input-container {
    width: 70px;
    margin: 0px;

    .chakra-input {
      padding: 4px;
    }
  }

  .chakra-slider__root {
    padding: 0 12px;
    height: 30px;
    margin-top: 18px;
    width: 100%;
  }
`
