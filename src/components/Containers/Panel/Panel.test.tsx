import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import Panel from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../testUtils').createChakraMock(),
)

describe('Panel — accessibility', () => {
  it('renders panel sections with no violations', async () => {
    const { container } = render(
      <Panel
        header={<h2>Panel title</h2>}
        content={<div>Panel content</div>}
        footer={<div>Panel footer</div>}
      />,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
