import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'

export const defaultInlineMessageStyles = (
  size: string,
  isButtonRight?: boolean,
) => css`
  width: 100%;
  min-width: ${size === 'small' ? '234px' : '366px'};
  border-radius: 4px;
  padding: ${size === 'small' ? '8px 8px 12px 8px' : '8px 12px 12px 12px'};
  display: flex;
  align-items: ${isButtonRight ? 'center' : 'flex-start'};
  justify-content: ${isButtonRight ? 'space-between' : 'flex-start'};
  flex-direction: ${isButtonRight ? 'row' : 'column'};
  gap: 8px;
  margin-bottom: 16px;

  button {
    margin-left: ${isButtonRight ? 0 : '24px'};
  }
`

export const inlineMessageHeaderStyles = css`
  display: flex;
  align-items: flex-start;
  gap: 8px;

  svg {
    margin-top: 6px;
  }
`

export const inlineMessageTitleStyles = (size: string) => css`
  color: ${getThemedColor('neutral', 800)};
  font-size: ${size === 'small' ? '14px' : '18px'};
  line-height: ${size === 'small' ? '20px' : '28px'};
  font-weight: 400;
`

export const inlineMessageCaptionStyles = (size: string) => css`
  color: ${getThemedColor('neutral', 700)};
  font-size: ${size === 'small' ? '12px' : '16px'};
  line-height: ${size === 'small' ? '16px' : '24px'};
  font-weight: 400;
  margin-left: 24px;
`

export const infoWhiteInlineMessageStyles = css`
  background-color: ${getThemedColor('neutral', 100)};
  border: 1px solid ${getThemedColor('neutral', 300)};
  color: ${getThemedColor('neutral', 700)};
`

export const infoGreyInlineMessageStyles = css`
  background-color: ${getThemedColor('neutral', 200)};
  border: 1px solid ${getThemedColor('neutral', 300)};
  color: ${getThemedColor('neutral', 700)};
`

export const successInlineMessageStyles = css`
  background-color: ${getThemedColor('success', 100)};
  border: 1px solid ${getThemedColor('success', 500)};
  color: ${getThemedColor('success', 500)};

  p {
    color: ${getThemedColor('success', 500)};
  }
`

export const warningInlineMessageStyles = css`
  background-color: ${getThemedColor('warning', 100)};
  border: 1px solid ${getThemedColor('warning', 500)};
  color: ${getThemedColor('warning', 500)};

  p {
    color: ${getThemedColor('warning', 500)};
  }
`

export const errorInlineMessageStyles = css`
  background-color: ${getThemedColor('error', 100)};
  border: 1px solid ${getThemedColor('error', 500)};
  color: ${getThemedColor('error', 500)};

  p {
    color: ${getThemedColor('error', 500)};
  }
`
