import {
  RadioProps as ChakraRadioProps,
  RadioGroupProps as ChakraRadioGroupProps,
} from '@chakra-ui/react'

export type RadioProps = Omit<
  ChakraRadioProps,
  'size' | 'variant' | 'colorScheme' | 'name'
> & {
  label: string
  defaultChecked?: boolean
  value: string
}

export type RadioGroupProps = Omit<
  ChakraRadioGroupProps,
  'children' | 'size' | 'variant' | 'colorScheme'
> & {
  name: string
  radios: RadioProps[]
  defaultValue?: string
  isColumn?: boolean
}
