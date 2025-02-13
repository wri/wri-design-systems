# Breadcrumb

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/navigation-breadcrumb--docs)

[BreadcrumbDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Navigation/Breadcrumb/BreadcrumbDemo.tsx)

## Import

```tsx
import { Breadcrumb } from '@worldresources/wri-design-systems'
```

## Usage

Get paths based on your router approach

```tsx
const location = useLocation()
const paths = location.pathname.split('/').slice(1)
const breadcrumbs = paths.map((p, index) => ({
  label: p,
  link: `/${paths.slice(0, index + 1).join('/')}`,
  icon: <PathIcon />,
}))
```

```tsx
<Breadcrumb links={breadcrumbs} />
```

## Props

```ts
type BreadcrumbProps = {
  links: { label: string; link: string; icon?: React.ReactNode }[]
  separator?: React.ReactNode
  maxItems?: number
}
```

## Custom Separator

```tsx
<Breadcrumb links={breadcrumbs} separator='|' />
```

## Max Items

```tsx
<Breadcrumb links={breadcrumbs} maxItems={5} />
```
