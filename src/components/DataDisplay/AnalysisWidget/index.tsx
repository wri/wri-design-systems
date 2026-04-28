/** @jsxImportSource @emotion/react */
import React, { useState } from 'react'
import { Accordion, Box, Flex } from '@chakra-ui/react'
import Button from '../../Forms/Actions/Button'
import {
  analysisWidgetContainerStyles,
  analysisWidgetHeaderStyles,
  analysisWidgetFooterStyles,
  analysisWidgetContentStyles,
} from './styled'
import { AnalysisWidgetProps } from './types'
import { ChevronDownIcon } from '../../icons'
import { useLabels } from '../../../lib/i18n/useLabels'

const AnalysisWidget = ({
  children,
  header,
  footer,
  expanded = true,
  collapsible = true,
  actions,
  showFooterOnCollapsed = false,
  labels,
}: AnalysisWidgetProps) => {
  const l = useLabels('AnalysisWidget', labels)
  const itemValue = 'analysis-widget-item'
  const [isOpen, setIsOpen] = useState(expanded)
  const headerId = `analysis-widget-header-${itemValue}`

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
          {header && (
            <Accordion.ItemTrigger
              id={headerId}
              role='button'
              aria-expanded={isOpen}
              tabIndex={0}
              css={analysisWidgetHeaderStyles}
              pointerEvents={collapsible ? 'auto' : 'none'}
              onClick={collapsible ? handleToggle : undefined}
            >
              <Flex
                gap={3}
                flex='1'
                overflow='hidden'
                alignItems='top'
                justifyContent='space-between'
              >
                {header}

                {actions &&
                  actions.map((action) => (
                    <Button
                      variant='secondary'
                      size='small'
                      key={action.label}
                      label={action.label}
                      onClick={(e) => {
                        action.onClick()
                        e.preventDefault()
                        e.stopPropagation()
                      }}
                      leftIcon={action?.icon}
                    />
                  ))}

                {collapsible && (
                  <Accordion.ItemIndicator
                    height='1rem'
                    marginTop='0.5rem'
                    display='flex'
                  >
                    <ChevronDownIcon
                      aria-label={l.toggleSectionLabel}
                      color='var(--chakra-colors-neutral-700)'
                      height='1rem'
                      width='1rem'
                    />
                  </Accordion.ItemIndicator>
                )}
              </Flex>
            </Accordion.ItemTrigger>
          )}
          <div
            className={isOpen ? 'item-content-open' : 'item-content-closed'}
            aria-hidden={!isOpen}
          >
            {children}
            {!showFooterOnCollapsed && footer && (
              <Box css={analysisWidgetFooterStyles}>{footer}</Box>
            )}
          </div>
        </Accordion.Item>
        {showFooterOnCollapsed && footer && (
          <Box css={analysisWidgetFooterStyles}>{footer}</Box>
        )}
      </Accordion.Root>
    </Box>
  )
}

export default AnalysisWidget
