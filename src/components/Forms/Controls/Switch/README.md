# Switch

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/forms-controls-switch--docs)

[SwitchDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Forms/Controls/Switch/SwitchDemo.tsx)

## Import

```tsx
import { Switch } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<Switch name='switch'> Switch </Switch>
```

## Props

```ts
type SwitchProps = Omit<
  ChakraSwitch.RootProps,
  | 'size'
  | 'variant'
  | 'colorPalette'
  | 'invalid'
  | 'onCheckedChange'
  | 'onChange'
> & {
  name: string
  onChange?: (name: string, checked: boolean) => void
  defaultChecked?: boolean
  disabled?: boolean
  isLabelOnLeft?: boolean
}
```

## Default Checked

```tsx
<Switch name='switch' defaultChecked>
  Switch
</Switch>
```

## Disabled

```tsx
<Switch name='switch 1' disabled>
  Switch
</Switch>
```

```tsx
<Switch name='switch 2' disabled checked>
  Switch
</Switch>
```
