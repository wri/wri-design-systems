import { resolveSizeValue, pxToRem } from './sizing'

describe('resolveSizeValue', () => {
  it('converts numbers using the 0.25rem space scale unit', () => {
    expect(resolveSizeValue(4)).toBe('1rem')
    expect(resolveSizeValue(8)).toBe('2rem')
    expect(resolveSizeValue(1)).toBe('0.25rem')
  })

  it('handles fractional values', () => {
    expect(resolveSizeValue(2)).toBe('0.5rem')
    expect(resolveSizeValue(6)).toBe('1.5rem')
  })

  it('handles zero', () => {
    expect(resolveSizeValue(0)).toBe('0rem')
  })

  it('trims floating point noise to 4 decimals', () => {
    expect(resolveSizeValue(0.1 + 0.2)).toBe('0.075rem')
  })

  it('passes strings through unchanged', () => {
    expect(resolveSizeValue('100%')).toBe('100%')
    expect(resolveSizeValue('auto')).toBe('auto')
    expect(resolveSizeValue('2rem')).toBe('2rem')
  })
})

describe('pxToRem', () => {
  it('converts px to rem with the default 16px base', () => {
    expect(pxToRem(16)).toBe('1rem')
    expect(pxToRem(32)).toBe('2rem')
    expect(pxToRem(8)).toBe('0.5rem')
  })

  it('supports a custom base', () => {
    expect(pxToRem(24, 24)).toBe('1rem')
    expect(pxToRem(12, 24)).toBe('0.5rem')
  })

  it('trims floating point noise', () => {
    expect(pxToRem(10, 3)).toBe('3.3333rem')
  })
})
