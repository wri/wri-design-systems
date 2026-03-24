/**
 * Labels for CheckboxList internal UI strings.
 * Override any key to provide translations.
 */
export type CheckboxListLabels = {
  /** Text on the toggle button when the list is collapsed. Default: "Expand" */
  expandLabel: string
  /** Text on the toggle button when the list is expanded. Default: "Hide" */
  hideLabel: string
  /** Appended to the group aria-label when the field is required. Default: "Required." */
  requiredLabel: string
  /** Appended to the group aria-label when the field is optional. Default: "Optional" */
  optionalLabel: string
  /** Prefix prepended to error messages in the group aria-label. Default: "Error:" */
  errorPrefix: string
  /** Accessible label for the required (*) symbol. Default: "required" */
  requiredSymbolLabel: string
}

/**
 * Top-level labels map for the design system.
 * Consumers can provide partial overrides for any component via
 * `DesignSystemLocaleProvider` or directly via each component's `labels` prop.
 *
 * Add new component entries here as i18n support is rolled out.
 */
export type DesignSystemLabels = {
  CheckboxList?: Partial<CheckboxListLabels>
}
