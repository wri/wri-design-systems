import * as React from 'react'
import { Box, Text, VStack } from '@chakra-ui/react'

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
          <Text fontSize='sm' whiteSpace='pre-wrap'>
            {html}
          </Text>
        </Box>
      </VStack>
    </DemoWrapper>
  )
}

export default RichTextEditorDemo
