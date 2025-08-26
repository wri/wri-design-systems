/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import { Accordion } from '@chakra-ui/react'
import { LayerGroupContainerProps } from './types'
import { layerGroupContainerStyles } from './styled'

const LayerGroupContainer = ({
  children,
  defaultValue,
  ...rest
}: LayerGroupContainerProps) => (
  <div css={layerGroupContainerStyles} style={{ width: '100%' }}>
    <Accordion.Root css={{}} defaultValue={defaultValue} multiple {...rest}>
      {children}
    </Accordion.Root>
  </div>
)

export default LayerGroupContainer
