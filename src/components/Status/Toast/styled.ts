import { css } from '@emotion/react'
import { getThemedColor } from '../../../lib/theme'

export const toastContainerStyles = css`
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  padding: 0.5rem 0.75rem;
  background-color: ${getThemedColor('neutral', 100)};
  border: 0.0625rem solid ${getThemedColor('neutral', 300)};
  box-shadow: 0rem 0.25rem 0.375rem -0.25rem #0000001a;
  box-shadow: 0rem 0.625rem 0.9375rem -0.1875rem #0000001a;

  .ds-toast-icon-container svg {
    width: 1.25rem;
    height: 1.25rem;
    margin-top: 0.1875rem;
  }

  &[data-type='success'] {
    background-color: ${getThemedColor('success', 100)};
    border: 0.0625rem solid ${getThemedColor('success', 500)};

    .chakra-toast__title {
      color: ${getThemedColor('success', 900)};
    }
  }

  &[data-type='warning'] {
    background-color: ${getThemedColor('warning', 100)};
    border: 0.0625rem solid ${getThemedColor('warning', 500)};

    .chakra-toast__title {
      color: ${getThemedColor('warning', 900)};
    }
  }

  &[data-type='error'] {
    background-color: ${getThemedColor('error', 100)};
    border: 0.0625rem solid ${getThemedColor('error', 500)};

    .chakra-toast__title {
      color: ${getThemedColor('error', 900)};
    }
  }
`

export const toastTitleStyles = css`
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 400;
  color: ${getThemedColor('neutral', 800)};
`

export const toastCaptionStyles = css`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  color: ${getThemedColor('neutral', 700)};
`

export const toastActionTriggerStyles = css`
  padding: 0.375rem;
`

export const toastCloseTriggerStyles = css`
  padding: 0.375rem;
`
