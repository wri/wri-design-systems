/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import { useState } from 'react'
import { Group, Button as ChakraButton, Box } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '../../../icons'
import { toolbarContainerStyles, toolbarBaseStyles } from './styled'
import { ToolbarProps } from './types'

const Toolbar = ({
  items,
  vertical,
  variant,
  expanded,
  toggleControl,
  ariaLabel,
  defaultGaps,
}: ToolbarProps) => {
  const [isExpanded, setIsExpanded] = useState(expanded)
  const showLabel = isExpanded || variant === 'default'

  if (items.length === 1) {
    const item = items[0]

    return (
      <ChakraButton
        css={toolbarBaseStyles(showLabel)}
        aria-label={item.ariaLabel}
        disabled={item.disabled}
        onClick={item.onClick}
      >
        {item.icon}
        <Box
          as='span'
          display='inline-block'
          overflow='hidden'
          whiteSpace='nowrap'
          transition='max-width 0.3s ease, opacity 0.2s ease, margin-left 0.3s ease'
          maxWidth={showLabel ? '150px' : '0'}
          opacity={showLabel ? 1 : 0}
          marginLeft={showLabel ? '8px' : '0'}
        >
          {item.label}
        </Box>
      </ChakraButton>
    )
  }

  const toggleButton = toggleControl ? (
    <ChakraButton
      css={toolbarBaseStyles(showLabel)}
      onClick={() => setIsExpanded(!isExpanded)}
      aria-label={isExpanded ? 'Collapse' : 'Expand'}
    >
      <Box
        as='span'
        overflow='hidden'
        whiteSpace='nowrap'
        transition='max-width 0.3s ease, opacity 0.2s ease, margin-left 0.3s ease'
        maxWidth={showLabel ? '150px' : '20px'}
        marginLeft={showLabel ? '8px' : '0'}
      >
        <Box as='span'>
          {isExpanded && (
            <>
              <ChevronRightIcon style={{ width: '20px', height: '12px' }} />
              <ChevronRightIcon
                style={{ width: '20px', height: '12px' }}
                ml='-12px'
              />
            </>
          )}
          {!isExpanded && (
            <>
              <ChevronLeftIcon
                style={{ width: '20px', height: '12px' }}
                ml='-4px'
              />
              <ChevronLeftIcon
                style={{ width: '20px', height: '12px' }}
                ml='-14px'
              />
            </>
          )}
        </Box>
        {isExpanded && <>Collapse</>}
      </Box>
    </ChakraButton>
  ) : null

  return (
    <div role='toolbar' aria-label={ariaLabel} css={toolbarContainerStyles}>
      <Group
        orientation={vertical ? 'vertical' : 'horizontal'}
        attached
        display='grid'
        borderCollapse='collapse'
        gridAutoFlow={vertical ? 'row' : 'column'}
      >
        {items.map((item) => {
          const showGap =
            (defaultGaps && item.gap !== false) ||
            (!defaultGaps && item.gap === true)
          return (
            <ChakraButton
              key={item.ariaLabel}
              css={toolbarBaseStyles(showLabel)}
              aria-label={item.ariaLabel}
              disabled={item.disabled}
              onClick={item.onClick}
              mr={showGap && !vertical ? '16px' : '0'}
              mb={showGap && vertical ? '16px' : '0'}
            >
              <Box
                as='span'
                overflow='hidden'
                whiteSpace='nowrap'
                transition='max-width 0.3s ease, opacity 0.2s ease, margin-left 0.3s ease'
                maxWidth={showLabel ? '150px' : '20px'}
                marginLeft={showLabel ? '8px' : '0'}
              >
                <Box as='span' mr={item.icon ? '8px' : '0'}>
                  {item.icon}
                </Box>
                <span aria-hidden={!showLabel}>
                  {/*  Hide the text from screen readers when collapsed to avoid redundancy */}
                  {item.label}
                </span>
              </Box>
            </ChakraButton>
          )
        })}
        {toggleButton}
      </Group>
    </div>
  )
}

export default Toolbar
