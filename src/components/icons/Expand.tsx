// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import { Icon, IconProps } from '@chakra-ui/react'

export const ExpandIcon = (props: IconProps) => (
  <Icon {...props}>
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_8714_101)'>
        <path
          d='M0 20V13.3333H2.22222V16.2222L5.66667 12.7778L7.22222 14.3333L3.77778 17.7778H6.66667V20H0ZM14.3333 7.22222L12.7778 5.66667L16.2222 2.22222H13.3333V0H20V6.66667H17.7778V3.77778L14.3333 7.22222Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_8714_101'>
          <rect width='20' height='20' fill='white' />
        </clipPath>
      </defs>
    </svg>
  </Icon>
)
