import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import FieldWrapper, { FieldWrapperProps } from '.'
import { fieldWrapperLabelStyles } from './styled'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

const renderField = (props: Partial<FieldWrapperProps> = {}) =>
  render(
    <FieldWrapper label='Name' caption='Your full name' {...props}>
      <input aria-label='Name' />
    </FieldWrapper>,
  )

const renderGroup = (props: Partial<FieldWrapperProps> = {}) =>
  render(
    <FieldWrapper semantics='group' label='Layers' {...props}>
      <div role='group' aria-label='Options'>
        Options
      </div>
    </FieldWrapper>,
  )

describe('FieldWrapper — accessibility', () => {
  it('renders field semantics with no violations', async () => {
    const { container } = renderField({
      required: true,
      errorMessage: 'Name is required',
    })

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders group semantics with no violations', async () => {
    const { container } = renderGroup({
      required: true,
      caption: 'Pick a layer',
      footer: <span>2 selected</span>,
    })

    expect(await axe(container)).toHaveNoViolations()
  })
})

describe('FieldWrapper — header content', () => {
  it('renders label, caption and error message', () => {
    const { getByText, getByRole } = renderField({
      errorMessage: 'Name is required',
    })

    expect(getByText('Name')).toBeInTheDocument()
    expect(getByText('Your full name')).toBeInTheDocument()
    expect(getByRole('status')).toHaveTextContent('Name is required')
  })

  it('hides the optional suffix by default for non-required fields', () => {
    const { container } = renderField()

    expect(container.textContent).not.toContain('(optional)')
  })

  it('hides the optional suffix when the field is required', () => {
    const { container } = renderField({ required: true })

    expect(container.textContent).not.toContain('(optional)')
  })

  it('shows the lowercase optional suffix when showOptionalLabel is true', () => {
    const { container } = renderField({ showOptionalLabel: true })

    expect(container.textContent).toContain('(optional)')
    expect(container.textContent).not.toContain('(Optional)')
  })

  it('hides the optional suffix when showOptionalLabel is false', () => {
    const { container } = renderField({ showOptionalLabel: false })

    expect(container.textContent).not.toContain('(optional)')
  })

  it('labels the required indicator as "required" by default', () => {
    const { container } = renderField({ required: true })

    expect(container.querySelector('[aria-label="required"]')).not.toBeNull()
  })

  it('supports custom labels for the required indicator and optional suffix', () => {
    const { container } = render(
      <FieldWrapper
        label='Nombre'
        showOptionalLabel
        labels={{
          requiredSymbolLabel: 'obligatorio',
          optionalSuffix: '(opcional)',
        }}
      >
        <input aria-label='Nombre' />
      </FieldWrapper>,
    )

    expect(container.querySelector('[aria-label="obligatorio"]')).not.toBeNull()
    expect(container.textContent).toContain('(opcional)')
  })

  it('renders the group required indicator only when required', () => {
    const required = renderGroup({ required: true })
    expect(
      required.container.querySelector('[data-required-indicator]'),
    ).not.toBeNull()

    const optional = renderGroup()
    expect(
      optional.container.querySelector('[data-required-indicator]'),
    ).toBeNull()
  })

  it('hides the optional suffix by default in group semantics', () => {
    const { container } = renderGroup()

    expect(container.textContent).not.toContain('(optional)')
  })

  it('shows the lowercase optional suffix in group semantics when showOptionalLabel is true', () => {
    const { container } = renderGroup({ showOptionalLabel: true })

    expect(container.textContent).toContain('(optional)')
    expect(container.textContent).not.toContain('(Optional)')
  })

  it('never shows the optional suffix for required fields in group semantics', () => {
    const { container } = renderGroup({
      required: true,
      showOptionalLabel: true,
    })

    expect(container.textContent).not.toContain('(optional)')
  })

  it('marks the optional suffix with data-optional-suffix in field semantics', () => {
    const { container } = renderField({ showOptionalLabel: true })

    const suffix = container.querySelector('[data-optional-suffix]')
    expect(suffix).not.toBeNull()
    expect(suffix?.textContent).toBe('(optional)')
  })

  it('marks the optional suffix with data-optional-suffix in group semantics', () => {
    const { container } = renderGroup({ showOptionalLabel: true })

    const suffix = container.querySelector('[data-optional-suffix]')
    expect(suffix).not.toBeNull()
    expect(suffix?.textContent).toBe('(optional)')
  })

  it('renders a capitalized suffix override inside the lowercase-enforced span', () => {
    const { container } = renderField({
      showOptionalLabel: true,
      labels: { optionalSuffix: '(OPTIONAL)' },
    })

    const suffix = container.querySelector('[data-optional-suffix]')
    // The raw string is preserved in the DOM; `text-transform: lowercase`
    // (see fieldWrapperLabelStyles) forces the visible rendering lowercase.
    expect(suffix?.textContent).toBe('(OPTIONAL)')
  })

  it('applies text-transform: lowercase to the optional suffix for every size', () => {
    ;(['default', 'small'] as const).forEach((size) => {
      const { styles } = fieldWrapperLabelStyles(size)
      expect(styles).toContain('span[data-optional-suffix]')
      expect(styles).toContain('text-transform: lowercase')
    })
  })

  it('applies captionId and errorId for aria-describedby wiring', () => {
    const { getByText } = renderField({
      captionId: 'name-caption',
      errorId: 'name-error',
      errorMessage: 'Name is required',
    })

    expect(getByText('Your full name').id).toBe('name-caption')
    expect(getByText('Name is required').id).toBe('name-error')
  })

  it('marks the group label as disabled', () => {
    const { getByText } = renderGroup({ disabled: true })
    expect(getByText('Layers')).toHaveAttribute('data-disabled', 'true')
  })

  // Regression test for the div-in-p hydration error: CheckboxList passes a
  // rich label containing a <button> as the group label.
  it('renders the group label as a div, not a p, for rich label content', () => {
    const { container, getByText } = renderGroup({
      label: (
        <div>
          Parent
          <button type='button'>Expand</button>
        </div>
      ),
    })

    // No caption or error message is set, so the only <p> would be the group
    // label itself — a <p> would nest the button inside it.
    expect(container.querySelector('p')).toBeNull()
    expect(getByText('Expand')).toBeInTheDocument()
  })
})

describe('FieldWrapper — error state', () => {
  it('renders the error bar before the content when there is an error message', () => {
    const { container } = renderField({ errorMessage: 'Name is required' })
    const root = container.firstElementChild as HTMLElement

    // The error bar is an unstyled marker div rendered before the fieldset.
    expect(root.firstElementChild?.tagName).toBe('DIV')
    expect(root.children[1]?.tagName).toBe('FIELDSET')
  })

  it('renders the error bar when invalid is set without an error message', () => {
    const { container } = renderField({ invalid: true })
    const root = container.firstElementChild as HTMLElement

    expect(root.firstElementChild?.tagName).toBe('DIV')
  })

  it('renders no error bar without an error', () => {
    const { container } = renderField()
    const root = container.firstElementChild as HTMLElement

    expect(root.firstElementChild?.tagName).toBe('FIELDSET')
  })
})

describe('FieldWrapper — structure', () => {
  it('wraps content in a fieldset for field semantics', () => {
    const { container } = renderField()

    expect(container.querySelector('fieldset')).not.toBeNull()
  })

  it('renders no fieldset for group semantics', () => {
    const { container } = renderGroup()

    expect(container.querySelector('fieldset')).toBeNull()
  })

  it('renders the footer slot after the control', () => {
    const { getByText } = renderField({ footer: <span>0 / 200</span> })

    expect(getByText('0 / 200')).toBeInTheDocument()
  })

  it('forwards className and containerProps to the container', () => {
    const { container } = renderField({
      className: 'my-field',
      containerProps: {
        id: 'field-wrap',
        'data-testid': 'fw',
      } as FieldWrapperProps['containerProps'],
    })
    const root = container.firstElementChild as HTMLElement

    expect(root).toHaveClass('my-field')
    expect(root).toHaveAttribute('id', 'field-wrap')
    expect(root).toHaveAttribute('data-testid', 'fw')
  })

  it('renders children', () => {
    const { getByRole } = renderField()

    expect(getByRole('textbox')).toBeInTheDocument()
  })
})
