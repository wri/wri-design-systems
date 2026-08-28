/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import { RadioListProps } from './types'
import Radio from '../../Controls/Radio'
import { radioListItemStyles } from './styled'
import RadioGroup from '../../Controls/Radio/RadioGroup'
import { useLabels } from '../../../../lib/i18n/useLabels'
import FieldWrapper from '../FieldWrapper'

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
    <FieldWrapper
      label={label}
      caption={caption}
      errorMessage={errorMessage}
      required={required}
      showOptionalLabel={false}
      noMarginBottom
      semantics='group'
      labels={{
        requiredSymbolLabel: l.requiredSymbolLabel,
      }}
      containerProps={{
        'aria-roledescription': 'group',
        'aria-label': groupLabel,
      }}
    >
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
    </FieldWrapper>
  )
}

export default RadioList
