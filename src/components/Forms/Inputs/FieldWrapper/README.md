# FieldWrapper

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/forms-inputs-field-wrapper--docs)

## Import

```tsx
import { FieldWrapper } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<FieldWrapper label='Name' caption='Your full name' required>
  <TextInput placeholder='placeholder' />
</FieldWrapper>
```

## Props

| Prop                | Type                                   | Default     | Description                                                                                                                                     |
| ------------------- | -------------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `caption`           | `string`                               | —           | Helper text rendered below the label                                                                                                            |
| `captionId`         | `string`                               | —           | Optional id on the caption element (for aria-describedby)                                                                                       |
| `children`          | `React.ReactNode`                      | —           | Control content rendered inside the field                                                                                                       |
| `className`         | `string`                               | —           | Additional className applied to the root container                                                                                              |
| `containerProps`    | `React.HTMLAttributes<HTMLDivElement>` | —           | Extra props applied to the outer container element                                                                                              |
| `disabled`          | `boolean`                              | —           | Applies disabled styling to the label and caption                                                                                               |
| `errorId`           | `string`                               | —           | Optional id on the error element (for aria-describedby)                                                                                         |
| `errorMessage`      | `string`                               | —           | Error message rendered below the control; also shows the error bar                                                                              |
| `footer`            | `React.ReactNode`                      | —           | Optional slot rendered after the control (e.g. Textarea char-count / min-max errors)                                                            |
| `invalid`           | `boolean`                              | —           | Forces the error-bar / invalid state even when `errorMessage` is empty (e.g. Textarea min/max validation shown in the footer)                   |
| `label`             | `React.ReactNode`                      | —           | Field label rendered above the control                                                                                                          |
| `labels`            | `FieldWrapperLabels`                   | —           | Override strings used by field-semantics labels                                                                                                 |
| `noMarginBottom`    | `boolean`                              | `false`     | Removes the bottom margin below the field                                                                                                       |
| `required`          | `boolean`                              | —           | Marks the field as required and shows the required indicator                                                                                    |
| `semantics`         | `'field' \| 'group'`                   | `'field'`   | `field` — Chakra Field primitives (TextInput, Textarea, Combobox). `group` — plain markup for composite / list inputs (Select, RadioList, etc.) |
| `showOptionalLabel` | `boolean`                              | `false`     | Shows the "(optional)" suffix for non-required fields                                                                                           |
| `size`              | `FieldWrapperSize`                     | `'default'` | Controls the spacing and text size of the label, caption and content                                                                            |

### Supporting types

```ts
type FieldWrapperSize = 'small' | 'default'

type FieldWrapperLabels = {
  requiredSymbolLabel?: string // Default: "required"
  optionalSuffix?: ReactNode // Default: "(optional)"
}
```
