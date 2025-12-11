import React, { useRef, useEffect } from 'react'
import { Box } from '@chakra-ui/react'

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
    <Box padding='8px'>
      {items.map((item, index) => (
        <Box
          ref={resultsRef}
          key={item.id}
          padding='6px 8px'
          borderRadius='md'
          cursor='pointer'
          bg={index === highlightedIndex ? 'gray.100' : undefined}
          _hover={{ background: 'gray.50' }}
          onClick={() => onSelect(item.id || item.label)}
        >
          <HighlightedText text={item.label} query={query} />
        </Box>
      ))}
    </Box>
  )
}

export default TextResults
