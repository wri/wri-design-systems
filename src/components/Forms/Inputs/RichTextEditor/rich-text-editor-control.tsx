'use client'

/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import { Editor } from '@tiptap/react'
import * as React from 'react'
import { Box, Popover as ChakraPopover, Text } from '@chakra-ui/react'
import type { IconButtonProps } from '../../Actions/IconButton/types'
import type { ButtonProps } from '../../Actions/Button/types'
import Button from '../../Actions/Button'
import IconButton from '../../Actions/IconButton'
import Menu from '../../Actions/Menu'
import Tooltip from '../../Actions/Tooltip'
import TextInput from '../TextInput'
import {
  ChevronDownIcon,
  RteBoldIcon,
  RteAlignCenterIcon,
  RteAlignJustifyIcon,
  RteAlignLeftIcon,
  RteAlignRightIcon,
  RteBulletListIcon,
  RteCodeIcon,
  RteImageIcon,
  RteItalicIcon,
  RteLinkIcon,
  RteOrderedListIcon,
  RteRedoIcon,
  RteStrikethroughIcon,
  RteUnderlineIcon,
  RteUndoIcon,
} from '../../../icons'
import { getThemedColor, getThemedSpacing } from '../../../../lib/theme'
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
        onMouseDown={(event) => {
          // Keep editor selection while clicking toolbar controls.
          event.preventDefault()
        }}
        {...rest}
      />
    </Tooltip>
  )
}

function normalizeHref(rawValue: string) {
  const value = rawValue.trim()

  if (!value) return ''

  if (/^(https?:\/\/|mailto:|tel:)/i.test(value)) {
    return value
  }

  return `http://${value}`
}

function isValidHref(href: string) {
  if (/^(mailto:|tel:)/i.test(href)) {
    return true
  }

  try {
    const parsedUrl = new URL(href)
    return parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:'
  } catch {
    return false
  }
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
    const { editor } = useRichTextEditorContext()
    if (!editor) return null

    const { label: customLabel, icon: customIcon, ...rest } = props
    const resolvedLabel = customLabel || label

    const disabled = isDisabled ? isDisabled(editor) : false
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
    const { editor } = useRichTextEditorContext()
    if (!editor) return null

    const resolvedLabel = customLabel || label

    const value = getValue(editor)
    const disabled = isDisabled ? isDisabled(editor) : false
    const currentOption = options.find((option) => option.value === value)

    return (
      <Menu
        label={resolvedLabel}
        hideArrow
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
              label={currentOption?.label || resolvedLabel}
              aria-label={`${resolvedLabel}: ${currentOption?.label || resolvedLabel}`}
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
  label: 'Text Type',
  options: [
    { value: 'normalText', label: 'Normal text' },
    { value: 'heading1', label: 'Heading 1' },
    { value: 'heading2', label: 'Heading 2' },
    { value: 'heading3', label: 'Heading 3' },
    { value: 'blockquote', label: 'Quote' },
    { value: 'divider', label: 'Divider' },
  ],
  getValue: (editor) => {
    if (editor.isActive('heading', { level: 1 })) return 'heading1'
    if (editor.isActive('heading', { level: 2 })) return 'heading2'
    if (editor.isActive('heading', { level: 3 })) return 'heading3'
    if (editor.isActive('blockquote')) return 'blockquote'
    return 'normalText'
  },
  command: (editor, value) => {
    if (value === 'normalText') {
      editor.chain().focus().setParagraph().run()
      return
    }

    if (value === 'heading1') {
      editor.chain().focus().setHeading({ level: 1 }).run()
      return
    }

    if (value === 'heading2') {
      editor.chain().focus().setHeading({ level: 2 }).run()
      return
    }

    if (value === 'heading3') {
      editor.chain().focus().setHeading({ level: 3 }).run()
      return
    }

    if (value === 'blockquote') {
      if (!editor.isActive('blockquote')) {
        editor.chain().focus().toggleBlockquote().run()
      }
      return
    }

    if (value === 'divider') {
      editor.chain().focus().setHorizontalRule().run()
    }
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

const getCurrentAlignment = (editor: Editor) => {
  if (editor.isActive({ textAlign: 'center' })) return 'center'
  if (editor.isActive({ textAlign: 'right' })) return 'right'
  if (editor.isActive({ textAlign: 'justify' })) return 'justify'
  return 'left'
}

const alignmentIconMap: Record<string, React.ElementType> = {
  left: RteAlignLeftIcon,
  center: RteAlignCenterIcon,
  right: RteAlignRightIcon,
  justify: RteAlignJustifyIcon,
}

export const Alignment = (
  props: Omit<IconButtonProps, 'icon'> & {
    label?: string
    alignLeftLabel?: string
    alignCenterLabel?: string
    alignRightLabel?: string
    alignJustifyLabel?: string
  },
) => {
  const { editor } = useRichTextEditorContext()
  if (!editor) return null

  const {
    label = 'Alignment',
    alignLeftLabel = 'Align left',
    alignCenterLabel = 'Align center',
    alignRightLabel = 'Align right',
    alignJustifyLabel = 'Justify',
    ...rest
  } = props

  const currentAlignment = getCurrentAlignment(editor)
  const CurrentAlignmentIcon = alignmentIconMap[currentAlignment]

  return (
    <Menu
      label={label}
      hideArrow
      items={[
        {
          label: alignLeftLabel,
          value: 'left',
          startIcon: <RteAlignLeftIcon />,
        },
        {
          label: alignCenterLabel,
          value: 'center',
          startIcon: <RteAlignCenterIcon />,
        },
        {
          label: alignRightLabel,
          value: 'right',
          startIcon: <RteAlignRightIcon />,
        },
        {
          label: alignJustifyLabel,
          value: 'justify',
          startIcon: <RteAlignJustifyIcon />,
        },
      ]}
      onSelect={(value) => {
        editor.chain().focus().setTextAlign(value).run()
      }}
      customTrigger={
        <Box>
          <Tooltip content={label}>
            <IconButton
              icon={
                <span
                  data-rte-icon='true'
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: getThemedSpacing(100),
                  }}
                >
                  <CurrentAlignmentIcon />
                  <ChevronDownIcon width='0.75rem' height='0.75rem' />
                </span>
              }
              aria-label={label}
              onMouseDown={(event) => {
                event.preventDefault()
              }}
              {...rest}
            />
          </Tooltip>
        </Box>
      }
    />
  )
}

export const Bold = createBooleanControl({
  label: 'Bold',
  icon: RteBoldIcon,
  command: (editor) => editor.chain().focus().toggleBold().run(),
  isActive: (editor) => editor.isActive('bold'),
})

export const Italic = createBooleanControl({
  label: 'Italic',
  icon: RteItalicIcon,
  command: (editor) => editor.chain().focus().toggleItalic().run(),
  isActive: (editor) => editor.isActive('italic'),
})

export const Underline = createBooleanControl({
  label: 'Underline',
  icon: RteUnderlineIcon,
  command: (editor) => editor.chain().focus().toggleUnderline().run(),
  isActive: (editor) => editor.isActive('underline'),
})

export const Strikethrough = createBooleanControl({
  label: 'Strikethrough',
  icon: RteStrikethroughIcon,
  command: (editor) => editor.chain().focus().toggleStrike().run(),
  isActive: (editor) => editor.isActive('strike'),
})

export const Code = createBooleanControl({
  label: 'Code',
  icon: RteCodeIcon,
  command: (editor) => editor.chain().focus().toggleCode().run(),
  isActive: (editor) => editor.isActive('code'),
})

export const BulletList = createBooleanControl({
  label: 'Bullet List',
  icon: RteBulletListIcon,
  command: (editor) => editor.chain().focus().toggleBulletList().run(),
  isActive: (editor) => editor.isActive('bulletList'),
})

export const OrderedList = createBooleanControl({
  label: 'Ordered List',
  icon: RteOrderedListIcon,
  command: (editor) => editor.chain().focus().toggleOrderedList().run(),
  isActive: (editor) => editor.isActive('orderedList'),
})

export const Link = (
  props: Omit<IconButtonProps, 'icon'> & {
    label?: string
    urlPlaceholder?: string
    labelPlaceholder?: string
    labelInputAriaLabel?: string
    applyLabel?: string
    removeLabel?: string
    invalidUrlMessage?: string
  },
) => {
  const { editor } = useRichTextEditorContext()
  const [open, setOpen] = React.useState(false)
  const [urlValue, setUrlValue] = React.useState('')
  const [linkLabelValue, setLinkLabelValue] = React.useState('')
  const [errorMessage, setErrorMessage] = React.useState('')
  const selectionRef = React.useRef<{
    from: number
    to: number
    empty: boolean
    selectedText: string
  } | null>(null)

  if (!editor) return null

  const {
    label = 'Link',
    urlPlaceholder = 'http://example.org',
    labelPlaceholder = 'Label (optional)',
    labelInputAriaLabel = 'Link label',
    applyLabel = 'Apply',
    removeLabel = 'Remove',
    invalidUrlMessage = 'Please enter a valid URL',
    ...rest
  } = props
  const active = editor.isActive('link')

  const syncFromEditorState = () => {
    const { from, to, empty } = editor.state.selection
    const selectedText = editor.state.doc.textBetween(from, to, ' ').trim()
    selectionRef.current = { from, to, empty, selectedText }
    const initialValue =
      editor.getAttributes('link')?.href || selectedText || ''
    setUrlValue(initialValue || 'http://')
    setLinkLabelValue(selectedText)
    setErrorMessage('')
  }

  const restoreSelection = () => {
    if (!selectionRef.current) return editor.chain().focus()

    return editor.chain().focus().setTextSelection({
      from: selectionRef.current.from,
      to: selectionRef.current.to,
    })
  }

  const applyLink = () => {
    const href = normalizeHref(urlValue)
    const labelValue = linkLabelValue.trim()

    if (!href || !isValidHref(href)) {
      setErrorMessage(invalidUrlMessage)
      return
    }

    const chain = restoreSelection()
    const selection = selectionRef.current

    if (selection?.empty) {
      const text = labelValue || href
      chain
        .insertContent({
          type: 'text',
          text,
          marks: [{ type: 'link', attrs: { href } }],
        })
        .run()
    } else if (labelValue && labelValue !== selection?.selectedText) {
      chain
        .insertContent({
          type: 'text',
          text: labelValue,
          marks: [{ type: 'link', attrs: { href } }],
        })
        .run()
    } else {
      chain.extendMarkRange('link').setLink({ href }).run()
    }

    setOpen(false)
  }

  const removeLink = () => {
    restoreSelection().unsetLink().run()
    setOpen(false)
  }

  return (
    <ChakraPopover.Root
      open={open}
      onOpenChange={({ open: isOpen }) => {
        setOpen(isOpen)
        if (isOpen) {
          syncFromEditorState()
        }
      }}
      positioning={{ placement: 'bottom-start' }}
    >
      <ChakraPopover.Trigger asChild>
        <Box>
          <Tooltip content={label}>
            <IconButton
              icon={
                <span data-rte-icon='true'>
                  <RteLinkIcon />
                </span>
              }
              aria-label={label}
              aria-pressed={active || open}
              onMouseDown={(event) => {
                // Keep editor selection while opening the popover.
                event.preventDefault()
              }}
              onClick={() => setOpen((currentOpen) => !currentOpen)}
              {...rest}
            />
          </Tooltip>
        </Box>
      </ChakraPopover.Trigger>

      <ChakraPopover.Positioner>
        <ChakraPopover.Content
          css={{
            padding: getThemedSpacing(300),
            borderColor: getThemedColor('neutral', 300),
            width: `calc(( ${getThemedSpacing(2800)} + ${getThemedSpacing(2000)} ) * 2)`,
            maxWidth: '90vw',
          }}
        >
          <ChakraPopover.Body>
            <Box
              css={{
                display: 'flex',
                flexDirection: 'column',
                gap: getThemedSpacing(300),
              }}
            >
              <TextInput
                aria-label={label}
                placeholder={urlPlaceholder}
                noMarginBottom
                value={urlValue}
                onChange={(event) => {
                  setUrlValue(event.target.value)
                  if (errorMessage) {
                    setErrorMessage('')
                  }
                }}
              />

              <TextInput
                aria-label={labelInputAriaLabel}
                placeholder={labelPlaceholder}
                noMarginBottom
                value={linkLabelValue}
                onChange={(event) => {
                  setLinkLabelValue(event.target.value)
                }}
              />

              {errorMessage ? (
                <Text
                  css={{
                    color: getThemedColor('error', 700),
                  }}
                >
                  {errorMessage}
                </Text>
              ) : null}

              <Box
                css={{
                  display: 'flex',
                  gap: getThemedSpacing(200),
                  justifyContent: 'flex-end',
                }}
              >
                {active ? (
                  <Button
                    variant='borderless'
                    size='small'
                    label={removeLabel}
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={removeLink}
                  />
                ) : null}
                <Button
                  variant='secondary'
                  size='small'
                  label={applyLabel}
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={applyLink}
                />
              </Box>
            </Box>
          </ChakraPopover.Body>
        </ChakraPopover.Content>
      </ChakraPopover.Positioner>
    </ChakraPopover.Root>
  )
}

export const Image = createBooleanControl({
  label: 'Image',
  icon: RteImageIcon,
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
  icon: RteUndoIcon,
  command: (editor) => editor.chain().focus().undo().run(),
  isDisabled: (editor) => !editor.can().undo(),
})

export const Redo = createBooleanControl({
  label: 'Redo',
  icon: RteRedoIcon,
  command: (editor) => editor.chain().focus().redo().run(),
  isDisabled: (editor) => !editor.can().redo(),
})
