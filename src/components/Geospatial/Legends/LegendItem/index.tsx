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
import Button from '../../../Forms/Actions/Button'
import { ChevronDownIcon, CloseIcon, DotsIcon, InfoIcon } from '../../../icons'
import IconButton from '../../../Forms/Actions/IconButton'
import OpacityControl from '../OpacityControl'
import { useLabels } from '../../../../lib/i18n/useLabels'

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
  labels,
}: LegendItemProps) => {
  const l = useLabels('LegendItem', labels)
  return (
  <div css={legendItemContainerStyles}>
    <div css={legendItemDragAndDropActionsStyles}>
      <IconButton
        icon={<DotsIcon />}
        aria-label={l.dragAndDropLabel}
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
          aria-label={l.upLabel}
          onClick={onUpClick}
        />
        <IconButton
          icon={<ChevronDownIcon />}
          aria-label={l.downLabel}
          onClick={onDownClick}
        />
      </div>
    </div>
    <div style={{ width: '100%' }}>
      <div css={legendItemHeaderContainerStyles}>
        <div>
          <h3 css={legendItemLayerNameStyles}>{layerName}</h3>
          <p css={legendItemDataUnitStyles}>{dataUnit}</p>
        </div>
        <Button
          label={String(l.removeLabel)}
          size='small'
          variant='secondary'
          rightIcon={<CloseIcon />}
          onClick={onRemoveClick}
        />
      </div>
      {children}
      <div css={legendItemButtonsContainerStyles}>
        <Button
          label={String(l.aboutDataLabel)}
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
}

export default LegendItem
