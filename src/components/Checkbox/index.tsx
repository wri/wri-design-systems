import { StyledCheckbox } from './styled'
import { CheckboxProps } from './types'
import { CheckIcon, CheckIndeterminateIcon } from '../icons'

const Checkbox = ({
  label,
  name,
  value,
  isChecked,
  defaultChecked,
  isDisabled,
  isIndeterminate,
  onChange,
  ...rest
}: CheckboxProps) => (
  <StyledCheckbox
    name={name}
    value={value}
    isChecked={isChecked}
    defaultChecked={defaultChecked}
    isDisabled={isDisabled}
    isIndeterminate={isIndeterminate}
    onChange={onChange}
    icon={isIndeterminate ? <CheckIndeterminateIcon /> : <CheckIcon />}
    {...rest}
  >
    {label}
  </StyledCheckbox>
)

export default Checkbox
