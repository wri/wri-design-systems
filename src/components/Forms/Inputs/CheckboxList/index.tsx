/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import { useState } from 'react'

import { CheckboxListProps } from './types'
import Checkbox from '../../Controls/Checkbox'
import {
  checkboxListCaptionStyles,
  checkboxListContainerStyles,
  checkboxListContentListStyles,
  checkboxListContentStyles,
  checkboxListErrorBarStyles,
  checkboxListErrorMessageStyles,
  checkboxListLabelStyles,
} from './styled'

const CheckboxList = ({
  label,
  caption,
  checkboxes,
  defaultValue,
  onCheckedChange,
  errorMessage,
  horizontal,
  required,
}: CheckboxListProps) => {
  const [checkedValues, setCheckedValues] = useState<{
    [name: string]: boolean
  }>(defaultValue ? { [defaultValue]: true } : {})

  const handleOnChecked = (checked: string | boolean, name?: string) => {
    const newCheckedValues = { ...checkedValues }
    if (name) {
      newCheckedValues[name] = checked as boolean
      setCheckedValues(newCheckedValues)
    }

    if (onCheckedChange) {
      onCheckedChange(newCheckedValues)
    }
  }

  return (
    <div
      css={checkboxListContainerStyles}
      aria-roledescription='group'
      aria-labelledby={label}
    >
      {errorMessage ? <div css={checkboxListErrorBarStyles} /> : null}
      <div css={checkboxListContentStyles(!!errorMessage)}>
        <p css={checkboxListLabelStyles} aria-label={label}>
          {required && <span aria-label='required'>*</span>}
          {label}
        </p>
        <p css={checkboxListCaptionStyles} aria-label={caption}>
          {caption}
        </p>
        {errorMessage ? (
          <p css={checkboxListErrorMessageStyles} aria-label={errorMessage}>
            {errorMessage}
          </p>
        ) : null}
        <div css={checkboxListContentListStyles(horizontal)}>
          {checkboxes.map((checkbox) => (
            <Checkbox
              key={checkbox.name}
              css={{}}
              defaultChecked={defaultValue === checkbox.value}
              onCheckedChange={({ checked }) =>
                handleOnChecked(checked, checkbox.name)
              }
              {...checkbox}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CheckboxList
