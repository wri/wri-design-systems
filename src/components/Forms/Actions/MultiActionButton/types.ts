import React from 'react'
import { ButtonProps } from '../Button/types'

export type MultiActionButtonProps = Omit<
  ButtonProps,
  'label' | 'leftIcon' | 'rightIcon' | 'onClick' | 'children' | 'css'
> & {
  mainActionLeftIcon?: React.ReactNode
  mainActionRightIcon?: React.ReactNode
  mainActionLabel: string
  mainActionOnClick: VoidFunction
  otherActions: {
    label: React.ReactNode
    value: string
    onClick: VoidFunction
    disabled?: boolean
  }[]
}
