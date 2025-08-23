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
type BadgeProps = {
  hasNotification?: boolean
  notificationCount?: number
  label?: string
}
```

## Notification Bell

```tsx
<Badge />
```

## Notification Count

```tsx
<Badge notificationCount={100} />
```

## Notification Count With Label

```tsx
<Badge label='Notifications' notificationCount={100} />
```

## Notification Dot

```tsx
<Badge hasNotification />
```
