import { InfoIcon } from '@chakra-ui/icons'
import Button from '../Button'
import Switch from '../Switch'
import Radio from '../Radio'
import { LayerItemProps } from './types'
import {
  LayerCaption,
  SwitchContainer,
  SwitchContent,
  LayerName,
  LayerItemContainer,
} from './styled'

const LayerItem = ({
  id,
  label,
  caption,
  showInfoButton = true,
  infoButtonLabel = 'About data',
  variant = 'switch',
  isDisabled,
  onInfoClick,
  isDefaultSelected,
}: LayerItemProps) => {
  const isSwitch = variant === 'switch'

  return (
    <LayerItemContainer>
      {isSwitch ? (
        <SwitchContainer>
          <SwitchContent>
            <LayerName>{label}</LayerName>
            <LayerCaption>{caption}</LayerCaption>
          </SwitchContent>
          <Switch
            id={id}
            isDisabled={isDisabled}
            isChecked={isDefaultSelected}
          />
        </SwitchContainer>
      ) : (
        <div>
          <Radio label={label} value={id} isDisabled={isDisabled} />
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
