import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import RichTextEditor from '.'

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

jest.mock('@tiptap/react', () => {
  const chain = () => {
    const api: Record<string, any> = {}
    const build = () =>
      new Proxy(
        { run: () => {} },
        {
          get: (_t, prop) => {
            const key = String(prop)
            if (key === 'run') return () => {}
            api[key] = api[key] || (() => build())
            return api[key]
          },
        },
      )
    return build()
  }

  const fakeEditor = {
    isActive: () => false,
    getAttributes: () => ({}),
    getHTML: () => '<p></p>',
    isEditable: true,
    setEditable: () => {},
    chain,
    can: () => chain(),
    isEmpty: true,
  }

  return {
    __esModule: true,
    EditorContent: () => null,
    useEditor: () => fakeEditor,
  }
})

jest.mock('@chakra-ui/react', () =>
  jest.requireActual('../../../testUtils').createChakraMock(),
)

describe('RichTextEditor — accessibility', () => {
  it('renders with no a11y violations', async () => {
    const { container } = render(<RichTextEditor />)

    expect(await axe(container)).toHaveNoViolations()
  })

  it('renders in a disabled state with no violations', async () => {
    const { container } = render(<RichTextEditor disabled />)

    expect(await axe(container)).toHaveNoViolations()
  })
})

describe('RichTextEditor — visibleControls', () => {
  it('renders the default control set', () => {
    const { getByRole } = render(<RichTextEditor />)

    expect(getByRole('button', { name: 'Undo' })).toBeInTheDocument()
    expect(getByRole('button', { name: 'Redo' })).toBeInTheDocument()
    // Option controls compose their label with the current value.
    expect(
      getByRole('button', { name: 'Text Type: Normal text' }),
    ).toBeInTheDocument()
    expect(getByRole('button', { name: 'Font Size: 16px' })).toBeInTheDocument()
    expect(
      getByRole('button', { name: 'Alignment: Align left' }),
    ).toBeInTheDocument()
    expect(getByRole('button', { name: 'Bold (B)' })).toBeInTheDocument()
    expect(getByRole('button', { name: 'Italic (I)' })).toBeInTheDocument()
    expect(getByRole('button', { name: 'Underline (U)' })).toBeInTheDocument()
    expect(getByRole('button', { name: 'Strikethrough' })).toBeInTheDocument()
    expect(getByRole('button', { name: 'Bullet List' })).toBeInTheDocument()
    expect(getByRole('button', { name: 'Ordered List' })).toBeInTheDocument()
    expect(getByRole('button', { name: 'Link' })).toBeInTheDocument()
    expect(getByRole('button', { name: 'Image' })).toBeInTheDocument()
  })

  it('renders only the requested controls', () => {
    const { getByRole, queryByRole } = render(
      <RichTextEditor visibleControls={['bold', 'italic']} />,
    )

    expect(getByRole('button', { name: 'Bold (B)' })).toBeInTheDocument()
    expect(getByRole('button', { name: 'Italic (I)' })).toBeInTheDocument()
    expect(queryByRole('button', { name: 'Undo' })).toBeNull()
    expect(queryByRole('button', { name: 'Link' })).toBeNull()
    expect(queryByRole('button', { name: 'Image' })).toBeNull()
  })

  it('renders no controls with an empty list', () => {
    const { container } = render(<RichTextEditor visibleControls={[]} />)

    expect(container.querySelectorAll('button')).toHaveLength(0)
  })

  // Regression test for button-in-button hydration errors: tooltip-wrapped
  // controls must render exactly one button each (no wrapper trigger button).
  it('renders exactly one button per tooltip-wrapped control', () => {
    const { getAllByRole } = render(<RichTextEditor />)

    expect(getAllByRole('button', { name: 'Undo' })).toHaveLength(1)
    expect(getAllByRole('button', { name: 'Bold (B)' })).toHaveLength(1)
    expect(getAllByRole('button', { name: 'Link' })).toHaveLength(1)
  })

  it('renders the bold and italic icon glyphs', () => {
    const { getByRole } = render(<RichTextEditor />)

    expect(getByRole('button', { name: 'Bold (B)' }).textContent).toContain('B')
    expect(getByRole('button', { name: 'Italic (I)' }).textContent).toContain(
      'I',
    )
  })
})

describe('RichTextEditor — labels', () => {
  it('supports custom labels for control tooltips', () => {
    const { getByRole, queryByRole } = render(
      <RichTextEditor
        labels={{ boldTooltip: 'Negrita', undoTooltip: 'Deshacer' }}
      />,
    )

    expect(getByRole('button', { name: 'Negrita' })).toBeInTheDocument()
    expect(getByRole('button', { name: 'Deshacer' })).toBeInTheDocument()
    expect(queryByRole('button', { name: 'Bold (B)' })).toBeNull()
  })
})
