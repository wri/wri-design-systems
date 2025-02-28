import { createToaster, CreateToasterReturn } from '@chakra-ui/react'
import { ToastProps } from './types'

const commonProps = {
  pauseOnPageIdle: true,
  offsets: '24px',
}

const topStartToast = createToaster({
  placement: 'top-start',
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

const bottomEndToast = createToaster({
  placement: 'bottom-end',
  ...commonProps,
})

export const toasters: { [key: string]: CreateToasterReturn } = {
  'top-start': topStartToast,
  'top-end': topEndToast,
  'bottom-start': bottomStartToast,
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
    },
    ...props,
  })
}
