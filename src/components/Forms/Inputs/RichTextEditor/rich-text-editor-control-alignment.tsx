'use client'

/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import { Editor } from '@tiptap/react'
import * as React from 'react'
import { Box } from '@chakra-ui/react'
import type { IconButtonProps } from '../../Actions/IconButton/types'
import IconButton from '../../Actions/IconButton'
import Menu from '../../Actions/Menu'
import Tooltip from '../../Actions/Tooltip'
import {
  ChevronDownIcon,
  RteAlignCenterIcon,
  RteAlignJustifyIcon,
  RteAlignLeftIcon,
  RteAlignRightIcon,
} from '../../../icons'
import { getThemedSpacing } from '../../../../lib/theme'
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
