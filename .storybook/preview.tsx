import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import type { Preview } from '@storybook/react'
import { system } from '../src/lib/theme'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story: any) => (
      <ChakraProvider value={system}>
        <Story />
      </ChakraProvider>
    ),
  ],
}

export default preview
