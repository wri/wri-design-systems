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

| Prop             | Type                                       | Default                         | Description                                                          |
| ---------------- | ------------------------------------------ | ------------------------------- | -------------------------------------------------------------------- |
| `aria-label`     | `string`                                   | `labels.defaultAriaLabel(name)` | Overrides the default aria-label built from the name                 |
| `checked`        | `boolean`                                  | —                               | Controlled checked state                                             |
| `children`       | `React.ReactNode`                          | —                               | Label text rendered beside the switch                                |
| `defaultChecked` | `boolean`                                  | `false`                         | Checked state on first render (uncontrolled)                         |
| `disabled`       | `boolean`                                  | `false`                         | Disables the switch and applies disabled styles                      |
| `isLabelOnLeft`  | `boolean`                                  | `false`                         | Renders the label to the left of the track instead of the right      |
| `labels`         | `Partial<SwitchLabels>`                    | —                               | Override internal UI labels for internationalization support         |
| `name`           | `string`                                   | —                               | Name of the switch, also used as its id and in the onChange callback |
| `onChange`       | `(name: string, checked: boolean) => void` | —                               | Called with the switch name and the new checked state when toggled   |

### Supporting types

```ts
/** Labels for Switch internal UI strings. Override any key to provide translations */
type SwitchLabels = {
  /** Fallback aria-label when no aria-label prop is provided. Default: (name) => name */
  defaultAriaLabel: (name: string) => string
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
