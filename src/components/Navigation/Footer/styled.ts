import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'
import { resolveSizeValue } from '../../../lib/sizing'
import { FooterProps } from './types'

export const footerStyles = (
  fixed?: FooterProps['fixed'],
  filled?: FooterProps['filled'],
) => css`
  min-height: 3.5rem;
  width: 100vw;
  position: ${fixed ? 'sticky' : 'absolute'};
  bottom: 0;
  left: 0;
  background-color: ${filled ? getThemedColor('neutral', 200) : 'transparent'};
  border-top: 0.0625rem solid ${getThemedColor('neutral', 400)};
  z-index: 101;
`

export const footerContainerStyles = (
  maxWidth?: FooterProps['maxWidth'],
) => css`
  height: 100%;
  width: 100%;
  max-width: ${maxWidth != null ? resolveSizeValue(maxWidth) : '100%'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 0.75rem 1rem;
  margin: 0 auto;

  @media screen and (max-width: 48rem) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const footerContentStyles = css`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;

  a {
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 400;
    color: ${getThemedColor('neutral', 700)};
    text-decoration: underline;
  }
`

export const footerLabelStyles = css`
  width: 15rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 400;
  color: ${getThemedColor('neutral', 600)};
  text-align: right;

  @media screen and (max-width: 48rem) {
    text-align: left;
  }
`

export const footerLogosContainerStyles = css`
  display: flex;
  align-items: center;
  gap: 1rem;
`
