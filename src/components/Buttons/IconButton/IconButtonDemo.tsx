import { IconButton } from '../..'
import { CheckIcon, InfoIcon, MenuDotsIcon } from '../../icons'

const IconButtonDemo = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
    <IconButton icon={<MenuDotsIcon />} aria-label='Menu' />
    <IconButton icon={<CheckIcon />} aria-label='Check' />
    <IconButton icon={<InfoIcon />} aria-label='Info' disabled />
  </div>
)

export default IconButtonDemo
