// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react'

import { CheckboxListProps } from './types'
import Checkbox from '../../Controls/Checkbox'
import {
  CheckboxListCaption,
  CheckboxListContainer,
  CheckboxListContent,
  CheckboxListContentList,
  CheckboxListErrorBar,
  CheckboxListErrorMessage,
  CheckboxListLabel,
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
    <CheckboxListContainer aria-roledescription='group' aria-labelledby={label}>
      {errorMessage ? <CheckboxListErrorBar /> : null}
      <CheckboxListContent hasErrorMessage={!!errorMessage}>
        <CheckboxListLabel aria-label={label}>
          {required && <span aria-label='required'>*</span>}
          {label}
        </CheckboxListLabel>
        <CheckboxListCaption aria-label={caption}>
          {caption}
        </CheckboxListCaption>
        {errorMessage ? (
          <CheckboxListErrorMessage aria-label={errorMessage}>
            {errorMessage}
          </CheckboxListErrorMessage>
        ) : null}
        <CheckboxListContentList horizontal={horizontal}>
          {checkboxes.map((checkbox) => (
            <Checkbox
              key={checkbox.name}
              defaultChecked={defaultValue === checkbox.value}
              onCheckedChange={({ checked }) =>
                handleOnChecked(checked, checkbox.name)
              }
              {...checkbox}
            />
          ))}
        </CheckboxListContentList>
      </CheckboxListContent>
    </CheckboxListContainer>
  )
}

export default CheckboxList
