// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import { Icon, IconProps } from '@chakra-ui/react'

export const UserIcon = (props: IconProps) => (
  <Icon {...props}>
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M8 8.88889C5.97297 8.88889 4.32432 7.24024 4.32432 5.21321C4.32432 3.18618 5.97297 1.53753 8 1.53753C10.027 1.53753 11.6757 3.18618 11.6757 5.21321C11.6757 7.24024 10.027 8.88889 8 8.88889ZM2 14.4625V13.136C2 11.2583 4.85714 9.92589 8 9.92589C11.1429 9.92589 14 11.2583 14 13.136V14.4625H2Z'
        fill='currentColor'
      />
    </svg>
  </Icon>
)
