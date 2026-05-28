/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import * as React from 'react'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import Placeholder from '@tiptap/extension-placeholder'
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
import { useLabels } from '../../../../lib/i18n/useLabels'
import { RichTextEditorControlKey, RichTextEditorProps } from './types'

const DEFAULT_VISIBLE_CONTROLS: RichTextEditorControlKey[] = [
  'undo',
  'redo',
  'fontFamily',
  'fontSize',
  'bold',
  'italic',
  'underline',
  'strikethrough',
  'bulletList',
  'orderedList',
  'link',
  'image',
]

const RichTextEditor = ({
  defaultValue = '',
  disabled = false,
  ariaLabel,
  placeholder,
  minHeight,
  visibleControls = DEFAULT_VISIBLE_CONTROLS,
  onChange,
  labels,
}: RichTextEditorProps) => {
  const l = useLabels('RichTextEditor', labels)
  const resolvedAriaLabel = ariaLabel || l.editorAriaLabel
  const resolvedPlaceholder = placeholder || l.placeholder
  const resolvedMinHeight = minHeight

  const editor = useEditor(
    {
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
        Placeholder.configure({
          placeholder: resolvedPlaceholder,
          emptyEditorClass: 'is-editor-empty',
        }),
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
          'aria-label': resolvedAriaLabel,
        },
      },
    },
    [resolvedPlaceholder, resolvedAriaLabel],
  )

  React.useEffect(() => {
    if (editor) {
      editor.setEditable(!disabled)
    }
  }, [editor, disabled])

  return (
    <RichTextEditorPrimitives.Root
      editor={editor}
      disabled={disabled}
      css={{
        '& .ProseMirror': {
          minHeight: resolvedMinHeight || 0,
        },
      }}
    >
      <RichTextEditorPrimitives.Toolbar>
        <RichTextEditorPrimitives.ControlGroup>
          {visibleControls.includes('undo') ? (
            <Control.Undo label={l.undoTooltip} />
          ) : null}
          {visibleControls.includes('redo') ? (
            <Control.Redo label={l.redoTooltip} />
          ) : null}
          {visibleControls.includes('fontFamily') ? (
            <Control.FontFamily label={l.fontFamilyTooltip} />
          ) : null}
          {visibleControls.includes('fontSize') ? (
            <Control.FontSize label={l.fontSizeTooltip} />
          ) : null}
          {visibleControls.includes('bold') ? (
            <Control.Bold label={l.boldTooltip} />
          ) : null}
          {visibleControls.includes('italic') ? (
            <Control.Italic label={l.italicTooltip} />
          ) : null}
          {visibleControls.includes('underline') ? (
            <Control.Underline label={l.underlineTooltip} />
          ) : null}
          {visibleControls.includes('strikethrough') ? (
            <Control.Strikethrough label={l.strikethroughTooltip} />
          ) : null}
          {visibleControls.includes('bulletList') ? (
            <Control.BulletList label={l.bulletListTooltip} />
          ) : null}
          {visibleControls.includes('orderedList') ? (
            <Control.OrderedList label={l.orderedListTooltip} />
          ) : null}
          {visibleControls.includes('link') ? (
            <Control.Link label={l.linkTooltip} />
          ) : null}
          {visibleControls.includes('image') ? (
            <Control.Image label={l.imageTooltip} />
          ) : null}
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
