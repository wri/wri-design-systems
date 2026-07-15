import { css } from '@emotion/react'
import { getThemedSpacing } from '../../../../lib/theme'

export const sliderInputContentStyles = css`
  display: flex;
  align-items: center;
  gap: ${getThemedSpacing(300)};

  .ds-text-input-container {
    width: 3.9375rem;
    margin: 0;

    .chakra-input {
      padding: ${getThemedSpacing(100)};
      width: 3.9375rem;
    }
  }

  .ds-select-input-container {
    margin-bottom: 0;
  }

  .chakra-slider__root {
    padding: 0 ${getThemedSpacing(300)};
    height: 1.875rem;
    margin-top: 1.125rem;
    width: 100%;
  }
`
