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
  },
  '& .ProseMirror > * + *': {
    marginTop: getThemedSpacing(300),
  },
  '& [data-rte-icon="true"]': {
    display: 'inline-flex',
    color: getThemedColor('neutral', 800),
  },
  '& [data-rte-icon="true"] svg path': {
    fill: 'none !important',
    stroke: 'currentColor !important',
  },
  '& [data-rte-icon="true"] svg line, & [data-rte-icon="true"] svg polyline, & [data-rte-icon="true"] svg rect, & [data-rte-icon="true"] svg circle, & [data-rte-icon="true"] svg ellipse':
    {
      stroke: 'currentColor !important',
    },
  '&[data-disabled] .ProseMirror': {
    pointerEvents: 'none',
    opacity: 0.6,
    cursor: 'not-allowed',
  },
}
