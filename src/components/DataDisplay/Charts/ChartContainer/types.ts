import { type BoxProps } from '@chakra-ui/react'

export interface ChartContainerProps extends BoxProps {
  isLoading?: boolean
  isError?: boolean
  isEmpty?: boolean
  errorMessage?: string
  children: React.ReactNode
}
