import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'

export const toastContainerStyles = css`
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  padding: 8px 12px;
  background-color: ${getThemedColor('neutral', 100)};
  border: 1px solid ${getThemedColor('neutral', 300)};
  box-shadow: 0px 4px 6px -4px #0000001a;
  box-shadow: 0px 10px 15px -3px #0000001a;

  .icon-container svg {
    width: 20px;
    height: 20px;
    margin-top: 3px;
  }

  &[data-type='success'] {
    background-color: ${getThemedColor('success', 100)};
    border: 1px solid ${getThemedColor('success', 500)};

    .chakra-toast__title {
      color: ${getThemedColor('success', 900)};
    }
  }

  &[data-type='warning'] {
    background-color: ${getThemedColor('warning', 100)};
    border: 1px solid ${getThemedColor('warning', 500)};

    .chakra-toast__title {
      color: ${getThemedColor('warning', 900)};
    }
  }

  &[data-type='error'] {
    background-color: ${getThemedColor('error', 100)};
    border: 1px solid ${getThemedColor('error', 500)};

    .chakra-toast__title {
      color: ${getThemedColor('error', 900)};
    }
  }
`

export const toastTitleStyles = css`
  font-size: 18px;
  line-height: 28px;
  font-weight: 400;
  color: ${getThemedColor('neutral', 800)};
`

export const toastCaptionStyles = css`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: ${getThemedColor('neutral', 700)};
`

export const toastActionTriggerStyles = css`
  padding: 6px;
`

export const toastCloseTriggerStyles = css`
  padding: 6px;
`
