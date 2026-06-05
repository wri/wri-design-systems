import { createToaster, CreateToasterReturn } from '@chakra-ui/react'
import { ToastProps } from './types'

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
