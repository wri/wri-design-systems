/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import { useState } from 'react'
import {
  Field,
  Combobox as ChakraCombobox,
  Portal,
  useFilter,
  useListCollection,
} from '@chakra-ui/react'
import Tag from '../../Tag'
import {
  fieldCaptionStyles,
  fieldErrorMessageStyles,
  fieldLabelStyles,
  textInputContainerStyles,
  textInputErrorBarStyles,
  textInputStyles,
} from '../TextInput/styled'
import { useLabels } from '../../../../lib/i18n/useLabels'
import { ComboboxProps } from './types'

const Combobox = ({
  label,
  required,
  caption,
  errorMessage,
  size,
  disabled,
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

  const l = useLabels('TextInput', labels)
  const { contains } = useFilter({ sensitivity: 'base' })

  const { collection, filter } = useListCollection({
    initialItems,
    filter: contains,
  })

  return (
    <div
      css={textInputContainerStyles(size, noMarginBottom)}
      className='ds-text-input-container'
    >
      {errorMessage ? <div css={textInputErrorBarStyles} /> : null}
      <Field.Root
        required={required}
        invalid={!!errorMessage}
        gap='0'
        style={{ marginLeft: errorMessage ? '1.1875rem' : '0px' }}
      >
        {label ? (
          <Field.Label
            css={fieldLabelStyles(size, disabled)}
            aria-label={label}
          >
            <Field.RequiredIndicator aria-label={l.requiredSymbolLabel} />
            {label}
            {!required ? <span>{l.optionalSuffix}</span> : ''}
          </Field.Label>
        ) : null}
        {caption ? (
          <Field.HelperText
            css={fieldCaptionStyles(size, disabled)}
            aria-label={caption}
          >
            {caption}
          </Field.HelperText>
        ) : null}
        {errorMessage ? (
          <Field.ErrorText
            css={fieldErrorMessageStyles(size)}
            aria-label={errorMessage}
          >
            {errorMessage}
          </Field.ErrorText>
        ) : null}

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
              css={textInputStyles(size)}
              disabled={disabled}
            />
            <ChakraCombobox.IndicatorGroup>
              <ChakraCombobox.ClearTrigger />
              <ChakraCombobox.Trigger />
            </ChakraCombobox.IndicatorGroup>
          </ChakraCombobox.Control>
          <Portal>
            <ChakraCombobox.Positioner>
              <ChakraCombobox.Content>
                <ChakraCombobox.Empty>No items found</ChakraCombobox.Empty>
                {collection.items.map((item) => (
                  <ChakraCombobox.Item item={item} key={item.value}>
                    {item.label}
                    <ChakraCombobox.ItemIndicator />
                  </ChakraCombobox.Item>
                ))}
              </ChakraCombobox.Content>
            </ChakraCombobox.Positioner>
          </Portal>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '0.25rem',
              paddingTop: '0.5rem',
            }}
          >
            {showSelectedItems &&
              selectedItems.map((item) => (
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
        </ChakraCombobox.Root>
      </Field.Root>
    </div>
  )
}

export default Combobox
