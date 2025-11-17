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
  <IconMarkers.Plant
    ariaLabel='plant icon'
    onClick={() => setOpenPlant(true)}
    triggerRef={triggerPlantRef}
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
            gap: '4px',
          }}
        >
          <NotificationIcon />
          <p
            style={{
              fontSize: '16px',
              lineHeight: '24px',
              fontWeight: 'bold',
              marginBottom: '4px',
              color: getThemedColor('neutral', 800),
            }}
          >
            Title
          </p>
        </div>
        <p
          style={{
            fontSize: '14px',
            lineHeight: '20px',
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

```ts
type MapPopUpProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  /** The element that the modal/connector should point to */
  anchorRef: React.RefObject<HTMLElement>
  header: React.ReactNode
  content: React.ReactNode
  footer?: React.ReactNode
  placement?: Placement
  /** Gap between anchor and modal. Also affects connector length */
  offset?: number // default: 30
  closeOnEscape?: boolean // default: true
  closeOnOutsideClick?: boolean // default: false
}
```
