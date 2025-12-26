import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { useChart } from '@chakra-ui/charts'
import { Box, Text, Center } from '@chakra-ui/react'
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts'
import ChartContainer from '.'

const meta = {
  title: 'Data Display/Charts/ChartContainer',
  component: ChartContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isLoading: { control: 'boolean' },
    isError: { control: 'boolean' },
    isEmpty: { control: 'boolean' },
  },
} satisfies Meta<typeof ChartContainer>

export default meta
type Story = StoryObj<typeof meta>

const PlaceholderChart = () => (
  <Center
    w='full'
    h='300px'
    bg='gray.50'
    border='1px solid'
    borderColor='gray.100'
    borderRadius='md'
  >
    <Text color='gray.400'>Chart Content Rendering Area</Text>
  </Center>
)

export const Default: Story = {
  args: {
    children: <PlaceholderChart />,
  },
  render: (args) => (
    <Box w='600px'>
      <ChartContainer {...args} />
    </Box>
  ),
}

export const Loading: Story = {
  args: {
    isLoading: true,
    children: <PlaceholderChart />,
  },
  render: (args) => (
    <Box w='600px'>
      <ChartContainer {...args} />
    </Box>
  ),
}

export const Empty: Story = {
  args: {
    isEmpty: true,
    children: <PlaceholderChart />,
  },
  render: (args) => (
    <Box w='600px'>
      <ChartContainer {...args} />
    </Box>
  ),
}

export const Error: Story = {
  args: {
    isError: true,
    errorMessage: 'Failed to fetch data.',
    children: <PlaceholderChart />,
  },
  render: (args) => (
    <Box w='600px'>
      <ChartContainer {...args} />
    </Box>
  ),
}
export const SimpleLine: Story = {
  args: {
    children: null,
  },
  render: (args) => {
    const chart = useChart({
      data: [
        { Customers: 10, month: 'January' },
        { Customers: 95, month: 'February' },
        { Customers: 87, month: 'March' },
        { Customers: 88, month: 'May' },
        { Customers: 65, month: 'June' },
        { Customers: 90, month: 'August' },
      ],
      series: [{ name: 'Customers', color: 'blue.500' }],
    })

    return (
      <Box w='600px'>
        <ChartContainer {...args}>
          <ResponsiveContainer width='100%' height={300}>
            <LineChart
              data={chart.data}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <CartesianGrid stroke='#f5f5f5' vertical={false} />
              <XAxis
                axisLine={false}
                dataKey='month'
                tickFormatter={(value) => value.slice(0, 3)}
                fontSize={12}
              />
              <YAxis axisLine={false} tickLine={false} fontSize={12} />
              {chart.series.map((item) => (
                <Line
                  key={item.name}
                  type='monotone'
                  dataKey={item.name}
                  stroke='var(--chakra-colors-blue-500)'
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </Box>
    )
  },
}
