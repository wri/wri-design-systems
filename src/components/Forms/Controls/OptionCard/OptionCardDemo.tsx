import { OptionCardGroup, OptionCard } from '../../..'
import { InfoIcon } from '../../../icons'

const OptionCardDemo = () => (
  <OptionCardGroup defaultValue='value-2'>
    <OptionCard
      label='Label'
      caption='Caption'
      icon={<InfoIcon />}
      value='value-1'
    />
    <OptionCard
      label='Label'
      caption='Caption'
      icon={<InfoIcon />}
      variant='centered'
      value='value-2'
    />
    <OptionCard
      label='Label'
      caption='Caption'
      icon={<InfoIcon />}
      variant='expanded'
      value='value-3'
    >
      <div>Component Placeholder</div>
      <div>Component Placeholder</div>
      <div>Component Placeholder</div>
    </OptionCard>
    <OptionCard
      label='Label'
      caption='Caption'
      icon={<InfoIcon />}
      value='value-4'
      disabled
    />
  </OptionCardGroup>
)

export default OptionCardDemo
