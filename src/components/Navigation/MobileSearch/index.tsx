/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import React from 'react'
import { InputGroup, chakra } from '@chakra-ui/react'
import Button from '../../Forms/Actions/Button'
import CloseButton from '../../Forms/Actions/CloseButton'
import InlineMessage from '../../Status/InlineMessage'
import TextInput from '../../Forms/Inputs/TextInput'
import { SearchIcon } from '../../icons'
import type { ListItemProps } from '../../DataDisplay/List/types'
import { MobileSearchProps } from './types'
import { useLabels } from '../../../lib/i18n/useLabels'
import {
  mobileSearchCancelButtonStyles,
  mobileSearchContainerStyles,
  mobileSearchHeaderStyles,
  mobileSearchInlineMessageStyles,
  mobileSearchInputWrapperStyles,
  mobileSearchListItemCaptionStyles,
  mobileSearchListItemLabelStyles,
  mobileSearchListItemStyles,
  mobileSearchListItemTextStyles,
  mobileSearchListStyles,
  mobileSearchResultsStyles,
  mobileSearchSectionTitleStyles,
} from './styled'
import { getThemedColor } from '../../../lib/theme'

const MobileSearch = ({
  value,
  placeholder,
  showInfoMessage = true,
  items = [],
  disabled,
  readOnly,
  id,
  name,
  autoFocus,
  autoComplete,
  onBlur,
  onFocus,
  onQueryChange,
  onCancel,
  onItemClick,
  onChange,
  labels,
}: MobileSearchProps) => {
  const l = useLabels('MobileSearch', labels)
  const [filterText, setFilterText] = React.useState(value ?? '')
  const [isResultsOpen, setIsResultsOpen] = React.useState(true)
  const [isFocused, setIsFocused] = React.useState(false)
  const containerRef = React.useRef<HTMLDivElement>(null)

  const isControlled = typeof value === 'string'
  const currentValue = isControlled ? value : filterText

  React.useEffect(() => {
    if (isControlled) {
      setFilterText(value)
    }
  }, [isControlled, value])

  React.useEffect(() => {
    onQueryChange?.(currentValue)
  }, [currentValue, onQueryChange])

  const filteredItems = React.useMemo(() => {
    const query = currentValue.trim().toLowerCase()
    if (!query) {
      return items
    }

    return items.filter((item) => {
      const searchableText =
        `${item.id ?? ''} ${item.label} ${item.caption ?? ''}`.toLowerCase()
      return searchableText.includes(query)
    })
  }, [items, currentValue])

  const titleToDisplay = currentValue.trim().length
    ? l.matchingResultsTitle(filteredItems.length)
    : l.recentSearchesTitle

  const handleOnSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setFilterText(e.target.value)
    }
    setIsResultsOpen(true)
    onChange?.(e)
  }

  const handleOnClear = () => {
    if (!isControlled) {
      setFilterText('')
    }
    const inputElement = containerRef.current?.querySelector('input')
    if (inputElement) {
      inputElement.value = ''
      inputElement.focus()
    }
    setIsResultsOpen(true)
  }

  const handleOnCancel = () => {
    if (!isControlled) {
      setFilterText('')
    }
    setIsResultsOpen(false)
    const inputElement = containerRef.current?.querySelector('input')
    if (inputElement) {
      inputElement.value = ''
      inputElement.blur()
    }
    onCancel?.()
  }

  const handleItemClick = (item: ListItemProps) => {
    onItemClick?.(item)
  }

  const endElement = currentValue.length ? (
    <CloseButton onClick={handleOnClear} />
  ) : null

  let iconFillColor = getThemedColor('neutral', 500)
  if (disabled) {
    iconFillColor = getThemedColor('neutral', 500)
  } else if (isFocused) {
    iconFillColor = getThemedColor('primary', 700)
  }

  return (
    <div ref={containerRef} css={mobileSearchContainerStyles}>
      <div css={mobileSearchHeaderStyles}>
        <div css={mobileSearchInputWrapperStyles}>
          <InputGroup
            startElement={
              <SearchIcon
                width='1.25rem'
                height='1.25rem'
                fill={iconFillColor}
                aria-hidden='true'
              />
            }
            endElement={endElement}
          >
            <TextInput
              label=''
              value={currentValue}
              placeholder={placeholder ?? l.inputAriaLabel}
              onChange={handleOnSearch}
              onFocus={(e) => {
                setIsFocused(true)
                setIsResultsOpen(true)
                onFocus?.(e)
              }}
              onBlur={(e) => {
                setIsFocused(false)
                onBlur?.(e)
              }}
              noMarginBottom
              type='search'
              aria-label={placeholder ?? l.inputAriaLabel}
              disabled={disabled}
              readOnly={readOnly}
              id={id}
              name={name}
              autoFocus={autoFocus ?? true}
              autoComplete={autoComplete}
              style={{ paddingLeft: '2.5rem' }}
            />
          </InputGroup>
        </div>
        <Button
          css={mobileSearchCancelButtonStyles}
          variant='borderless'
          label={l.cancelLabel}
          onClick={handleOnCancel}
        />
      </div>

      {isResultsOpen ? (
        <div css={mobileSearchResultsStyles}>
          <h3 css={mobileSearchSectionTitleStyles}>{titleToDisplay}</h3>
          {showInfoMessage ? (
            <div css={mobileSearchInlineMessageStyles}>
              <InlineMessage
                label={l.infoLabel}
                variant='info-white'
                size='full-width'
              />
            </div>
          ) : null}

          <ul css={mobileSearchListStyles} aria-label={titleToDisplay}>
            {filteredItems.map((item) => (
              <li key={item.id}>
                <chakra.button
                  type='button'
                  css={mobileSearchListItemStyles}
                  onClick={() => handleItemClick(item)}
                  aria-label={`${item.label}, ${item.caption ?? ''}`}
                  style={{ width: '100%' }}
                >
                  {item.icon ?? null}
                  <div css={mobileSearchListItemTextStyles}>
                    <p css={mobileSearchListItemLabelStyles}>{item.label}</p>
                    <p css={mobileSearchListItemCaptionStyles}>
                      {item.caption}
                    </p>
                  </div>
                </chakra.button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  )
}

export default MobileSearch
