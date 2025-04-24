/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import { RadioListProps } from './types'
import Radio from '../../Controls/Radio'
import {
  radioListCaptionStyles,
  radioListContainerStyles,
  radioListContentListStyles,
  radioListContentStyles,
  radioListErrorBarStyles,
  radioListErrorMessageStyles,
  radioListItemStyles,
  radioListLabelStyles,
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
  variant = 'default',
  required,
}: RadioListProps) => (
  <div
    css={radioListContainerStyles}
    aria-roledescription='group'
    aria-labelledby={label}
  >
    {errorMessage ? <div css={radioListErrorBarStyles} /> : null}
    <div css={radioListContentStyles(!!errorMessage)}>
      <p css={radioListLabelStyles} aria-label={label}>
        {required && <span aria-label='required'>*</span>}
        {label}
      </p>
      <p css={radioListCaptionStyles} aria-label={caption}>
        {caption}
      </p>
      {errorMessage ? (
        <p css={radioListErrorMessageStyles} aria-label={errorMessage}>
          {errorMessage}
        </p>
      ) : null}
      <div css={radioListContentListStyles}>
        <RadioGroup
          name={name}
          defaultValue={defaultValue}
          onChange={onCheckedChange}
          horizontal={horizontal && variant !== 'card'}
        >
          {radios.map((radio) => (
            <Radio
              key={radio.value}
              css={variant === 'card' ? radioListItemStyles : {}}
              {...radio}
            />
          ))}
        </RadioGroup>
      </div>
    </div>
  </div>
)

export default RadioList
