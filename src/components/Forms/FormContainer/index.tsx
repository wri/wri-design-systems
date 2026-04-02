/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import { FormContainerProps } from './types'
import {
  formContainerStyles,
  formContainerLabelStyles,
  formContainerErrorBarStyles,
  formContainerErrorMessageStyles,
} from './styled'

const FormContainer = ({ label, error, children }: FormContainerProps) => (
  <div css={formContainerStyles}>
    {error ? <div css={formContainerErrorBarStyles} /> : null}
    <div>
      {label ? <p css={formContainerLabelStyles}>{label}</p> : null}
      {error ? (
        <p css={formContainerErrorMessageStyles} aria-label={error}>
          {error}
        </p>
      ) : null}
      {children}
    </div>
  </div>
)

export default FormContainer
