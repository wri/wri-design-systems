import styled from '@emotion/styled'
import { getThemedColor } from '../../lib/theme'

export const DefaultInlineMessage = styled.div<{
  isButtonRight?: boolean
  size: string
}>`
  width: 100%;
  min-width: ${({ size }) => (size === 'small' ? '234px' : '366px')};
  border-radius: 4px;
  padding: ${({ size }) =>
    size === 'small' ? '8px 8px 12px 8px' : '8px 12px 12px 12px'};
  display: flex;
  align-items: ${({ isButtonRight }) =>
    isButtonRight ? 'center' : 'flex-start'};
  justify-content: ${({ isButtonRight }) =>
    isButtonRight ? 'space-between' : 'flex-start'};
  flex-direction: ${({ isButtonRight }) => (isButtonRight ? 'row' : 'column')};
  gap: 8px;
  margin-bottom: 16px;

  button {
    margin-left: ${({ isButtonRight }) => (isButtonRight ? 0 : '24px')};
  }
`

export const InlineMessageHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;

  svg {
    margin-top: 6px;
  }
`

export const InlineMessageTitle = styled.p<{ size: string }>`
  color: ${getThemedColor('neutral', 800)};
  font-size: ${({ size }) => (size === 'small' ? '14px' : '18px')};
  line-height: ${({ size }) => (size === 'small' ? '20px' : '28px')};
  font-weight: 400;
`

export const InlineMessageCaption = styled.p<{ size: string }>`
  color: ${getThemedColor('neutral', 700)};
  font-size: ${({ size }) => (size === 'small' ? '12px' : '16px')};
  line-height: ${({ size }) => (size === 'small' ? '16px' : '24px')};
  font-weight: 400;
  margin-left: 24px;
`

export const InfoWhiteInlineMessage = styled(DefaultInlineMessage)`
  background-color: ${getThemedColor('neutral', 100)};
  border: 1px solid ${getThemedColor('neutral', 300)};
  color: ${getThemedColor('neutral', 700)};
`

export const InfoGreyInlineMessage = styled(DefaultInlineMessage)`
  background-color: ${getThemedColor('neutral', 200)};
  border: 1px solid ${getThemedColor('neutral', 300)};
  color: ${getThemedColor('neutral', 700)};
`

export const SuccessInlineMessage = styled(DefaultInlineMessage)`
  background-color: ${getThemedColor('success', 100)};
  border: 1px solid ${getThemedColor('success', 500)};
  color: ${getThemedColor('success', 500)};

  p {
    color: ${getThemedColor('success', 500)};
  }
`

export const WarningInlineMessage = styled(DefaultInlineMessage)`
  background-color: ${getThemedColor('warning', 100)};
  border: 1px solid ${getThemedColor('warning', 500)};
  color: ${getThemedColor('warning', 500)};

  p {
    color: ${getThemedColor('warning', 500)};
  }
`

export const ErrorInlineMessage = styled(DefaultInlineMessage)`
  background-color: ${getThemedColor('error', 100)};
  border: 1px solid ${getThemedColor('error', 500)};
  color: ${getThemedColor('error', 500)};

  p {
    color: ${getThemedColor('error', 500)};
  }
`
