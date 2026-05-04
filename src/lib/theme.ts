import { createSystem, defaultConfig } from '@chakra-ui/react'

type TokenValue = { value: string }
type TokenScale = Record<number | string, TokenValue>

export type ColorVariant =
  | 'neutral'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error'
  | 'accessible'

export type ThemeColors = Record<ColorVariant, TokenScale>

export type FontSizeToken =
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 1000
  | 1100

export type LineHeightToken =
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 1000
  | 1100
  | 1200

export type SpacingToken =
  | 0
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 1000
  | 1100
  | 1200
  | 1400
  | 1600
  | 2000
  | 2400
  | 2800

export type RadiusToken = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900

export type BorderWidthToken = 100 | 200 | 300 | 400

const formatRemValue = (value: number): string =>
  parseFloat(value.toFixed(4)).toString()

const pxToRem = (px: number, basePx = 16): string =>
  `${formatRemValue(px / basePx)}rem`

export const wriColors: ThemeColors = {
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
    300: { value: '#FADFA7' },
    400: { value: '#F5BF4F' },
    500: { value: '#F0AB00' },
    600: { value: '#DE9E00' },
    700: { value: '#855B00' },
    800: { value: '#5F4205' },
    900: { value: '#332300' },
  },
  secondary: {
    100: { value: '#F2F6FF' },
    200: { value: '#D7E0F7' },
    300: { value: '#B2C3F0' },
    400: { value: '#4F6CBA' },
    500: { value: '#3855A3' },
    600: { value: '#0A4298' },
    700: { value: '#123369' },
    800: { value: '#162241' },
    900: { value: '#0B1121' },
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

export const wriFontSizes: Record<FontSizeToken, TokenValue> = {
  200: { value: pxToRem(12) },
  300: { value: pxToRem(14) },
  400: { value: pxToRem(16) },
  500: { value: pxToRem(18) },
  600: { value: pxToRem(20) },
  700: { value: pxToRem(24) },
  800: { value: pxToRem(30) },
  900: { value: pxToRem(36) },
  1000: { value: pxToRem(48) },
  1100: { value: pxToRem(60) },
}

export const wriSpacing: Record<SpacingToken, TokenValue> = {
  0: { value: pxToRem(0) },
  50: { value: pxToRem(2) },
  100: { value: pxToRem(4) },
  200: { value: pxToRem(8) },
  300: { value: pxToRem(12) },
  400: { value: pxToRem(16) },
  500: { value: pxToRem(20) },
  600: { value: pxToRem(24) },
  700: { value: pxToRem(28) },
  800: { value: pxToRem(32) },
  900: { value: pxToRem(36) },
  1000: { value: pxToRem(40) },
  1100: { value: pxToRem(44) },
  1200: { value: pxToRem(48) },
  1400: { value: pxToRem(56) },
  1600: { value: pxToRem(64) },
  2000: { value: pxToRem(80) },
  2400: { value: pxToRem(96) },
  2800: { value: pxToRem(112) },
}

export const wriRadii: Record<RadiusToken, TokenValue> = {
  100: { value: pxToRem(0) },
  200: { value: pxToRem(2) },
  300: { value: pxToRem(4) },
  400: { value: pxToRem(6) },
  500: { value: pxToRem(8) },
  600: { value: pxToRem(12) },
  700: { value: pxToRem(16) },
  800: { value: pxToRem(24) },
  900: { value: pxToRem(9999) },
}

export const wriBorderWidths: Record<BorderWidthToken, TokenValue> = {
  100: { value: pxToRem(1) },
  200: { value: pxToRem(2) },
  300: { value: pxToRem(4) },
  400: { value: pxToRem(6) },
}

export const wriLineHeights: Record<LineHeightToken, TokenValue> = {
  300: { value: pxToRem(12) },
  400: { value: pxToRem(16) },
  500: { value: pxToRem(20) },
  600: { value: pxToRem(24) },
  700: { value: pxToRem(28) },
  800: { value: pxToRem(32) },
  900: { value: pxToRem(36) },
  1000: { value: pxToRem(44) },
  1100: { value: pxToRem(60) },
  1200: { value: pxToRem(72) },
}

const createSystemWithTwFormat = (
  theme: ThemeColors,
): Record<string, string> => {
  const twFormat: Record<string, string> = {}

  const colorKeys = Object.keys(theme) as (keyof ThemeColors)[]
  colorKeys.forEach((colorKey) => {
    const colorVariants = Object.keys(theme[colorKey]) as (number | string)[]
    colorVariants.forEach((colorVariant) => {
      const variantValue = theme[colorKey][colorVariant].value
      const key = `${colorKey}-${colorVariant}`

      twFormat[key] = variantValue
    })
  })

  return twFormat
}

export const designSystemStylesForTailwind = createSystemWithTwFormat(wriColors)

export const designSystemStyles = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: wriColors,
      fontSizes: wriFontSizes,
      lineHeights: wriLineHeights,
      spacing: wriSpacing,
      radii: wriRadii,
      borderWidths: wriBorderWidths,
    },
  },
})

export const getThemedColor = (
  variant: ColorVariant,
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
  wriColors?.[variant]?.[index]?.value

export const getThemedFontSize = (token: FontSizeToken): string =>
  designSystemStyles.tokens.getVar(`fontSizes.${token}`) ||
  wriFontSizes?.[token]?.value

export const getThemedSpacing = (token: SpacingToken): string =>
  designSystemStyles.tokens.getVar(`spacing.${token}`) ||
  wriSpacing?.[token]?.value

export const getThemedLineHeight = (token: LineHeightToken): string =>
  designSystemStyles.tokens.getVar(`lineHeights.${token}`) ||
  wriLineHeights?.[token]?.value

export const getThemedRadius = (token: RadiusToken): string =>
  designSystemStyles.tokens.getVar(`radii.${token}`) || wriRadii?.[token]?.value

export const getThemedBorderWidth = (token: BorderWidthToken): string =>
  designSystemStyles.tokens.getVar(`borderWidths.${token}`) ||
  wriBorderWidths?.[token]?.value
