/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import { useState } from 'react'
import { Group } from '@chakra-ui/react'
import { CheckboxListProps } from './types'
import Checkbox from '../../Controls/Checkbox'
import { ChevronDownIcon } from '../../../icons'
import {
  checkboxListCaptionStyles,
  checkboxListContainerStyles,
  checkboxListContentListStyles,
  checkboxListContentStyles,
  checkboxListErrorBarStyles,
  checkboxListErrorMessageStyles,
  checkboxListLabelStyles,
  checkboxCounterTextStyles,
  expandButtonStyles,
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
  hideCheckedCounter = false,
  hideExpandToggle = false,
}: CheckboxListProps) => {
  const [checkedValues, setCheckedValues] = useState<{
    [name: string]: boolean
  }>(defaultValue ? { [defaultValue]: true } : {})
  const [isExpanded, setIsExpanded] = useState(true)

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
  const hasParentCheckbox = typeof label !== 'string'

  const allChecked =
    checkboxes.length > 0 &&
    checkboxes.every(
      (checkbox) => checkbox.name && checkedValues[checkbox.name],
    )

  const someChecked = checkboxes.some(
    (checkbox) => checkbox.name && checkedValues[checkbox.name],
  )

  const indeterminate = someChecked && !allChecked

  const handleToggleAll = (checked: boolean) => {
    const newCheckedValues = checkboxes
      .filter((checkbox) => checkbox.name !== undefined)
      .reduce(
        (accumulator, checkbox) => {
          accumulator[checkbox.name as string] = checked
          return accumulator
        },
        {} as Record<string, boolean>,
      )

    setCheckedValues(newCheckedValues)
    onCheckedChange?.(newCheckedValues)
  }

  const totalCount = checkboxes.length

  const checkedCount = checkboxes.filter(
    (checkbox) => checkbox?.name && checkedValues[checkbox.name],
  ).length
  const counterText = `${checkedCount} / ${totalCount}`

  const captionText = caption ? `${caption}.` : ''

  const requiredText = required ? 'Required.' : 'Optional'
  const errorText = errorMessage ? `Error: ${errorMessage}.` : ''

  const groupLabel = `${hasParentCheckbox ? label.label : label}. ${captionText} ${requiredText} ${errorText} `
  return (
    <Group css={checkboxListContainerStyles} aria-label={groupLabel}>
      {errorMessage ? <div css={checkboxListErrorBarStyles} /> : null}
      <div css={checkboxListContentStyles(!!errorMessage)}>
        <div css={checkboxListLabelStyles}>
          {typeof label === 'string' ? (
            <>
              {required && (
                <span id='required-symbol' aria-label='required'>
                  *
                </span>
              )}
              {label}
            </>
          ) : (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <Checkbox
                checked={allChecked}
                indeterminate={indeterminate}
                onCheckedChange={(event) => handleToggleAll(!!event.checked)}
              >
                {label.label}{' '}
                {!hideCheckedCounter && (
                  <span aria-hidden='true' css={checkboxCounterTextStyles}>
                    {counterText}
                  </span>
                )}
              </Checkbox>
              {!hideExpandToggle && (
                <button
                  type='button'
                  onClick={() => setIsExpanded((prev) => !prev)}
                  aria-expanded={isExpanded}
                  aria-controls='checkbox-list'
                  css={expandButtonStyles}
                >
                  {isExpanded ? 'Hide' : 'Expand'}
                  <span aria-hidden='true'>
                    {isExpanded ? (
                      <ChevronDownIcon
                        style={{ transform: 'rotate(180deg)' }}
                      />
                    ) : (
                      <ChevronDownIcon />
                    )}
                  </span>
                </button>
              )}
            </div>
          )}
        </div>
        <p css={checkboxListCaptionStyles} aria-label={caption}>
          {caption}
        </p>
        {errorMessage ? (
          <p css={checkboxListErrorMessageStyles} aria-label={errorMessage}>
            {errorMessage}
          </p>
        ) : null}
        <div
          id='checkbox-list'
          css={checkboxListContentListStyles(horizontal, isExpanded)}
        >
          {checkboxes.map((checkbox) => (
            <Checkbox
              ms={hasParentCheckbox && !horizontal ? '6' : ''}
              key={checkbox.name}
              css={{}}
              checked={checkbox?.name ? !!checkedValues[checkbox.name] : false}
              onCheckedChange={({ checked }) =>
                handleOnChecked(checked, checkbox.name)
              }
              {...checkbox}
            />
          ))}
        </div>
      </div>
    </Group>
  )
}

export default CheckboxList
