import { useRef, useState } from 'react'
import { Button, getThemedColor, IconMarkers, List, MapPopUp } from '../..'
import DemoWrapper from '../../UI/DemoWrapper'
import { NotificationIcon, UserIcon } from '../../icons'

const MapPopUpDemo = () => {
  const [openPlant, setOpenPlant] = useState(false)
  const [openPoint, setOpenPoint] = useState(false)
  const triggerPlantRef = useRef<HTMLButtonElement>(null)
  const triggerPointRef = useRef<HTMLButtonElement>(null)

  return (
    <DemoWrapper title='Map Pop Up'>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '30px',
        }}
      >
        <div>
          <IconMarkers.Plant
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

        <div>
          <IconMarkers.Point
            ariaLabel='point icon'
            onClick={() => setOpenPoint(true)}
            triggerRef={triggerPointRef}
            showFocusState={openPoint}
          />
          <MapPopUp
            open={openPoint}
            onOpenChange={setOpenPoint}
            anchorRef={triggerPointRef}
            placement='left'
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
                    id: 'nav-1',
                    label: 'Section 1',
                    caption: 'Additional information',
                    variant: 'navigation',
                    icon: <UserIcon />,
                  },
                  {
                    id: 'nav-2',
                    label: 'Section 2',
                    caption: 'More details here',
                    variant: 'navigation',
                    icon: <UserIcon />,
                  },
                  {
                    id: 'nav-3',
                    label: 'Section 3',
                    caption: 'Extra context',
                    variant: 'navigation',
                    icon: <UserIcon />,
                  },
                  {
                    id: 'nav-4',
                    label: 'Section 4',
                    caption: 'Additional information',
                    variant: 'navigation',
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
      </div>
    </DemoWrapper>
  )
}

export default MapPopUpDemo
