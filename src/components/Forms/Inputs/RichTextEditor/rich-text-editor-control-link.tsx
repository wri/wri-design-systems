'use client'

/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import * as React from 'react'
import { Box, Popover as ChakraPopover, Text } from '@chakra-ui/react'
import type { IconButtonProps } from '../../Actions/IconButton/types'
import Button from '../../Actions/Button'
import IconButton from '../../Actions/IconButton'
import Tooltip from '../../Actions/Tooltip'
import TextInput from '../TextInput'
import { RteLinkIcon } from '../../../icons'
import { getThemedColor, getThemedSpacing } from '../../../../lib/theme'
import { useRichTextEditorContext } from './rich-text-editor-context'
import {
  isValidHref,
  normalizeHref,
} from './rich-text-editor-control-link-utils'

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
