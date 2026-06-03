// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import { Icon, IconProps } from '@chakra-ui/react'

export const IndeterminateIcon = (props: IconProps) => (
  <Icon {...props}>
    <svg
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_8746_129)'>
        <path
          d='M16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0ZM8 14V18H24V14H8Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_8746_129'>
          <rect width='32' height='32' fill='white' />
        </clipPath>
      </defs>
    </svg>
  </Icon>
)
