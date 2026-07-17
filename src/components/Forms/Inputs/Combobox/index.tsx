/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import { useState } from 'react'
import {
  Combobox as ChakraCombobox,
  Portal,
  useFilter,
  useListCollection,
} from '@chakra-ui/react'
import Tag from '../../Tag'
import { textInputStyles } from '../TextInput/styled'
import FieldWrapper from '../FieldWrapper'
import { useTabFocus } from '../FieldWrapper/useTabFocus'
import { useLabels } from '../../../../lib/i18n/useLabels'
import { ComboboxProps } from './types'

const Combobox = ({
  label,
  required,
  caption,
  errorMessage,
  size,
  disabled,
  showOptionalLabel = true,
  placeholder,
  labels,
  noMarginBottom,
  initialItems = [],
  multiple = false,
  showSelectedItems = false,
}: ComboboxProps) => {
  const [selectedItems, setSelectedItems] = useState<
    { label: string; value: string }[]
  >([])

  const handleValueChange = (details: ChakraCombobox.ValueChangeDetails) => {
    setSelectedItems(
      details.items.map((item) => ({ label: item.label, value: item.value })),
    )
  }

  const l = useLabels('Combobox', labels)
  const { contains } = useFilter({ sensitivity: 'base' })

  const { collection, filter } = useListCollection({
    initialItems,
    filter: contains,
  })

  const isFilled = selectedItems.length > 0
  const tabFocus = useTabFocus<HTMLInputElement>()

  return (
    <FieldWrapper
      className='ds-text-input-container'
      label={label}
      caption={caption}
      errorMessage={errorMessage}
      required={required}
      disabled={disabled}
      size={size}
      showOptionalLabel={showOptionalLabel}
      noMarginBottom={noMarginBottom}
      labels={{
        requiredSymbolLabel: l.requiredSymbolLabel,
        optionalSuffix: l.optionalSuffix,
      }}
      semantics='field'
    >
      <ChakraCombobox.Root
        multiple={multiple}
        onValueChange={handleValueChange}
        value={selectedItems.map((item) => item.value)}
        collection={collection}
        onInputValueChange={(e) => filter(e.inputValue)}
        width='20rem'
        size={size === 'small' ? 'sm' : 'md'}
      >
        <ChakraCombobox.Control>
          <ChakraCombobox.Input
            placeholder={placeholder}
            focusVisibleRing='none'
            css={textInputStyles(size, isFilled)}
            disabled={disabled}
            aria-label={label || placeholder || l.defaultInputAriaLabel}
            data-focus-visible={tabFocus.isTabFocused || undefined}
            onFocus={tabFocus.onFocus}
            onBlur={tabFocus.onBlur}
          />
          <ChakraCombobox.IndicatorGroup>
            <ChakraCombobox.ClearTrigger aria-label={l.clearSelectionLabel} />
            <ChakraCombobox.Trigger aria-label={l.toggleOptionsLabel} />
          </ChakraCombobox.IndicatorGroup>
        </ChakraCombobox.Control>
        <Portal>
          <ChakraCombobox.Positioner>
            <ChakraCombobox.Content>
              <ChakraCombobox.Empty>{l.noItemsFoundLabel}</ChakraCombobox.Empty>
              {collection.items.map((item) => (
                <ChakraCombobox.Item item={item} key={item.value}>
                  {item.label}
                  <ChakraCombobox.ItemIndicator />
                </ChakraCombobox.Item>
              ))}
            </ChakraCombobox.Content>
          </ChakraCombobox.Positioner>
        </Portal>
        {showSelectedItems ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '0.25rem',
              paddingTop: '0.5rem',
            }}
          >
            {selectedItems.map((item) => (
              <Tag
                key={item.value}
                label={item.label}
                variant='info-white'
                onClose={() =>
                  setSelectedItems((prev) =>
                    prev.filter((i) => i.value !== item.value),
                  )
                }
                closable
              />
            ))}
          </div>
        ) : null}
      </ChakraCombobox.Root>
    </FieldWrapper>
  )
}

export default Combobox
