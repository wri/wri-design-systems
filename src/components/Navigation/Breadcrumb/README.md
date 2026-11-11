# Breadcrumb

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/navigation-breadcrumb--docs)

[BreadcrumbDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Navigation/Breadcrumb/BreadcrumbDemo.tsx)

## Import

```tsx
import { Breadcrumb } from '@worldresources/wri-design-systems'
```

## Usage

Get paths based on your router approach

React Router

```tsx
import { Link, useLocation } from 'react-router-dom'

const location = useLocation()
const paths = location.pathname.split('/').slice(1)

const breadcrumbs = paths.map((p, index) => ({
  label: p,
  link: `/${paths.slice(0, index + 1).join('/')}`,
  icon: <PathIcon />,
}))
```

Next.js

```tsx
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const pathname = usePathname()
const paths = pathname.split('/').slice(1)

const breadcrumbs = paths.map((p, index) => ({
  label: p,
  link: `/${paths.slice(0, index + 1).join('/')}`,
}))
```

```tsx
<Breadcrumb links={breadcrumbs} linkRouter={Link} />
```

## Props

| Prop         | Type                                                        | Default           | Description                                                                          |
| ------------ | ----------------------------------------------------------- | ----------------- | ------------------------------------------------------------------------------------ |
| `links`      | `{ label: string; link: string; icon?: React.ReactNode }[]` | —                 | Array of breadcrumb links, each with a label, target link, and optional leading icon |
| `separator`  | `React.ReactNode`                                           | `ChevronDownIcon` | Custom separator node between breadcrumb items                                       |
| `maxItems`   | `number`                                                    | `99`              | Maximum number of links shown before collapsing into first, ellipsis, and last       |
| `linkRouter` | `any`                                                       | —                 | Link component from react router or next.js used to render navigable links           |
| `size`       | `'small' \| 'default'`                                      | `'default'`       | Size of the breadcrumb text and spacing                                              |

## Custom Separator

```tsx
<Breadcrumb links={breadcrumbs} separator='|' linkRouter={Link} />
```

## Max Items

```tsx
<Breadcrumb links={breadcrumbs} maxItems={5} linkRouter={Link} />
```

## Small size

```tsx
<Breadcrumb links={breadcrumbs} maxItems={5} linkRouter={Link} size='small' />
```
