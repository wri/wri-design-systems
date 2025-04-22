# CheckboxOptionCard

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/forms-controls-checkbox-option-card--docs)

[CheckboxOptionCardDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Forms/Controls/CheckboxOptionCard/CheckboxOptionCardDemo.tsx)

## Import

```tsx
import { CheckboxOptionCard } from '@worldresources/wri-design-systems'
```

## Props

```ts
type CheckboxOptionCardItemProps = {
  label: string
  caption?: string
  icon?: React.ReactNode
  variant?: 'default' | 'centered' | 'expanded'
  disabled?: boolean
  children?: React.ReactNode
  value: string
}

type CheckboxOptionCardProps = {
  defaultValue?: string[]
  items: CheckboxOptionCardItemProps[]
  onValueChange?: (value: string[]) => void
}
```

## Default

```tsx
<CheckboxOptionCard
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
<CheckboxOptionCard
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
<CheckboxOptionCard
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
