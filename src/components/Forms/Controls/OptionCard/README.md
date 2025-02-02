# OptionCard

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/forms-controls-option-card--docs)

[RadioDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Forms/Controls/OptionCard/OptionCardDemo.tsx)

## Import

```tsx
import { OptionCardGroup, OptionCard } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<OptionCardGroup>
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
    value='value-2'
  />
  <OptionCard
    label='Label'
    caption='Caption'
    icon={<InfoIcon />}
    value='value-3'
  />
</OptionCardGroup>
```

## Props

```ts
type OptionCardGroupProps = Omit<
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
  onValueChange?: ({ value }: { value: string }) => void
}
```

```ts
type OptionCardProps = {
  label: string
  caption?: string
  icon?: React.ReactNode
  variant?: 'default' | 'centered' | 'expanded'
  disabled?: boolean
  children?: React.ReactNode
  value: string
}
```

## Default

```tsx
<OptionCardGroup>
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
    value='value-2'
  />
  <OptionCard
    label='Label'
    caption='Caption'
    icon={<InfoIcon />}
    value='value-3'
  />
</OptionCardGroup>
```

## Centered

```tsx
<OptionCardGroup>
  <OptionCard
    label='Label'
    caption='Caption'
    icon={<InfoIcon />}
    variant='centered'
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
    variant='centered'
    value='value-3'
  />
</OptionCardGroup>
```

## Expanded

```tsx
<OptionCardGroup>
  <OptionCard
    label='Label'
    caption='Caption'
    icon={<InfoIcon />}
    variant='expanded'
    value='value-1'
  >
    <div>Component Placeholder</div>
    <div>Component Placeholder</div>
    <div>Component Placeholder</div>
  </OptionCard>
  <OptionCard
    label='Label'
    caption='Caption'
    icon={<InfoIcon />}
    variant='expanded'
    value='value-2'
  >
    <div>Component Placeholder</div>
    <div>Component Placeholder</div>
    <div>Component Placeholder</div>
  </OptionCard>
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
</OptionCardGroup>
```

## Default Checked

```tsx
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
    value='value-2'
  />
  <OptionCard
    label='Label'
    caption='Caption'
    icon={<InfoIcon />}
    value='value-3'
  />
</OptionCardGroup>
```

## Disabled

```tsx
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
    value='value-2'
    disabled
  />
  <OptionCard
    label='Label'
    caption='Caption'
    icon={<InfoIcon />}
    value='value-3'
  />
</OptionCardGroup>
```
