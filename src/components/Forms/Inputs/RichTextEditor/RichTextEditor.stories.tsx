/* eslint-disable react/prop-types */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
import { Box, Text, Textarea, VStack } from '@chakra-ui/react'

import type { Meta, StoryObj } from '@storybook/react'
import RichTextEditor from '.'
import { getThemedSpacing } from '../../../../lib/theme'

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
        <Textarea
          aria-label='HTML output preview'
          value={html || '(empty)'}
          readOnly
          size='sm'
          minH='180px'
          fontFamily='monospace'
          whiteSpace='pre'
        />
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
  argTypes: {
    minHeight: {
      control: 'text',
      description:
        'Custom CSS min-height for the editable area. Leave empty to use container-based sizing.',
    },
    visibleControls: {
      control: 'check',
      options: [
        'undo',
        'redo',
        'textType',
        'fontSize',
        'alignment',
        'bold',
        'italic',
        'underline',
        'strikethrough',
        'bulletList',
        'orderedList',
        'link',
        'image',
      ],
    },
  },
} satisfies Meta<typeof RichTextEditor>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <RichTextEditorWithPreview {...args} />,
  args: {
    ariaLabel: 'Rich text editor default',
    placeholder: 'Write your content...',
  },
}

export const CustomSizePlayground: Story = {
  render: (args) => <RichTextEditorWithPreview {...args} />,
  args: {
    ariaLabel: 'Rich text editor with custom size',
    placeholder: 'Use the minHeight control to set a custom min-height',
    minHeight: getThemedSpacing(1600),
  },
}

export const SizeVariants: Story = {
  render: () => (
    <VStack align='stretch' gap='6' w='full' maxW='2xl'>
      <Box
        borderWidth='1px'
        borderRadius='md'
        p='3'
        bg='gray.50'
        maxH='200px'
        overflow='auto'
      >
        <Text fontWeight='bold' mb='2'>
          Container based (no minHeight)
        </Text>
        <RichTextEditor ariaLabel='Rich text editor container based size' />
      </Box>
      <Box
        borderWidth='1px'
        borderRadius='md'
        p='3'
        bg='gray.50'
        h={{ base: '500px' }}
        overflow='auto'
        display='flex'
        flexDirection='column'
      >
        <Text fontWeight='bold' mb='2'>
          minHeight = 400px
        </Text>
        <Box flex='1 1 0' display='flex' flexDirection='column'>
          <RichTextEditor
            ariaLabel='Rich text editor custom min-height 400px'
            minHeight='400px'
          />
        </Box>
      </Box>
      <Box
        borderWidth='1px'
        borderRadius='md'
        p='3'
        bg='gray.50'
        h={{ base: '700px' }}
        overflow='auto'
        display='flex'
        flexDirection='column'
      >
        <Text fontWeight='bold' mb='2'>
          minHeight = 600px
        </Text>
        <Box flex='1 1 0' display='flex' flexDirection='column'>
          <RichTextEditor
            ariaLabel='Rich text editor custom min-height 600px'
            minHeight='600px'
          />
        </Box>
      </Box>
      <Box
        borderWidth='1px'
        borderRadius='md'
        p='3'
        bg='gray.50'
        h={{ base: '900px' }}
        overflow='auto'
        display='flex'
        flexDirection='column'
      >
        <Text fontWeight='bold' mb='2'>
          minHeight = 800px
        </Text>
        <Box flex='1 1 0' display='flex' flexDirection='column'>
          <RichTextEditor
            ariaLabel='Rich text editor custom min-height 800px'
            minHeight='800px'
          />
        </Box>
      </Box>
    </VStack>
  ),
}

export const TranslatedTooltips: Story = {
  render: (args) => <RichTextEditorWithPreview {...args} />,
  args: {
    ariaLabel: 'Editor de texto enriquecido',
    placeholder: 'Escribe tu contenido...',
    labels: {
      editorAriaLabel: 'Editor de texto enriquecido',
      placeholder: 'Escribe tu contenido...',
      undoTooltip: 'Deshacer',
      redoTooltip: 'Rehacer',
      textTypeTooltip: 'Tipo de texto',
      fontSizeTooltip: 'Tamano de fuente',
      alignmentTooltip: 'Alineacion',
      alignLeftOptionLabel: 'Alinear a la izquierda',
      alignCenterOptionLabel: 'Alinear al centro',
      alignRightOptionLabel: 'Alinear a la derecha',
      alignJustifyOptionLabel: 'Justificar',
      boldTooltip: 'Negrita (N)',
      boldIconText: 'N',
      italicTooltip: 'Cursiva (K)',
      underlineTooltip: 'Subrayado (S)',
      strikethroughTooltip: 'Tachado',
      bulletListTooltip: 'Lista con vietas',
      orderedListTooltip: 'Lista numerada',
      linkTooltip: 'Enlace',
      imageTooltip: 'Imagen',
      linkUrlPlaceholder: 'http://ejemplo.org',
      linkLabelPlaceholder: 'Etiqueta (opcional)',
      linkLabelAriaLabel: 'Etiqueta del enlace',
      linkApplyLabel: 'Aplicar',
      linkRemoveLabel: 'Quitar',
      linkInvalidUrlMessage: 'Ingresa una URL valida',
    },
  },
}
