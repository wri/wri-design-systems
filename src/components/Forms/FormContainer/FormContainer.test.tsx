import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import FormContainer from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('FormContainer — accessibility', () => {
  it('renders label, error, and children with no violations', async () => {
    const { container } = render(
      <FormContainer label='Profile settings' error='Required'>
        <button type='button'>Save</button>
      </FormContainer>,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
