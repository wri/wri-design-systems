import React from 'react'
import { Icon, IconProps } from '@chakra-ui/react'

export const GraphIcon = (props: IconProps) => (
  <Icon {...props}>
    <svg
      width='64'
      height='64'
      viewBox='0 0 64 64'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M64 60.25H60.25V22.5H48.875V60.25H45.125V37.5H33.875V60.25H30.125V30H18.875V60.25H15.125V41.25H3.75V60.25H0V64H64V60.25Z'
        fill='#FADFA7'
      />
      <path
        d='M63.9995 15V0H48.8745V3.75H57.5981L39.4995 21.7236L24.4995 6.72363L0.548828 30.5494L3.20008 33.2006L24.4995 12.0264L39.4995 27.0264L60.2495 6.40137V15H63.9995Z'
        fill='#FADFA7'
      />
    </svg>
  </Icon>
)
