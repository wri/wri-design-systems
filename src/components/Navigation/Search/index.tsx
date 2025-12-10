/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import React, { useState, useRef, useEffect, useId } from 'react'
import { InputGroup, Box, Portal, useDisclosure } from '@chakra-ui/react'
import CloseButton from '../../Forms/Actions/CloseButton'
import TextInput from '../../Forms/Inputs/TextInput'
import List from '../../DataDisplay/List'
import { SearchIcon } from '../../icons'
import { SearchProps } from './types'
import { ListItemProps } from '../../DataDisplay/List/types'

const Search = ({
  placeholder,
  disabled,
  size = 'default',
  options = [],
  onSelect,
  onQueryChange,
  onClear,
}: SearchProps) => {
  const [filterText, setFilterText] = useState('')
  const { open, onOpen, onClose } = useDisclosure()
  const [filteredResults, setFilteredResults] = useState(options)

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
      setFilterText(selected.label)
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

  const endElement = filterText.length ? (
    <CloseButton style={{ marginTop: '-12px' }} onClick={handleOnClear} />
  ) : null

  const resultsVisible =
    !!filterText.length && filteredResults.length > 0 && open
  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%' }}>
      <InputGroup
        startElement={<SearchIcon style={{ marginTop: '-12px' }} />}
        endElement={endElement}
      >
        <TextInput
          placeholder={placeholder || 'Filter'}
          onChange={handleOnSearch}
          value={filterText}
          label=''
          style={{
            paddingLeft: '40px',
          }}
          type='search'
          aria-label={placeholder || 'Search filter'}
          aria-expanded={resultsVisible}
          aria-controls={listboxId}
          role='combobox'
          aria-autocomplete='list'
          disabled={disabled}
        />
      </InputGroup>

      {resultsVisible && (
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
            maxHeight='200px'
            overflowY='auto'
          >
            <List items={filteredResults} />
          </Box>
        </Portal>
      )}
    </div>
  )
}

export default Search
