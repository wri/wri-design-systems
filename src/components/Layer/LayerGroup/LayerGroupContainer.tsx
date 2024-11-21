// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import { Accordion } from '@chakra-ui/react'
import { LayerGroupContainerProps } from './types'
import { StyledLayerGroupContainer } from './styled'

const LayerGroupContainer = ({
  children,
  defaultValue,
  ...rest
}: LayerGroupContainerProps) => (
  <StyledLayerGroupContainer style={{ width: '300px' }}>
    <Accordion.Root defaultValue={defaultValue} multiple {...rest}>
      {children}
    </Accordion.Root>
  </StyledLayerGroupContainer>
)

export default LayerGroupContainer
