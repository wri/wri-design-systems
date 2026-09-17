# Guided Tour

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/geospatial-map-pop-up-preset-guided-tour--docs)

[GuidedTourDemo](https://github.com/wri/wri-design-systems/blob/main/src/components/Geospatial/MapPopUp/presets/GuidedTour/GuidedTourDemo.tsx)

Step-by-step product tour built on top of [MapPopUp](../..). It renders a single popup at a
time, anchored to the element of the active step, and composes a footer with:

```
[ < ]  1 of 4  [ > ]                Skip all
```

- `<` / `>` navigate between steps. `<` is disabled on the first step.
- The counter uses the `stepCounterLabel` i18n label (`1 of 4` by default).
- On the **last step** the footer swaps `Skip all` for a primary **Start exploring**
  button (`startExploringLabel`) that calls `onFinish`; `>` also acts as Finish.
- The `>` icon is `primary/600` on both surfaces; `<` stays `neutral/500`.
  The navigation buttons have no background, with a subtle hover/active wash.

## Import

```tsx
import { GuidedTour } from '@worldresources/wri-design-systems'
import type { GuidedTourStep } from '@worldresources/wri-design-systems'
```

## Usage

```tsx
const [open, setOpen] = useState(false)
const [stepIndex, setStepIndex] = useState(0)
const layersRef = useRef<HTMLButtonElement>(null)
const legendRef = useRef<HTMLButtonElement>(null)

const steps: GuidedTourStep[] = [
  {
    id: 'layers',
    anchorRef: layersRef,
    placement: 'right',
    offset: 20,
    title: 'Layers',
    caption: 'Turn data on and off',
    content: <p>Use the layers panel to switch between datasets.</p>,
  },
  {
    id: 'legend',
    anchorRef: legendRef,
    placement: 'left',
    title: 'Legend',
    caption: 'Read the map',
    content: <p>The legend explains what each color represents.</p>,
  },
]

<button ref={layersRef} type='button' onClick={() => setOpen(true)}>
  Layers
</button>
<button ref={legendRef} type='button'>
  Legend
</button>

<GuidedTour
  open={open}
  onOpenChange={setOpen}
  steps={steps}
  activeStepIndex={stepIndex}
  onStepChange={setStepIndex}
  onFinish={() => setOpen(false)}
  onSkip={() => setOpen(false)}
/>
```

All anchors should be mounted before the tour opens, so that `MapPopUp` can measure
them when switching steps.

## Props

```ts
type GuidedTourLabels = {
  /** Builds the step counter shown in the footer. Default: (current, total) => `${current} of ${total}` */
  stepCounterLabel: (current: number, total: number) => string
  /** aria-label on the previous step button. Default: "Previous step" */
  previousStepLabel: string
  /** aria-label on the next step button. Default: "Next step" */
  nextStepLabel: string
  /** Label on the last step button. Default: "Finish" */
  finishLabel: string
  /** Label on the skip button. Default: "Skip all" */
  skipAllLabel: string
  /** Label on the primary button shown on the last step. Default: "Start exploring" */
  startExploringLabel: string
}

type GuidedTourStep = {
  /** Stable identifier for the step, useful as a React key and for tracking. */
  id: string
  /** The element the popup/connector should point to for this step. */
  anchorRef: React.RefObject<HTMLButtonElement | null>
  /** Preferred placement. Default: "bottom" */
  placement?: Placement
  /** Gap between anchor and popup. Also affects connector length. Default: 30 */
  offset?: number
  /** Bold heading rendered in the popup header. */
  title: React.ReactNode
  /** Optional secondary line under the title. */
  caption?: React.ReactNode
  /** Optional icon rendered before the title. */
  icon?: React.ReactNode
  /** Body of the step. */
  content: React.ReactNode
  /** Extra content appended below the tour footer controls for this step. */
  footer?: React.ReactNode
  /** Override internal MapPopUp labels for this step. */
  labels?: Partial<MapPopUpLabels>
}

type GuidedTourProps = {
  /** Whether the tour is visible. */
  open: boolean
  onOpenChange: (open: boolean) => void
  /** The tour steps, in order. */
  steps: GuidedTourStep[]
  /** Zero-based index of the visible step. */
  activeStepIndex: number
  /** Called with the next/previous index when navigating. */
  onStepChange: (index: number) => void
  /** Called on Finish (last step). Defaults to closing the tour. */
  onFinish?: () => void
  /** Called on Skip all. Defaults to closing the tour. */
  onSkip?: () => void
  /** Surface style of the popup. Default: "dark" */
  variant?: 'default' | 'dark'
  /** Close the tour with the Escape key. Default: true */
  closeOnEscape?: boolean
  /** Close the tour when clicking outside the popup. Default: false */
  closeOnOutsideClick?: boolean
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<GuidedTourLabels>
}
```
