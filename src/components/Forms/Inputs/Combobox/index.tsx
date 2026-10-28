/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import { KeyboardEvent, useEffect, useMemo, useRef, useState } from 'react'
import {
  Combobox as ChakraCombobox,
  Portal,
  Spinner,
  VisuallyHidden,
  createListCollection,
  useFilter,
  useListCollection,
} from '@chakra-ui/react'
import Tag from '../../Tag'
import { PlusIcon } from '../../../icons'
import { textInputStyles } from '../TextInput/styled'
import FieldWrapper from '../FieldWrapper'
import { useTabFocus } from '../FieldWrapper/useTabFocus'
import { useLabels } from '../../../../lib/i18n/useLabels'
import { getThemedColor } from '../../../../lib/theme'
import { usePlacementSync } from '../../../../lib/hooks/usePlacementSync'
import { ComboboxItem, ComboboxProps } from './types'
import {
  comboboxClearTriggerStyles,
  comboboxContentStyles,
  comboboxCreateItemStyles,
  comboboxEmptyStyles,
  comboboxIndicatorGroupStyles,
  comboboxInputStyles,
  comboboxItemStyles,
  comboboxLoadingStyles,
  comboboxSelectedItemsStyles,
} from './styled'

const KEYBOARD_NAV_KEYS = new Set(['ArrowDown', 'ArrowUp', 'Home', 'End'])

const CREATE_OPTION_VALUE_PREFIX = '__create__'

const isCreateOptionValue = (value: string) =>
  value.startsWith(CREATE_OPTION_VALUE_PREFIX)

const getCreateOptionValue = (inputValue: string) =>
  `${CREATE_OPTION_VALUE_PREFIX}${inputValue}`

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
  items,
  initialItems,
  multiple = false,
  showSelectedItems = false,
  value: controlledValue,
  defaultValue,
  onChange,
  creatable = false,
  onQueryChange,
  isLoading = false,
}: ComboboxProps) => {
  const resolvedItems = items ?? initialItems ?? []
  const [createdItems, setCreatedItems] = useState<ComboboxItem[]>([])
  const [uncontrolledValue, setUncontrolledValue] = useState<string[]>(
    defaultValue ?? [],
  )
  const [inputValue, setInputValue] = useState('')

  const isControlled = controlledValue !== undefined
  const selectedValues = isControlled ? controlledValue : uncontrolledValue

  const handleValueChange = (values: string[]) => {
    if (!isControlled) setUncontrolledValue(values)
    onChange?.(values)
  }

  const l = useLabels('Combobox', labels)
  const { contains } = useFilter({ sensitivity: 'base' })

  const { collection, filter, set, upsert } = useListCollection({
    initialItems: resolvedItems,
    filter: contains,
  })

  // Server-side filtering mode: when the consumer listens for query changes,
  // the rendered list is whatever `items` currently holds — the built-in
  // client-side filtering is skipped so server results are shown verbatim.
  const isAsyncMode = !!onQueryChange
  const lastQueryRef = useRef('')

  // `useListCollection` seeds its state from `initialItems` only on mount, so
  // later `items` changes must be pushed into the collection explicitly. The
  // effect is keyed on the serialized items: consumers often pass inline
  // arrays (new reference, same contents) on every render, and re-seeding on
  // those would wipe the active client-side filter text.
  const itemsKey = useMemo(() => JSON.stringify(items ?? null), [items])
  const seededKeyRef = useRef<string | null>(itemsKey)
  useEffect(() => {
    if (seededKeyRef.current === itemsKey) return
    seededKeyRef.current = itemsKey
    set(items ?? initialItems ?? [])
  }, [itemsKey, items, initialItems, set])

  const trimmedInput = inputValue.trim()
  const createOptionValue = getCreateOptionValue(trimmedInput)
  const canCreateOption =
    creatable &&
    trimmedInput.length > 0 &&
    ![...createdItems, ...resolvedItems].some(
      (item) => item.label.toLowerCase() === trimmedInput.toLowerCase(),
    )

  const createCollection = useMemo(() => {
    if (!canCreateOption) return null
    return createListCollection({
      items: [
        { label: trimmedInput, value: createOptionValue },
        ...collection.items,
      ],
    })
  }, [canCreateOption, createOptionValue, trimmedInput, collection])

  const activeCollection = createCollection ?? collection

  const lookupItems = useMemo<ComboboxItem[]>(
    () => [...createdItems, ...resolvedItems],
    [createdItems, resolvedItems],
  )

  // Selected-tag labels must survive item replacement (e.g. a server response
  // that no longer includes a selected entry), so every label ever seen is
  // remembered by value.
  const labelCacheRef = useRef<Map<string, string>>(new Map())
  useEffect(() => {
    lookupItems.forEach((item) =>
      labelCacheRef.current.set(item.value, item.label),
    )
  }, [lookupItems])

  const selectedItems = useMemo(
    () =>
      selectedValues.map((value) => ({
        value,
        label:
          lookupItems.find((item) => item.value === value)?.label ??
          labelCacheRef.current.get(value) ??
          value,
      })),
    [selectedValues, lookupItems],
  )

  const isFilled = selectedValues.length > 0
  const hasError = !!errorMessage
  const tabFocus = useTabFocus<HTMLInputElement>()
  const { contentRef, placement } = usePlacementSync()
  const [navSource, setNavSource] = useState<'keyboard' | 'pointer'>('pointer')

  const onInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (KEYBOARD_NAV_KEYS.has(event.key)) setNavSource('keyboard')
  }
  const markPointerNav = () => setNavSource('pointer')

  const materialiseCreatedItems = (values: string[]) => {
    values.forEach((createdValue) => {
      const newLabel = createdValue.slice(CREATE_OPTION_VALUE_PREFIX.length)
      const newItem = { label: newLabel, value: newLabel }
      upsert(newItem.value, newItem, 'prepend')
      setCreatedItems((prev) =>
        prev.some((item) => item.value === newItem.value)
          ? prev
          : [newItem, ...prev],
      )
    })
  }

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
        closeOnSelect
        invalid={hasError}
        disabled={disabled}
        collection={activeCollection}
        value={selectedValues}
        onValueChange={(details) => {
          const createdValues = details.value.filter(isCreateOptionValue)
          if (createdValues.length > 0) {
            // Selection came from the "Create …" row — materialise the items.
            materialiseCreatedItems(createdValues)
            handleValueChange(
              details.value.map((value) =>
                isCreateOptionValue(value)
                  ? value.slice(CREATE_OPTION_VALUE_PREFIX.length)
                  : value,
              ),
            )
          } else {
            handleValueChange(details.value)
          }
          if (showSelectedItems) setInputValue('')
        }}
        inputValue={inputValue}
        onInputValueChange={(e) => {
          setInputValue(e.inputValue)
          if (isAsyncMode) {
            // Mirror every change, including the empty reset after item
            // selection / clear, so the consumer can restore the full list.
            // Skipping unchanged values avoids redundant refetches.
            if (lastQueryRef.current !== e.inputValue) {
              lastQueryRef.current = e.inputValue
              onQueryChange?.(e.inputValue)
            }
          } else {
            filter(e.inputValue)
          }
        }}
        selectionBehavior={showSelectedItems ? 'clear' : 'replace'}
        width='100%'
        positioning={{ sameWidth: true }}
        size={size === 'small' ? 'sm' : 'md'}
      >
        <ChakraCombobox.Control>
          <ChakraCombobox.Input
            placeholder={placeholder}
            focusVisibleRing='none'
            css={[
              textInputStyles(size, isFilled),
              comboboxInputStyles(placement),
            ]}
            disabled={disabled}
            aria-label={label || placeholder || l.defaultInputAriaLabel}
            data-focus-visible={tabFocus.isTabFocused || undefined}
            onFocus={tabFocus.onFocus}
            onBlur={tabFocus.onBlur}
            onKeyDown={onInputKeyDown}
            onPointerDown={markPointerNav}
            _placeholder={{
              color: 'var(--chakra-colors-neutral-700)',
            }}
          />
          <ChakraCombobox.IndicatorGroup css={comboboxIndicatorGroupStyles}>
            <ChakraCombobox.ClearTrigger
              aria-label={l.clearSelectionLabel}
              tabIndex={0}
              focusVisibleRing='none'
              css={comboboxClearTriggerStyles}
            />
            <ChakraCombobox.Trigger aria-label={l.toggleOptionsLabel} />
          </ChakraCombobox.IndicatorGroup>
        </ChakraCombobox.Control>
        <Portal>
          <ChakraCombobox.Positioner>
            <ChakraCombobox.Content
              ref={contentRef}
              css={comboboxContentStyles(hasError, size)}
              data-nav-source={navSource}
              onPointerMove={markPointerNav}
            >
              {isLoading ? (
                <div css={comboboxLoadingStyles} role='status'>
                  <Spinner size='sm' color={getThemedColor('primary', 500)} />
                  <VisuallyHidden>{l.loadingLabel}</VisuallyHidden>
                </div>
              ) : (
                <ChakraCombobox.Empty css={comboboxEmptyStyles}>
                  {l.noItemsFoundLabel}
                </ChakraCombobox.Empty>
              )}
              {canCreateOption ? (
                <ChakraCombobox.Item
                  css={comboboxCreateItemStyles}
                  item={{ label: trimmedInput, value: createOptionValue }}
                  key={createOptionValue}
                >
                  <PlusIcon />
                  {l.createOptionLabel(trimmedInput)}
                </ChakraCombobox.Item>
              ) : null}
              {activeCollection.items
                .filter((item) => !isCreateOptionValue(item.value))
                .map((item) => (
                  <ChakraCombobox.Item
                    css={comboboxItemStyles}
                    item={item}
                    key={item.value}
                  >
                    {item.label}
                    <ChakraCombobox.ItemIndicator />
                  </ChakraCombobox.Item>
                ))}
            </ChakraCombobox.Content>
          </ChakraCombobox.Positioner>
        </Portal>
        {showSelectedItems && selectedItems.length > 0 ? (
          <div css={comboboxSelectedItemsStyles}>
            {selectedItems.map((item) => (
              <Tag
                key={item.value}
                label={item.label}
                variant='info-white'
                onClose={() =>
                  handleValueChange(
                    selectedValues.filter((value) => value !== item.value),
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
