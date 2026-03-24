import { useLocaleContext } from './LocaleProvider'
import { defaultLabels } from './defaultLabels'
import type { DesignSystemLabels } from './types'

type ComponentName = keyof typeof defaultLabels

/**
 * Resolves labels for a component with the following priority:
 * 1. Component-level `labels` prop  (highest priority)
 * 2. Context labels from `DesignSystemLocaleProvider`
 * 3. Default English labels           (lowest priority / fallback)
 *
 * @param componentName - The key matching an entry in `defaultLabels`
 * @param propsLabels   - Optional partial override from the component's own `labels` prop
 */
export function useLabels<K extends ComponentName>(
  componentName: K,
  propsLabels?: Partial<(typeof defaultLabels)[K]>,
): (typeof defaultLabels)[K] {
  const { labels: contextLabels } = useLocaleContext()
  const contextComponentLabels = (contextLabels as DesignSystemLabels)[
    componentName
  ]

  return {
    ...defaultLabels[componentName],
    ...(contextComponentLabels ?? {}),
    ...(propsLabels ?? {}),
  } as (typeof defaultLabels)[K]
}
