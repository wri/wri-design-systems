// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import { Icon, IconProps } from '@chakra-ui/react'

export const DisallowedIcon = (props: IconProps) => (
  <Icon {...props}>
    <svg
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_8746_23)'>
        <path
          d='M16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0ZM16 14.4004L9.59961 8L8 9.59961L14.4004 16L8 22.4004L9.59961 24L16 17.5996L22.4004 24L24 22.4004L17.5996 16L24 9.59961L22.4004 8L16 14.4004Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_8746_23'>
          <rect width='32' height='32' fill='white' />
        </clipPath>
      </defs>
    </svg>
  </Icon>
)
