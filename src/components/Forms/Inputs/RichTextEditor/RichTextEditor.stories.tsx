/* eslint-disable react/prop-types */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
import { Box, Text, VStack } from '@chakra-ui/react'

import type { Meta, StoryObj } from '@storybook/react'
import RichTextEditor from '.'

const RichTextEditorWithPreview = ({
  defaultValue,
  onChange,
  ...rest
}: React.ComponentProps<typeof RichTextEditor>) => {
  const [html, setHtml] = React.useState(defaultValue || '')

  return (
    <VStack align='stretch' gap='3' w='full' maxW='2xl'>
      <RichTextEditor
        {...rest}
        defaultValue={defaultValue}
        onChange={(value) => {
          setHtml(value)
          onChange?.(value)
        }}
      />
      <Box borderWidth='1px' borderRadius='md' p='3'>
        <Text fontWeight='bold' mb='2'>
          HTML output
        </Text>
        <Text fontSize='sm' whiteSpace='pre-wrap'>
          {html || '(empty)'}
        </Text>
      </Box>
    </VStack>
  )
}

const meta = {
  title: 'Forms/Inputs/Rich Text Editor',
  component: RichTextEditor,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RichTextEditor>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <RichTextEditorWithPreview {...args} />,
  args: {
    ariaLabel: 'Rich text editor default',
  },
}

export const WithInitialContent: Story = {
  render: (args) => <RichTextEditorWithPreview {...args} />,
  args: {
    ariaLabel: 'Rich text editor with initial content',
    defaultValue:
      '<p><strong>Hello!</strong> This is the initial content for the editor.</p>',
  },
}

export const Disabled: Story = {
  render: (args) => <RichTextEditorWithPreview {...args} />,
  args: {
    ariaLabel: 'Disabled rich text editor',
    defaultValue: '<p>This editor is disabled.</p>',
    disabled: true,
  },
}
