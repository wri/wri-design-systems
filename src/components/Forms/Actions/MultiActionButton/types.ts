import React from 'react'
import { ButtonProps } from '../Button/types'
import type { MultiActionButtonLabels } from '../../../../lib/i18n/types'

export type MultiActionButtonProps = Omit<
  ButtonProps,
  | 'label'
  | 'leftIcon'
  | 'rightIcon'
  | 'onClick'
  | 'children'
  | 'css'
  | 'size'
  | 'variant'
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
  /** Disables the entire component */
  disabled?: boolean
  /** Disables the left action */
  leftActionDisabled?: boolean
  /** Disables the right action */
  rightActionDisabled?: boolean
  /** Size of the button. Defaults to `default` */
  size?: 'default' | 'small'
  /** Variant of the button. Defaults to `primary` */
  variant?: 'primary' | 'secondary' | 'borderless' | 'outline' | 'negative'
  /** Override internal UI labels for internationalization support */
  labels?: Partial<MultiActionButtonLabels>
}
