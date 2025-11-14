import { IconButton } from '../../..'
import { CheckIcon, InfoIcon, MenuDotsIcon } from '../../../icons'
import DemoWrapper from '../../../UI/DemoWrapper'

const IconButtonDemo = () => (
  <DemoWrapper title='Icon Button'>
    <div style={{ display: 'flex', gap: '20px' }}>
      <IconButton icon={<MenuDotsIcon />} aria-label='Menu' />
      <IconButton icon={<CheckIcon />} aria-label='Check' />
      <IconButton icon={<InfoIcon />} aria-label='Info' disabled />
    </div>
  </DemoWrapper>
)

export default IconButtonDemo
