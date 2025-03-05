/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import { LegendItemProps } from './types'
import {
  legendItemButtonsContainerStyles,
  legendItemContainerStyles,
  legendItemDataUnitStyles,
  legendItemDragAndDropActionsStyles,
  legendItemHeaderContainerStyles,
  legendItemLayerNameStyles,
} from './styled'
import Button from '../../../Forms/Buttons/Button'
import { ChevronDownIcon, CloseIcon, DotsIcon, InfoIcon } from '../../../icons'
import IconButton from '../../../Forms/Buttons/IconButton'
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
  <div css={legendItemContainerStyles}>
    <div css={legendItemDragAndDropActionsStyles}>
      <IconButton
        icon={<DotsIcon />}
        aria-label='Drag and drop'
        aria-hidden
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
    </div>
    <div>
      <div css={legendItemHeaderContainerStyles}>
        <div>
          <h3 css={legendItemLayerNameStyles}>{layerName}</h3>
          <p css={legendItemDataUnitStyles}>{dataUnit}</p>
        </div>
        <Button
          label='Remove'
          size='small'
          variant='secondary'
          rightIcon={<CloseIcon />}
          onClick={onRemoveClick}
        />
      </div>
      {children}
      <div css={legendItemButtonsContainerStyles}>
        <Button
          label='About data'
          size='small'
          variant='secondary'
          leftIcon={<InfoIcon />}
          onClick={onInfoClick}
        />
        <OpacityControl defaultValue={80} onOpacityChanged={onOpacityChanged} />
      </div>
    </div>
  </div>
)

export default LegendItem
