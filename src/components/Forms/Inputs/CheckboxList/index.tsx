/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import { useEffect, useMemo, useState } from 'react'
import { CheckboxListProps } from './types'
import { useLabels } from '../../../../lib/i18n/useLabels'
import Checkbox from '../../Controls/Checkbox'
import { ChevronDownIcon } from '../../../icons'
import {
  checkboxListContentListStyles,
  checkboxCounterTextStyles,
  expandButtonStyles,
  checkboxListLabelRowStyles,
} from './styled'
import FieldWrapper from '../FieldWrapper'

const CheckboxList = ({
  label,
  caption,
  checkboxes,
  defaultValues,
  onCheckedChange,
  errorMessage,
  horizontal,
  required,
  hideCheckedCounter = false,
  hideExpandToggle = false,
  labels,
}: CheckboxListProps) => {
  const resolvedLabels = useLabels('CheckboxList', labels)
  const normalizedDefaultValues = Array.isArray(defaultValues)
    ? defaultValues
    : []
  const normalizedDefaultValueSet = useMemo(
    () => new Set(normalizedDefaultValues),
    [normalizedDefaultValues],
  )

  const buildInitialCheckedValues = () =>
    checkboxes
      .filter((checkbox) => checkbox.name)
      .reduce(
        (accumulator, checkbox) => {
          const name = checkbox.name as string
          accumulator[name] =
            typeof checkbox.checked === 'boolean'
              ? checkbox.checked
              : normalizedDefaultValueSet.has(name)
          return accumulator
        },
        {} as Record<string, boolean>,
      )

  const [checkedValues, setCheckedValues] = useState<{
    [name: string]: boolean
  }>(buildInitialCheckedValues)
  const [isExpanded, setIsExpanded] = useState(true)

  useEffect(() => {
    setCheckedValues((previousCheckedValues) => {
      const nextCheckedValues = checkboxes
        .filter((checkbox) => checkbox.name)
        .reduce(
          (accumulator, checkbox) => {
            const name = checkbox.name as string
            accumulator[name] =
              typeof checkbox.checked === 'boolean'
                ? checkbox.checked
                : (previousCheckedValues[name] ??
                  normalizedDefaultValueSet.has(name))
            return accumulator
          },
          {} as Record<string, boolean>,
        )

      const hasSameKeysAndValues =
        Object.keys(previousCheckedValues).length ===
          Object.keys(nextCheckedValues).length &&
        Object.entries(nextCheckedValues).every(
          ([name, value]) => previousCheckedValues[name] === value,
        )

      return hasSameKeysAndValues ? previousCheckedValues : nextCheckedValues
    })
  }, [checkboxes, normalizedDefaultValueSet])

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
  const resolvedCheckedValues = checkboxes
    .filter((checkbox) => checkbox.name)
    .reduce(
      (accumulator, checkbox) => {
        const name = checkbox.name as string
        accumulator[name] =
          typeof checkbox.checked === 'boolean'
            ? checkbox.checked
            : !!checkedValues[name]
        return accumulator
      },
      {} as Record<string, boolean>,
    )

  const allChecked =
    checkboxes.length > 0 &&
    checkboxes.every(
      (checkbox) => checkbox.name && resolvedCheckedValues[checkbox.name],
    )

  const someChecked = checkboxes.some(
    (checkbox) => checkbox.name && resolvedCheckedValues[checkbox.name],
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
    (checkbox) => checkbox?.name && resolvedCheckedValues[checkbox.name],
  ).length
  const counterText = `${checkedCount} / ${totalCount}`

  const captionText = caption ? `${caption}.` : ''

  const requiredText = required
    ? resolvedLabels.requiredLabel
    : resolvedLabels.optionalLabel
  const errorText = errorMessage
    ? `${resolvedLabels.errorPrefix} ${errorMessage}.`
    : ''

  const groupLabel = `${hasParentCheckbox ? label.label : label}. ${captionText} ${requiredText} ${errorText} `

  const labelContent =
    typeof label === 'string' ? (
      label
    ) : (
      <div css={checkboxListLabelRowStyles}>
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
            {isExpanded
              ? resolvedLabels.hideLabel
              : resolvedLabels.expandLabel}
            <span aria-hidden='true'>
              {isExpanded ? (
                <ChevronDownIcon style={{ transform: 'rotate(180deg)' }} />
              ) : (
                <ChevronDownIcon />
              )}
            </span>
          </button>
        )}
      </div>
    )

  return (
    <FieldWrapper
      label={labelContent}
      caption={caption}
      errorMessage={errorMessage}
      required={typeof label === 'string' ? required : false}
      showOptionalLabel={false}
      noMarginBottom
      semantics='group'
      labels={{
        requiredSymbolLabel: resolvedLabels.requiredSymbolLabel,
      }}
      containerProps={{
        'aria-label': groupLabel,
      }}
    >
      <div
        id='checkbox-list'
        css={checkboxListContentListStyles(horizontal, isExpanded)}
      >
        {checkboxes.map((checkbox) => {
          const { onCheckedChange: itemOnCheckedChange, ...checkboxProps } =
            checkbox

          return (
            <Checkbox
              ms={hasParentCheckbox && !horizontal ? '6' : ''}
              key={checkbox.name}
              css={{}}
              checked={
                checkbox?.name ? !!resolvedCheckedValues[checkbox.name] : false
              }
              onCheckedChange={({ checked }) => {
                handleOnChecked(checked, checkbox.name)
                itemOnCheckedChange?.({ checked: !!checked })
              }}
              {...checkboxProps}
            />
          )
        })}
      </div>
    </FieldWrapper>
  )
}

export default CheckboxList
