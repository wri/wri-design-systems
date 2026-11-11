# CheckboxOptionCard

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/forms-controls-checkbox-option-card--docs)

[CheckboxOptionCardDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Forms/Controls/CheckboxOptionCard/CheckboxOptionCardDemo.tsx)

## Import

```tsx
import { CheckboxOptionCard } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<CheckboxOptionCard
  items={[
    { label: 'Label', caption: 'Caption', value: 'value-1' },
    { label: 'Label', caption: 'Caption', value: 'value-2' },
  ]}
/>
```

## Props

| Prop            | Type                            | Default | Description                                                                    |
| --------------- | ------------------------------- | ------- | ------------------------------------------------------------------------------ |
| `defaultValue`  | `string[]`                      | —       | Values of the items initially checked. When omitted, every item starts checked |
| `items`         | `CheckboxOptionCardItemProps[]` | —       | List of option card items to render                                            |
| `onValueChange` | `(value: string[]) => void`     | —       | Called with the array of checked values when the selection changes             |

### Supporting types

```ts
type CheckboxOptionCardItemProps = {
  /** Visible label text of the card */
  label: string
  /** Secondary caption text under the label */
  caption?: string
  /** Icon rendered to the left of (or above, when centered) the label */
  icon?: React.ReactNode
  /** Visual layout of the card. Defaults to `default` */
  variant?: 'default' | 'centered' | 'expanded'
  /** Disables the card and applies disabled styles */
  disabled?: boolean
  /** Extra content rendered in the addon area. Only rendered with variant expanded */
  children?: React.ReactNode
  /** Unique value submitted for the item when checked */
  value: string
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
