import { RadioCardRootProps } from '@chakra-ui/react'

export type OptionCardItemProps = {
  label?: string
  caption?: string
  icon?: React.ReactNode
  disabled?: boolean
  children?: React.ReactNode
  value: string
  selectedColor?: string
  selectedBackgroundColor?: string
}

export type OptionCardProps = Omit<
  RadioCardRootProps,
  | 'colorPalette'
  | 'size'
  | 'variant'
  | 'as'
  | 'asChild'
  | 'unstyled'
  | 'defaultChecked'
> & {
  defaultValue?: string
  items: OptionCardItemProps[]
  onValueChange?: ({ value }: { value: string }) => void
  variant?: 'default' | 'centered' | 'expanded'
  itemWidth?: string
  hideControl?: boolean
}
