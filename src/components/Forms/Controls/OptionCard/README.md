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
  label: string
  caption?: string
  icon?: React.ReactNode
  variant?: 'default' | 'centered' | 'expanded'
  disabled?: boolean
  children?: React.ReactNode
  value: string
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
      variant: 'centered',
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
      variant: 'centered',
      value: 'value-3',
    },
  ]}
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
      variant: 'expanded',
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
      variant: 'expanded',
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
  ]}
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
