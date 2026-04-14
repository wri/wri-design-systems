import { Accordion } from '@chakra-ui/react'
import { LayerItemProps } from '../LayerItem/types'
import type { LayerGroupLabels } from '../../../../lib/i18n/types'

export type { LayerGroupLabels }

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
  onChangeForRadioVariant?: (
    name: string,
    checked: boolean,
    selectedValue?: string,
  ) => void
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<LayerGroupLabels>
}
