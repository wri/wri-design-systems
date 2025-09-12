# MultiActionButton

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/forms-actions-multi-action-button--docs)

[MultiActionButtonDemo](https://github.com/wri/wri-design-systems/tree/main/src/components/Forms/Actions/MultiActionButton/MultiActionButtonDemo.tsx)

## Import

```tsx
import { MultiActionButton } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<MultiActionButton
  variant='primary'
  mainActionLabel='First Action'
  mainActionOnClick={() => console.log('first action')}
  otherActions={[
    {
      label: 'Second Action',
      value: 'second-action',
      onClick: () => console.log('second action'),
    },
    {
      label: 'Third Action',
      value: 'third-action',
      onClick: () => console.log('third action'),
    },
  ]}
/>
```

## Props

```ts
type MultiActionButtonProps = Omit<
  ChakraButtonProps,
  'size' | 'variant' | 'colorPalette' | 'children'
> & {
  variant?: 'primary' | 'secondary'
  size?: 'default' | 'small'
  mainActionLabel: string
  mainActionOnClick: VoidFunction
  otherActions: {
    label: React.ReactNode
    value: string
    onClick: VoidFunction
  }[]
  disabled?: boolean
}
```

## Primary

```tsx
<MultiActionButton
  variant='primary'
  mainActionLabel='First Action'
  mainActionOnClick={() => console.log('first action')}
  otherActions={[
    {
      label: 'Second Action',
      value: 'second-action',
      onClick: () => console.log('second action'),
    },
    {
      label: 'Third Action',
      value: 'third-action',
      onClick: () => console.log('third action'),
    },
  ]}
/>
```

## Secondary

```tsx
<MultiActionButton
  variant='secondary'
  mainActionLabel='First Action'
  mainActionOnClick={() => console.log('first action')}
  otherActions={[
    {
      label: 'Second Action',
      value: 'second-action',
      onClick: () => console.log('second action'),
    },
    {
      label: 'Third Action',
      value: 'third-action',
      onClick: () => console.log('third action'),
    },
  ]}
/>
```

### Small

```tsx
<MultiActionButton
  variant='primary'
  size='small
  mainActionLabel='First Action'
  mainActionOnClick={() => console.log('first action')}
  otherActions={[
    {
      label: 'Second Action',
      value: 'second-action',
      onClick: () => console.log('second action'),
    },
    {
      label: 'Third Action',
      value: 'third-action',
      onClick: () => console.log('third action'),
    },
  ]}
/>
```

### Disabled

```tsx
<MultiActionButton
  variant='primary'
  mainActionLabel='First Action'
  mainActionOnClick={() => console.log('first action')}
  otherActions={[
    {
      label: 'Second Action',
      value: 'second-action',
      onClick: () => console.log('second action'),
    },
    {
      label: 'Third Action',
      value: 'third-action',
      onClick: () => console.log('third action'),
    },
  ]}
  disabled
/>
```
