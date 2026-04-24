import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'

export const defaultInlineMessageStyles = (
  size: string,
  isButtonRight?: boolean,
) => {
  let maxWidth = '14.625rem'
  if (size === 'full-width') {
    maxWidth = '100%'
  } else if (size === 'large') {
    maxWidth = '20rem'
  }

  return css`
    width: 100%;
    max-width: ${maxWidth};
    border-radius: 0.25rem;
    padding: ${size === 'small'
      ? '0.5rem 0.5rem 0.75rem 0.5rem'
      : '0.5rem 0.75rem 0.75rem 0.75rem'};
    display: flex;
    align-items: ${isButtonRight ? 'center' : 'flex-start'};
    justify-content: ${isButtonRight ? 'space-between' : 'flex-start'};
    flex-direction: ${isButtonRight ? 'row' : 'column'};
    gap: 0.5rem;
    margin-bottom: 1rem;

    button {
      margin-left: ${isButtonRight ? 0 : '1.5rem'};
    }
  `
}

export const inlineMessageHeaderStyles = css`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  svg {
    margin-top: 0.375rem;
  }
`

export const inlineMessageTitleStyles = (size: string) => css`
  max-width: 45rem;
  color: ${getThemedColor('neutral', 800)};
  font-size: ${size === 'small' ? '0.875rem' : '1.125rem'};
  line-height: ${size === 'small' ? '1.25rem' : '1.75rem'};
  font-weight: 400;
  text-align: left;
`

export const inlineMessageCaptionStyles = (
  size: string,
  hasIcon: boolean,
) => css`
  max-width: 45rem;
  color: ${getThemedColor('neutral', 700)};
  font-size: ${size === 'small' ? '0.75rem' : '1rem'};
  line-height: ${size === 'small' ? '1rem' : '1.5rem'};
  font-weight: 400;
  margin-left: ${hasIcon ? '1.5rem' : '0'};
  text-align: left;
`

export const inlineMessageCaptionContainerStyles = (
  size: string,
  hasIcon: boolean,
) => css`
  max-width: 45rem;
  color: ${getThemedColor('neutral', 700)};
  font-size: ${size === 'small' ? '0.75rem' : '1rem'};
  line-height: ${size === 'small' ? '1rem' : '1.5rem'};
  font-weight: 400;
  margin-left: ${hasIcon ? '1.5rem' : '0'};
  text-align: left;
`

export const infoWhiteInlineMessageStyles = css`
  background-color: ${getThemedColor('neutral', 100)};
  border: 0.0625rem solid ${getThemedColor('neutral', 300)};
  color: ${getThemedColor('neutral', 700)};
`

export const infoGreyInlineMessageStyles = css`
  background-color: ${getThemedColor('neutral', 200)};
  border: 0.0625rem solid ${getThemedColor('neutral', 300)};
  color: ${getThemedColor('neutral', 700)};
`

export const successInlineMessageStyles = css`
  background-color: ${getThemedColor('success', 100)};
  border: 0.0625rem solid ${getThemedColor('success', 300)};
  color: ${getThemedColor('success', 500)};

  p {
    color: ${getThemedColor('success', 900)};
  }
`

export const warningInlineMessageStyles = css`
  background-color: ${getThemedColor('warning', 100)};
  border: 0.0625rem solid ${getThemedColor('warning', 300)};
  color: ${getThemedColor('warning', 500)};

  p {
    color: ${getThemedColor('warning', 900)};
  }
`

export const errorInlineMessageStyles = css`
  background-color: ${getThemedColor('error', 100)};
  border: 0.0625rem solid ${getThemedColor('error', 300)};
  color: ${getThemedColor('error', 500)};

  p {
    color: ${getThemedColor('error', 900)};
  }
`
