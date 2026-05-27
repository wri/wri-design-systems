import type { SystemStyleObject } from '@chakra-ui/react'
import {
  getThemedBorderWidth,
  getThemedColor,
  getThemedRadius,
  getThemedSpacing,
} from '../../../../lib/theme'

export const richTextEditorContainerStyles: SystemStyleObject = {
  display: 'flex',
  flexDirection: 'column',
  borderStyle: 'solid',
  borderWidth: getThemedBorderWidth(100),
  borderColor: getThemedColor('neutral', 300),
  borderRadius: getThemedRadius(200),
  backgroundColor: getThemedColor('neutral', 100),
  '& .ProseMirror': {
    outline: 'none',
    minHeight: getThemedSpacing(1600),
    padding: getThemedSpacing(400),
    '&:focus-visible': {
      boxShadow: `inset 0 0 0 ${getThemedBorderWidth(200)} ${getThemedColor('primary', 600)}`,
      borderRadius: getThemedRadius(100),
    },
    '& p.is-editor-empty:first-of-type::before': {
      content: 'attr(data-placeholder)',
      color: getThemedColor('neutral', 500),
      pointerEvents: 'none',
      float: 'left',
      height: '0',
    },
  },
  '& .ProseMirror > * + *': {
    marginTop: getThemedSpacing(300),
  },
  '& [data-rte-icon="true"]': {
    display: 'inline-flex',
    color: getThemedColor('neutral', 800),
  },
  '&[data-disabled] .ProseMirror': {
    pointerEvents: 'none',
    opacity: 0.6,
    cursor: 'not-allowed',
  },
}
