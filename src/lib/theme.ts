import { createSystem, defaultConfig } from '@chakra-ui/react'

export type ThemeProps = {
  [variant in
    | 'neutral'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error']: {
    [index: number]: {
      value: string
    }
  }
}

export const wriTheme: ThemeProps = {
  neutral: {
    100: { value: '#FFFFFF' },
    200: { value: '#F6F6F6' },
    300: { value: '#E7E6E6' },
    400: { value: '#C9C9C9' },
    500: { value: '#9B9B9B' },
    600: { value: '#686767' },
    700: { value: '#4F4E4E' },
    800: { value: '#1A1919' },
  },
  primary: {
    100: { value: '#FFFBF2' },
    200: { value: '#FCEFD3' },
    500: { value: '#F0AB00' },
    600: { value: '#D49700' },
    700: { value: '#AD7500' },
    800: { value: '#5F4205' },
    900: { value: '#332300' },
  },
  secondary: {
    500: { value: '#3855A3' },
    600: { value: '#263A71' },
    700: { value: '#1F2F5C' },
  },
  success: {
    100: { value: '#F3FFF2' },
    200: { value: '#D3EED1' },
    500: { value: '#086600' },
  },
  warning: {
    100: { value: '#FEF7E5' },
    200: { value: '#E3CC8F' },
    500: { value: '#804600' },
  },
  error: {
    100: { value: '#FFF3F4' },
    200: { value: '#EDA1A9' },
    500: { value: '#A80011' },
  },
}

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: wriTheme,
    },
  },
})

export const getThemedColor = (
  variant:
    | 'neutral'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error',
  index: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900,
): string =>
  system.tokens.getVar(`colors.${variant}.${index}`) ||
  wriTheme?.[variant]?.[index]?.value
