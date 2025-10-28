/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import { Children } from 'react'

import { Accordion, Box } from '@chakra-ui/react'
import { LayerParametersProps } from './types'
import { ChevronDownIcon } from '../../../icons'
import {
  layerParametersItemContentStyles,
  layerParametersItemStyles,
  layerParametersLabelStyles,
  layerParametersTriggerStyles,
} from './styled'

const LayerParameters = ({
  label,
  children,
  openedByDefault,
}: LayerParametersProps) => (
  <div>
    <Accordion.Root defaultValue={openedByDefault ? [label] : []} multiple>
      <Accordion.Item css={layerParametersItemStyles} value={label}>
        <Accordion.ItemTrigger css={layerParametersTriggerStyles}>
          <Box
            width='full'
            display='flex'
            flexDirection='column'
            alignItems='flex-start'
          >
            <p css={layerParametersLabelStyles}>{label}</p>
          </Box>
          <Accordion.ItemIndicator display='flex'>
            <ChevronDownIcon
              color='var(--chakra-colors-neutral-700)'
              height='16px'
              width='16px'
            />
          </Accordion.ItemIndicator>
        </Accordion.ItemTrigger>
        <Accordion.ItemContent css={layerParametersItemContentStyles}>
          {Children.map(children, (child) => (
            <div className='ds-layer-parameters-item-child'>{child}</div>
          ))}
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion.Root>
  </div>
)

export default LayerParameters
