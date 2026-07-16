/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import { Field } from '@chakra-ui/react'
import {
  fieldWrapperCaptionStyles,
  fieldWrapperContainerStyles,
  fieldWrapperContentStyles,
  fieldWrapperErrorBarStyles,
  fieldWrapperErrorMessageStyles,
  fieldWrapperFooterStyles,
  fieldWrapperHeaderStyles,
  fieldWrapperLabelStyles,
} from './styled'
import { FieldWrapperProps } from './types'

const DEFAULT_REQUIRED_SYMBOL_LABEL = 'required'
const DEFAULT_OPTIONAL_SUFFIX = ' (Optional)'

const FieldWrapper = ({
  label,
  caption,
  errorMessage,
  invalid,
  required,
  disabled,
  size = 'default',
  showOptionalLabel = true,
  noMarginBottom = false,
  labels,
  footer,
  semantics = 'field',
  className,
  children,
  captionId,
  errorId,
  containerProps,
}: FieldWrapperProps) => {
  const hasError = !!errorMessage || !!invalid
  const requiredSymbolLabel =
    labels?.requiredSymbolLabel ?? DEFAULT_REQUIRED_SYMBOL_LABEL
  const optionalSuffix = labels?.optionalSuffix ?? DEFAULT_OPTIONAL_SUFFIX
  const hasHeader = !!(label || caption || errorMessage)

  const renderFieldHeader = () => {
    if (!hasHeader) return null

    return (
      <div css={fieldWrapperHeaderStyles}>
        {label ? (
          <Field.Label
            css={fieldWrapperLabelStyles(size, disabled)}
            aria-label={typeof label === 'string' ? label : undefined}
          >
            <Field.RequiredIndicator aria-label={requiredSymbolLabel} />
            {label}
            {!required && showOptionalLabel ? (
              <span>{optionalSuffix}</span>
            ) : null}
          </Field.Label>
        ) : null}
        {caption ? (
          <Field.HelperText
            id={captionId}
            css={fieldWrapperCaptionStyles(size, disabled)}
            aria-label={caption}
          >
            {caption}
          </Field.HelperText>
        ) : null}
        {errorMessage ? (
          <Field.ErrorText
            id={errorId}
            css={fieldWrapperErrorMessageStyles(size)}
            aria-label={errorMessage}
          >
            {errorMessage}
          </Field.ErrorText>
        ) : null}
      </div>
    )
  }

  const renderGroupHeader = () => {
    if (!hasHeader) return null

    return (
      <div css={fieldWrapperHeaderStyles}>
        {label ? (
          <p
            css={fieldWrapperLabelStyles(size, disabled)}
            aria-label={typeof label === 'string' ? label : undefined}
            data-disabled={disabled || undefined}
          >
            {required ? (
              <span data-required-indicator aria-label={requiredSymbolLabel}>
                *
              </span>
            ) : null}
            {label}
          </p>
        ) : null}
        {caption ? (
          <p
            id={captionId}
            css={fieldWrapperCaptionStyles(size, disabled)}
            aria-label={caption}
          >
            {caption}
          </p>
        ) : null}
        {errorMessage ? (
          <p
            id={errorId}
            css={fieldWrapperErrorMessageStyles(size)}
            aria-label={errorMessage}
          >
            {errorMessage}
          </p>
        ) : null}
      </div>
    )
  }

  const content = (
    <div css={fieldWrapperContentStyles}>
      {semantics === 'field' ? renderFieldHeader() : renderGroupHeader()}
      {children}
      {footer ? <div css={fieldWrapperFooterStyles}>{footer}</div> : null}
    </div>
  )

  return (
    <div
      css={fieldWrapperContainerStyles(noMarginBottom, hasError)}
      className={className}
      {...containerProps}
    >
      {hasError ? <div css={fieldWrapperErrorBarStyles} /> : null}
      {semantics === 'field' ? (
        <Field.Root
          required={required}
          invalid={hasError}
          gap='0'
          width='100%'
          flex='1'
          minW='0'
        >
          {content}
        </Field.Root>
      ) : (
        content
      )}
    </div>
  )
}

export default FieldWrapper
export type {
  FieldWrapperProps,
  FieldWrapperLabels,
  FieldWrapperSize,
} from './types'
export {
  fieldFocusVisibleStyleObject,
  fieldFocusVisibleStyles,
  fieldWrapperCaptionStyles,
  fieldWrapperErrorMessageStyles,
  fieldWrapperLabelStyles,
} from './styled'
