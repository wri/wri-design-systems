/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import { Group, Button as ChakraButton } from '@chakra-ui/react'

import {
  mapControlsContainerStyles,
  mapControlsBaseStyles,
  topSeparatorStyles,
  bottomSeparatorStyles,
} from './styled'
import { MapControlsProps } from './types'

const MapControls = ({ items, vertical }: MapControlsProps) => {
  if (items.length === 1) {
    const item = items[0]

    return (
      <ChakraButton
        css={mapControlsBaseStyles}
        aria-label={item.ariaLabel}
        disabled={item.disabled}
        onClick={item.onClick}
      >
        {item.icon}
      </ChakraButton>
    )
  }
  return (
    <div css={mapControlsContainerStyles}>
      <div css={topSeparatorStyles(vertical)} />
      <Group orientation={vertical ? 'vertical' : 'horizontal'} attached>
        {items.map((item) => (
          <ChakraButton
            key={item.ariaLabel}
            css={mapControlsBaseStyles}
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

export default MapControls
