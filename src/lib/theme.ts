import { createSystem, defaultConfig } from '@chakra-ui/react'

export type ThemeProps = {
  [variant in
    | 'neutral'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error'
    | 'accessible']: {
    [index: number | string]: {
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
    500: { value: '#B0B0B0' },
    600: { value: '#A1A1A1' },
    700: { value: '#5C5959' },
    800: { value: '#3D3B3B' },
    900: { value: '#1A1919' },
  },
  primary: {
    100: { value: '#FFFBF2' },
    200: { value: '#FCEFD3' },
    500: { value: '#F0AB00' },
    600: { value: '#DE9E00' },
    700: { value: '#855B00' },
    800: { value: '#5F4205' },
    900: { value: '#332300' },
  },
  secondary: {
    300: { value: '#B2C3F0' },
    400: { value: '#4F6CBA' },
    500: { value: '#3855A3' },
    600: { value: '#0A4298' },
    700: { value: '#123369' },
  },
  success: {
    100: { value: '#EBF5F2' },
    200: { value: '#D3EED1' },
    300: { value: '#C2E5DC' },
    500: { value: '#009E77' },
    900: { value: '#00664D' },
  },
  warning: {
    100: { value: '#FBF7EA' },
    200: { value: '#E3CC8F' },
    300: { value: '#EEDDA5' },
    500: { value: '#A88100' },
    900: { value: '#715804' },
  },
  error: {
    100: { value: '#FFEFED' },
    200: { value: '#EDA1A9' },
    300: { value: '#F6C5C1' },
    500: { value: '#C11101' },
    900: { value: '#8D0D01' },
  },
  accessible: {
    'text-on-primary-mids': { value: '#332300' }, // primary 900
    'text-on-secondary-mids': { value: '#F2F6FF' }, // secondary 100
    'controls-on-neutral-lights': { value: '#855B00' }, // primary 700
    'controls-on-neutral-darks': { value: '#F5BF4F' }, // primary 400
  },
}

export const designSystemStyles = createSystem(defaultConfig, {
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
    | 'error'
    | 'accessible',
  index:
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900
    | 'text-on-primary-mids'
    | 'text-on-secondary-mids'
    | 'controls-on-neutral-lights'
    | 'controls-on-neutral-darks',
): string =>
  designSystemStyles.tokens.getVar(`colors.${variant}.${index}`) ||
  wriTheme?.[variant]?.[index]?.value
