import { ScaleBar } from '../..'

const ScaleBarDemo = () => (
  <div style={{ width: '238px' }}>
    <ScaleBar
      colors={['#E5F5F9', '#2CA25F']}
      values={['Low', 'Medium', 'High']}
      subLabels={['<100K', '>600K']}
      isGradient
    />
    <ScaleBar
      colors={['#EDF8FB', '#B2E2E2', '#66C2A4', '#2CA25F', '#006D2C']}
      values={['0%', '25%', '50%', '75%', '100%']}
    />
    <ScaleBar
      colors={['#A6611A', '#DFC27D', '#F5F5F5', '#80CDC1', '#018571']}
      values={['0%', '25%', '50%', '75%', '100%']}
    />
    <ScaleBar
      colors={['#A6611A', '#DFC27D', '#F5F5F5', '#80CDC1', '#018571']}
      values={['Low', 'Low-medium', 'Medium-high', 'High', 'Extremely high']}
      subLabels={[
        '(0 to 9 in 1,000,000)',
        '(9 in 1,000,000 to 7 in 100,000)',
        '(7 in 100,000 to 3 in 10,000)',
        '(3 in 10,000 to 2 in 1,000)',
        '(more than 2 in 1,000)',
      ]}
    />
  </div>
)

export default ScaleBarDemo
