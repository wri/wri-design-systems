// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import { Icon, IconProps } from '@chakra-ui/react'

export const WarningIcon = (props: IconProps) => (
  <Icon {...props}>
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0 18.6477L10 1.375L20 18.6477H0ZM10 15.9205C10.2576 15.9205 10.4735 15.8333 10.6477 15.6591C10.822 15.4848 10.9091 15.2689 10.9091 15.0114C10.9091 14.7538 10.822 14.5379 10.6477 14.3636C10.4735 14.1894 10.2576 14.1023 10 14.1023C9.74242 14.1023 9.52652 14.1894 9.35227 14.3636C9.17803 14.5379 9.09091 14.7538 9.09091 15.0114C9.09091 15.2689 9.17803 15.4848 9.35227 15.6591C9.52652 15.8333 9.74242 15.9205 10 15.9205ZM9.09091 13.1932H10.9091V8.64773H9.09091V13.1932Z'
        fill='currentColor'
      />
    </svg>
  </Icon>
)
