'use client'

import type { BoxProps, StackProps, SystemStyleObject } from '@chakra-ui/react'
import { Box, HStack, StackSeparator } from '@chakra-ui/react'
import { Editor, EditorContent } from '@tiptap/react'
import * as React from 'react'
import {
  RichTextEditorContext,
  useRichTextEditorContext,
} from './rich-text-editor-context'
import { richTextEditorContainerStyles } from './styled'

export interface RichTextEditorRootProps extends BoxProps {
  editor: Editor | null
  disabled?: boolean
}

export const RichTextEditorRoot = React.forwardRef<
  HTMLDivElement,
  RichTextEditorRootProps
>((props, ref) => {
  const { editor, children, css, disabled, ...rest } = props
  const contextValue = React.useMemo(() => ({ editor }), [editor])

  return (
    <RichTextEditorContext.Provider value={contextValue}>
      <Box
        ref={ref}
        data-disabled={disabled || undefined}
        css={[richTextEditorContainerStyles, css]}
        {...rest}
      >
        {children}
      </Box>
    </RichTextEditorContext.Provider>
  )
})

type RichTextEditorToolbarVariant = 'floating' | 'fixed'

export interface RichTextEditorToolbarProps extends StackProps {
  variant?: RichTextEditorToolbarVariant
}

const toolbarStylesMap: Record<
  RichTextEditorToolbarVariant,
  SystemStyleObject
> = {
  fixed: {
    bg: 'bg',
    roundedTop: 'l2',
    borderBottomWidth: '1px',
    p: '3',
  },
  floating: {
    bg: 'bg.panel',
    roundedTop: 'l2',
    shadow: 'sm',
    p: '3',
  },
}

export const RichTextEditorToolbar = React.forwardRef<
  HTMLDivElement,
  RichTextEditorToolbarProps
>((props, ref) => {
  const { variant = 'fixed', css, ...rest } = props

  return (
    <HStack
      ref={ref}
      flexWrap='wrap'
      separator={<StackSeparator h='5' alignSelf='center' />}
      css={[toolbarStylesMap[variant], css]}
      {...rest}
    />
  )
})

export type RichTextEditorContentProps = Omit<
  React.ComponentProps<typeof EditorContent>,
  'editor'
>

export const RichTextEditorContent = React.forwardRef<
  HTMLDivElement,
  RichTextEditorContentProps
>((props, ref) => {
  const { editor } = useRichTextEditorContext()

  if (!editor) return null

  return <EditorContent editor={editor} innerRef={ref} {...props} />
})

export type RichTextEditorControlGroupProps = StackProps

export const RichTextEditorControlGroup = React.forwardRef<
  HTMLDivElement,
  RichTextEditorControlGroupProps
>((props, ref) => <HStack ref={ref} gap='2' {...props} />)

export const RichTextEditor = {
  Root: RichTextEditorRoot,
  Toolbar: RichTextEditorToolbar,
  Content: RichTextEditorContent,
  ControlGroup: RichTextEditorControlGroup,
} as const

export * as Control from './rich-text-editor-control'
export { createBooleanControl } from './rich-text-editor-control'
export { useRichTextEditorContext } from './rich-text-editor-context'
