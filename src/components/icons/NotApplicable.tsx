// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import { Icon, IconProps } from '@chakra-ui/react'

export const NotApplicableIcon = (props: IconProps) => (
  <Icon {...props}>
    <svg
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <mask id='path-1-inside-1_8746_66' fill='white'>
        <path d='M0 16C0 7.16344 7.16344 0 16 0V0C24.8366 0 32 7.16344 32 16V16C32 24.8366 24.8366 32 16 32V32C7.16344 32 0 24.8366 0 16V16Z' />
      </mask>
      <path
        d='M0 16M32 16M32 16M0 16M16 0M32 16M16 32M0 16M16 32V30C8.26801 30 2 23.732 2 16H0H-2C-2 25.9411 6.05887 34 16 34V32ZM32 16H30C30 23.732 23.732 30 16 30V32V34C25.9411 34 34 25.9411 34 16H32ZM16 0V2C23.732 2 30 8.26801 30 16H32H34C34 6.05887 25.9411 -2 16 -2V0ZM16 0V-2C6.05887 -2 -2 6.05887 -2 16H0H2C2 8.26801 8.26801 2 16 2V0Z'
        fill='currentColor'
        mask='url(#path-1-inside-1_8746_66)'
      />
    </svg>
  </Icon>
)
