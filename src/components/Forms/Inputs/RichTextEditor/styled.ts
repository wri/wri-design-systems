import type { SystemStyleObject } from '@chakra-ui/react'
import {
  getThemedBorderWidth,
  getThemedColor,
  getThemedFontSize,
  getThemedLineHeight,
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
    '& em, & i': {
      fontStyle: 'italic',
    },
    '& ul, & ol': {
      paddingInlineStart: getThemedSpacing(700),
      marginTop: getThemedSpacing(300),
      marginBottom: getThemedSpacing(300),
    },
    '& ul': {
      listStyleType: 'disc',
    },
    '& ol': {
      listStyleType: 'decimal',
    },
    '& a': {
      color: getThemedColor('primary', 700),
      textDecoration: 'underline',
      cursor: 'pointer',
    },
    '& h1': {
      fontSize: getThemedFontSize(900),
      lineHeight: getThemedLineHeight(1100),
      fontWeight: 700,
      color: getThemedColor('neutral', 900),
    },
    '& h2': {
      fontSize: getThemedFontSize(800),
      lineHeight: getThemedLineHeight(1000),
      fontWeight: 700,
      color: getThemedColor('neutral', 900),
    },
    '& h3': {
      fontSize: getThemedFontSize(700),
      lineHeight: getThemedLineHeight(900),
      fontWeight: 700,
      color: getThemedColor('neutral', 900),
    },
    '& blockquote': {
      marginInline: 0,
      paddingInlineStart: getThemedSpacing(400),
      borderInlineStart: `${getThemedBorderWidth(300)} solid ${getThemedColor('neutral', 500)}`,
      color: getThemedColor('neutral', 700),
      fontStyle: 'italic',
    },
    '& hr': {
      border: 0,
      borderTop: `${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 400)}`,
      marginBlock: getThemedSpacing(400),
    },
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
