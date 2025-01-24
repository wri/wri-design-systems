import styled from '@emotion/styled'
import { getThemedColor } from '../../../../lib/theme'

export const RadioListContainer = styled.div`
  position: relative;
  height: 100%;
`

export const RadioListContent = styled.div<{ hasErrorMessage: boolean }>`
  margin-left: ${({ hasErrorMessage }) => (hasErrorMessage ? '19px' : '0px')};
`

export const RadioListLabel = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: ${getThemedColor('neutral', 900)};

  span {
    color: ${getThemedColor('error', 500)};
    margin-right: 3px;
  }
`

export const RadioListCaption = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: ${getThemedColor('neutral', 600)};
`

export const RadioListContentList = styled.div`
  margin-top: 12px;
`

export const RadioListErrorBar = styled.div`
  width: 3px;
  height: 100%;
  background-color: ${getThemedColor('error', 500)};
  position: absolute;
  top: 0;
  left: 0;
`

export const RadioListErrorMessage = styled.p`
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  color: ${getThemedColor('error', 500)};
`
