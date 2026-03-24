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
 * Labels for Password internal UI strings.
 * Override any key to provide translations.
 */
export type PasswordLabels = {
  /** Button label when password is hidden. Default: "Show" */
  showLabel: string
  /** Button label when password is visible. Default: "Hide" */
  hideLabel: string
  /** Aria-label for the reveal button when password is hidden. Default: "Show password" */
  showPasswordLabel: string
  /** Aria-label for the reveal button when password is visible. Default: "Hide password" */
  hidePasswordLabel: string
  /** Text prefix before the strength value. Default: "Password Strength:" */
  strengthPrefix: string
  /** Displayed label for 'very-weak' strength level. Default: "Very Weak" */
  strengthVeryWeak: string
  /** Displayed label for 'weak' strength level. Default: "Weak" */
  strengthWeak: string
  /** Displayed label for 'medium' strength level. Default: "Medium" */
  strengthMedium: string
  /** Displayed label for 'strong' strength level. Default: "Strong" */
  strengthStrong: string
  /** Displayed label for 'very-strong' strength level. Default: "Very Strong" */
  strengthVeryStrong: string
  /** Appended to a rule's aria-label when the rule is satisfied. Default: "Requirement met." */
  requirementMet: string
  /** Appended to a rule's aria-label when the rule is not yet satisfied. Default: "Requirement not met." */
  requirementNotMet: string
  /** Rule text with minLength placeholder. Receives the configured minimum as a number. Default: (min) => `Use a minimum of ${min} characters` */
  minLengthRule: (min: number) => string
  /** Rule text for uppercase requirement. Default: "Use an uppercase letter" */
  uppercaseRule: string
  /** Rule text for lowercase requirement. Default: "Use a lowercase letter" */
  lowercaseRule: string
  /** Rule text for number requirement. Default: "Use a number" */
  numberRule: string
  /** Rule text for special character requirement. Default: "Use a special character" */
  specialCharRule: string
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
  Password?: Partial<PasswordLabels>
}
