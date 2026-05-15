import React from 'react'
import { Global, css } from '@emotion/react'
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
    a11y: {
      // 'todo' - Marks a11y checks as pending — violations are noted but not highlighted
      // 'warn' -	Shows violations in the A11y panel without failing the Storybook test runner
      // 'error' - Surfaces violations in the panel and fails storybook test runs in CI
      // 'off' - to disable
      test: 'error',
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
