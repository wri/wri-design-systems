/* eslint-disable no-console */

// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import 'jest-axe/extend-expect'

// @testing-library/react v13 internally calls ReactDOMTestUtils.act, which React 19
// marks as deprecated. Suppress the warning until RTL is upgraded to v14+.
const originalError = console.error.bind(console)
console.error = (...args: unknown[]) => {
  if (
    typeof args[0] === 'string' &&
    args[0].includes('ReactDOMTestUtils.act')
  ) {
    return
  }
  originalError(...args)
}

const arkReactSubmodules = [
  'accordion',
  'anatomy',
  'avatar',
  'carousel',
  'checkbox',
  'clipboard',
  'collapsible',
  'collection',
  'color-picker',
  'combobox',
  'dialog',
  'download-trigger',
  'editable',
  'environment',
  'factory',
  'field',
  'fieldset',
  'file-upload',
  'focus-trap',
  'format',
  'highlight',
  'hover-card',
  'listbox',
  'locale',
  'menu',
  'number-input',
  'pagination',
  'pin-input',
  'popover',
  'portal',
  'presence',
  'progress',
  'qr-code',
  'radio-group',
  'rating-group',
  'scroll-area',
  'segment-group',
  'select',
  'slider',
  'splitter',
  'steps',
  'switch',
  'tabs',
  'tags-input',
  'toast',
  'toggle',
  'tooltip',
  'tree-view',
]

arkReactSubmodules.forEach((submodule) => {
  jest.mock(
    `@ark-ui/react/${submodule}`,
    () =>
      new Proxy(
        {},
        {
          get: (_target, key) =>
            typeof key === 'string' && key[0] === key[0]?.toUpperCase()
              ? 'div'
              : jest.fn(),
        },
      ),
    { virtual: true },
  )
})
