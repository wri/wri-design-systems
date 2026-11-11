# Panel

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/containers-panel-panel--docs)

[PanelDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Containers/Panel/PanelDemo.tsx)

## Import

```tsx
import { Panel } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<Panel
  header={<div>Header</div>}
  content={<div>Content</div>}
  footer={<div>Footer</div>}
/>
```

## Props

| Prop      | Type                    | Default   | Description                                                                                                |
| --------- | ----------------------- | --------- | ---------------------------------------------------------------------------------------------------------- |
| `content` | `React.ReactNode`       | `—`       | Main content rendered in the panel body                                                                    |
| `footer`  | `React.ReactNode`       | `—`       | Optional content rendered in the panel footer                                                              |
| `header`  | `React.ReactNode`       | `—`       | Optional content rendered in the panel header; used as the accessible name for the region                  |
| `variant` | `'fixed' \| 'floating'` | `'fixed'` | Visual treatment of the panel; fixed adds a right border, floating adds a full border with rounded corners |
| `width`   | `SizeValue`             | `'20rem'` | Panel width, recommended between 15rem and 35rem. Defaults to 20rem                                        |

### Supporting types

```ts
type SizeValue = number | string
```
