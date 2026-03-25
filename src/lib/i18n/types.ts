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
  TextInput?: Partial<TextInputLabels>
}
