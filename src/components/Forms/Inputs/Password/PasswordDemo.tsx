import { Password } from '../../..'

const PasswordDemo = () => (
  <div
    style={{
      width: '486px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    }}
  >
    <Password label='Label' caption='Caption' required />
    <Password
      label='Label - minLength 10'
      caption='Caption'
      minLength={10}
      required
    />
    <Password
      label='Label - uppercase'
      caption='Caption'
      disabledRules={{
        uppercase: true,
      }}
      required
    />
    <Password
      label='Label - lowercase'
      caption='Caption'
      disabledRules={{
        lowercase: true,
      }}
      required
    />
    <Password
      label='Label - numbers'
      caption='Caption'
      disabledRules={{
        numbers: true,
      }}
      required
    />
    <Password
      label='Label - specialCharacters'
      caption='Caption'
      disabledRules={{
        specialCharacters: true,
      }}
      required
    />
    <Password
      label='Label - all'
      caption='Caption'
      disabledRules={{
        uppercase: true,
        lowercase: true,
        numbers: true,
        specialCharacters: true,
      }}
      required
    />
    <Password
      label='Label - No validations'
      caption='Caption'
      hideValidations
      required
    />
  </div>
)

export default PasswordDemo
