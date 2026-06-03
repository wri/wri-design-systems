# OptionCard

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/forms-controls-option-card--docs)

[OptionCardDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Forms/Controls/OptionCard/OptionCardDemo.tsx)

## Import

```tsx
import { OptionCard } from '@worldresources/wri-design-systems'
```

## Props

```ts
type OptionCardItemProps = {
  label?: string
  caption?: string
  icon?: React.ReactNode
  disabled?: boolean
  children?: React.ReactNode
  value: string
  selectedColor?: string
  selectedBackgroundColor?: string
}

type OptionCardProps = Omit<
  RadioCardRootProps,
  | 'colorPalette'
  | 'size'
  | 'variant'
  | 'as'
  | 'asChild'
  | 'unstyled'
  | 'defaultChecked'
> & {
  defaultValue?: string
  items: OptionCardItemProps[]
  onValueChange?: ({ value }: { value: string }) => void
  variant?: 'default' | 'centered' | 'expanded'
  itemWidth?: string
  hideControl?: boolean
}
```

## Default

```tsx
<OptionCard
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
  ]}
/>
```

## Centered

```tsx
<OptionCard
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
  ]}
  variant='centered'
/>
```

## Expanded

```tsx
<OptionCard
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
  ]}
  variant='expanded'
/>
```

## Default Checked

```tsx
<OptionCard
  defaultValue={'value-2'}
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
  ]}
/>
```

## Disabled

```tsx
<OptionCard
  defaultValue={'value-2'}
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
      disabled: true,
    },
    {
      label: 'Label',
      caption: 'Caption',
      icon: <InfoIcon />,
      value: 'value-3',
    },
  ]}
/>
```

## Hide Control

```tsx
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
    },
  ]}
  hideControl
/>
```

## Custom Item Width

```tsx
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
    },
  ]}
  itemWidth='8.875rem'
/>
```

## Custom Colors

```tsx
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
      selectedColor: getThemedColor('neutral', 500),
      selectedBackgroundColor: getThemedColor('neutral', 100),
    },
  ]}
/>
```
