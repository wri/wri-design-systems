import { CheckboxOptionCard } from '../../..'
import { InfoIcon } from '../../../icons'

const CheckboxOptionCardDemo = () => (
  <CheckboxOptionCard
    defaultValue={['value-2']}
    items={[
      {
        label: 'Label',
        caption: 'Caption',
        icon: <InfoIcon />,
        value: 'value-1',
      },
      {
        label: 'Label',
        caption: 'Caption',
        icon: <InfoIcon />,
        variant: 'centered',
        value: 'value-2',
      },
      {
        label: 'Label',
        caption: 'Caption',
        icon: <InfoIcon />,
        variant: 'expanded',
        value: 'value-3',
        children: (
          <>
            <div>Component Placeholder</div>
            <div>Component Placeholder</div>
            <div>Component Placeholder</div>
          </>
        ),
      },
      {
        label: 'Label',
        caption: 'Caption',
        icon: <InfoIcon />,
        value: 'value-4',
        disabled: true,
      },
    ]}
  />
)

export default CheckboxOptionCardDemo
