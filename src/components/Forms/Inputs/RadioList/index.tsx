/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import { Group } from '@chakra-ui/react'
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
import { useLabels } from '../../../../lib/i18n/useLabels'

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
  labels,
}: RadioListProps) => {
  const l = useLabels('RadioList', labels)
  const captionText = caption ? `${caption}.` : ''
  const requiredText = required ? l.requiredLabel : l.optionalLabel
  const errorText = errorMessage ? `${l.errorPrefix} ${errorMessage}.` : ''
  const groupLabel = `${label}. ${captionText} ${requiredText} ${errorText} `
  return (
    <Group
      css={radioListContainerStyles}
      aria-roledescription='group'
      aria-label={groupLabel}
    >
      {errorMessage ? <div css={radioListErrorBarStyles} /> : null}
      <div css={radioListContentStyles(!!errorMessage)}>
        <p css={radioListLabelStyles} aria-label={label}>
          {required && <span aria-label={l.requiredSymbolLabel}>*</span>}
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
            value={defaultValue}
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
    </Group>
  )
}

export default RadioList
