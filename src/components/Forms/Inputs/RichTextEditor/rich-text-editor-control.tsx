'use client'

/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import { Editor } from '@tiptap/react'
import * as React from 'react'
import {
  LuBold,
  LuCode,
  LuImage,
  LuItalic,
  LuLink,
  LuList,
  LuListOrdered,
  LuRedo2,
  LuStrikethrough,
  LuUnderline,
  LuUndo2,
} from 'react-icons/lu'
import { Box } from '@chakra-ui/react'
import type { IconButtonProps } from '../../Actions/IconButton/types'
import type { ButtonProps } from '../../Actions/Button/types'
import Button from '../../Actions/Button'
import IconButton from '../../Actions/IconButton'
import Menu from '../../Actions/Menu'
import Tooltip from '../../Actions/Tooltip'
import { ChevronDownIcon } from '../../../icons'
import { getThemedColor } from '../../../../lib/theme'
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
    <Tooltip content={label}>
      <IconButton
        icon={<span data-rte-icon='true'>{icon}</span>}
        aria-label={label}
        aria-pressed={active}
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

  const BooleanControl = (props: Omit<IconButtonProps, 'icon'>) => {
    const { editor } = useRichTextEditorContext()
    if (!editor) return null

    const disabled = isDisabled ? isDisabled(editor) : false
    const active = isActive ? isActive(editor) : false

    return (
      <ButtonControl
        label={label}
        icon={<Icon />}
        active={active}
        onClick={() => command(editor)}
        disabled={disabled}
        {...props}
      />
    )
  }

  BooleanControl.displayName = `BooleanControl(${label})`
  return BooleanControl
}

export function createOptionControl(config: OptionControlConfig) {
  const { label, options, getValue, command, isDisabled } = config

  const OptionControl = () => {
    const { editor } = useRichTextEditorContext()
    if (!editor) return null

    const value = getValue(editor)
    const disabled = isDisabled ? isDisabled(editor) : false
    const currentOption = options.find((option) => option.value === value)

    return (
      <Menu
        label={label}
        items={options.map((option) => ({
          label: option.label,
          value: option.value,
        }))}
        onSelect={(selectedValue) => command(editor, selectedValue)}
        customTrigger={
          <Box
            css={{
              '& button': { fontWeight: 'normal' },
              '&[data-part="trigger"]': { padding: 0 },
            }}
          >
            <Button
              variant='secondary'
              size='small'
              disabled={disabled}
              label={currentOption?.label || label}
              aria-label={`${label}: ${currentOption?.label || label}`}
              rightIcon={<ChevronDownIcon width='0.875rem' height='0.875rem' />}
              {...({
                borderColor: getThemedColor('neutral', 400),
              } as Partial<ButtonProps>)}
            />
          </Box>
        }
      />
    )
  }

  OptionControl.displayName = `OptionControl(${label})`
  return OptionControl
}

export const FontFamily = createOptionControl({
  label: 'Font Family',
  options: [
    { value: 'default', label: 'Default' },
    { value: 'Arial', label: 'Arial' },
    { value: 'Georgia', label: 'Georgia' },
    { value: 'monospace', label: 'Monospace' },
  ],
  getValue: (editor) =>
    (editor.getAttributes('textStyle')?.fontFamily as string) || 'default',
  command: (editor, value) => {
    if (value === 'default') {
      editor.chain().focus().unsetFontFamily().run()
      return
    }

    editor.chain().focus().setFontFamily(value).run()
  },
})

export const FontSize = createOptionControl({
  label: 'Font Size',
  options: [
    { value: '12px', label: '12px' },
    { value: '14px', label: '14px' },
    { value: '16px', label: '16px' },
    { value: '18px', label: '18px' },
  ],
  getValue: (editor) =>
    (editor.getAttributes('textStyle')?.fontSize as string) || '16px',
  command: (editor, value) => {
    editor.chain().focus().setFontSize(value).run()
  },
})

const BoldIcon = () => <LuBold strokeWidth={3} />

export const Bold = createBooleanControl({
  label: 'Bold',
  icon: BoldIcon,
  command: (editor) => editor.chain().focus().toggleBold().run(),
  isActive: (editor) => editor.isActive('bold'),
})

export const Italic = createBooleanControl({
  label: 'Italic',
  icon: LuItalic,
  command: (editor) => editor.chain().focus().toggleItalic().run(),
  isActive: (editor) => editor.isActive('italic'),
})

export const Underline = createBooleanControl({
  label: 'Underline',
  icon: LuUnderline,
  command: (editor) => editor.chain().focus().toggleUnderline().run(),
  isActive: (editor) => editor.isActive('underline'),
})

export const Strikethrough = createBooleanControl({
  label: 'Strikethrough',
  icon: LuStrikethrough,
  command: (editor) => editor.chain().focus().toggleStrike().run(),
  isActive: (editor) => editor.isActive('strike'),
})

export const Code = createBooleanControl({
  label: 'Code',
  icon: LuCode,
  command: (editor) => editor.chain().focus().toggleCode().run(),
  isActive: (editor) => editor.isActive('code'),
})

export const BulletList = createBooleanControl({
  label: 'Bullet List',
  icon: LuList,
  command: (editor) => editor.chain().focus().toggleBulletList().run(),
  isActive: (editor) => editor.isActive('bulletList'),
})

export const OrderedList = createBooleanControl({
  label: 'Ordered List',
  icon: LuListOrdered,
  command: (editor) => editor.chain().focus().toggleOrderedList().run(),
  isActive: (editor) => editor.isActive('orderedList'),
})

export const Link = createBooleanControl({
  label: 'Link',
  icon: LuLink,
  command: (editor) => {
    if (editor.isActive('link')) {
      editor.chain().focus().unsetLink().run()
      return
    }

    const { from, to, empty } = editor.state.selection
    const selectedText = editor.state.doc.textBetween(from, to, ' ').trim()
    const hasProtocol = /^https?:\/\//i.test(selectedText)
    let href = 'https://'

    if (selectedText) {
      href = hasProtocol ? selectedText : `https://${selectedText}`
    }

    if (empty) {
      editor
        .chain()
        .focus()
        .insertContent(`<a href="${href}">${href}</a>`)
        .run()
      return
    }

    editor.chain().focus().extendMarkRange('link').setLink({ href }).run()
  },
  isActive: (editor) => editor.isActive('link'),
})

export const Image = createBooleanControl({
  label: 'Image',
  icon: LuImage,
  command: (editor) => {
    if (typeof document === 'undefined') return

    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/*'

    input.onchange = () => {
      const imageFile = input.files?.[0]
      if (!imageFile) return

      const reader = new FileReader()
      reader.onload = () => {
        if (typeof reader.result !== 'string') return

        editor
          .chain()
          .focus()
          .insertContent({
            type: 'image',
            attrs: { src: reader.result, alt: imageFile.name },
          })
          .run()
      }
      reader.readAsDataURL(imageFile)
    }

    input.click()
  },
})

export const Undo = createBooleanControl({
  label: 'Undo',
  icon: LuUndo2,
  command: (editor) => editor.chain().focus().undo().run(),
  isDisabled: (editor) => !editor.can().undo(),
})

export const Redo = createBooleanControl({
  label: 'Redo',
  icon: LuRedo2,
  command: (editor) => editor.chain().focus().redo().run(),
  isDisabled: (editor) => !editor.can().redo(),
})
