# Avatar

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/status-avatar--docs)

[AvatarDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Status/Avatar/AvatarDemo.tsx)

## Import

```tsx
import { Avatar } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<Avatar name='John Doe' src='https://bit.ly/sage-adebayo' />
```

## Props

```ts
type AvatarProps = {
  name: string
  ariaLabel?: string
  size?: 'small' | 'medium' | 'large'
  customSize?: string
  src?: string
  srcSet?: string
  onClick?: () => void
  notificationCount?: number
  disabled?: boolean
  customBackgroundColor?: string
}
```

## Avatar

```tsx
<Avatar
  name='Michael Scott'
  src='https://i.pravatar.cc/150?u=michael-scott'
  onClick={() => console.log('clicked')}
/>
```

## With Notification

```tsx
<Avatar
  name='Jane Doe'
  src='https://i.pravatar.cc/150?u=jane-doe'
  notificationCount={3}
/>
```

## With Tooltip

```tsx
<Tooltip content='Fenny Delphine'>
  <Avatar
    name='Fenny Delphine'
    src='https://i.pravatar.cc/150?u=fenny-delphine'
  />
</Tooltip>
```
