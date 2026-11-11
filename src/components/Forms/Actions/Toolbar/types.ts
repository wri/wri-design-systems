import type { ToolbarLabels } from '../../../../lib/i18n/types'

export type { ToolbarLabels }

export type ToolbarExpandSide = 'left' | 'right'

export interface ToolbarItem {
  /** Icon rendered on the button */
  icon: React.ReactElement
  /** Accessible name of the button */
  ariaLabel: string
  /** Visible text shown when the toolbar is expanded */
  label?: React.ReactNode
  /** Disables the item */
  disabled?: boolean
  /** Called when the item is clicked */
  onClick?: () => void
  /** Overrides the default grouping to force or suppress a group break after this item */
  gap?: boolean
  /** Tooltip text shown when the toolbar is collapsed */
  tooltip?: string
  /** Marks the item as active (pressed) */
  active?: boolean
}

export interface ToolbarProps {
  /** Items rendered in the toolbar */
  items: ToolbarItem[]
  /** Renders the toolbar vertically. Defaults to `false` */
  vertical?: boolean
  /** Expands the toolbar to show item labels by default. Defaults to `false` */
  expanded?: boolean
  /** Shows the expand/collapse toggle button */
  showExpandedToggle?: boolean
  /** Accessible name of the toolbar */
  ariaLabel?: string
  /** Makes every item end a group unless it sets `gap: false`; when omitted, only items with `gap: true` end a group */
  defaultGaps?: boolean
  /** Automatically collapses items that do not fit the container. Defaults to `false` */
  autoCollapse?: boolean
  /** Side the expanded labels grow toward. Defaults to `'right'` */
  expandSide?: ToolbarExpandSide
  /** Override internal UI labels for internationalization support */
  labels?: Partial<ToolbarLabels>
}

export interface ToolbarButtonProps {
  /** Shows the label text */
  isExpanded: boolean
  /** Accessible name of the button */
  ariaLabel: string
  /** Icon rendered on the button */
  icon?: React.ReactNode
  /** Visible text shown when expanded */
  label?: React.ReactNode
  /** Tooltip text shown when the button is collapsed */
  tooltip?: string
  /** Disables the button */
  disabled?: boolean
  /** Called when the button is clicked */
  onClick?: () => void
  /** Renders the button for a vertical toolbar */
  vertical?: boolean
  /** Side the expanded label grows toward. Defaults to `'right'` */
  expandSide?: ToolbarExpandSide
  /** Marks the button as active (pressed) */
  active?: boolean
}

export interface UseToolbarOverflowParams {
  /** Number of items rendered in the toolbar */
  itemsCount: number
  /** Whether the toolbar is expanded */
  isExpanded: boolean
  /** Whether the toolbar is vertical */
  isVertical: boolean
  /** Whether each item ends a group, aligned with the items array */
  endsGroup: boolean[]
  /** Whether the expand/collapse toggle is rendered */
  showExpandedToggle?: boolean
  /** Whether items that do not fit collapse into the overflow menu */
  autoCollapse?: boolean
}
