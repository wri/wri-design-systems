# MapControl

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/forms-buttons-map-control--docs)

[MapControlDemo](https://github.com/wri/wri-design-systems/tree/main/src/components/Forms/Buttons/MapControl/MapControlDemo.tsx)

## Import

```tsx
import { MapControl } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<MapControl
  items={[
    {
      icon: <CheckIcon />,
      ariaLabel: 'check',
    },
  ]}
/>
```

## Props

```ts
type MapControlProps = {
  items: {
    icon: React.ReactNode
    onClick?: () => void
    disabled?: boolean
    ariaLabel: string
  }[]
  vertical?: boolean
}
```

## Map Control

```tsx
<MapControl
  items={[
    {
      icon: <PlusIcon />,
      ariaLabel: 'zoom in',
      onClick: onZoomInClick,
    },
    {
      icon: <MinusIcon />,
      ariaLabel: 'zoom out',
      onClick: onZoomOutClick,
    },
  ]}
/>
```

## Vertical

```tsx
<MapControl
  items={[
    {
      icon: <PlusIcon />,
      ariaLabel: 'zoom in',
      onClick: onZoomInClick,
    },
    {
      icon: <MinusIcon />,
      ariaLabel: 'zoom out',
      onClick: onZoomOutClick,
    },
  ]}
  vertical={vertical}
/>
```

## Single

```tsx
<MapControl
  items={[
    {
      icon: <CheckIcon />,
      ariaLabel: 'check',
    },
  ]}
/>
```

## Disabled

```tsx
<MapControl
  items={[
    {
      icon: <CheckIcon />,
      ariaLabel: 'check',
      disabled: true,
    },
  ]}
/>
```

## Presets

```tsx
import { MapControls } from '@worldresources/wri-design-systems'
```

```tsx
<div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
  <MapControls.Zoom onZoomInClick={() => {}} onZoomOutClick={() => {}} />
  <MapControls.Expand onClick={() => {}} />
  <MapControls.Share onClick={() => {}} />
  <MapControls.Print onClick={() => {}} />
  <MapControls.Settings onClick={() => {}} />
  <MapControls.Question onClick={() => {}} />
</div>
```
