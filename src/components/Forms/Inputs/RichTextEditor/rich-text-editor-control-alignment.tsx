'use client'

/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import { Editor } from '@tiptap/react'
import * as React from 'react'
import { Box } from '@chakra-ui/react'
import type { IconButtonProps } from '../../Actions/IconButton/types'
import type { ButtonProps } from '../../Actions/Button/types'
import Button from '../../Actions/Button'
import Menu from '../../Actions/Menu'
import {
  ChevronDownIcon,
  RteAlignCenterIcon,
  RteAlignJustifyIcon,
  RteAlignLeftIcon,
  RteAlignRightIcon,
} from '../../../icons'
import { getThemedColor, getThemedSpacing } from '../../../../lib/theme'
import { useRichTextEditorContext } from './rich-text-editor-context'

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
  const { editor, disabled } = useRichTextEditorContext()
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
  const options = [
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
  ]
  const currentOption = options.find(
    (option) => option.value === currentAlignment,
  )

  return (
    <Menu
      label={label}
      hideArrow
      items={options.map((option) => ({ ...option, disabled }))}
      onSelect={(value) => {
        if (!disabled) {
          editor.chain().focus().setTextAlign(value).run()
        }
      }}
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
            label=''
            aria-label={`${label}: ${currentOption?.label || label}`}
            leftIcon={
              <Box display='inline-flex' marginRight={getThemedSpacing(200)}>
                <CurrentAlignmentIcon width='0.875rem' height='0.875rem' />
              </Box>
            }
            rightIcon={<ChevronDownIcon width='0.875rem' height='0.875rem' />}
            {...({
              borderColor: getThemedColor('neutral', 400),
            } as Partial<ButtonProps>)}
            {...rest}
          />
        </Box>
      }
    />
  )
}
