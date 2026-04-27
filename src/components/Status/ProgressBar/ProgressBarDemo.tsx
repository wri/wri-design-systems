import { ProgressBar } from '../..'
import DemoWrapper from '../../UI/DemoWrapper'

const ProgressBarDemo = () => (
  <DemoWrapper title='Progress Bar'>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
        width: '100%',
        maxWidth: '25rem',
      }}
    >
      <ProgressBar progress={0} />
      <ProgressBar progress={25} />
      <ProgressBar progress={50} />
      <ProgressBar progress={75} />
      <ProgressBar progress={100} />
    </div>
  </DemoWrapper>
)

export default ProgressBarDemo
