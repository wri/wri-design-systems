/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import { Group, Button as ChakraButton } from '@chakra-ui/react'

import {
  mapControlContainerStyles,
  mapControlBaseStyles,
  topSeparatorStyles,
  bottomSeparatorStyles,
} from './styled'
import { MapControlProps } from './types'

const MapControl = ({ items, vertical }: MapControlProps) => {
  if (items.length === 1) {
    const item = items[0]

    return (
      <ChakraButton
        css={mapControlBaseStyles}
        aria-label={item.ariaLabel}
        disabled={item.disabled}
        onClick={item.onClick}
      >
        {item.icon}
      </ChakraButton>
    )
  }
  return (
    <div css={mapControlContainerStyles}>
      <div css={topSeparatorStyles(vertical)} />
      <Group orientation={vertical ? 'vertical' : 'horizontal'} attached>
        {items.map((item) => (
          <ChakraButton
            key={item.ariaLabel}
            css={mapControlBaseStyles}
            aria-label={item.ariaLabel}
            disabled={item.disabled}
            onClick={item.onClick}
          >
            {item.icon}
          </ChakraButton>
        ))}
      </Group>
      <div css={bottomSeparatorStyles(vertical)} />
    </div>
  )
}

export default MapControl
