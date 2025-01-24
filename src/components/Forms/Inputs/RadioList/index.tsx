// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react'

import { RadioListProps } from './types'
import Radio from '../../Controls/Radio'
import {
  RadioListCaption,
  RadioListContainer,
  RadioListContent,
  RadioListContentList,
  RadioListErrorBar,
  RadioListErrorMessage,
  RadioListLabel,
} from './styled'
import RadioGroup from '../../Controls/Radio/RadioGroup'

const RadioList = ({
  label,
  caption,
  name,
  radios,
  defaultValue,
  onCheckedChange,
  errorMessage,
  horizontal,
  required,
}: RadioListProps) => (
  <RadioListContainer>
    {errorMessage ? <RadioListErrorBar /> : null}
    <RadioListContent hasErrorMessage={!!errorMessage}>
      <RadioListLabel>
        {required && <span>*</span>}
        {label}
      </RadioListLabel>
      <RadioListCaption>{caption}</RadioListCaption>
      {errorMessage ? (
        <RadioListErrorMessage>{errorMessage}</RadioListErrorMessage>
      ) : null}
      <RadioListContentList>
        <RadioGroup
          name={name}
          defaultValue={defaultValue}
          onChange={onCheckedChange}
          horizontal={horizontal}
        >
          {radios.map((radio) => (
            <Radio key={radio.value} {...radio} />
          ))}
        </RadioGroup>
      </RadioListContentList>
    </RadioListContent>
  </RadioListContainer>
)

export default RadioList
