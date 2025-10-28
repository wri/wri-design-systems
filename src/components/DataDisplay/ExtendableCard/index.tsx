/** @jsxImportSource @emotion/react */
import React from 'react'
import { Accordion, Box, Flex } from '@chakra-ui/react'
import {
  extendableCardContainerStyles,
  extendableCardItemTriggerStyles,
} from './styled'
import { ExtendableCardProps } from './types'
import { ChevronDownIcon } from '../../icons'

const ExtendableCard = ({ children, header, footer }: ExtendableCardProps) => (
  <Box css={extendableCardContainerStyles}>
    <Accordion.Root multiple>
      <Accordion.Item value='extendable-card-item'>
        <Accordion.ItemTrigger
          css={extendableCardItemTriggerStyles}
          alignItems='center'
        >
          <Flex gap={3} flex='1' overflow='hidden' alignItems='center'>
            {header}
          </Flex>

          <Accordion.ItemIndicator>
            <ChevronDownIcon
              color='var(--chakra-colors-neutral-700)'
              height='16px'
              width='16px'
            />
          </Accordion.ItemIndicator>
        </Accordion.ItemTrigger>
        <Accordion.ItemContent>
          {children}
          {footer}
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion.Root>
  </Box>
)

export default ExtendableCard
