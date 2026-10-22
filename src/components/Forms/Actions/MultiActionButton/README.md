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
  ButtonProps,
  'label' | 'leftIcon' | 'rightIcon' | 'onClick' | 'children' | 'css'
> & {
  mainActionLeftIcon?: React.ReactNode
  mainActionRightIcon?: React.ReactNode
  mainActionLabel: string
  mainActionOnClick: VoidFunction
  otherActions: {
    label: React.ReactNode
    value: string
    onClick: VoidFunction
    disabled?: boolean
  }[]
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

## States

State behavior per variant (primary values shown; other variants follow the
same principle with their own tokens — see the `States` story):

| State    | Main segment                                               | Trigger (chevron) segment                                              |
| -------- | ---------------------------------------------------------- | ---------------------------------------------------------------------- |
| Default  | `primary-500` bg, `primary-600` border                     | Same as main                                                           |
| Hover    | `primary-500` bg + elevated shadow                         | Same + `primary-800` border                                            |
| Pressed  | `primary-600` bg, `primary-700` border                     | Same, also while the menu is open                                      |
| Open     | unchanged                                                  | `primary-500` bg (default), `primary-800` border, chevron rotated 180° |
| Disabled | `neutral-300` bg, `neutral-400` border, `neutral-500` text | Same                                                                   |

> Note: only the `primary` variant states are fully specified in Figma so far
> (tracked in [DS-362](https://gfw.atlassian.net/browse/DS-362)). Other
> variants apply the same principle (default background + one-step darker
> border on hover/open) with the closest available tokens.
