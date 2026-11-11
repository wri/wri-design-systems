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

| Prop                    | Type                             | Default    | Description                                                       |
| ----------------------- | -------------------------------- | ---------- | ----------------------------------------------------------------- |
| `ariaLabel`             | `string`                         | —          | Accessible name for the avatar; defaults to the name              |
| `badgeSize`             | `BadgeSize`                      | `'large'`  | Size of the notification Badge                                    |
| `customBackgroundColor` | `string`                         | `''`       | Custom background color of the avatar circle                      |
| `customSize`            | `SizeValue`                      | —          | Custom size overriding the size preset                            |
| `disabled`              | `boolean`                        | `false`    | Whether the avatar is disabled                                    |
| `labels`                | `Partial<AvatarLabels>`          | —          | Override internal UI labels for internationalization support      |
| `name`                  | `string`                         | —          | Name used for the initials fallback and the default aria-label    |
| `notificationCount`     | `number`                         | —          | Notification count rendered as a Badge overlay                    |
| `onClick`               | `() => void`                     | —          | Called when the avatar is clicked; also gives it button semantics |
| `size`                  | `'small' \| 'medium' \| 'large'` | `'medium'` | Avatar size preset                                                |
| `src`                   | `string`                         | —          | Image source of the avatar                                        |
| `srcSet`                | `string`                         | —          | Image source set of the avatar                                    |

### Supporting types

```ts
type AvatarLabels = {
  /** Builds aria-label text for the notification count. Default: (count) => `${count} unread ${count === 1 ? 'message' : 'messages'}` */
  unreadMessagesLabel: (count: number) => string
}

type BadgeSize = 'small' | 'large'

type SizeValue = number | string
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

Notification counts reuse the `Badge` component (overlay layout).

```tsx
<Avatar
  name='Jane Doe'
  src='https://i.pravatar.cc/150?u=jane-doe'
  notificationCount={3}
  badgeSize='small'
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
