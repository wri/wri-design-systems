import type { Preview } from '@storybook/react'
import { wriTheme } from '../src/lib/theme'

const preview: Preview = {
  parameters: {
    chakra: {
      theme: wriTheme,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
