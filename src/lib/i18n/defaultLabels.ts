import type {
  CheckboxListLabels,
  PasswordLabels,
  TextInputLabels,
  CloseButtonLabels,
  ToastLabels,
  InlineMessageLabels,
  MapPopUpLabels,
  AnalysisWidgetLabels,
  TableLabels,
  ButtonLabels,
  BaseMapLabels,
  SearchLabels,
  RadioListLabels,
  SelectLabels,
  NavigationRailLabels,
  NavbarLabels,
  LegendItemLabels,
  ToolbarLabels,
  OpacityControlLabels,
  TextareaLabels,
  PaginationLabels,
  ItemCountLabels,
  LayerGroupLabels,
  QualitativeAttrLabels,
  MapControlsToolbarLabels,
  StepProgressIndicatorLabels,
} from './types'

type DefaultLabels = {
  CheckboxList: Required<CheckboxListLabels>
  Password: Required<PasswordLabels>
  TextInput: Required<TextInputLabels>
  CloseButton: Required<CloseButtonLabels>
  Toast: Required<ToastLabels>
  InlineMessage: Required<InlineMessageLabels>
  MapPopUp: Required<MapPopUpLabels>
  AnalysisWidget: Required<AnalysisWidgetLabels>
  Table: Required<TableLabels>
  Button: Required<ButtonLabels>
  BaseMap: Required<BaseMapLabels>
  Search: Required<SearchLabels>
  RadioList: Required<RadioListLabels>
  Select: Required<SelectLabels>
  NavigationRail: Required<NavigationRailLabels>
  Navbar: Required<NavbarLabels>
  LegendItem: Required<LegendItemLabels>
  Toolbar: Required<ToolbarLabels>
  OpacityControl: Required<OpacityControlLabels>
  Textarea: Required<TextareaLabels>
  Pagination: Required<PaginationLabels>
  ItemCount: Required<ItemCountLabels>
  LayerGroup: Required<LayerGroupLabels>
  QualitativeAttribute: Required<QualitativeAttrLabels>
  MapControlsToolbar: Required<MapControlsToolbarLabels>
  StepProgressIndicator: Required<StepProgressIndicatorLabels>
}

/**
 * Default English labels for all design system components.
 * These serve as fallbacks when no labels are provided via props or context.
 */
export const defaultLabels: DefaultLabels = {
  CheckboxList: {
    expandLabel: 'Expand',
    hideLabel: 'Hide',
    requiredLabel: 'Required.',
    optionalLabel: 'Optional',
    errorPrefix: 'Error:',
    requiredSymbolLabel: 'required',
  },
  Password: {
    showLabel: 'Show',
    hideLabel: 'Hide',
    showPasswordLabel: 'Show password',
    hidePasswordLabel: 'Hide password',
    strengthPrefix: 'Password Strength:',
    strengthVeryWeak: 'Very Weak',
    strengthWeak: 'Weak',
    strengthMedium: 'Medium',
    strengthStrong: 'Strong',
    strengthVeryStrong: 'Very Strong',
    requirementMet: 'Requirement met.',
    requirementNotMet: 'Requirement not met.',
    minLengthRule: (min) => `Use a minimum of ${min} characters`,
    uppercaseRule: 'Use an uppercase letter',
    lowercaseRule: 'Use a lowercase letter',
    numberRule: 'Use a number',
    specialCharRule: 'Use a special character',
  },
  TextInput: {
    requiredSymbolLabel: 'required',
    optionalSuffix: ' (Optional)',
  },
  // Tier A
  CloseButton: {
    closeLabel: 'Close',
  },
  Toast: {
    dismissLabel: 'Dismiss',
  },
  InlineMessage: {
    roleDescription: 'Note',
  },
  MapPopUp: {
    closeLabel: 'Close',
  },
  AnalysisWidget: {
    toggleSectionLabel: 'Toggle section',
  },
  Table: {
    ascendingLabel: 'Ascending',
    descendingLabel: 'Descending',
  },
  Button: {
    loadingLabel: 'Loading',
  },
  BaseMap: {
    activeLabel: 'Active',
  },
  Search: {
    filterPlaceholder: 'Filter',
    filterAriaLabel: 'Search filter',
  },
  // Tier B
  RadioList: {
    requiredLabel: 'Required.',
    optionalLabel: 'Optional.',
    errorPrefix: 'Error:',
    requiredSymbolLabel: 'required',
  },
  Select: {
    defaultAriaLabel: 'Select input',
    requiredSuffix: ' required.',
    disabledSuffix: ' Disabled.',
  },
  NavigationRail: {
    showLabel: 'Show',
    hideLabel: 'Hide',
    sidebarLabel: 'Sidebar',
  },
  Navbar: {
    openMenuLabel: 'Open menu',
    closeLabel: 'Close',
    menuLabel: 'Menu',
    goBackLabel: 'Go back',
    closeMenuLabel: 'Close menu',
    closeButtonText: 'Close',
  },
  LegendItem: {
    dragAndDropLabel: 'Drag and drop',
    upLabel: 'Up',
    downLabel: 'Down',
    removeLabel: 'Remove',
    aboutDataLabel: 'About data',
  },
  Toolbar: {
    collapseLabel: 'Collapse',
    expandLabel: 'Expand',
  },
  OpacityControl: {
    opacityButtonLabel: 'Opacity',
    opacityHeading: 'Opacity',
    opacityAriaLabel: 'Opacity',
    percentSuffix: '%',
  },
  // Tier C
  Textarea: {
    requiredSymbolLabel: 'required',
    optionalSuffix: ' (Optional)',
    errorPrefix: 'Error:',
    enterAtLeastChars: (n) => `Enter at least ${n} characters`,
    minChars: (n) => `Min ${n} characters`,
    charsRemaining: (n) => `You have ${n} characters remaining`,
    maxChars: (n) => `Max ${n} characters`,
    needMoreChars: (n) => `You need ${n} more characters`,
    tooManyChars: (n) => `You have ${n} characters too many`,
  },
  Pagination: {
    previousLabel: 'Previous',
    nextLabel: 'Next',
    previousPageLabel: 'Previous page',
    nextPageLabel: 'Next page',
    paginationLabel: 'Pagination',
    pageLabel: (page) => `Page ${page}`,
  },
  ItemCount: {
    perPageLabel: 'Per Page',
    showingLabel: (start, end, total) => `Showing ${start}-${end} of ${total}`,
  },
  LayerGroup: {
    activeTagLabel: (count) => `${count} Active`,
    groupAriaLabel: (label, activeCount, caption) =>
      `${label}, ${activeCount} Active layers on the map${caption ? `, ${caption}` : ''}`,
  },
  QualitativeAttribute: {
    hideLabel: 'Hide',
    showLabel: 'Show',
    visibleText: 'visible',
    hiddenText: 'hidden',
    linePrefix: 'line,',
    currentlyTemplate: (label, caption, typeText, visibilityText) =>
      `${typeText} ${label}${caption ? `, ${caption}` : ''}. Currently ${visibilityText}.`,
  },
  MapControlsToolbar: {
    zoomInLabel: 'Zoom in',
    zoomOutLabel: 'Zoom out',
    expandLabel: 'Expand',
    shareLabel: 'Share',
    printLabel: 'Print',
    settingsLabel: 'Settings',
    helpLabel: 'Help',
    zoomInAriaLabel: 'zoom in',
    zoomOutAriaLabel: 'zoom out',
    expandAriaLabel: 'expand',
    shareAriaLabel: 'share',
    printAriaLabel: 'print',
    settingsAriaLabel: 'settings',
    helpAriaLabel: 'question',
    toolbarAriaLabel: 'Map controls toolbar',
  },
  StepProgressIndicator: {
    currentStepLabel: (step, label, isCompleted) =>
      `Current Step ${step}${label ? ` ${label}` : ''}${isCompleted ? '. Completed' : ''}`,
  },
}
