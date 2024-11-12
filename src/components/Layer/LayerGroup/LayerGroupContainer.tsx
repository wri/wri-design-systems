import { Accordion } from '@chakra-ui/react'
import { LayerGroupContainerProps } from './types'

const LayerGroupContainer = ({
  children,
  allowMultipleOpen = true,
  defaultIndex = [0],
  ...rest
}: LayerGroupContainerProps) => (
  <div style={{ width: '300px' }}>
    <Accordion
      allowMultiple={allowMultipleOpen}
      defaultIndex={defaultIndex}
      {...rest}
    >
      {children}
    </Accordion>
  </div>
)

export default LayerGroupContainer
