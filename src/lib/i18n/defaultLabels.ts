import type {
  CheckboxListLabels,
  PasswordLabels,
  TextInputLabels,
} from './types'

type DefaultLabels = {
  CheckboxList: Required<CheckboxListLabels>
  Password: Required<PasswordLabels>
  TextInput: Required<TextInputLabels>
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
}
