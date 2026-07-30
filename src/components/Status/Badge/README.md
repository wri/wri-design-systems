# Badge

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/status-badge--docs)

[BadgeDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Status/Badge/BadgeDemo.tsx)

## Import

```tsx
import { Badge } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<Badge />
```

## Props

```ts
type BadgeLabels = {
  unreadMessagesLabel: (count: number) => string
}

type BadgeProps = {
  hasNotification?: boolean
  notificationCount?: number
  label?: string
  size?: 'small' | 'large'
  labels?: Partial<BadgeLabels>
  children?: React.ReactNode
}
```

## Notification Bell

```tsx
<Badge />
<Badge size='small' />
<Badge size='large' />
```

## Notification Dot

```tsx
<Badge hasNotification size='small' />
<Badge hasNotification size='large' />
```

## Notification Count

```tsx
<Badge notificationCount={3} size='small' />
<Badge notificationCount={3} size='large' />
<Badge notificationCount={12} size='large' />
```

## Count Overflow (99+)

```tsx
<Badge notificationCount={100} size='small' />
<Badge notificationCount={150} size='large' />
```

## With Label

```tsx
<Badge label='Notifications' notificationCount={3} size='large' />
<Badge label='Notifications' hasNotification size='small' />
```

## Custom Icon

```tsx
<Badge notificationCount={3} size='large'>
  <UserIcon color='currentColor' height='1.5rem' width='1.5rem' />
</Badge>
```
