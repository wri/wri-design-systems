// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { Children } from 'react'

import { Accordion, Box } from '@chakra-ui/react'
import { LayerParametersProps } from './types'
import { ChevronDownIcon } from '../../icons'
import {
  LayerParametersItem,
  LayerParametersItemContent,
  LayerParametersLabel,
  LayerParametersTrigger,
} from './styled'

const LayerParameters = ({ label, children }: LayerParametersProps) => (
  <div>
    <Accordion.Root defaultValue={[label]} multiple>
      <LayerParametersItem value={label}>
        <LayerParametersTrigger>
          <Box
            width='full'
            display='flex'
            flexDirection='column'
            alignItems='flex-start'
          >
            <LayerParametersLabel>{label}</LayerParametersLabel>
          </Box>
          <Accordion.ItemIndicator display='flex'>
            <ChevronDownIcon
              color='var(--chakra-colors-neutral-700)'
              height='16px'
              width='16px'
            />
          </Accordion.ItemIndicator>
        </LayerParametersTrigger>
        <LayerParametersItemContent>
          {Children.map(children, (child) => (
            <div className='layer-parameters-item-child'>{child}</div>
          ))}
        </LayerParametersItemContent>
      </LayerParametersItem>
    </Accordion.Root>
  </div>
)

export default LayerParameters
