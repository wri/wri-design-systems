// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import { Box } from '@chakra-ui/react'
import Button from '../../../Forms/Buttons/Button'
import Switch from '../../../Forms/Controls/Switch'
import Radio from '../../../Forms/Controls/Radio'
import { LayerItemProps } from './types'
import {
  LayerCaption,
  SwitchContainer,
  SwitchContent,
  LayerName,
  LayerItemContainer,
} from './styled'
import { InfoIcon } from '../../../icons'

const LayerItem = ({
  name,
  label,
  caption,
  showInfoButton = true,
  infoButtonLabel = 'About data',
  variant = 'switch',
  disabled,
  onInfoClick,
  isDefaultSelected = false,
  onChange,
}: LayerItemProps) => {
  const isSwitch = variant === 'switch'

  return (
    <LayerItemContainer>
      {isSwitch ? (
        <SwitchContainer>
          <SwitchContent>
            <LayerName aria-label={label}>{label}</LayerName>
            <LayerCaption aria-label={caption}>{caption}</LayerCaption>
          </SwitchContent>
          <Switch
            aria-label={`${label}, ${caption}`}
            name={name}
            disabled={disabled}
            defaultChecked={isDefaultSelected}
            onChange={onChange}
            role='switch'
          />
        </SwitchContainer>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Radio
            value={name}
            disabled={disabled}
            fontSize='16px'
            color='var(--chakra-colors-neutral-800)'
          >
            {label}
          </Radio>
          <LayerCaption style={{ marginLeft: '28px' }}>{caption}</LayerCaption>
        </div>
      )}
      {showInfoButton ? (
        <Box
          display='flex'
          justifyContent='flex-start'
          marginTop='8px'
          marginLeft={!isSwitch ? '28px' : 0}
        >
          <Button
            variant='secondary'
            label={infoButtonLabel}
            rightIcon={<InfoIcon />}
            size='small'
            onClick={onInfoClick}
            disabled={disabled}
          />
        </Box>
      ) : null}
    </LayerItemContainer>
  )
}

export default LayerItem
