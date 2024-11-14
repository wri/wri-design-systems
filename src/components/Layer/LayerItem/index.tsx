import { InfoIcon } from '@chakra-ui/icons'
import Button from '../../Button'
import Switch from '../../Switch'
import Radio from '../../Radio'
import { LayerItemProps } from './types'
import {
  LayerCaption,
  SwitchContainer,
  SwitchContent,
  LayerName,
  LayerItemContainer,
} from './styled'

const LayerItem = ({
  name,
  label,
  caption,
  showInfoButton = true,
  infoButtonLabel = 'About data',
  variant = 'switch',
  isDisabled,
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
            aria-label={label}
            name={name}
            isDisabled={isDisabled}
            defaultChecked={isDefaultSelected}
            onChange={onChange ? (e) => onChange(e) : () => {}}
          />
        </SwitchContainer>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Radio
            label={label}
            value={name}
            isDisabled={isDisabled}
            onChange={onChange ? (e) => onChange(e) : () => {}}
          />
          <LayerCaption style={{ marginLeft: '28px' }}>{caption}</LayerCaption>
        </div>
      )}
      {showInfoButton ? (
        <div
          style={{
            marginTop: '8px',
            marginLeft: !isSwitch ? '28px' : 0,
          }}
        >
          <Button
            variant='secondary'
            label={infoButtonLabel}
            rightIcon={<InfoIcon />}
            size='small'
            onClick={onInfoClick}
            isDisabled={isDisabled}
          />
        </div>
      ) : null}
    </LayerItemContainer>
  )
}

export default LayerItem
