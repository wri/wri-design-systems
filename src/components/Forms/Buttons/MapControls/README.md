# MapControls

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/forms-buttons-map-controls--docs)

[MapControlsDemo](https://github.com/wri/wri-design-systems/tree/main/src/components/Forms/Buttons/MapControls/MapControlsDemo.tsx)

## Import

```tsx
import { MapControls } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
<MapControls
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
type MapControlsProps = {
  items: {
    icon: React.ReactNode
    onClick?: () => void
    disabled?: boolean
    ariaLabel: string
  }[]
  vertical?: boolean
}
```

## Map Controls

```tsx
<MapControls
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
<MapControls
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
<MapControls
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
<MapControls
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
<div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
  <MapControlsPresets.Zoom onZoomInClick={() => {}} onZoomOutClick={() => {}} />
  <MapControlsPresets.Expand onClick={() => {}} />
  <MapControlsPresets.Share onClick={() => {}} />
  <MapControlsPresets.Print onClick={() => {}} />
  <MapControlsPresets.Settings onClick={() => {}} />
  <MapControlsPresets.Question onClick={() => {}} />
</div>
```
