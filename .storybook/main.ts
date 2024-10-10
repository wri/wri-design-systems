import type { StorybookConfig } from '@storybook/react-webpack5'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@chakra-ui/storybook-addon',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  staticDirs: ['../public'],
  refs: {
    '@chakra-ui/react': {
      disable: true,
    },
  },
}
export default config
