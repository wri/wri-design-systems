'use client'

/* eslint-disable react/no-unknown-property */

import {
  RteBoldIcon,
  RteBulletListIcon,
  RteCodeIcon,
  RteImageIcon,
  RteItalicIcon,
  RteOrderedListIcon,
  RteRedoIcon,
  RteStrikethroughIcon,
  RteUnderlineIcon,
  RteUndoIcon,
} from '../../../icons'
import {
  createBooleanControl,
  createOptionControl,
} from './rich-text-editor-control-base'

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
