/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import React, { useState } from 'react'

import { Popover as ChakraPopover } from '@chakra-ui/react'
import Button from '../../../Forms/Actions/Button'
import { InfoIcon } from '../../../icons'
import TextInput from '../../../Forms/Inputs/TextInput'
import Slider from '../../../Forms/Controls/Slider'
import { OpacityControlProps } from './types'
import {
  opacityControlBodyStyles,
  opacityControlContainerStyles,
  opacityControlLabelStyles,
  opacityControlTextInputContainerStyles,
} from './styled'
import { useLabels } from '../../../../lib/i18n/useLabels'

const OpacityControl = ({
  defaultValue,
  onOpacityChanged,
  labels,
}: OpacityControlProps) => {
  const l = useLabels('OpacityControl', labels)
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
          label={l.opacityButtonLabel}
          size='small'
          variant='secondary'
          leftIcon={<InfoIcon />}
        />
      </ChakraPopover.Trigger>

      <ChakraPopover.Positioner>
        <ChakraPopover.Content css={opacityControlContainerStyles}>
          <ChakraPopover.Body css={opacityControlBodyStyles}>
            <p css={opacityControlLabelStyles}>{l.opacityHeading}</p>
            <div css={opacityControlTextInputContainerStyles}>
              <div style={{ position: 'relative' }}>
                <TextInput
                  aria-label={l.opacityAriaLabel}
                  min='0'
                  max='100'
                  value={opacity}
                  onChange={handleOpacityChanged}
                  className='ds-opacity-control-text-input'
                  onClick={(e: any) => e.target.select()}
                />
                <p
                  style={{ position: 'absolute', top: '1.15625rem', right: '0.3125rem' }}
                >
                  {l.percentSuffix}
                </p>
              </div>
              <Slider
                min={0}
                max={100}
                value={[opacity]}
                onValueChangeEnd={opacityChangeHandler}
              />
            </div>
          </ChakraPopover.Body>
        </ChakraPopover.Content>
      </ChakraPopover.Positioner>
    </ChakraPopover.Root>
  )
}

export default OpacityControl
