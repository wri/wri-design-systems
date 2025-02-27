import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import type { Preview } from '@storybook/react'
import { designSystemStyles } from '../src/lib/theme'

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
      <ChakraProvider value={designSystemStyles}>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </ChakraProvider>
    ),
  ],
}

export default preview
