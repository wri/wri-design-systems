import { useState } from 'react'

import { OpacityControl } from '../../..'
import DemoWrapper from '../../../UI/DemoWrapper'

const OpacityControlDemo = () => {
  const [opacity, setOpacity] = useState(80)

  return (
    <DemoWrapper title='Opacity Control'>
      <div style={{ width: '14.875rem' }}>
        <OpacityControl defaultValue={opacity} onOpacityChanged={setOpacity} />
      </div>
    </DemoWrapper>
  )
}

export default OpacityControlDemo
