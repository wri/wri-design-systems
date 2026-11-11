import { Accordion } from '@chakra-ui/react'
import { LayerItemProps } from '../LayerItem/types'
import type { LayerGroupLabels } from '../../../../lib/i18n/types'

export type { LayerGroupLabels }

export type LayerGroupContainerProps = Omit<
  Accordion.RootProps,
  'onChange' | 'colorPalette' | 'variant' | 'size' | 'multiple' | 'collapsible'
> & {
  /** Accordion values opened initially */
  defaultValue?: string[]
}

export type LayerGroupProps = {
  /** Group title shown in the accordion trigger */
  label: string
  /** Caption shown under the group title */
  caption: string
  /** Accordion item value used to identify and control the group's open state */
  value: string
  /** Layer items rendered inside the group */
  layerItems: LayerItemProps[]
  /** Called when a radio-variant layer item changes selection */
  onChangeForRadioVariant?: (
    name: string,
    checked: boolean,
    selectedValue?: string,
  ) => void
  /** Override internal UI labels for internationalization support. */
  labels?: Partial<LayerGroupLabels>
}
