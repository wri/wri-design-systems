import { extendTheme, Theme } from '@chakra-ui/react'

export const wriTheme = extendTheme({
  colors: {
    wri: {
      neutral: {
        100: '#FFFFFF',
        200: '#F6F6F6',
        300: '#E7E6E6',
        400: '#C9C9C9',
        500: '#9B9B9B',
        700: '#4F4E4E',
        800: '#1A1919',
      },
      primary: {
        100: '#FFFBF2',
        200: '#FCEFD3',
        500: '#F0AB00',
        600: '#D49700',
        700: '#AD7500',
        800: '#5F4205',
        900: '#332300',
      },
      secondary: {
        500: '#3855A3',
      },
    },
  },
})

export type ThemeProps = Theme & {
  colors: {
    wri: {
      neutral: {
        100: string
        200: string
        300: string
        400: string
        500: string
        700: string
        800: string
      }
      primary: {
        100: string
        200: string
        500: string
        600: string
        700: string
        800: string
        900: string
      }
      secondary: {
        500: string
      }
    }
  }
}

export const getThemedColor = (
  colors: { wri: { [key: string]: { [key: number]: string } } },
  variant: 'neutral' | 'primary' | 'secondary',
  number: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900,
): string =>
  colors?.wri?.[variant]?.[number] || wriTheme?.colors?.wri?.[variant]?.[number]
