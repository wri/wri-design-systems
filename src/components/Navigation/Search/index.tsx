/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import React, { useState, useRef, useEffect, useId } from 'react'
import {
  InputGroup,
  Box,
  Portal,
  useDisclosure,
  Spinner,
} from '@chakra-ui/react'
import CloseButton from '../../Forms/Actions/CloseButton'
import TextInput from '../../Forms/Inputs/TextInput'
import List from '../../DataDisplay/List'
import TextResults from './TextResults'
import { SearchIcon } from '../../icons'
import { SearchProps } from './types'
import { getThemedColor } from '../../../lib/theme'

const Search = ({
  placeholder,
  disabled,
  size = 'default',
  options = [],
  resultsMaxHeight = '200px',
  isLoading = false,
  displayResults = 'text',
  onSelect,
  onQueryChange,
  onClear,
  renderResults,
}: SearchProps) => {
  const [filterText, setFilterText] = useState('')
  const { open, onOpen, onClose } = useDisclosure()
  const [filteredResults, setFilteredResults] = useState(options)
  const [highlightedIndex, setHighlightedIndex] = useState(-1)
  const [isFocused, setIsFocused] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)
  const handleOnSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    setFilterText(value)
  }
  const handleOnClear = () => {
    setFilterText('')
    onClear?.()
  }

  const inputId = useId()
  const listboxId = `search-results-${inputId}`

  const handleSelect = (id: string) => {
    const selected = options.find(
      (option) => option.id === id || option.label === id,
    )

    if (selected) {
      onSelect?.(selected)
      setFilterText('')
      onClose()
    }
  }

  useEffect(() => {
    onQueryChange?.(filterText)
    if (!filterText) {
      setFilteredResults(options)
      return
    }

    const filtered = options.filter(
      (result) =>
        result.id?.toLowerCase().includes(filterText.toLowerCase()) ||
        result.label.toLowerCase().includes(filterText.toLowerCase()) ||
        result.caption?.toLowerCase().includes(filterText.toLowerCase()),
    )
    const listItems = filtered.map((item) => ({
      id: item.id,
      label: item.label,
      caption: item.caption,
      variant: 'select' as const,
      icon: item.icon,
      onItemClick: () => handleSelect(item.id || item.label),
    }))
    setFilteredResults(listItems)
    onOpen()
  }, [filterText])

  useEffect(() => {
    // Clicking outside the results container closes it.
    function handleClickOutside(event: MouseEvent) {
      if (
        open &&
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open])

  const endElement = filterText.length ? (
    <CloseButton style={{ marginTop: '-12px' }} onClick={handleOnClear} />
  ) : null

  const resultsVisible =
    displayResults !== 'none' &&
    !!filterText.length &&
    filteredResults.length > 0 &&
    open

  let iconFillColor = getThemedColor('neutral', 500)
  if (disabled) {
    iconFillColor = getThemedColor('neutral', 500)
  } else if (isFocused) {
    iconFillColor = getThemedColor('primary', 700)
  }

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%' }}>
      <InputGroup
        startElement={
          <SearchIcon fill={iconFillColor} style={{ marginTop: '-12px' }} />
        }
        endElement={endElement}
      >
        <TextInput
          autoComplete='off'
          placeholder={placeholder || 'Filter'}
          onChange={handleOnSearch}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={filterText}
          label=''
          style={{
            paddingLeft: '40px',
            borderColor: getThemedColor('neutral', 500),
          }}
          type='search'
          aria-label={placeholder || 'Search filter'}
          aria-expanded={resultsVisible}
          aria-controls={listboxId}
          role='combobox'
          aria-autocomplete='list'
          disabled={disabled}
          size={size}
          onKeyDown={(e) => {
            if (!resultsVisible) return

            if (e.key === 'ArrowDown') {
              e.preventDefault()
              setHighlightedIndex((prev) => {
                const next = Math.min(prev + 1, filteredResults.length - 1)
                return next
              })
            }

            if (e.key === 'ArrowUp') {
              e.preventDefault()
              setHighlightedIndex((prev) => {
                const next = Math.max(prev - 1, 0)
                return next
              })
            }

            if (e.key === 'Enter') {
              e.preventDefault()
              if (highlightedIndex >= 0) {
                const item = filteredResults[highlightedIndex]
                handleSelect(item.id || item.label)
              }
            }

            if (e.key === 'Escape') {
              onClose()
            }
          }}
        />
      </InputGroup>
      {(resultsVisible || (isLoading && !!filterText.length)) &&
        displayResults === 'custom' &&
        renderResults &&
        !isLoading &&
        renderResults({
          items: filteredResults,
          highlightedIndex,
          query: filterText,
          onSelect: handleSelect,
        })}
      {(resultsVisible || (isLoading && !!filterText.length)) && (
        <Portal container={containerRef}>
          <Box
            position='absolute'
            marginTop='-20px'
            width='100%'
            backgroundColor='white'
            border='1px solid'
            borderColor='gray.200'
            borderRadius='md'
            boxShadow='md'
            zIndex={1000}
            overflowY='auto'
            maxHeight={resultsMaxHeight}
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
                query={filterText}
                onSelect={handleSelect}
              />
            )}

            {displayResults === 'list' && !isLoading && (
              <List
                items={filteredResults}
                highlightedIndex={highlightedIndex}
              />
            )}
          </Box>
        </Portal>
      )}
    </div>
  )
}

export default Search
