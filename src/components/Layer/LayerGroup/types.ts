import { Accordion } from '@chakra-ui/react'
import { LayerItemProps } from '../LayerItem/types'

export type LayerGroupContainerProps = Omit<
  Accordion.RootProps,
  'onChange' | 'colorPalette' | 'variant' | 'size' | 'multiple' | 'collapsible'
> & {
  defaultValue?: string[]
}

export type LayerGroupProps = {
  label: string
  caption: string
  value: string
  layerItems: LayerItemProps[]
}
