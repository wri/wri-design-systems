/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import React, { useRef, useEffect } from 'react'
import { Box } from '@chakra-ui/react'
import { searchItemStyles } from './styled'
import type { ListItemProps } from '../../DataDisplay/List/types'

const HighlightedText = ({ text, query }: { text: string; query: string }) => {
  if (!query) return text

  const regex = new RegExp(`(${query})`, 'ig')
  const parts = text.split(regex)

  return (
    <>
      {parts.map((part) =>
        regex.test(part) ? (
          <strong key={part}>{part}</strong>
        ) : (
          <span key={part}>{part}</span>
        ),
      )}
    </>
  )
}

const TextResults = ({
  items,
  query,
  onSelect,
  highlightedIndex,
}: {
  items: any[]
  query: string
  onSelect: (id: string) => void
  highlightedIndex: number
}) => {
  const resultsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!resultsRef.current) return
    const list = resultsRef.current
    const item = list.children[highlightedIndex] as HTMLElement
    if (item) {
      item.scrollIntoView({ block: 'nearest' })
    }
  }, [highlightedIndex])

  return (
    <Box ref={resultsRef} padding='0.5rem'>
      {items.map((item, index) => {
        const searchLabel =
          item.searchLabel ||
          (typeof item.label === 'string' || typeof item.label === 'number'
            ? String(item.label)
            : '')

        return (
          <Box
            key={item.id}
            css={searchItemStyles}
            data-highlighted={index === highlightedIndex || undefined}
            onClick={() => onSelect(item.id || searchLabel)}
          >
            {typeof item.label === 'string' ||
            typeof item.label === 'number' ? (
              <HighlightedText text={String(item.label)} query={query} />
            ) : (
              item.label
            )}
          </Box>
        )
      })}
    </Box>
  )
}

export default TextResults
