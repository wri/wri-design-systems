import React from 'react'
import { ButtonProps } from '../Button/types'
import type { MultiActionButtonLabels } from '../../../../lib/i18n/types'

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
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<MultiActionButtonLabels>
}
