import React from 'react'
import { Global, css } from '@emotion/react'
import '../src/fonts.css'
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
        <Global
          styles={css`
            body {
              font-family: 'Acumin Pro', sans-serif;
            }
          `}
        />
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </ChakraProvider>
    ),
  ],
}

export default preview
