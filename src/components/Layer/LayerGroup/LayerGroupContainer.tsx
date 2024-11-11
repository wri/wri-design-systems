import { Accordion } from '@chakra-ui/react'
import { LayerGroupContainerProps } from './types'

const LayerGroupContainer = ({
  children,
  allowMultiple = true,
  allowToggle = true,
  defaultIndex = [0],
  ...rest
}: LayerGroupContainerProps) => (
  <div style={{ width: '300px' }}>
    <Accordion
      allowMultiple={allowMultiple}
      allowToggle={allowToggle}
      defaultIndex={defaultIndex}
      {...rest}
    >
      {children}
    </Accordion>
  </div>
)

export default LayerGroupContainer
