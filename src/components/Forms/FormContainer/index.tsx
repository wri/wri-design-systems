/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import { useId } from 'react'

import { FormContainerProps } from './types'
import {
  formContainerStyles,
  formContainerLabelStyles,
  formContainerErrorBarStyles,
  formContainerErrorMessageStyles,
} from './styled'

const FormContainer = ({ label, error, children }: FormContainerProps) => {
  const id = useId()
  const labelId = label ? `${id}-label` : undefined
  const errorId = error ? `${id}-error` : undefined

  return (
    <div
      css={formContainerStyles}
      role='group'
      aria-labelledby={labelId}
      aria-describedby={errorId}
    >
      {error ? <div css={formContainerErrorBarStyles} /> : null}
      <div>
        {label ? (
          <p id={labelId} css={formContainerLabelStyles}>
            {label}
          </p>
        ) : null}
        {error ? (
          <p id={errorId} css={formContainerErrorMessageStyles}>
            {error}
          </p>
        ) : null}
        {children}
      </div>
    </div>
  )
}

export default FormContainer
