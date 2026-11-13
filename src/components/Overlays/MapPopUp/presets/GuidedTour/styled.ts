import { css } from '@emotion/react'
import {
  getThemedColor,
  getThemedFontSize,
  getThemedLineHeight,
  getThemedSpacing,
} from '../../../../../lib/theme'

export const guidedTourFooterStyles = css`
  display: flex;
  flex-direction: column;
  gap: ${getThemedSpacing(200)};
`

export const guidedTourFooterControlsStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${getThemedSpacing(200)};
`

export const guidedTourNavigationStyles = css`
  display: flex;
  align-items: center;
  gap: ${getThemedSpacing(100)};
`

export const guidedTourStepCounterStyles = (isDark: boolean) => css`
  font-size: ${getThemedFontSize(300)};
  line-height: ${getThemedLineHeight(500)};
  font-weight: 400;
  color: ${getThemedColor('neutral', isDark ? 100 : 800)};
  padding: 0 ${getThemedSpacing(100)};
`

/**
 * IconButton hardcodes `svg path { fill: neutral/800 }`, which outranks an
 * inherited `color` on the button. Setting `fill` directly on `svg path`
 * gives us the same specificity but a later position in the sheet, so
 * `currentColor` resolves to the button's own `color`.
 */
export const guidedTourNavigationButtonStyles = (isDark: boolean) => css`
  background-color: transparent;
  color: ${getThemedColor('neutral', 500)};

  svg {
    path {
      fill: currentColor;
    }
  }

  &:hover,
  &:active {
    background-color: ${isDark
      ? `color-mix(in srgb, ${getThemedColor('neutral', 100)} 16%, transparent)`
      : `color-mix(in srgb, ${getThemedColor('neutral', 900)} 10%, transparent)`};
  }

  &:disabled {
    background-color: transparent;
    color: ${getThemedColor('neutral', 600)};

    svg {
      path {
        fill: currentColor;
      }
    }
  }
`

/**
 * The `›` control is tinted primary/600 on both surfaces.
 *
 * Note: on the dark surface (neutral/800) primary/600 lands at ~3.6:1, just
 * below the 4.5:1 AA ratio for small iconography. `primary/400` is the token
 * the theme reserves for controls on dark backgrounds (~7:1) if a higher
 * contrast is ever required.
 */
export const guidedTourNextButtonStyles = () => css`
  color: ${getThemedColor('primary', 600)};
`

/** `Button variant='borderless'` is already transparent; only recolor it. */
export const guidedTourSkipButtonStyles = (isDark: boolean) => css`
  color: ${isDark
    ? getThemedColor('neutral', 100)
    : getThemedColor('neutral', 800)};
`
