import React from 'react'
import { useChart } from '@chakra-ui/charts'
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts'
import DemoWrapper from '../../../UI/DemoWrapper'
import ChartContainer from '.'

const ChartContainerDemo = () => {
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
    <DemoWrapper title='Chart Container'>
      <ChartContainer isLoading={false}>
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
    </DemoWrapper>
  )
}

export default ChartContainerDemo
