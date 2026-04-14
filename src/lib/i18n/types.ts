import type { ReactNode } from 'react'

/**
 * Use for label keys that are rendered as visible JSX text (children of elements).
 * Consumers can pass strings, elements, or fragments.
 *
 * Keys used directly as `aria-label` / `aria-roledescription` or inside
 * template literals fed to ARIA attributes must stay typed as `string` — the
 * HTML spec requires those values to be plain strings.
 */
export type ReactNodeLabel = ReactNode

/**
 * Labels for CheckboxList internal UI strings.
 * Override any key to provide translations.
 */
export type CheckboxListLabels = {
  /**
   * Text on the toggle button when the list is collapsed.
   * Rendered as JSX child — accepts ReactNode.
   * Default: "Expand"
   */
  expandLabel: ReactNodeLabel
  /**
   * Text on the toggle button when the list is expanded.
   * Rendered as JSX child — accepts ReactNode.
   * Default: "Hide"
   */
  hideLabel: ReactNodeLabel
  /** Appended to the group aria-label when the field is required. Must be string (aria-label). Default: "Required." */
  requiredLabel: string
  /** Appended to the group aria-label when the field is optional. Must be string (aria-label). Default: "Optional" */
  optionalLabel: string
  /** Prefix prepended to error messages in the group aria-label. Must be string (aria-label). Default: "Error:" */
  errorPrefix: string
  /** Accessible label for the required (*) symbol. Must be string (aria-label). Default: "required" */
  requiredSymbolLabel: string
}

/**
 * Labels for Password internal UI strings.
 * Override any key to provide translations.
 */
export type PasswordLabels = {
  /** Button label when password is hidden. Must be string (passed to Button.label: string). Default: "Show" */
  showLabel: string
  /** Button label when password is visible. Must be string (passed to Button.label: string). Default: "Hide" */
  hideLabel: string
  /** Aria-label for the reveal button when password is hidden. Must be string (aria-label). Default: "Show password" */
  showPasswordLabel: string
  /** Aria-label for the reveal button when password is visible. Must be string (aria-label). Default: "Hide password" */
  hidePasswordLabel: string
  /**
   * Text prefix before the strength value.
   * Rendered as JSX child — accepts ReactNode.
   * Default: "Password Strength:"
   */
  strengthPrefix: ReactNodeLabel
  /**
   * Displayed label for each strength level — rendered as JSX children.
   * All five accept ReactNode.
   */
  strengthVeryWeak: ReactNodeLabel
  strengthWeak: ReactNodeLabel
  strengthMedium: ReactNodeLabel
  strengthStrong: ReactNodeLabel
  strengthVeryStrong: ReactNodeLabel
  /** Appended to a rule's aria-label when satisfied. Must be string (aria-label template). Default: "Requirement met." */
  requirementMet: string
  /** Appended to a rule's aria-label when not satisfied. Must be string (aria-label template). Default: "Requirement not met." */
  requirementNotMet: string
  /**
   * Dual-use: rendered as `<p>` text AND inside an aria-label template.
   * Must be string to satisfy the aria-label constraint.
   * Default: (min) => `Use a minimum of ${min} characters`
   */
  minLengthRule: (min: number) => string
  /** Dual-use (p + aria-label). Must be string. Default: "Use an uppercase letter" */
  uppercaseRule: string
  /** Dual-use (p + aria-label). Must be string. Default: "Use a lowercase letter" */
  lowercaseRule: string
  /** Dual-use (p + aria-label). Must be string. Default: "Use a number" */
  numberRule: string
  /** Dual-use (p + aria-label). Must be string. Default: "Use a special character" */
  specialCharRule: string
}

/**
 * Labels for TextInput internal UI strings.
 * Override any key to provide translations.
 */
export type TextInputLabels = {
  /** Accessible label for the required (*) indicator. Must be string (aria-label). Default: "required" */
  requiredSymbolLabel: string
  /**
   * Suffix appended after the field label when the field is optional.
   * Rendered as JSX child inside a <span> — accepts ReactNode.
   * Default: " (Optional)"
   */
  optionalSuffix: ReactNodeLabel
}

// ---------------------------------------------------------------------------
// Tier A — Simple Components
// ---------------------------------------------------------------------------

/** Labels for CloseButton internal UI strings. */
export type CloseButtonLabels = {
  /** Fallback aria-label when none is provided via props. Default: "Close" */
  closeLabel: string
}

/** Labels for Toast internal UI strings. */
export type ToastLabels = {
  /** aria-label on the dismiss button. Default: "Dismiss" */
  dismissLabel: string
}

/** Labels for InlineMessage internal UI strings. */
export type InlineMessageLabels = {
  /** aria-roledescription on the root element. Default: "Note" */
  roleDescription: string
}

/** Labels for MapPopUp internal UI strings. */
export type MapPopUpLabels = {
  /** aria-label on the close button. Default: "Close" */
  closeLabel: string
}

/** Labels for AnalysisWidget internal UI strings. */
export type AnalysisWidgetLabels = {
  /** aria-label on the collapsible section trigger. Default: "Toggle section" */
  toggleSectionLabel: string
}

/** Labels for Table internal UI strings. */
export type TableLabels = {
  /** aria-label on the ascending sort icon button. Default: "Ascending" */
  ascendingLabel: string
  /** aria-label on the descending sort icon button. Default: "Descending" */
  descendingLabel: string
}

/** Labels for Button internal UI strings. */
export type ButtonLabels = {
  /** aria-label applied to the button during loading state. Default: "Loading" */
  loadingLabel: string
}

/** Labels for BaseMap internal UI strings. */
export type BaseMapLabels = {
  /**
   * Visible label text inside the active Tag badge.
   * Passed directly to Tag.label (string).
   * Default: "Active"
   */
  activeLabel: string
}

/** Labels for Search internal UI strings. */
export type SearchLabels = {
  /** placeholder attribute on the filter input. Default: "Filter" */
  filterPlaceholder: string
  /** aria-label on the filter input. Default: "Search filter" */
  filterAriaLabel: string
}

// ---------------------------------------------------------------------------
// Tier B — Medium Components
// ---------------------------------------------------------------------------

/** Labels for RadioList internal UI strings. */
export type RadioListLabels = {
  /** " Required." appended to the group aria-label. Default: "Required." */
  requiredLabel: string
  /** " Optional." appended to the group aria-label. Default: "Optional." */
  optionalLabel: string
  /** "Error:" prefix prepended to error in group aria-label. Default: "Error:" */
  errorPrefix: string
  /** aria-label on the required (*) indicator. Default: "required" */
  requiredSymbolLabel: string
}

/** Labels for Select internal UI strings. */
export type SelectLabels = {
  /** Fallback aria-label when no label prop is provided. Default: "Select input" */
  defaultAriaLabel: string
  /** " required." appended to aria-label when required. Default: " required." */
  requiredSuffix: string
  /** " Disabled." appended to aria-label when disabled. Default: " Disabled." */
  disabledSuffix: string
}

/** Labels for NavigationRail internal UI strings. */
export type NavigationRailLabels = {
  /**
   * Visible toggle button text when sidebar is hidden.
   * Rendered as JSX child — accepts ReactNode.
   * Default: "Show"
   */
  showLabel: ReactNodeLabel
  /**
   * Visible toggle button text when sidebar is visible.
   * Rendered as JSX child — accepts ReactNode.
   * Default: "Hide"
   */
  hideLabel: ReactNodeLabel
  /**
   * Visible sidebar text label.
   * Rendered as JSX child — accepts ReactNode.
   * Default: "Sidebar"
   */
  sidebarLabel: ReactNodeLabel
}

/** Labels for Navbar internal UI strings. */
export type NavbarLabels = {
  /** aria-label on the hamburger/open-menu button. Default: "Open menu" */
  openMenuLabel: string
  /**
   * Visible button text for the close state of the hamburger toggle.
   * Rendered as JSX child — accepts ReactNode.
   * Default: "Close"
   */
  closeLabel: ReactNodeLabel
  /**
   * Visible button text for the menu state of the hamburger toggle.
   * Rendered as JSX child — accepts ReactNode.
   * Default: "Menu"
   */
  menuLabel: ReactNodeLabel
  /** aria-label on the back button in NavbarMobile. Default: "Go back" */
  goBackLabel: string
  /** aria-label on the close button in NavbarMobile submenu. Default: "Close menu" */
  closeMenuLabel: string
  /**
   * Visible "Close" text inside the mobile close button.
   * Rendered as JSX child — accepts ReactNode.
   * Default: "Close"
   */
  closeButtonText: ReactNodeLabel
}

/** Labels for LegendItem internal UI strings. */
export type LegendItemLabels = {
  /** aria-label on the drag handle icon button. Default: "Drag and drop" */
  dragAndDropLabel: string
  /** aria-label on the move-up icon button. Default: "Up" */
  upLabel: string
  /** aria-label on the move-down icon button. Default: "Down" */
  downLabel: string
  /**
   * Visible text on the remove button.
   * Passed directly to Button.label (string).
   * Default: "Remove"
   */
  removeLabel: string
  /**
   * Visible text on the info/about-data button.
   * Passed directly to Button.label (string).
   * Default: "About data"
   */
  aboutDataLabel: string
}

/** Labels for Toolbar internal UI strings. */
export type ToolbarLabels = {
  /**
   * Visible text on the collapse toggle button.
   * Rendered as JSX child — accepts ReactNode.
   * Default: "Collapse"
   */
  collapseLabel: ReactNodeLabel
  /**
   * Visible text on the expand toggle button.
   * Rendered as JSX child — accepts ReactNode.
   * Default: "Expand"
   */
  expandLabel: ReactNodeLabel
  /** aria-label on the collapse toggle button. Must be string. Default: "Collapse" */
  collapseAriaLabel: string
  /** aria-label on the expand toggle button. Must be string. Default: "Expand" */
  expandAriaLabel: string
}

/** Labels for OpacityControl internal UI strings. */
export type OpacityControlLabels = {
  /** Button.label prop — must be string. Default: "Opacity" */
  opacityButtonLabel: string
  /**
   * Visible heading in the popover.
   * Rendered as JSX child — accepts ReactNode.
   * Default: "Opacity"
   */
  opacityHeading: ReactNodeLabel
  /** aria-label on the slider/input. Default: "Opacity" */
  opacityAriaLabel: string
  /**
   * Visible "%" suffix next to the value.
   * Rendered as JSX child — accepts ReactNode.
   * Default: "%"
   */
  percentSuffix: ReactNodeLabel
}

// ---------------------------------------------------------------------------
// Tier C — Complex Components
// ---------------------------------------------------------------------------

/** Labels for Textarea internal UI strings. */
export type TextareaLabels = {
  /** aria-label on the required (*) indicator. Default: "required" */
  requiredSymbolLabel: string
  /**
   * Visible "(Optional)" suffix appended to the label.
   * Rendered as JSX child — accepts ReactNode.
   * Default: " (Optional)"
   */
  optionalSuffix: ReactNodeLabel
  /** "Error:" prefix in aria-label of error text. Default: "Error:" */
  errorPrefix: string
  /** Helper text: "Enter at least {n} characters". Default fn provided. */
  enterAtLeastChars: (n: number) => string
  /** Helper text: "{n} characters minimum". Default fn provided. */
  minChars: (n: number) => string
  /** Helper text: "{n} characters remaining". Default fn provided. */
  charsRemaining: (n: number) => string
  /** Helper text: "Max {n} characters". Default fn provided. */
  maxChars: (n: number) => string
  /** Error text when too few chars: "Need {n} more characters". Default fn provided. */
  needMoreChars: (n: number) => string
  /** Error text when too many chars: "{n} characters too many". Default fn provided. */
  tooManyChars: (n: number) => string
}

/** Labels for Pagination internal UI strings. */
export type PaginationLabels = {
  /**
   * Visible "Previous" button text.
   * Passed directly to Button.label (string).
   * Default: "Previous"
   */
  previousLabel: string
  /**
   * Visible "Next" button text.
   * Passed directly to Button.label (string).
   * Default: "Next"
   */
  nextLabel: string
  /** aria-label on the previous icon button. Default: "Previous page" */
  previousPageLabel: string
  /** aria-label on the next icon button. Default: "Next page" */
  nextPageLabel: string
  /** aria-label on the nav container. Default: "Pagination" */
  paginationLabel: string
  /** aria-label per page button, e.g. "Page 3". Default fn provided. */
  pageLabel: (page: number) => string
}

/** Labels for ItemCount internal UI strings. */
export type ItemCountLabels = {
  /**
   * Visible "Per Page" label text.
   * Rendered as JSX child — accepts ReactNode.
   * Default: "Per Page"
   */
  perPageLabel: ReactNodeLabel
  /**
   * Visible "Showing X-Y of Z" text.
   * Rendered as JSX child — accepts ReactNode.
   * Default fn provided.
   */
  showingLabel: (start: number, end: number, total: number) => ReactNode
}

/** Labels for LayerGroup internal UI strings. */
export type LayerGroupLabels = {
  /**
   * Visible Tag label: "{count} Active".
   * Passed directly to Tag.label (string) — must return string.
   * Default fn provided.
   */
  activeTagLabel: (count: number) => string
  /** Full aria-label builder for the group container. Default fn provided. */
  groupAriaLabel: (
    label: string,
    activeCount: number,
    caption?: string,
  ) => string
}

/** Labels for QualitativeAttribute internal UI strings. */
export type QualitativeAttributeLabels = {
  /**
   * Visible "Hide" button text.
   * Rendered as JSX child — accepts ReactNode.
   * Default: "Hide"
   */
  hideLabel: ReactNodeLabel
  /**
   * Visible "Show" button text.
   * Rendered as JSX child — accepts ReactNode.
   * Default: "Show"
   */
  showLabel: ReactNodeLabel
  /** "visible" — used inside aria-label. Default: "visible" */
  visibleText: string
  /** "hidden" — used inside aria-label. Default: "hidden" */
  hiddenText: string
  /** "line," — type prefix in aria-label. Default: "line," */
  linePrefix: string
  /** Full aria-label builder. Default fn provided. */
  currentlyTemplate: (
    label: string,
    caption: string | undefined,
    typeText: string,
    visibilityText: string,
  ) => string
}

/** Labels for MapControlsToolbar internal UI strings. */
export type MapControlsToolbarLabels = {
  // Visible button text (string — passed to ToolbarItem.label: string)
  /** Default: "Zoom in" */
  zoomInLabel: string
  /** Default: "Zoom out" */
  zoomOutLabel: string
  /** Default: "Expand" */
  expandLabel: string
  /** Default: "Share" */
  shareLabel: string
  /** Default: "Print" */
  printLabel: string
  /** Default: "Settings" */
  settingsLabel: string
  /** Default: "Help" */
  helpLabel: string
  // Aria-labels (string)
  /** Default: "Zoom in" */
  zoomInAriaLabel: string
  /** Default: "Zoom out" */
  zoomOutAriaLabel: string
  /** Default: "Expand" */
  expandAriaLabel: string
  /** Default: "Share" */
  shareAriaLabel: string
  /** Default: "Print" */
  printAriaLabel: string
  /** Default: "Settings" */
  settingsAriaLabel: string
  /** Default: "Help" */
  helpAriaLabel: string
  // Container
  /** Default: "Map controls" */
  toolbarAriaLabel: string
}

/** Labels for StepProgressIndicator internal UI strings. */
export type StepProgressIndicatorLabels = {
  /** Builds the aria-label per step. Default fn provided. */
  currentStepLabel: (
    step: number,
    label: string,
    isCompleted: boolean,
  ) => string
}

/**
 * Top-level labels map for the design system.
 * Consumers can provide partial overrides for any component via
 * `DesignSystemLocaleProvider` or directly via each component's `labels` prop.
 *
 * Add new component entries here as i18n support is rolled out.
 */
export type DesignSystemLabels = {
  // Phase 1–2
  CheckboxList?: Partial<CheckboxListLabels>
  Password?: Partial<PasswordLabels>
  TextInput?: Partial<TextInputLabels>
  // Tier A
  CloseButton?: Partial<CloseButtonLabels>
  Toast?: Partial<ToastLabels>
  InlineMessage?: Partial<InlineMessageLabels>
  MapPopUp?: Partial<MapPopUpLabels>
  AnalysisWidget?: Partial<AnalysisWidgetLabels>
  Table?: Partial<TableLabels>
  Button?: Partial<ButtonLabels>
  BaseMap?: Partial<BaseMapLabels>
  Search?: Partial<SearchLabels>
  // Tier B
  RadioList?: Partial<RadioListLabels>
  Select?: Partial<SelectLabels>
  NavigationRail?: Partial<NavigationRailLabels>
  Navbar?: Partial<NavbarLabels>
  LegendItem?: Partial<LegendItemLabels>
  Toolbar?: Partial<ToolbarLabels>
  OpacityControl?: Partial<OpacityControlLabels>
  // Tier C
  Textarea?: Partial<TextareaLabels>
  Pagination?: Partial<PaginationLabels>
  ItemCount?: Partial<ItemCountLabels>
  LayerGroup?: Partial<LayerGroupLabels>
  QualitativeAttribute?: Partial<QualitativeAttributeLabels>
  MapControlsToolbar?: Partial<MapControlsToolbarLabels>
  StepProgressIndicator?: Partial<StepProgressIndicatorLabels>
}
