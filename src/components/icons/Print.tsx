// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import { Icon, IconProps } from '@chakra-ui/react'

export const PrintIcon = (props: IconProps) => (
  <Icon {...props}>
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M16 5H4V1H16V5ZM16 10.5C16.2833 10.5 16.5208 10.4042 16.7125 10.2125C16.9042 10.0208 17 9.78333 17 9.5C17 9.21667 16.9042 8.97917 16.7125 8.7875C16.5208 8.59583 16.2833 8.5 16 8.5C15.7167 8.5 15.4792 8.59583 15.2875 8.7875C15.0958 8.97917 15 9.21667 15 9.5C15 9.78333 15.0958 10.0208 15.2875 10.2125C15.4792 10.4042 15.7167 10.5 16 10.5ZM14 17V13H6V17H14ZM16 19H4V15H0V9C0 8.15 0.291667 7.4375 0.875 6.8625C1.45833 6.2875 2.16667 6 3 6H17C17.85 6 18.5625 6.2875 19.1375 6.8625C19.7125 7.4375 20 8.15 20 9V15H16V19Z'
        fill='currentColor'
      />
    </svg>
  </Icon>
)
