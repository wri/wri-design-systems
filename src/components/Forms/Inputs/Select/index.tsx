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
  ...rest
}: SelectProps) => {
  const [selectedItem, setSelectedItem] = useState<string[]>(
    rest.defaultValue || [],
  )
  const selectItems = getCollectionItems(items)

  const onChangeHandler = (details: SelectValueChangeDetails) => {
    setSelectedItem(details.value)

    if (onChange) {
      onChange(details.value)
    }
  }

  return (
    <SelectContainer size={size}>
      {errorMessage ? (
        <SelectErrorBar size={size} isFilled={selectedItem.length > 0} />
      ) : null}
      <SelectRoot
        collection={selectItems}
        disabled={disabled}
        required={required}
        aria-label={rest['aria-label'] || label}
        value={selectedItem}
        {...rest}
        onValueChange={onChangeHandler}
      >
        <StyledSelectLabel size={size}>
          {required && <span>*</span>}
          {label}
        </StyledSelectLabel>
        {caption && (
          <StyledSelectCaption size={size} disabled={disabled}>
            {caption}
          </StyledSelectCaption>
        )}
        {errorMessage && (
          <SelectErrorMessage size={size}>{errorMessage}</SelectErrorMessage>
        )}
        <StyledSelectTrigger
          size={size}
          isFilled={selectedItem.length > 0}
          hasErrorMessage={!!errorMessage}
        >
          <SelectValueItem
            placeholder={placeholder}
            size={size}
            disabled={disabled}
          />
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
            </StyledSelectItem>
          ))}
        </StyledSelectContent>
      </SelectRoot>
    </SelectContainer>
  )
}

export default Select
