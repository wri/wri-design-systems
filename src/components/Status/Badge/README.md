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

| Prop                | Type                   | Default   | Description                                                  |
| ------------------- | ---------------------- | --------- | ------------------------------------------------------------ |
| `children`          | `React.ReactNode`      | —         | Custom content rendered instead of the default bell icon     |
| `hasNotification`   | `boolean`              | —         | Whether to show the notification dot when there is no count  |
| `label`             | `string`               | —         | Text label rendered next to the notification                 |
| `labels`            | `Partial<BadgeLabels>` | —         | Override internal UI labels for internationalization support |
| `notificationCount` | `number`               | —         | Number to display; counts above 99 render as 99+             |
| `size`              | `BadgeSize`            | `'large'` | Size of the notification indicator                           |

### Supporting types

```ts
type BadgeLabels = {
  /** Builds aria-label text for the notification count. Default: (count) => `${count} unread ${count === 1 ? 'message' : 'messages'}` */
  unreadMessagesLabel: (count: number) => string
}

type BadgeSize = 'small' | 'large'
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
