import * as React from 'react'
import { Box, Text, Textarea, VStack } from '@chakra-ui/react'

import { RichTextEditor } from '../../..'
import DemoWrapper from '../../../UI/DemoWrapper'

const RichTextEditorDemo = () => {
  const [html, setHtml] = React.useState('<p>Write something...</p>')

  return (
    <DemoWrapper title='Rich Text Editor'>
      <VStack align='stretch' gap='3' w='full' maxW='2xl'>
        <RichTextEditor
          defaultValue={html}
          ariaLabel='Rich text editor demo'
          onChange={setHtml}
        />
        <Box borderWidth='1px' borderRadius='md' p='3'>
          <Text fontWeight='bold' mb='2'>
            HTML output
          </Text>
          <Textarea
            aria-label='HTML output preview'
            value={html}
            readOnly
            size='sm'
            minH='180px'
            fontFamily='monospace'
            whiteSpace='pre'
          />
        </Box>
      </VStack>
    </DemoWrapper>
  )
}

export default RichTextEditorDemo
