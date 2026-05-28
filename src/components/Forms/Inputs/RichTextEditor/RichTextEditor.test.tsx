import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

jest.mock('@tiptap/starter-kit', () => ({
  __esModule: true,
  default: {
    configure: () => ({}),
  },
}))

jest.mock('@tiptap/extension-underline', () => ({
  __esModule: true,
  default: {},
}))

jest.mock('@tiptap/extension-subscript', () => ({
  __esModule: true,
  default: {},
}))

jest.mock('@tiptap/extension-superscript', () => ({
  __esModule: true,
  default: {},
}))

jest.mock('@tiptap/extension-text-align', () => ({
  __esModule: true,
  default: {
    configure: () => ({}),
  },
}))

jest.mock('@tiptap/extension-text-style', () => ({
  __esModule: true,
  TextStyleKit: {},
}))

jest.mock('@tiptap/extension-link', () => ({
  __esModule: true,
  default: {
    configure: () => ({}),
  },
}))

jest.mock('@tiptap/extension-image', () => ({
  __esModule: true,
  default: {},
}))

jest.mock('@tiptap/extension-placeholder', () => ({
  __esModule: true,
  default: {
    configure: () => ({}),
  },
}))

jest.mock('@tiptap/react', () => ({
  __esModule: true,
  EditorContent: () => null,
  useEditor: () => null,
}))

import RichTextEditor from '.'

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

describe('RichTextEditor — accessibility', () => {
  it('renders with no a11y violations', async () => {
    const { container } = render(<RichTextEditor />)

    expect(await axe(container)).toHaveNoViolations()
  })
})
