/** @jsxImportSource @emotion/react */
import React from 'react'
import { Box, Center, Heading, Spinner, Text, VStack } from '@chakra-ui/react'
import { ChartContainerProps } from './types'

const ChartContainer = (props: ChartContainerProps) => {
  const {
    isLoading,
    isError,
    isEmpty,
    errorMessage = 'An error occurred while loading the chart.',
    children,
    ...rest
  } = props

  const renderContent = () => {
    if (isLoading) {
      return (
        <Center minH='300px'>
          <Spinner size='xl' color='blue.500' />
        </Center>
      )
    }

    if (isError) {
      return (
        <Center
          minH='300px'
          border='1px dashed'
          borderColor='red.200'
          borderRadius='md'
        >
          <Text color='red.600' fontWeight='medium'>
            {errorMessage}
          </Text>
        </Center>
      )
    }

    if (isEmpty) {
      return (
        <Center
          minH='300px'
          border='1px dashed'
          borderColor='gray.200'
          borderRadius='md'
        >
          <Text color='gray.500'>No data available to display.</Text>
        </Center>
      )
    }

    return (
      <Box width='100%' height='100%' minH='300px'>
        {children}
      </Box>
    )
  }

  return <Box width='100%'>{renderContent()}</Box>
}

export default ChartContainer
