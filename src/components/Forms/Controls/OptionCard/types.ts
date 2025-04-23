import { RadioCardRootProps } from '@chakra-ui/react'

export type OptionCardItemProps = {
  label: string
  caption?: string
  icon?: React.ReactNode
  variant?: 'default' | 'centered' | 'expanded'
  disabled?: boolean
  children?: React.ReactNode
  value: string
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
}
