import React, { createContext, useContext, useMemo } from 'react'
import type { ReactNode } from 'react'
import type { DesignSystemLabels } from './types'

type LocaleContextValue = {
  labels: DesignSystemLabels
}

const LocaleContext = createContext<LocaleContextValue>({ labels: {} })

export type DesignSystemLocaleProviderProps = {
  /** Partial label overrides for any supported component. */
  labels: DesignSystemLabels
  children: ReactNode
}

/**
 * Provides translated label overrides to all child design system components.
 * Works with any i18n library (react-intl, react-i18next, etc.) — consumers
 * pass pre-translated strings.
 *
 * @example
 * ```tsx
 * <DesignSystemLocaleProvider labels={{
 *   CheckboxList: { expandLabel: 'Mostrar', hideLabel: 'Ocultar' },
 * }}>
 *   <App />
 * </DesignSystemLocaleProvider>
 * ```
 */
export const DesignSystemLocaleProvider = ({
  labels,
  children,
}: DesignSystemLocaleProviderProps) => {
  const value = useMemo(() => ({ labels }), [labels])
  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  )
}

/** @internal — used by useLabels; not intended for direct consumption */
export const useLocaleContext = () => useContext(LocaleContext)
