/* eslint-disable no-console */

import { Switch } from '../../..'
import DemoWrapper from '../../../UI/DemoWrapper'

const SwitchDemo = () => (
  <DemoWrapper title='Switch'>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Switch name='switch' defaultChecked onChange={console.log}>
        defaultChecked
      </Switch>
      <Switch name='switch 2' isLabelOnLeft>
        isLabelOnLeft
      </Switch>
      <Switch name='switch 3'>Normal Label Positon</Switch>
      <Switch name='switch 4' disabled>
        disabled
      </Switch>
      <Switch name='switch 4' disabled checked>
        disabled cheked
      </Switch>
    </div>
  </DemoWrapper>
)

export default SwitchDemo
