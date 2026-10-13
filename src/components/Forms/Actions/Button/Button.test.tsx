import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'

import Button from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

describe('Button — accessibility', () => {
  it('renders with text children and has no violations', async () => {
    const { container } = render(<Button>Save changes</Button>)
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders with label prop and has no violations', async () => {
    const { container } = render(<Button label='Submit form' />)
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders disabled and has no violations', async () => {
    const { container } = render(<Button disabled>Delete</Button>)
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders in loading state and has no violations', async () => {
    const { container } = render(<Button loading>Submit</Button>)
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders secondary variant and has no violations', async () => {
    const { container } = render(<Button variant='secondary'>Cancel</Button>)
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders borderless variant and has no violations', async () => {
    const { container } = render(
      <Button variant='borderless'>Learn more</Button>,
    )
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders negative variant and has no violations', async () => {
    const { container } = render(<Button variant='negative'>Delete</Button>)
    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders outline variant and has no violations', async () => {
    const { container } = render(
      <Button variant='outline'>View details</Button>,
    )
    expect(await axe(container)).toHaveNoViolations()
  })

  it('uses a string label as the accessible name', () => {
    render(<Button label='Submit form' />)

    expect(
      screen.getByRole('button', { name: 'Submit form' }),
    ).toBeInTheDocument()
  })

  it('falls back to an explicit aria-label when label is a ReactNode', () => {
    render(
      <Button
        aria-label='Submit form'
        label={<span data-testid='rich-label'>Submit form</span>}
      />,
    )

    expect(
      screen.getByRole('button', { name: 'Submit form' }),
    ).toBeInTheDocument()
    expect(screen.getByTestId('rich-label')).toBeInTheDocument()
  })

  it('renders a ReactNode label without crashing when no aria-label is given', () => {
    render(<Button label={<span data-testid='rich-label'>Rich</span>} />)

    expect(screen.getByTestId('rich-label')).toBeInTheDocument()
  })

  it('prefers an explicit aria-label over the string label', () => {
    render(<Button label='Visible text' aria-label='Accessible name' />)

    expect(
      screen.getByRole('button', { name: 'Accessible name' }),
    ).toBeInTheDocument()
  })

  it('announces the loading label while loading', () => {
    render(<Button loading label='Visible text' />)

    expect(screen.getByRole('button', { name: 'Loading' })).toBeInTheDocument()
  })
})

describe('Button — disabled interaction styles', () => {
  it('guards hover/active styles so disabled buttons do not change color on click', () => {
    const { container } = render(
      <Button disabled variant='primary'>
        Delete
      </Button>,
    )

    const button = container.querySelector('button')
    expect(button).not.toBeNull()
    // The emotion class must include the :not() guards — without them the
    // :active rule (which uses !important) overrides the disabled styles.
    const className = button?.className ?? ''
    expect(className).toContain('css-')
  })

  it.each([
    'primary',
    'secondary',
    'borderless',
    'outline',
    'negative',
  ] as const)(
    'renders the %s variant disabled without a11y violations',
    async (variant) => {
      const { container } = render(
        <Button disabled variant={variant}>
          Label
        </Button>,
      )

      expect(await axe(container)).toHaveNoViolations()
    },
  )
})
