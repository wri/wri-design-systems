// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect, useState } from 'react'

import { Accordion, Box } from '@chakra-ui/react'
import { LayerGroupProps } from './types'
import { LayerGroupCaption, LayerGroupTitle } from './styled'
import LayerItem from '../LayerItem'
import RadioGroup from '../../Radio/RadioGroup'
import { LayerItemProps } from '../LayerItem/types'
import { ChevronDownIcon } from '../../icons'
import Tag from '../../Tag'

const getDefaultValue = (layerItems: LayerItemProps[]) => {
  const defaultSelected = layerItems.find(
    (item) => item.variant === 'radio' && item.isDefaultSelected,
  )
  return defaultSelected?.name
}

const LayerGroup = ({
  label,
  caption,
  value,
  layerItems,
  onChangeForRadioVariant,
}: LayerGroupProps) => {
  const [activeItems, setActiveItems] = useState<{
    key?: string
    active?: boolean
  }>({})
  const [defaultValue] = useState(getDefaultValue(layerItems))

  useEffect(() => {
    let newActiveItems = { ...activeItems }
    layerItems.forEach((item) => {
      if (item.isDefaultSelected) {
        newActiveItems = {
          ...newActiveItems,
          [item.variant === 'radio' ? label : item.name]:
            item.isDefaultSelected,
        }
      }
    })

    setActiveItems(newActiveItems)
  }, [])

  const handleOnChange = (
    name: string,
    checked: boolean,
    onChange?: (name: string, checked: boolean, selectedValue?: string) => void,
    selectedValue?: string,
  ) => {
    const newActiveItems = {
      ...activeItems,
      [name]: checked,
    }

    setActiveItems(newActiveItems)

    if (onChange) {
      onChange(name, checked, selectedValue)
    }
  }

  const getActiveCount = Object.values(activeItems).filter(
    (item) => item === true,
  ).length

  return (
    <Accordion.Item value={value} width='300px'>
      <Accordion.ItemTrigger padding='16px' alignItems='flex-start'>
        <Box
          width='full'
          display='flex'
          flexDirection='column'
          alignItems='flex-start'
        >
          <LayerGroupTitle>
            {label}
            <Tag
              label={`${getActiveCount} Active`}
              size='small'
              variant={getActiveCount > 0 ? 'success' : 'info-grey'}
            />
          </LayerGroupTitle>
          <LayerGroupCaption>{caption}</LayerGroupCaption>
        </Box>
        <Accordion.ItemIndicator display='flex'>
          <ChevronDownIcon
            color='var(--chakra-colors-neutral-700)'
            height='16px'
            width='16px'
          />
        </Accordion.ItemIndicator>
      </Accordion.ItemTrigger>
      <Accordion.ItemContent paddingLeft='16px' paddingRight='16px'>
        <RadioGroup
          name={label}
          defaultValue={defaultValue}
          customGap='0px'
          onChange={(name: string, selectedValue: string) =>
            handleOnChange(
              name,
              !!selectedValue,
              onChangeForRadioVariant,
              selectedValue,
            )
          }
        >
          {layerItems.map((layerItem) => (
            <LayerItem
              key={layerItem.label}
              {...layerItem}
              onChange={(name: string, checked: boolean) =>
                handleOnChange(name, checked, layerItem.onChange)
              }
            />
          ))}
        </RadioGroup>
      </Accordion.ItemContent>
    </Accordion.Item>
  )
}

export default LayerGroup
