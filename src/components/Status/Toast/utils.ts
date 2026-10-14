import { createToaster, CreateToasterReturn } from '@chakra-ui/react'
import { ToastProps } from './types'

/**
 * Only one mounted `<Toast />` instance may render the toaster UI.
 *
 * The toaster stores below are module-level singletons shared by every
 * `<Toast />` instance. If more than one instance is mounted at the same time
 * (e.g. Storybook Docs renders the primary story twice, or a consumer mounts
 * `<Toast />` in two places), each instance renders its own portal for every
 * store, so a single `showToast()` call appears multiple times on screen.
 *
 * `claimToastRenderer` hands rendering ownership to a single instance at a
 * time. When the owner unmounts it releases the claim and the next mounted
 * instance takes over, so the toasts keep working.
 */
let toastRendererMounted = false
const pendingClaims = new Set<() => void>()

const handOver = () => {
  toastRendererMounted = false
  const [next] = pendingClaims
  if (next) {
    pendingClaims.delete(next)
    next()
  }
}

/**
 * Try to become the single renderer of the toaster UI.
 *
 * Returns a release function (idempotent). If the claim is granted
 * immediately, calling release hands ownership to the next queued instance.
 * If another instance currently owns the render, the claim is queued and
 * `onClaim` runs once the current owner releases; calling release before that
 * cancels the queued claim (e.g. when the instance unmounts while waiting).
 */
export const claimToastRenderer = (onClaim: () => void): (() => void) => {
  let ownsRender = false
  let queuedClaim: (() => void) | undefined

  const release = () => {
    if (!ownsRender) return
    ownsRender = false
    handOver()
  }

  const claim = () => {
    toastRendererMounted = true
    ownsRender = true
    queuedClaim = undefined
    onClaim()
  }

  if (!toastRendererMounted) {
    claim()
  } else {
    queuedClaim = () => claim()
    pendingClaims.add(queuedClaim)
  }

  return () => {
    if (ownsRender) {
      release()
      return
    }
    // Cancel a claim that is still waiting in the queue.
    if (queuedClaim) pendingClaims.delete(queuedClaim)
  }
}

const commonProps = {
  pauseOnPageIdle: true,
  offsets: '1.5rem',
}

const topStartToast = createToaster({
  placement: 'top-start',
  ...commonProps,
})

const topToast = createToaster({
  placement: 'top',
  ...commonProps,
})

const topEndToast = createToaster({
  placement: 'top-end',
  ...commonProps,
})

const bottomStartToast = createToaster({
  placement: 'bottom-start',
  ...commonProps,
})

const bottomToast = createToaster({
  placement: 'bottom',
  ...commonProps,
})

const bottomEndToast = createToaster({
  placement: 'bottom-end',
  ...commonProps,
})

export const toasters: { [key: string]: CreateToasterReturn } = {
  'top-start': topStartToast,
  top: topToast,
  'top-end': topEndToast,
  'bottom-start': bottomStartToast,
  bottom: bottomToast,
  'bottom-end': bottomEndToast,
}

export const showToast = (props: ToastProps) => {
  const toaster = toasters[props.placement]

  toaster.create({
    title: props.label,
    description: props.caption,
    duration: props.duration || 5000,
    meta: {
      closable: props.closable,
      icon: props.icon,
      closableLabel: props.closableLabel,
      onClose: props.onClose,
      maxWidth: props.maxWidth,
    },
    ...props,
  })
}

export const closeToast = (id?: string) => {
  Object.values(toasters).forEach((toaster) => {
    toaster.dismiss(id)
  })
}
