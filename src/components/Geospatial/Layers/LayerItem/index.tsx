/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import { Box } from '@chakra-ui/react'
import Button from '../../../Forms/Buttons/Button'
import Switch from '../../../Forms/Controls/Switch'
import Radio from '../../../Forms/Controls/Radio'
import { LayerItemProps } from './types'
import {
  layerCaptionStyles,
  layerItemContainerStyles,
  layerNameStyles,
  switchContainerStyles,
  switchContentStyles,
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
    <div css={layerItemContainerStyles}>
      {isSwitch ? (
        <div css={switchContainerStyles}>
          <div css={switchContentStyles}>
            <p
              css={layerNameStyles(disabled)}
              aria-label={label}
              aria-disabled={disabled}
            >
              {label}
            </p>
            <p aria-label={caption} css={layerCaptionStyles(disabled)}>
              {caption}
            </p>
          </div>
          <Switch
            aria-label={`${label}, ${caption}`}
            name={name}
            disabled={disabled}
            defaultChecked={isDefaultSelected}
            onChange={onChange}
            role='switch'
          />
        </div>
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
          <p style={{ marginLeft: '28px' }} css={layerCaptionStyles(disabled)}>
            {caption}
          </p>
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
    </div>
  )
}

export default LayerItem
