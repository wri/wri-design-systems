import { AccordionProps } from '@chakra-ui/react'
import { LayerItemProps } from '../LayerItem/types'

export type LayerGroupContainerProps = Omit<
  AccordionProps,
  'onChange'
> & {
  allowMultiple?: boolean
  allowToggle?: boolean
  defaultIndex?: number[]
}

export type LayerGroupProps = {
  label: string
  caption: string
  layerItems: LayerItemProps[]
}
