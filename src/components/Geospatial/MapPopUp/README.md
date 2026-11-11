# Map Pop Up

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/geospatial-map-pop-up--docs)

[MapPopUpDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Geospatial/MapPopUp/MapPopUpDemo.tsx)

## Import

```tsx
import { MapPopUp } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
const [openPlant, setOpenPlant] = useState(false)
const triggerPlantRef = useRef<HTMLButtonElement>(null)

.
.
.

<div>
  <MapMarkers.Plant
    ariaLabel='plant icon'
    onClick={() => setOpenPlant(true)}
    triggerRef={triggerPlantRef}
    showFocusState={openPlant}
  />
  <MapPopUp
    open={openPlant}
    onOpenChange={setOpenPlant}
    anchorRef={triggerPlantRef}
    placement='right'
    offset={20}
    header={
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: '0.25rem',
          }}
        >
          <NotificationIcon />
          <p
            style={{
              fontSize: '1rem',
              lineHeight: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '0.25rem',
              color: getThemedColor('neutral', 800),
            }}
          >
            Title
          </p>
        </div>
        <p
          style={{
            fontSize: '0.875rem',
            lineHeight: '1.25rem',
            color: getThemedColor('neutral', 700),
          }}
        >
          Caption
        </p>
      </div>
    }
    content={
      <List
        items={[
          {
            id: 'data-1',
            label: 'Label',
            value: 'Data',
            variant: 'data',
            icon: <UserIcon />,
          },
          {
            id: 'data-2',
            label: 'Label',
            value: 'Data',
            variant: 'data',
            icon: <UserIcon />,
          },
          {
            id: 'data-3',
            label: 'Label',
            value: 'Data',
            variant: 'data',
            icon: <UserIcon />,
          },
          {
            id: 'data-4',
            label: 'Label',
            value: 'Data',
            variant: 'data',
            icon: <UserIcon />,
          },
        ]}
        noBorder
      />
    }
    footer={
      <div>
        <Button label='Label' size='small' />
      </div>
    }
  />
</div>
```

## Props

| Prop                  | Type                                         | Default     | Description                                                                                                                                                |
| --------------------- | -------------------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `anchorRef`           | `React.RefObject<HTMLButtonElement \| null>` | `—`         | The element that the modal/connector should point to                                                                                                       |
| `closeOnEscape`       | `boolean`                                    | `true`      | Closes the popup when the escape key is pressed                                                                                                            |
| `closeOnOutsideClick` | `boolean`                                    | `false`     | Closes the popup when clicking outside of it                                                                                                               |
| `content`             | `React.ReactNode`                            | `—`         | Main content rendered in the popup body                                                                                                                    |
| `footer`              | `React.ReactNode`                            | `—`         | Optional content rendered in the popup footer                                                                                                              |
| `header`              | `React.ReactNode`                            | `—`         | Content rendered in the popup header, next to the close button                                                                                             |
| `labels`              | `Partial<MapPopUpLabels>`                    | `—`         | Override internal UI labels for internationalization support                                                                                               |
| `offset`              | `number`                                     | `30`        | Gap between anchor and modal. Also affects connector length                                                                                                |
| `onOpenChange`        | `(open: boolean) => void`                    | `—`         | Called with the next open state when the popup opens or closes                                                                                             |
| `open`                | `boolean`                                    | `—`         | Controls whether the popup is rendered                                                                                                                     |
| `placement`           | `Placement`                                  | `'bottom'`  | Preferred placement of the popup relative to the anchor, flipped when there is not enough space                                                            |
| `variant`             | `'default' \| 'dark'`                        | `'default'` | Surface style of the popup. `dark` uses neutral/800 as background, neutral/100 as text color and neutral/900 for the connector (arrow). Default: "default" |

### Supporting types

- `Placement` — placement string from `@floating-ui/react` (for example `'bottom'`, `'right'`, `'top-start'`)
- `MapPopUpLabels` — full shape documented below

```ts
type MapPopUpLabels = {
  /** aria-label on the popup dialog container. Default: "Map popup dialog" */
  dialogAriaLabel: string
  /** aria-label on the close button. Default: "Close" */
  closeLabel: string
}
```
