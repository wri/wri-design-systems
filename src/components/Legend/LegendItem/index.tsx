// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import { LegendItemProps } from './types'
import {
  LegendItemDragAndDropActions,
  LegendItemContainer,
  LegendItemDataUnit,
  LegendItemHeaderContainer,
  LegendItemLayerName,
  LegendItemButtonsContainer,
} from './styled'
import Button from '../../Forms/Buttons/Button'
import { ChevronDownIcon, CloseIcon, DotsIcon, InfoIcon } from '../../icons'
import IconButton from '../../Forms/Buttons/IconButton'
import OpacityControl from '../OpacityControl'

const LegendItem = ({
  layerName,
  dataUnit,
  onDrag,
  onUpClick,
  onDownClick,
  onRemoveClick,
  children,
  onInfoClick,
  onOpacityChanged,
}: LegendItemProps) => (
  <LegendItemContainer>
    <LegendItemDragAndDropActions>
      <IconButton
        icon={<DotsIcon />}
        aria-label='Drag and drop'
        onClick={onDrag}
        style={{ display: 'none', marginBottom: '12px' }}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        <IconButton
          icon={<ChevronDownIcon rotate='180' />}
          aria-label='Up'
          onClick={onUpClick}
        />
        <IconButton
          icon={<ChevronDownIcon />}
          aria-label='Down'
          onClick={onDownClick}
        />
      </div>
    </LegendItemDragAndDropActions>
    <div>
      <LegendItemHeaderContainer>
        <div>
          <LegendItemLayerName>{layerName}</LegendItemLayerName>
          <LegendItemDataUnit>{dataUnit}</LegendItemDataUnit>
        </div>
        <Button
          label='Remove'
          size='small'
          variant='secondary'
          rightIcon={<CloseIcon />}
          onClick={onRemoveClick}
        />
      </LegendItemHeaderContainer>
      {children}
      <LegendItemButtonsContainer>
        <Button
          label='About data'
          size='small'
          variant='secondary'
          leftIcon={<InfoIcon />}
          onClick={onInfoClick}
        />
        <OpacityControl defaultValue={80} onOpacityChanged={onOpacityChanged} />
      </LegendItemButtonsContainer>
    </div>
  </LegendItemContainer>
)

export default LegendItem
