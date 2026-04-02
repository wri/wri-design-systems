# FormContainer

[FormContainerDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Forms/FormContainer/FormContainerDemo.tsx)

## Import

```tsx
import { FormContainer } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<FormContainer
  label='Select options'
  error='Please select at least one option.'
>
  {/* checkbox groups or other form controls */}
</FormContainer>
```

## Props

```ts
type FormContainerProps = {
  label?: string
  error?: string
  children: ReactNode
}
```

## With multiple checkbox groups

```tsx
<FormContainer label='Select options' error={hasError ? 'Please select at least one option.' : undefined}>
  <Stack>
    {/* group 1 */}
    <Stack>
      <Checkbox checked={allG1} indeterminate={indG1} onCheckedChange={...}>Group 1</Checkbox>
      {g1Items.map(...)}
    </Stack>
    {/* group 2 */}
    <Stack>
      <Checkbox checked={allG2} indeterminate={indG2} onCheckedChange={...}>Group 2</Checkbox>
      {g2Items.map(...)}
    </Stack>
  </Stack>
</FormContainer>
```
