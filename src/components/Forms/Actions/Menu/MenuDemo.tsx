import { Button, Menu } from '../../..'
import { PlaceholderIcon } from '../../../icons'

const MenuDemo = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    <Menu
      label='Open Menu'
      items={[
        {
          label: 'Label',
          value: 'label-1-1',
        },
        {
          label: 'Label',
          caption: 'Caption',
          command: '⌘E',
          value: 'label-1-2',
        },
        {
          label: 'Label',
          caption: 'Caption',
          startIcon: <PlaceholderIcon />,
          value: 'label-1-3',
        },
        {
          label: 'Label',
          startIcon: <PlaceholderIcon />,
          value: 'label-1-4',
        },
        {
          label: 'Label',
          caption: 'Caption',
          endIcon: <PlaceholderIcon />,
          value: 'label-1-5',
        },
        {
          label: 'Label',
          endIcon: <PlaceholderIcon />,
          value: 'label-1-6',
        },
        {
          label: 'Label',
          value: 'label-1-7',
          disabled: true,
        },
      ]}
      onSelect={(value) => console.log('onSelect', value)}
    />

    <Menu
      label='With Group Menu'
      groups={[
        {
          title: 'Group 1',
          items: [
            {
              label: 'Label',
              value: 'label-2-1',
            },
            {
              label: 'Label',
              value: 'label-2-2',
            },
          ],
        },
        {
          title: 'Group 2',
          items: [
            {
              label: 'Label',
              value: 'label-2-3',
            },
            {
              label: 'Label',
              value: 'label-2-4',
            },
            {
              label: 'Label',
              value: 'label-2-5',
            },
          ],
        },
      ]}
      onSelect={(value) => console.log('onSelect', value)}
    />

    <Menu
      label='With Submenu'
      items={[
        {
          label: 'Label',
          value: 'label-3-1',
        },
        {
          label: 'Label',
          value: 'label-3-2',
          submenu: [
            {
              label: 'Label',
              value: 'label-3-2-1',
            },
            {
              label: 'Label',
              value: 'label-3-2-2',
            },
          ],
        },
        {
          label: 'Label',
          value: 'label-3-3',
        },
      ]}
      onSelect={(value) => console.log('onSelect', value)}
    />

    <Menu
      label='With Custom Trigger'
      items={[
        {
          label: 'Label',
          value: 'label-4-1',
        },
        {
          label: 'Label',
          value: 'label-4-2',
          submenu: [
            {
              label: 'Label',
              value: 'label-4-2-1',
            },
            {
              label: 'Label',
              value: 'label-4-2-2',
            },
          ],
        },
        {
          label: 'Label',
          value: 'label-4-3',
        },
      ]}
      onSelect={(value) => console.log('onSelect', value)}
      customTrigger={<Button label='Open Menu' variant='secondary' />}
    />
  </div>
)

export default MenuDemo
