/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import { useEffect, useState } from 'react'

import { Accordion, Box } from '@chakra-ui/react'
import { LayerGroupProps } from './types'
import {
  layerGroupCaptionStyles,
  layerGroupTitleStyles,
  layerGroupBoxStyles,
} from './styled'
import LayerItem from '../LayerItem'
import RadioGroup from '../../../Forms/Controls/Radio/RadioGroup'
import { LayerItemProps } from '../LayerItem/types'
import { ChevronDownIcon } from '../../../icons'
import Tag from '../../../Forms/Tag'

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

  const ariaLabel = `${label}, ${getActiveCount} Active layers on the map${
    caption ? `, ${caption}` : ''
  }`

  return (
    <Accordion.Item value={value} width='100%'>
      <Accordion.ItemTrigger
        css={layerGroupBoxStyles}
        alignItems='flex-start'
        aria-label={ariaLabel}
      >
        <Box
          width='full'
          display='flex'
          flexDirection='column'
          alignItems='flex-start'
        >
          <span css={layerGroupTitleStyles}>
            {label}
            <Tag
              label={`${getActiveCount} Active`}
              size='small'
              variant={getActiveCount > 0 ? 'success' : 'info-grey'}
            />
          </span>
          <div css={layerGroupCaptionStyles}>{caption}</div>
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
