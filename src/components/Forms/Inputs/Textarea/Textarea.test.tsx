import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import Textarea from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

describe('Textarea — accessibility', () => {
  it('renders with a label and helper text and has no violations', async () => {
    const { container } = render(
      <Textarea
        label='Description'
        caption='Add a short description'
        placeholder='Type here'
        aria-label='Description'
        onChange={() => {}}
      />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders with validation limits and has no violations', async () => {
    const { container } = render(
      <Textarea
        label='Description'
        minLength={10}
        maxLength={100}
        defaultValue='short'
        aria-label='Description'
        onChange={() => {}}
      />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
