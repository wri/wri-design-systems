import React from 'react'
import { ButtonProps } from '../Button/types'
import type { MultiActionButtonLabels } from '../../../../lib/i18n/types'

export type MultiActionButtonProps = Omit<
  ButtonProps,
  'label' | 'leftIcon' | 'rightIcon' | 'onClick' | 'children' | 'css'
> & {
  /** Icon rendered before the main action label */
  mainActionLeftIcon?: React.ReactNode
  /** Icon rendered after the main action label */
  mainActionRightIcon?: React.ReactNode
  /** Label of the main action segment */
  mainActionLabel: string
  /** Called when the main action segment is clicked. Defaults to `() => {}` */
  mainActionOnClick: VoidFunction
  /** Actions shown in the dropdown menu. Defaults to `[]` */
  otherActions: {
    /** Text shown for the action in the menu */
    label: React.ReactNode
    /** Value identifying the action */
    value: string
    /** Called when the action is selected */
    onClick: VoidFunction
    /** Disables the action */
    disabled?: boolean
  }[]
  /** Override internal UI labels for internationalization support */
  labels?: Partial<MultiActionButtonLabels>
}
