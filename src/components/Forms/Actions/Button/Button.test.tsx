import { render } from '@testing-library/react'
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

  it('renders outline variant and has no violations', async () => {
    const { container } = render(
      <Button variant='outline'>View details</Button>,
    )
    expect(await axe(container)).toHaveNoViolations()
  })
})
