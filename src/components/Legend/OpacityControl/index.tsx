// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react'

import { Popover as ChakraPopover } from '@chakra-ui/react'
import Button from '../../Forms/Buttons/Button'
import { InfoIcon } from '../../icons'
import TextInput from '../../Forms/Inputs/TextInput'
import Slider from '../../Forms/Controls/Slider'
import { OpacityControlProps } from './types'
import {
  OpacityControlBody,
  OpacityControlContainer,
  OpacityControlTextInputContainer,
  OpacityControlLabel,
} from './styled'

const OpacityControl = ({
  defaultValue,
  onOpacityChanged,
}: OpacityControlProps) => {
  const [opacity, setOpacity] = useState(defaultValue)

  const opacityChangeHandler = ({ value }: { value: number[] }) => {
    setOpacity(value[0])

    if (onOpacityChanged) {
      onOpacityChanged(value[0])
    }
  }

  const handleOpacityChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value || '0'
    let newOpacity = parseInt(value, 10)
    newOpacity = Number.isNaN(newOpacity) ? 0 : newOpacity
    newOpacity = newOpacity < 0 ? 0 : newOpacity
    newOpacity = newOpacity > 100 ? 100 : newOpacity

    setOpacity(newOpacity)

    if (onOpacityChanged) {
      onOpacityChanged(newOpacity)
    }
  }

  return (
    <ChakraPopover.Root positioning={{ placement: 'bottom-end' }}>
      <ChakraPopover.Trigger asChild>
        <Button
          label='Opacity'
          size='small'
          variant='secondary'
          leftIcon={<InfoIcon />}
        />
      </ChakraPopover.Trigger>

      <ChakraPopover.Positioner>
        <OpacityControlContainer>
          <OpacityControlBody>
            <OpacityControlLabel>Opacity</OpacityControlLabel>
            <OpacityControlTextInputContainer>
              <TextInput
                aria-label='Opacity'
                min='0'
                max='100'
                value={`${opacity}%`}
                onChange={handleOpacityChanged}
                className='opacity-control-text-input'
              />
              <Slider
                min={0}
                max={100}
                value={[opacity]}
                onValueChangeEnd={opacityChangeHandler}
              />
            </OpacityControlTextInputContainer>
          </OpacityControlBody>
        </OpacityControlContainer>
      </ChakraPopover.Positioner>
    </ChakraPopover.Root>
  )
}

export default OpacityControl
