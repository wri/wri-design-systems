import { RadioProps } from './types'
import { StyledRadio } from './styled'

const Radio = ({
  label,
  value,
  isChecked,
  isDisabled,
  ...rest
}: RadioProps) => (
  <StyledRadio
    value={value}
    isChecked={isChecked}
    isDisabled={isDisabled}
    {...rest}
  >
    {label}
  </StyledRadio>
)

export default Radio
