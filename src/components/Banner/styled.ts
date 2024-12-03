import styled from '@emotion/styled'
import { getThemedColor } from '../../lib/theme'

export const DefaultBanner = styled.div<{
  isButtonRight?: boolean
  size: string
}>`
  width: 100%;
  min-width: ${({ size }) => (size === 'small' ? '238px' : '366px')};
  border-radius: 4px;
  padding: ${({ size }) =>
    size === 'small' ? '8px 8px 12px 8px' : '8px 12px 12px 12px'};
  display: flex;
  align-items: flex-start;
  justify-content: ${({ isButtonRight }) =>
    isButtonRight ? 'space-between' : 'flex-start'};
  flex-direction: ${({ isButtonRight }) => (isButtonRight ? 'row' : 'column')};
  gap: 8px;

  button {
    margin-left: ${({ isButtonRight }) => (isButtonRight ? 0 : '24px')};
  }
`

export const BannerHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const BannerTitle = styled.p<{ size: string }>`
  color: ${getThemedColor('neutral', 800)};
  font-size: ${({ size }) => (size === 'small' ? '14px' : '18px')};
  line-height: ${({ size }) => (size === 'small' ? '20px' : '28px')};
  font-weight: 400;
`

export const BannerCaption = styled.p<{ size: string }>`
  color: ${getThemedColor('neutral', 700)};
  font-size: ${({ size }) => (size === 'small' ? '12px' : '16px')};
  line-height: ${({ size }) => (size === 'small' ? '16px' : '24px')};
  font-weight: 400;
  margin-left: 24px;
`

export const InfoWhiteBanner = styled(DefaultBanner)`
  background-color: ${getThemedColor('neutral', 100)};
  border: 1px solid ${getThemedColor('neutral', 300)};
  color: ${getThemedColor('neutral', 700)};
`

export const InfoGreyBanner = styled(DefaultBanner)`
  background-color: ${getThemedColor('neutral', 200)};
  border: 1px solid ${getThemedColor('neutral', 300)};
  color: ${getThemedColor('neutral', 700)};
`

export const SuccessBanner = styled(DefaultBanner)`
  background-color: ${getThemedColor('success', 100)};
  border: 1px solid ${getThemedColor('success', 500)};
  color: ${getThemedColor('success', 500)};

  p {
    color: ${getThemedColor('success', 500)};
  }
`

export const WarningBanner = styled(DefaultBanner)`
  background-color: ${getThemedColor('warning', 100)};
  border: 1px solid ${getThemedColor('warning', 500)};
  color: ${getThemedColor('warning', 500)};

  p {
    color: ${getThemedColor('warning', 500)};
  }
`

export const ErrorBanner = styled(DefaultBanner)`
  background-color: ${getThemedColor('error', 100)};
  border: 1px solid ${getThemedColor('error', 500)};
  color: ${getThemedColor('error', 500)};

  p {
    color: ${getThemedColor('error', 500)};
  }
`