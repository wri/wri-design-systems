/** @jsxImportSource @emotion/react */
import React, { useState, useRef } from 'react'
import { Accordion, Box, Flex } from '@chakra-ui/react'
import Tag from '../../Forms/Tag'
import {
  analysisWidgetContainerStyles,
  analysisWidgetHeaderStyles,
  analysisWidgetFooterStyles,
  analysisWidgetContentStyles,
} from './styled'
import { AnalysisWidgetProps } from './types'
import { ChevronDownIcon } from '../../icons'

const AnalysisWidget = ({
  children,
  header,
  footer,
  expanded = true,
  collapsible = true,
  actions,
}: AnalysisWidgetProps) => {
  const itemValue = 'analysis-widget-item'
  const [isOpen, setIsOpen] = useState(expanded)
  const headerId = `analysis-widget-header-${itemValue}`
  const toggleRef = useRef(null)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Box
      as='section'
      aria-labelledby={headerId}
      css={analysisWidgetContainerStyles}
    >
      <Accordion.Root
        multiple
        value={!collapsible ? [itemValue] : undefined}
        defaultValue={expanded ? [itemValue] : []}
      >
        <Accordion.Item css={analysisWidgetContentStyles} value={itemValue}>
          <Accordion.ItemTrigger
            id={headerId}
            ref={toggleRef}
            role='button'
            aria-expanded={isOpen}
            tabIndex={0}
            css={analysisWidgetHeaderStyles}
            alignItems='center'
            pointerEvents={collapsible ? 'auto' : 'none'}
            onClick={collapsible ? handleToggle : undefined}
          >
            <Flex gap={3} flex='1' overflow='hidden' alignItems='center'>
              {header}
            </Flex>
            {actions &&
              actions.map((action) => (
                <Tag
                  variant='info-grey'
                  key={action.label}
                  label={action.label}
                  onClick={(e) => {
                    action.onClick()
                    e.preventDefault()
                    e.stopPropagation()
                  }}
                  icon={action?.icon}
                />
              ))}
            {collapsible && (
              <Accordion.ItemIndicator>
                <ChevronDownIcon
                  aria-label='Toggle section'
                  color='var(--chakra-colors-neutral-700)'
                  height='16px'
                  width='16px'
                />
              </Accordion.ItemIndicator>
            )}
          </Accordion.ItemTrigger>
          <div
            className={isOpen ? 'item-content-open' : 'item-content-closed'}
            aria-hidden={!isOpen}
          >
            {children}
            {footer && <Box css={analysisWidgetFooterStyles}>{footer}</Box>}
          </div>
        </Accordion.Item>
      </Accordion.Root>
    </Box>
  )
}

export default AnalysisWidget
