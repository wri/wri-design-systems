/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import { useState } from 'react'

import {
  Box,
  createListCollection,
  HStack,
  SelectValueChangeDetails,
} from '@chakra-ui/react'
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from './BaseSelect'
import {
  selectCaptionStyles,
  selectContainerStyles,
  selectContentStyles,
  selectErrorBarStyles,
  selectErrorMessageStyles,
  selectItemCaptionStyles,
  selectItemLabelStyles,
  selectItemStyles,
  selectLabelStyles,
  selectTriggerStyles,
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
          <p css={selectItemLabelStyles(size, disabled)}>{label}</p>
          {caption ? (
            <p css={selectItemCaptionStyles(size, disabled)}>{caption}</p>
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
        <HStack key={item.value} flexDirection='row' alignItems='flex-start'>
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
    <div
      css={selectContainerStyles(size)}
      style={rest.style}
      className='select-input-container'
    >
      {errorMessage ? <div css={selectErrorBarStyles} /> : null}
      <SelectRoot
        css={{}}
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
        {label ? (
          <SelectLabel css={selectLabelStyles(size)}>
            {required ? <span>*</span> : null}
            {label}
          </SelectLabel>
        ) : null}
        {caption ? (
          <p css={selectCaptionStyles(size, disabled)}>{caption}</p>
        ) : null}
        {errorMessage && (
          <p css={selectErrorMessageStyles(size)}>{errorMessage}</p>
        )}
        <SelectTrigger
          css={selectTriggerStyles(
            size,
            selectedItems.length > 0,
            !!errorMessage,
            multiple,
          )}
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
        </SelectTrigger>
        <SelectContent css={selectContentStyles}>
          {selectItems.items.map((item) => (
            <SelectItem css={selectItemStyles} item={item} key={item.value}>
              <Box>
                <p css={selectItemLabelStyles(size)}>{item.label}</p>
                <p css={selectItemCaptionStyles(size)}>{item.caption}</p>
              </Box>
              {multiple ? (
                <Checkbox
                  checked={selectedItems.some(
                    (selectItem) => selectItem === item.value,
                  )}
                />
              ) : null}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectRoot>
    </div>
  )
}

export default Select
