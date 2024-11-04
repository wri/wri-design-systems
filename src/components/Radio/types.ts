import {
  RadioProps as ChakraRadioProps,
  RadioGroupProps as ChakraRadioGroupProps,
} from '@chakra-ui/react'

export type RadioProps = Omit<
  ChakraRadioProps,
  'size' | 'variant' | 'colorScheme' | 'name' | 'defaultChecked'
> & {
  label: string
  value: string
  isChecked?: boolean
  isDisabled?: boolean
}

export type RadioGroupProps = Omit<
  ChakraRadioGroupProps,
  'size' | 'variant' | 'colorScheme'
> & {
  name: string
  defaultValue?: string
  isRow?: boolean
}
