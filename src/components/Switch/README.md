# Switch

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/forms-controls-switch--docs)

[SwitchDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Switch/SwitchDemo.tsx)

## Import

```js
import { Switch } from '@worldresources/wri-design-systems'
```

## Usage

```html
<Switch name="switch"> Switch </Switch>
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

```html
<Switch name="switch" defaultChecked> Switch </Switch>
```

## Disabled

```html
<Switch name="switch 1" disabled> Switch </Switch>
```

```html
<Switch name="switch 2" disabled checked> Switch </Switch>
```
