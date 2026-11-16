import { css } from '@emotion/react'
import {
  getThemedBorderWidth,
  getThemedColor,
  getThemedRadius,
  getThemedSpacing,
} from '../../../lib/theme'
import { pxToRem } from '../../../lib/sizing'
import { PopoverArrowAlignment, PopoverPlacement, PopoverProps } from './types'

/**
 * Figma arrow is 18px wide × 9px tall, with its tip sitting 8px above the
 * content's top edge (`top: -8px`), touching the trigger. Chakra renders the
 * tip as a square of `--arrow-size` rotated 45°, whose visible flat base
 * measures side × √2, so the square side is 18 / √2 to produce the 18×9 arrow.
 */
const ARROW_BASE_WIDTH_PX = 18
const ARROW_TIP_OFFSET_PX = 8
const ARROW_BASE_WIDTH = pxToRem(ARROW_BASE_WIDTH_PX)

/**
 * Zag positions the content at `gutter + arrow.clientHeight / 2` from the
 * trigger (default gutter: 8), which leaves the arrow tip floating below the
 * trigger. Compensating the gutter lands the content edge exactly
 * `ARROW_TIP_OFFSET_PX` away, so the tip touches the trigger.
 */
export const POPOVER_ARROW_GUTTER =
  ARROW_TIP_OFFSET_PX - ARROW_BASE_WIDTH_PX / Math.SQRT2 / 2

/** Arrow inset from the popover edge, per Figma */
const ARROW_EDGE_OFFSET = getThemedSpacing(500)

/**
 * The tip's corners are rounded to match the Figma arrow's smooth shape.
 * Whatever the 45°+90k tip rotation, the square's top-left corner points
 * outward (the apex) and the top-right/bottom-left corners form the base
 * junctions with the popover border.
 */
const ARROW_APEX_RADIUS = pxToRem(2)
const ARROW_JUNCTION_RADIUS = pxToRem(1)

/**
 * Floating-ui centers the arrow along the popover edge via inline `left`/`top`
 * styles, so non-center alignments must override the inline style with
 * `!important`. `left`/`right` map to the cross-axis start/end of the edge:
 * horizontal for `top`/`bottom` placements, vertical for `left`/`right`.
 */
const arrowAlignmentStyles = (
  alignment: PopoverArrowAlignment,
  placement: PopoverPlacement,
): string => {
  if (alignment === 'center') return ''

  const isVertical =
    placement.startsWith('top') || placement.startsWith('bottom')
  const startProperty = isVertical ? 'left' : 'top'
  const endProperty = isVertical ? 'right' : 'bottom'

  if (alignment === 'left') {
    return `${startProperty}: ${ARROW_EDGE_OFFSET} !important;`
  }

  return `${startProperty}: auto !important; ${endProperty}: ${ARROW_EDGE_OFFSET} !important;`
}

export const popoverContentStyles = (
  width: NonNullable<PopoverProps['width']>,
  arrowAlignment: PopoverArrowAlignment,
  placement: PopoverPlacement,
) => css`
  --popover-bg: ${getThemedColor('neutral', 100)};
  --popover-size: ${width};
  background-color: ${getThemedColor('neutral', 100)};
  border: ${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 600)};
  border-radius: ${getThemedRadius(300)};
  padding: ${getThemedSpacing(400)};
  /* Shadows/100 */
  box-shadow: 0px 0.0625rem 0.0625rem 0px #0000000d;

  & [data-part='arrow'] {
    --arrow-size: calc(${ARROW_BASE_WIDTH} / 1.4142);
    ${arrowAlignmentStyles(arrowAlignment, placement)}
  }

  & [data-part='arrow-tip'] {
    border-color: ${getThemedColor('neutral', 600)};
    border-top-left-radius: ${ARROW_APEX_RADIUS};
    border-top-right-radius: ${ARROW_JUNCTION_RADIUS};
    border-bottom-left-radius: ${ARROW_JUNCTION_RADIUS};
    top: ${pxToRem(-0.5)} !important; /* Compensates zag's 0.5px offset */
  }
`
