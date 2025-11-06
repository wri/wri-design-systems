import React from 'react'
import { Icon, Box, Flex, Text } from '@chakra-ui/react'
import { fn } from '@storybook/test'
import ExtendableCard from '.'
import List from '../List'
import Tag from '../../Forms/Tag'
import { MapIcon } from '../../icons'

const demoHeader = (
  <Flex gap={3} flex='1' overflow='hidden' alignItems='center'>
    <Icon as={MapIcon} boxSize={4} aria-hidden='true' />

    <Box flex='1' minWidth={0}>
      <Text fontWeight='700'>Title</Text>
    </Box>
  </Flex>
)

const demoChildren = (
  <List
    items={[
      {
        id: 'nav-1',
        label: 'Settings',
        caption: 'Configure options',
        variant: 'navigation',
        icon: <MapIcon />,
        onItemClick: fn(),
      },
      {
        id: 'nav-2',
        label: 'Profile',
        variant: 'navigation',
        onItemClick: fn(),
      },
      {
        id: 'data-1',
        label: 'Status',
        value: 'Active',
        variant: 'data',
        icon: <MapIcon />,
      },
      {
        id: 'data-2',
        label: 'Version',
        value: '2.0',
        variant: 'data',
      },
    ]}
  />
)

const demoFooter = (
  <Flex gap={3} flex='1' overflow='hidden' alignItems='center' padding={2}>
    <Tag label='Label' variant='info-grey' />
  </Flex>
)

const ExtendableCardDemo = () => (
  <div style={{ width: '320px' }}>
    <ExtendableCard header={demoHeader} footer={demoFooter}>
      {demoChildren}
    </ExtendableCard>
  </div>
)

export default ExtendableCardDemo
