import { useRef, useState } from 'react'
import { Button, getThemedColor, MapMarkers } from '../../../..'
import GuidedTour from '.'
import DemoWrapper from '../../../../UI/DemoWrapper'
import { NotificationIcon } from '../../../../icons'
import type { GuidedTourStep } from './types'

const GuidedTourDemo = () => {
  const [open, setOpen] = useState(false)
  const [stepIndex, setStepIndex] = useState(0)
  const [finished, setFinished] = useState(false)
  const layersRef = useRef<HTMLButtonElement>(null)
  const legendRef = useRef<HTMLButtonElement>(null)
  const shareRef = useRef<HTMLButtonElement>(null)

  const bodyStyles = {
    padding: '0.75rem',
    color: getThemedColor('neutral', 100),
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
  }

  const steps: GuidedTourStep[] = [
    {
      id: 'layers',
      anchorRef: layersRef,
      placement: 'right',
      offset: 20,
      icon: <NotificationIcon color={getThemedColor('neutral', 100)} />,
      title: 'Layers',
      caption: 'Turn data on and off',
      content: (
        <div style={bodyStyles}>
          Use the layers panel to switch between datasets and reorder them on
          the map.
        </div>
      ),
    },
    {
      id: 'legend',
      anchorRef: legendRef,
      placement: 'right',
      offset: 20,
      icon: <NotificationIcon color={getThemedColor('neutral', 100)} />,
      title: 'Legend',
      caption: 'Read the map',
      content: (
        <div style={bodyStyles}>
          The legend explains what each color represents for the active layer.
        </div>
      ),
    },
    {
      id: 'share',
      anchorRef: shareRef,
      placement: 'left',
      offset: 20,
      icon: <NotificationIcon color={getThemedColor('neutral', 100)} />,
      title: 'Share',
      caption: 'Send it to your team',
      content: (
        <div style={bodyStyles}>
          Export the current view or share a link with your collaborators. The
          primary button on the last step calls `onFinish`.
        </div>
      ),
    },
  ]

  const startTour = () => {
    setStepIndex(0)
    setFinished(false)
    setOpen(true)
  }

  return (
    <DemoWrapper title='Guided Tour'>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '5rem',
          padding: '2rem 0',
        }}
      >
        <MapMarkers.Plant
          ariaLabel='layers icon'
          onClick={startTour}
          triggerRef={layersRef}
          showFocusState={open && stepIndex === 0}
        />
        <MapMarkers.Point
          ariaLabel='legend icon'
          triggerRef={legendRef}
          showFocusState={open && stepIndex === 1}
        />
        <MapMarkers.Drop
          ariaLabel='share icon'
          triggerRef={shareRef}
          showFocusState={open && stepIndex === 2}
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Button label='Start tour' size='small' onClick={startTour} />
          {finished ? <p>Tour completed</p> : null}
        </div>
      </div>

      <GuidedTour
        open={open}
        onOpenChange={setOpen}
        steps={steps}
        activeStepIndex={stepIndex}
        onStepChange={setStepIndex}
        onFinish={() => {
          setFinished(true)
          setOpen(false)
        }}
        onSkip={() => setOpen(false)}
      />
    </DemoWrapper>
  )
}

export default GuidedTourDemo
