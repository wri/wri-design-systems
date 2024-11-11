import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useTheme,
  RadioGroup,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { LayerGroupProps } from './types'
import { LayerGroupCaption, LayerGroupTitle } from './styled'
import { getThemedColor } from '../../../lib/theme'
import ActiveTag from '../../Tag/ActiveTag'
import LayerItem from '../LayerItem'

const LayerGroup = ({ label, caption, layerItems }: LayerGroupProps) => {
  const [activeItems, setActiveItems] = useState<{
    key?: string
    value?: boolean
  }>({})
  const theme = useTheme()

  useEffect(() => {
    let newActiveItems = { ...activeItems }
    layerItems.forEach((item) => {
      newActiveItems = {
        ...newActiveItems,
        [item.name]: item.isDefaultSelected,
      }
    })

    setActiveItems(newActiveItems)
  }, [])

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    onChange: ((e: React.ChangeEvent<HTMLInputElement>) => void) | undefined,
  ) => {
    const newActiveItems = {
      ...activeItems,
      [e.target.name]: e.target.checked,
    }

    setActiveItems(newActiveItems)

    if (onChange) {
      onChange(e)
    }
  }

  const getActiveCount = Object.values(activeItems).filter(
    (item) => item === true,
  ).length

  return (
    <div style={{ width: '300px' }}>
      <AccordionItem>
        <h2>
          <AccordionButton
            style={{ alignItems: 'flex-start' }}
            _hover={{ backgroundColor: 'transparent' }}
          >
            <LayerGroupTitle as='span' flex='1'>
              {label}
              <ActiveTag count={getActiveCount} />
            </LayerGroupTitle>
            <AccordionIcon
              width='30px'
              height='30px'
              color={getThemedColor(theme.colors, 'neutral', 700)}
            />
          </AccordionButton>
        </h2>
        <LayerGroupCaption>{caption}</LayerGroupCaption>
        <AccordionPanel pb={0}>
          <RadioGroup name={label}>
            {layerItems.map((layerItem) => (
              <LayerItem
                {...layerItem}
                onChange={(e) => handleOnChange(e, layerItem.onChange)}
              />
            ))}
          </RadioGroup>
        </AccordionPanel>
      </AccordionItem>
    </div>
  )
}

export default LayerGroup
