// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react'

import {
  Box,
  createListCollection,
  HStack,
  SelectValueChangeDetails,
} from '@chakra-ui/react'
import { SelectRoot, SelectValueText } from './BaseSelect'
import {
  StyledSelectLabel,
  StyledSelectCaption,
  StyledSelectTrigger,
  StyledSelectContent,
  SelectItemLabel,
  SelectItemCaption,
  StyledSelectItem,
  SelectErrorMessage,
  SelectContainer,
  SelectErrorBar,
} from './styled'
import { SelectItemProps, SelectProps } from './types'
import Tag from '../../Tag'
import Checkbox from '../../Controls/Checkbox'

const getCollectionItems = (items: SelectItemProps[]) =>
  createListCollection({ items })

const SelectValueItem = ({
  placeholder,
  size,
  disabled,
}: {
  placeholder: string
  size: string
  disabled?: boolean
}) => (
  <SelectValueText placeholder={placeholder}>
    {(items: SelectItemProps[]) => {
      const { label, caption } = items[0]
      return (
        <HStack flexDirection='column' alignItems='flex-start'>
          <SelectItemLabel size={size} disabled={disabled}>
            {label}
          </SelectItemLabel>
          {caption ? (
            <SelectItemCaption size={size} disabled={disabled}>
              {caption}
            </SelectItemCaption>
          ) : null}
        </HStack>
      )
    }}
  </SelectValueText>
)

const SelectMultipleValueItem = ({
  placeholder,
  removeItem,
  disabled,
}: {
  placeholder: string
  removeItem: (value: string) => void
  disabled?: boolean
}) => (
  <SelectValueText placeholder={placeholder}>
    {(items: SelectItemProps[]) =>
      items.map((item) => (
        <HStack flexDirection='row' alignItems='flex-start'>
          <Tag
            key={item.value}
            label={item.label}
            variant='info-grey'
            disabled={disabled}
            onClose={() => removeItem(item.value)}
            closable
          />
        </HStack>
      ))
    }
  </SelectValueText>
)

const Select = ({
  label,
  caption,
  placeholder,
  items,
  size = 'default',
  required,
  disabled,
  onChange,
  errorMessage,
  multiple,
  ...rest
}: SelectProps) => {
  const [selectedItems, setSelectedItems] = useState<string[]>(
    rest.defaultValue || [],
  )
  const selectItems = getCollectionItems(items)

  const onChangeHandler = (value: string[]) => {
    setSelectedItems(value)

    if (onChange) {
      onChange(value)
    }
  }

  const onItemRemove = (value: string) => {
    const newItems = selectedItems.filter((item) => item !== value)
    onChangeHandler(newItems)
  }

  return (
    <SelectContainer size={size} style={rest.style}>
      {errorMessage ? <SelectErrorBar /> : null}
      <SelectRoot
        collection={selectItems}
        disabled={disabled}
        required={required}
        multiple={multiple}
        aria-label={rest['aria-label'] || label}
        value={selectedItems}
        onValueChange={(details: SelectValueChangeDetails) =>
          onChangeHandler(details.value)
        }
        style={{ marginLeft: errorMessage ? '19px' : '0px' }}
        {...rest}
      >
        <StyledSelectLabel size={size}>
          {required ? <span>*</span> : null}
          {label}
        </StyledSelectLabel>
        {caption ? (
          <StyledSelectCaption size={size} disabled={disabled}>
            {caption}
          </StyledSelectCaption>
        ) : null}
        {errorMessage && (
          <SelectErrorMessage size={size}>{errorMessage}</SelectErrorMessage>
        )}
        <StyledSelectTrigger
          size={size}
          isFilled={selectedItems.length > 0}
          hasErrorMessage={!!errorMessage}
          multiple={multiple}
        >
          {multiple ? (
            <SelectMultipleValueItem
              placeholder={placeholder}
              disabled={disabled}
              removeItem={onItemRemove}
            />
          ) : (
            <SelectValueItem
              placeholder={placeholder}
              size={size}
              disabled={disabled}
            />
          )}
        </StyledSelectTrigger>
        <StyledSelectContent>
          {selectItems.items.map((item) => (
            <StyledSelectItem item={item} key={item.value}>
              <Box>
                <SelectItemLabel size={size}>{item.label}</SelectItemLabel>
                <SelectItemCaption size={size}>
                  {item.caption}
                </SelectItemCaption>
              </Box>
              {multiple ? (
                <Checkbox
                  checked={selectedItems.some(
                    (selectItem) => selectItem === item.value,
                  )}
                />
              ) : null}
            </StyledSelectItem>
          ))}
        </StyledSelectContent>
      </SelectRoot>
    </SelectContainer>
  )
}

export default Select
