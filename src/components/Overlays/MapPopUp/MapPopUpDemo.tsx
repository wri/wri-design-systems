import { useRef, useState } from 'react'
import { Button, getThemedColor, MapMarkers, List, MapPopUp } from '../..'
import DemoWrapper from '../../UI/DemoWrapper'
import { NotificationIcon, UserIcon } from '../../icons'

const MapPopUpDemo = () => {
  const [openPlant, setOpenPlant] = useState(false)
  const [openPoint, setOpenPoint] = useState(false)
  const [openDiv, setOpenDiv] = useState(false)
  const [openDark, setOpenDark] = useState(false)
  const triggerPlantRef = useRef<HTMLButtonElement>(null)
  const triggerPointRef = useRef<HTMLButtonElement>(null)
  const triggerDivRef = useRef<HTMLButtonElement>(null)
  const triggerDarkRef = useRef<HTMLButtonElement>(null)

  return (
    <DemoWrapper title='Map Pop Up'>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1.875rem',
        }}
      >
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

        <div>
          <MapMarkers.Point
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
                    id: 'nav-1',
                    label: 'Section 1',
                    caption: 'Additional information',
                    variant: 'navigation',
                    icon: <UserIcon />,
                    onItemClick: () => {},
                  },
                  {
                    id: 'nav-2',
                    label: 'Section 2',
                    caption: 'More details here',
                    variant: 'navigation',
                    icon: <UserIcon />,
                    onItemClick: () => {},
                  },
                  {
                    id: 'nav-3',
                    label: 'Section 3',
                    caption: 'Extra context',
                    variant: 'navigation',
                    icon: <UserIcon />,
                    onItemClick: () => {},
                  },
                  {
                    id: 'nav-4',
                    label: 'Section 4',
                    caption: 'Additional information',
                    variant: 'navigation',
                    icon: <UserIcon />,
                    onItemClick: () => {},
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
          <button
            ref={triggerDivRef}
            type='button'
            onClick={() => setOpenDiv(true)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem',
              minWidth: '12rem',
              padding: '1rem',
              textAlign: 'left',
              cursor: 'pointer',
              borderRadius: '0.5rem',
              border: `1px solid ${getThemedColor('neutral', 300)}`,
              backgroundColor: getThemedColor('neutral', 100),
            }}
          >
            <p
              style={{
                fontSize: '1rem',
                lineHeight: '1.5rem',
                fontWeight: 'bold',
                color: getThemedColor('neutral', 800),
              }}
            >
              Title
            </p>
            <p
              style={{
                fontSize: '0.875rem',
                lineHeight: '1.25rem',
                color: getThemedColor('neutral', 700),
              }}
            >
              Caption
            </p>
          </button>
          <MapPopUp
            open={openDiv}
            onOpenChange={setOpenDiv}
            anchorRef={triggerDivRef}
            placement='bottom'
            offset={20}
            closeOnOutsideClick
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
              <div style={{ padding: '0.75rem' }}>
                <p
                  style={{
                    fontSize: '0.875rem',
                    lineHeight: '1.25rem',
                    color: getThemedColor('neutral', 700),
                  }}
                >
                  Any element with a ref can be the anchor, not only map
                  markers.
                </p>
              </div>
            }
            footer={
              <div>
                <Button label='Label' size='small' />
              </div>
            }
          />
        </div>

        <div>
          <MapMarkers.Drop
            ariaLabel='drop icon'
            onClick={() => setOpenDark(true)}
            triggerRef={triggerDarkRef}
            showFocusState={openDark}
          />
          <MapPopUp
            open={openDark}
            onOpenChange={setOpenDark}
            anchorRef={triggerDarkRef}
            placement='right'
            offset={20}
            variant='dark'
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
                  <NotificationIcon color={getThemedColor('neutral', 100)} />
                  <p
                    style={{
                      fontSize: '1rem',
                      lineHeight: '1.5rem',
                      fontWeight: 'bold',
                      marginBottom: '0.25rem',
                      color: getThemedColor('neutral', 100),
                    }}
                  >
                    Title
                  </p>
                </div>
                <p
                  style={{
                    fontSize: '0.875rem',
                    lineHeight: '1.25rem',
                    color: getThemedColor('neutral', 200),
                  }}
                >
                  Caption
                </p>
              </div>
            }
            content={<div style={{ padding: '0.75rem' }}>content</div>}
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
