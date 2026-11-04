import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import { DesignSystemLocaleProvider, useLocaleContext } from './LocaleProvider'
import { useLabels } from './useLabels'
import { defaultLabels } from './defaultLabels'

const Probe = ({
  componentName,
  labels,
}: {
  componentName: 'TextInput'
  labels?: Partial<typeof defaultLabels.TextInput>
}) => {
  const resolved = useLabels(componentName, labels)
  return (
    <div data-testid='probe'>
      {resolved.requiredSymbolLabel}|{resolved.optionalSuffix}
    </div>
  )
}

describe('useLabels — priority resolution', () => {
  it('falls back to default English labels outside a provider', () => {
    render(<Probe componentName='TextInput' />)

    expect(screen.getByTestId('probe').textContent).toBe(
      `required|${defaultLabels.TextInput.optionalSuffix}`,
    )
  })

  it('prefers context labels from the provider over defaults', () => {
    render(
      <DesignSystemLocaleProvider
        labels={{ TextInput: { requiredSymbolLabel: 'obligatorio' } }}
      >
        <Probe componentName='TextInput' />
      </DesignSystemLocaleProvider>,
    )

    expect(screen.getByTestId('probe').textContent).toContain('obligatorio')
  })

  it('prefers component-level labels over context labels', () => {
    render(
      <DesignSystemLocaleProvider
        labels={{ TextInput: { requiredSymbolLabel: 'from-context' } }}
      >
        <Probe
          componentName='TextInput'
          labels={{ requiredSymbolLabel: 'from-props' }}
        />
      </DesignSystemLocaleProvider>,
    )

    expect(screen.getByTestId('probe').textContent).toContain('from-props')
    expect(screen.getByTestId('probe').textContent).not.toContain(
      'from-context',
    )
  })

  it('merges partial overrides without dropping unspecified defaults', () => {
    render(
      <DesignSystemLocaleProvider
        labels={{ TextInput: { requiredSymbolLabel: 'obligatorio' } }}
      >
        <Probe componentName='TextInput' />
      </DesignSystemLocaleProvider>,
    )

    // optionalSuffix is not overridden, so the default must survive.
    expect(screen.getByTestId('probe').textContent).toBe(
      `obligatorio|${defaultLabels.TextInput.optionalSuffix}`,
    )
  })

  it('exposes the raw context through useLocaleContext', () => {
    let contextValue: unknown
    const Reader = () => {
      contextValue = useLocaleContext()
      return null
    }

    render(
      <DesignSystemLocaleProvider
        labels={{ TextInput: { requiredSymbolLabel: 'x' } }}
      >
        <Reader />
      </DesignSystemLocaleProvider>,
    )

    expect(contextValue).toEqual({
      labels: { TextInput: { requiredSymbolLabel: 'x' } },
    })
  })
})

describe('DesignSystemLocaleProvider — accessibility', () => {
  it('renders children with no violations', async () => {
    const { container } = render(
      <DesignSystemLocaleProvider labels={{}}>
        <button type='button'>Go</button>
      </DesignSystemLocaleProvider>,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
