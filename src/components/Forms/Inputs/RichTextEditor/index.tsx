/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import * as React from 'react'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import Subscript from '@tiptap/extension-subscript'
import Superscript from '@tiptap/extension-superscript'
import TextAlign from '@tiptap/extension-text-align'
import { TextStyleKit } from '@tiptap/extension-text-style'
import StarterKit from '@tiptap/starter-kit'
import { useEditor } from '@tiptap/react'
import Underline from '@tiptap/extension-underline'

import {
  Control,
  RichTextEditor as RichTextEditorPrimitives,
  createBooleanControl,
  useRichTextEditorContext,
} from './rich-text-editor'
import { RichTextEditorProps } from './types'

const RichTextEditor = ({
  defaultValue = '',
  disabled = false,
  ariaLabel = 'Rich text editor',
  onChange,
}: RichTextEditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        link: false,
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: 'https',
      }),
      Image,
      Underline,
      Subscript,
      Superscript,
      TextAlign.configure({ types: ['paragraph', 'heading'] }),
      TextStyleKit,
    ],
    content: defaultValue,
    editable: !disabled,
    shouldRerenderOnTransaction: true,
    immediatelyRender: false,
    onUpdate: ({ editor: currentEditor }) => {
      onChange?.(currentEditor.getHTML())
    },
    editorProps: {
      attributes: {
        'aria-label': ariaLabel,
      },
    },
  })

  React.useEffect(() => {
    if (editor) {
      editor.setEditable(!disabled)
    }
  }, [editor, disabled])

  return (
    <RichTextEditorPrimitives.Root editor={editor} disabled={disabled}>
      <RichTextEditorPrimitives.Toolbar>
        <RichTextEditorPrimitives.ControlGroup>
          <Control.Undo />
          <Control.Redo />
          <Control.FontFamily />
          <Control.FontSize />
          <Control.Bold />
          <Control.Italic />
          <Control.Underline />
          <Control.Strikethrough />
          <Control.BulletList />
          <Control.OrderedList />
          <Control.Link />
          <Control.Image />
        </RichTextEditorPrimitives.ControlGroup>
      </RichTextEditorPrimitives.Toolbar>
      <RichTextEditorPrimitives.Content />
    </RichTextEditorPrimitives.Root>
  )
}

export {
  Control,
  createBooleanControl,
  RichTextEditorPrimitives,
  useRichTextEditorContext,
}

export default RichTextEditor
