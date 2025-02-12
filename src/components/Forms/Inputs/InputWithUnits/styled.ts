import styled from '@emotion/styled'
import { Group } from '@chakra-ui/react'
import { getThemedColor } from '../../../../lib/theme'

export const StyledInputWithUnits = styled.div`
  width: 100%;
  max-width: 370px;
  position: relative;
`

export const InputWithUnitsLabel = styled.p<{ disabled?: boolean }>`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: ${({ disabled }) => getThemedColor('neutral', disabled ? 600 : 900)};

  span {
    color: ${({ disabled }) =>
      disabled ? getThemedColor('neutral', 600) : getThemedColor('error', 500)};
    margin-right: 3px;
  }
`

export const InputWithUnitsCaption = styled.p<{ disabled?: boolean }>`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: ${({ disabled }) => getThemedColor('neutral', disabled ? 500 : 600)};
`

export const ErrorBar = styled.div`
  width: 3px;
  height: 100%;
  background-color: ${getThemedColor('error', 500)};
  position: absolute;
  top: 0;
  left: 0;
`

export const InputWithUnitsErrorMessage = styled.p`
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  color: ${getThemedColor('error', 500)};
`

export const InputWithUnitsContainer = styled(Group)<{
  unitsPosition: string
  hasError: boolean
}>`
  width: 100%;
  margin-top: 8px;

  .text-input-container {
    margin-bottom: 0px;

    input {
      margin-top: 0px;
      ${({ unitsPosition, hasError }) =>
        unitsPosition === 'start'
          ? `
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          ${
            hasError
              ? `
            border: 1px solid ${getThemedColor('error', 500)};
            border-left: none;
          `
              : ''
          }
        `
          : `
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          ${
            hasError
              ? `
            border: 1px solid ${getThemedColor('error', 500)};
            border-right: none;
          `
              : ''
          }
        `}
    }
  }

  .select-input-container {
    max-width: 82px;
    margin-bottom: 0px;

    .chakra-select__trigger {
      padding: 6px 4px;
      background-color: ${getThemedColor('neutral', 300)};

      ${({ unitsPosition, hasError }) =>
        unitsPosition === 'start'
          ? `
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          ${
            hasError
              ? `
            border: 1px solid ${getThemedColor('error', 500)};
            border-right: none;
          `
              : ''
          }
        `
          : `
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          ${
            hasError
              ? `
            border: 1px solid ${getThemedColor('error', 500)};
            border-left: none;
          `
              : ''
          }
      `}

      p {
        color: ${getThemedColor('neutral', 700)};
      }

      &[data-state='open'] {
        background-color: ${getThemedColor('neutral', 400)};
      }
    }

    .chakra-select__indicatorGroup {
      padding: 0 4px;
    }
  }
`
