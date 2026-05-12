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
