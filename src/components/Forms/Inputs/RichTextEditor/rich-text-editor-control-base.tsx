'use client'

/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import { Editor } from '@tiptap/react'
import * as React from 'react'
import type { IconButtonProps } from '../../Actions/IconButton/types'
import IconButton from '../../Actions/IconButton'
import Menu from '../../../Overlays/Menu'
import Tooltip from '../../../Overlays/Tooltip'
import { useRichTextEditorContext } from './rich-text-editor-context'

export interface BaseControlConfig {
  label: string
  icon: React.ElementType
  isDisabled?: (editor: Editor) => boolean
  isActive?: (editor: Editor) => boolean
}

export interface ButtonControlProps
  extends Omit<IconButtonProps, 'aria-label'> {
  icon: React.ReactNode
  label: string
  active?: boolean
}

export const ButtonControl = (props: ButtonControlProps) => {
  const { icon, label, active, ...rest } = props

  return (
    <Tooltip content={label} preserveFocusOnChild>
      <IconButton
        icon={<span data-rte-icon='true'>{icon}</span>}
        aria-label={label}
        aria-pressed={active}
        onMouseDown={(event) => {
          // Keep editor selection while clicking toolbar controls.
          event.preventDefault()
        }}
        {...rest}
      />
    </Tooltip>
  )
}

export interface BooleanControlConfig extends BaseControlConfig {
  command: (editor: Editor) => void
}

export interface OptionControlItem {
  value: string
  label: string
}

export interface OptionControlConfig {
  label: string
  options: OptionControlItem[]
  getValue: (editor: Editor) => string
  command: (editor: Editor, value: string) => void
  isDisabled?: (editor: Editor) => boolean
}

export function createBooleanControl(config: BooleanControlConfig) {
  const { label, icon: Icon, isDisabled, isActive, command } = config

  const BooleanControl = (
    props: Omit<IconButtonProps, 'icon'> & {
      label?: string
      icon?: React.ReactNode
    },
  ) => {
    const { editor, disabled: editorDisabled } = useRichTextEditorContext()
    if (!editor) return null

    const { label: customLabel, icon: customIcon, ...rest } = props
    const resolvedLabel = customLabel || label

    const disabled = editorDisabled || (isDisabled ? isDisabled(editor) : false)
    const active = isActive ? isActive(editor) : false

    return (
      <ButtonControl
        label={resolvedLabel}
        icon={customIcon || <Icon />}
        active={active}
        onClick={() => command(editor)}
        disabled={disabled}
        {...rest}
      />
    )
  }

  BooleanControl.displayName = `BooleanControl(${label})`
  return BooleanControl
}

export function createOptionControl(config: OptionControlConfig) {
  const { label, options, getValue, command, isDisabled } = config

  const OptionControl = ({ label: customLabel }: { label?: string } = {}) => {
    const { editor, disabled: editorDisabled } = useRichTextEditorContext()
    if (!editor) return null

    const resolvedLabel = customLabel || label

    const value = getValue(editor)
    const disabled = editorDisabled || (isDisabled ? isDisabled(editor) : false)
    const currentOption = options.find((option) => option.value === value)

    return (
      <Menu
        label={currentOption?.label || resolvedLabel}
        triggerAriaLabel={`${resolvedLabel}: ${currentOption?.label || resolvedLabel}`}
        size='small'
        disabled={disabled}
        items={options.map((option) => ({
          label: option.label,
          value: option.value,
          disabled,
        }))}
        onSelect={(selectedValue) => {
          if (!disabled) {
            command(editor, selectedValue)
          }
        }}
      />
    )
  }

  OptionControl.displayName = `OptionControl(${label})`
  return OptionControl
}
