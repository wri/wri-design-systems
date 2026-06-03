import {
  OptionCard,
  getThemedBorderWidth,
  getThemedColor,
  getThemedRadius,
} from '../../..'
import {
  InfoIcon,
  CheckCircleIcon,
  IndeterminateIcon,
  DisallowedIcon,
  NotApplicableIcon,
} from '../../../icons'
import DemoWrapper from '../../../UI/DemoWrapper'

const OptionCardDemo = () => (
  <DemoWrapper title='Option Card'>
    <div style={{ marginTop: '1.5rem' }}>
      <OptionCard
        defaultValue='value-2'
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
            value: 'value-2',
          },
          {
            label: 'Label',
            caption: 'Caption',
            icon: <InfoIcon />,
            value: 'value-3',
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
    </div>

    <div style={{ marginTop: '1.5rem' }}>
      <OptionCard
        defaultValue='value-2'
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
            value: 'value-2',
          },
          {
            label: 'Label',
            caption: 'Caption',
            icon: <InfoIcon />,
            value: 'value-3',
          },
          {
            label: 'Label',
            caption: 'Caption',
            icon: <InfoIcon />,
            value: 'value-4',
            disabled: true,
          },
        ]}
        variant='centered'
      />
    </div>

    <div style={{ marginTop: '1.5rem' }}>
      <OptionCard
        defaultValue='value-2'
        items={[
          {
            label: 'Label',
            caption: 'Caption',
            icon: <InfoIcon />,
            value: 'value-1',
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
            value: 'value-2',
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
            children: (
              <>
                <div>Component Placeholder</div>
                <div>Component Placeholder</div>
                <div>Component Placeholder</div>
              </>
            ),
            disabled: true,
          },
        ]}
        variant='expanded'
      />
    </div>

    <div style={{ marginTop: '1.5rem' }}>
      <OptionCard
        defaultValue='value-2'
        items={[
          {
            label: 'Label',
            caption: 'Caption',
            icon: <CheckCircleIcon />,
            value: 'value-1',
            selectedColor: getThemedColor('success', 500),
            selectedBackgroundColor: getThemedColor('success', 100),
          },
          {
            label: 'Label',
            caption: 'Caption',
            icon: <IndeterminateIcon />,
            value: 'value-2',
            selectedColor: getThemedColor('warning', 500),
            selectedBackgroundColor: getThemedColor('warning', 100),
          },
          {
            label: 'Label',
            caption: 'Caption',
            icon: <DisallowedIcon />,
            value: 'value-3',
            selectedColor: getThemedColor('error', 500),
            selectedBackgroundColor: getThemedColor('error', 100),
          },
          {
            label: 'Label',
            caption: 'Caption',
            icon: <NotApplicableIcon />,
            value: 'value-4',
            selectedColor: getThemedColor('neutral', 800),
            selectedBackgroundColor: getThemedColor('neutral', 100),
          },
        ]}
        variant='centered'
        itemWidth='8.875rem'
        hideControl
      />
    </div>
  </DemoWrapper>
)

export default OptionCardDemo
