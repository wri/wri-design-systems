import type { CheckboxListLabels } from './types'

type DefaultLabels = {
  CheckboxList: Required<CheckboxListLabels>
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
}
