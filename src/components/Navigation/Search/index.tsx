/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import React, { useState, useRef, useEffect, useId } from 'react'
import {
  InputGroup,
  Box,
  Popover as ChakraPopover,
  Portal,
  useDisclosure,
  Spinner,
} from '@chakra-ui/react'
import CloseButton from '../../Forms/Actions/CloseButton'
import TextInput from '../../Forms/Inputs/TextInput'
import List from '../../DataDisplay/List'
import { ListItemProps } from '../../DataDisplay/List/types'
import TextResults from './TextResults'
import { SearchIcon } from '../../icons'
import { SearchProps } from './types'
import { getThemedColor } from '../../../lib/theme'
import { useLabels } from '../../../lib/i18n/useLabels'
import { resolveSizeValue } from '../../../lib/sizing'
import { usePlacementSync } from '../../../lib/hooks/usePlacementSync'
import { searchContainerStyles, searchResultsStyles } from './styled'

const getSearchLabel = (item: ListItemProps): string => {
  if (item.searchLabel) return item.searchLabel
  if (typeof item.label === 'string' || typeof item.label === 'number') {
    return String(item.label)
  }
  return ''
}

const Search = ({
  placeholder,
  disabled,
  size = 'default',
  options = [],
  resultsMaxHeight = 50,
  isLoading = false,
  displayResults = 'text',
  onSelect,
  onQueryChange,
  onClear,
  renderResults,
  labels,
  value: controlledValue,
  defaultValue = '',
  onChange,
}: SearchProps) => {
  const l = useLabels('Search', labels)
  const isControlled = controlledValue !== undefined
  const [uncontrolledValue, setUncontrolledValue] =
    useState<string>(defaultValue)
  const currentValue = isControlled ? controlledValue : uncontrolledValue
  const { open, onOpen, onClose } = useDisclosure()
  const [filteredResults, setFilteredResults] = useState(options)
  const [highlightedIndex, setHighlightedIndex] = useState(-1)
  const [isFocused, setIsFocused] = useState(false)
  const [navSource, setNavSource] = useState<'keyboard' | 'pointer'>('pointer')

  const containerRef = useRef<HTMLDivElement>(null)
  const { contentRef, placement } = usePlacementSync()
  const handleOnSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: newValue } = e.target

    if (!isControlled) {
      setUncontrolledValue(newValue)
    }
    onChange?.(newValue)
    if (newValue) onOpen()
  }
  const handleOnClear = () => {
    if (!isControlled) {
      setUncontrolledValue('')
    }
    onChange?.('')
    onClear?.()
  }

  const inputId = useId()
  const listboxId = `search-results-${inputId}`

  const handleSelect = (id: string) => {
    const selected = options.find(
      (option) => option.id === id || getSearchLabel(option) === id,
    )

    if (selected) {
      onSelect?.(selected)
      // Keep the selected option in the field instead of resetting the query,
      // so the selection stays visible until the consumer clears it.
      const selectedLabel = getSearchLabel(selected)
      if (!isControlled) {
        setUncontrolledValue(selectedLabel)
      }
      onChange?.(selectedLabel)
      onClose()
    }
  }

  useEffect(() => {
    // Deprecated observation hook, kept for backwards compatibility — fires
    // at the same times as `onChange` (typing, selection, clear).
    onQueryChange?.(currentValue)
    if (!currentValue) {
      setFilteredResults(options)
      return
    }

    const filtered = options.filter((result) => {
      const normalizedFilter = currentValue.toLowerCase()

      return (
        result.id?.toLowerCase().includes(normalizedFilter) ||
        getSearchLabel(result).toLowerCase().includes(normalizedFilter) ||
        result.caption?.toLowerCase().includes(normalizedFilter)
      )
    })
    const listItems = filtered.map((item) => ({
      id: item.id ?? getSearchLabel(item),
      label: item.label,
      searchLabel: item.searchLabel,
      caption: item.caption,
      variant: 'select' as const,
      icon: item.icon,
      onItemClick: () => handleSelect(item.id || getSearchLabel(item)),
    }))
    setFilteredResults(listItems)
    // The results popover opens on typing (handleOnSearch) rather than here,
    // so selection and programmatic value changes do not re-open it.
  }, [currentValue])

  const endElement = currentValue.length ? (
    <CloseButton onClick={handleOnClear} />
  ) : null

  const resultsVisible =
    displayResults !== 'none' &&
    !!currentValue.length &&
    filteredResults.length > 0 &&
    open

  const showPortalMenu =
    (resultsVisible || (isLoading && !!currentValue.length)) &&
    displayResults !== 'custom'

  let iconFillColor = getThemedColor('neutral', 500)
  if (disabled) {
    iconFillColor = getThemedColor('neutral', 500)
  } else if (isFocused) {
    iconFillColor = getThemedColor('primary', 700)
  }
  const iconSize = size === 'small' ? '1rem' : '1.25rem'
  const normalizedResultsMaxHeight = resolveSizeValue(resultsMaxHeight)
  return (
    <ChakraPopover.Root
      open={showPortalMenu}
      onOpenChange={(details) => {
        if (!details.open) onClose()
      }}
      autoFocus={false}
      closeOnEscape={false}
      positioning={{ sameWidth: true, gutter: 0 }}
    >
      <div
        ref={containerRef}
        css={searchContainerStyles}
        data-open={showPortalMenu || undefined}
        data-placement={placement}
      >
        <ChakraPopover.Anchor>
          <InputGroup
            startElement={
              <SearchIcon
                width={iconSize}
                height={iconSize}
                fill={iconFillColor}
              />
            }
            endElement={endElement}
          >
            <TextInput
              autoComplete='off'
              placeholder={placeholder || l.filterPlaceholder}
              onChange={handleOnSearch}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              value={currentValue}
              label=''
              style={{
                paddingLeft: '2.5rem',
              }}
              type='search'
              aria-label={placeholder || l.filterAriaLabel}
              aria-expanded={resultsVisible}
              aria-controls={listboxId}
              role='combobox'
              aria-autocomplete='list'
              disabled={disabled}
              size={size}
              noMarginBottom
              onKeyDown={(e) => {
                if (!resultsVisible) return

                if (e.key === 'ArrowDown') {
                  e.preventDefault()
                  setNavSource('keyboard')
                  setHighlightedIndex((prev) => {
                    const next = Math.min(prev + 1, filteredResults.length - 1)
                    return next
                  })
                }

                if (e.key === 'ArrowUp') {
                  e.preventDefault()
                  setNavSource('keyboard')
                  setHighlightedIndex((prev) => {
                    const next = Math.max(prev - 1, 0)
                    return next
                  })
                }

                if (e.key === 'Enter') {
                  e.preventDefault()
                  if (highlightedIndex >= 0) {
                    const item = filteredResults[highlightedIndex]
                    handleSelect(item.id || getSearchLabel(item))
                  }
                }

                if (e.key === 'Escape') {
                  onClose()
                }
              }}
            />
          </InputGroup>
        </ChakraPopover.Anchor>
        {(resultsVisible || (isLoading && !!currentValue.length)) &&
          displayResults === 'custom' &&
          renderResults &&
          !isLoading &&
          renderResults({
            items: filteredResults,
            highlightedIndex,
            query: currentValue,
            onSelect: handleSelect,
          })}
      </div>
      <Portal>
        <ChakraPopover.Positioner>
          <ChakraPopover.Content
            ref={contentRef}
            css={searchResultsStyles}
            style={{ maxHeight: normalizedResultsMaxHeight }}
            data-nav-source={navSource}
            onPointerMove={() => setNavSource('pointer')}
          >
            {isLoading && (
              <Box padding='1rem'>
                <Spinner />
              </Box>
            )}

            {displayResults === 'text' && !isLoading && (
              <TextResults
                highlightedIndex={highlightedIndex}
                items={filteredResults}
                query={currentValue}
                onSelect={handleSelect}
              />
            )}

            {displayResults === 'list' && !isLoading && (
              <List
                items={filteredResults}
                highlightedIndex={highlightedIndex}
              />
            )}
          </ChakraPopover.Content>
        </ChakraPopover.Positioner>
      </Portal>
    </ChakraPopover.Root>
  )
}

export default Search
