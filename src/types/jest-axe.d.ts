declare module 'jest-axe' {
  import type { AxeResults } from 'axe-core'

  export function axe(
    container: Element | Document | DocumentFragment,
    options?: Record<string, unknown>,
  ): Promise<AxeResults>

  export const toHaveNoViolations: () => {
    pass: boolean
    message: () => string
  }
}
