/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import Checkbox from '../../Forms/Controls/Checkbox'
import Tag from '../../Forms/Tag'
import { CheckIcon } from '../../icons'
import {
  baseMapContainerStyles,
  baseMapHeaderContainerStyles,
  baseMapContentContainerStyles,
  baseMapAdditionalSettingsContainerStyles,
  baseMapAdditionalSettingsChildrenContainerStyles,
  baseMapOptionsContainerStyles,
  baseMapOptionsItemContainerStyles,
  baseMapOptionsItemImageStyles,
  baseMapOptionsItemDataContainerStyles,
} from './styles'
import { BaseMapProps } from './types'

const BaseMap = ({
  title,
  caption,
  additionalSettings,
  options,
  onOptionSelected,
  maxHeight = '400px',
  maxWidth = '260px',
}: BaseMapProps) => (
  <div css={baseMapContainerStyles(maxHeight, maxWidth)}>
    <div className='ds-base-map-scroll-content'>
      <div css={baseMapHeaderContainerStyles}>
        <h2 className='ds-base-map-header-title'>{title}</h2>
        <p className='ds-base-map-header-caption'>{caption}</p>
      </div>
      <div css={baseMapContentContainerStyles}>
        {additionalSettings ? (
          <div css={baseMapAdditionalSettingsContainerStyles}>
            {additionalSettings.map((checkbox) => (
              <div key={checkbox.label}>
                <Checkbox
                  css={{}}
                  checked={checkbox.checked}
                  onCheckedChange={({ checked }) =>
                    checkbox.onCheckedChange({ checked: Boolean(checked) })
                  }
                >
                  {checkbox.label}
                </Checkbox>
                {checkbox.checked && checkbox.children ? (
                  <div css={baseMapAdditionalSettingsChildrenContainerStyles}>
                    {checkbox.children}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        ) : null}
        {options ? (
          <div css={baseMapOptionsContainerStyles}>
            {options.map((option) => (
              <div
                key={option.label}
                css={baseMapOptionsItemContainerStyles(option.active)}
                role='button'
                onClick={() => onOptionSelected?.(option)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    onOptionSelected?.(option)
                  }
                }}
              >
                <div css={baseMapOptionsItemImageStyles(option.imageUrl)} />
                <div css={baseMapOptionsItemDataContainerStyles}>
                  <div className='ds-base-map-title-container'>
                    <p className='ds-base-map-title'>{option.label}</p>
                    {option.active ? (
                      <Tag
                        label='Active'
                        variant='warning'
                        size='small'
                        icon={<CheckIcon />}
                      />
                    ) : null}
                  </div>

                  <p className='ds-base-map-caption'>{option.caption}</p>
                  {option.active && option.children ? (
                    <div className='ds-base-map-children'>
                      {option.children}
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  </div>
)

export default BaseMap
