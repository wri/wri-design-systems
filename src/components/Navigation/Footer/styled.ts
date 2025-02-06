import styled from '@emotion/styled'
import { getThemedColor } from '../../../lib/theme'

export const StyledFooter = styled.footer<{ fixed?: boolean, filled?: boolean }>`
  min-height: 56px;
  width: 100vw;
  position: ${({ fixed }) => (fixed ? 'fixed' : 'absolute')};
  bottom: 0;
  left: 0;
  background-color: ${({ filled }) => filled ? getThemedColor('neutral', 200) : 'transparent'};
  background-color: ${({ filled }) => getThemedColor('neutral', filled ? 200 : 100)};
  border-top: 1px solid ${getThemedColor('neutral', 400)};
  z-index: 101;
`

export const FooterContainer = styled.div<{ maxWidth?: number }>`
  height: 100%;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth ? `${maxWidth}px` : '100%'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  padding: 12px 16px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;

  a {
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    color: ${getThemedColor('neutral', 600)};
    text-decoration: underline;
  }
`

export const FooterLabel = styled.p`
  width: 240px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: ${getThemedColor('neutral', 600)};
  text-align: right;

  @media screen and (max-width: 768px) {
    text-align: left;
  }
`
