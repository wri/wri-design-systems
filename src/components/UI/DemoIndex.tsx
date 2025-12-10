/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { useState } from 'react'
import { InputGroup } from '@chakra-ui/react'
import { getThemedColor } from '../../lib/theme'
import TextInput from '../Forms/Inputs/TextInput'
import CloseButton from '../Forms/Actions/CloseButton'
import IconButton from '../Forms/Actions/IconButton'

const demoIndexContainerStyles = css`
  padding: 20px;
  margin-bottom: 100px;
`

const demoIndexTitleStyles = css`
  font-size: 20px;
  line-height: 28px;
  font-weight: 700;
  color: ${getThemedColor('neutral', 800)};
  margin-bottom: 20px;
`

const demoIndexButtonStyles = (isSelected: boolean) => css`
  cursor: pointer;
  border-radius: 4px;
  padding: 3px 6px;
  font-size: 14px;

  ${isSelected
    ? `
    font-weight: 700;
    color: ${getThemedColor('primary', 600)};
  `
    : `
    font-weight: 400;
    color: ${getThemedColor('neutral', 700)};
  `}

  &:hover {
    text-decoration: underline;
    color: ${getThemedColor('primary', 600)};
  }

  &:focus-visible {
    outline: 2px solid ${getThemedColor('primary', 700)};
    box-shadow: 0px 2px 4px -2px #0000001a;
    box-shadow: 0px 4px 6px -1px #0000001a;
    box-shadow:
      0 0 0 2px ${getThemedColor('neutral', 100)},
      rgba(0, 0, 0, 0.05) 0px 2px 2px 4px;
  }
`

const components = [
  'Avatar',
  'Button',
  'Close Button',
  'Icon Button',
  'Map Controls Toolbar',
  'Multi Action Button',
  'Tooltip',
  'Checkbox',
  'Checkbox Option Card',
  'Option Card',
  'Radio',
  'Slider',
  'Switch',
  'Checkbox List',
  'Input With Units',
  'Password',
  'Radio List',
  'Select',
  'Slider Input',
  'Textarea',
  'Text Input',
  'Tag',
  'Base Map',
  'Map Marker',
  'Map Marker Presets',
  'Map Pop Up',
  'Layer Group',
  'Layer Item',
  'Layer Panel',
  'Layer Parameters',
  'Legend Item',
  'Legend Panel',
  'Qualitative Attribute',
  'Scale Bar',
  'Item Count',
  'Pagination',
  'Table',
  'List',
  'Extendable Card',
  'Analysis Widget',
  'Panel',
  'Sheet',
  'Breadcrumb',
  'Mobile Tab Bar',
  'Tab Bar',
  'Menu',
  'Modal',
  'Badge',
  'Inline Message',
  'Progress Bar',
  'Step Progress Indicator',
  'Toast',
  'Search',
]

const DemoIndex = () => {
  const [selectedComponentId, setSelectedComponentId] = useState('')
  const [localComponents, setLocalComponents] = useState(components)
  const [filterText, setFilterText] = useState('')

  const handleOnSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    setFilterText(value)
    setLocalComponents(
      components.filter((component) =>
        component.toLowerCase().includes(value.toLowerCase()),
      ),
    )
  }

  const handleScrollTo = (id: string) => {
    setSelectedComponentId(id)

    const element = document.getElementById(id)
    if (element) {
      const yOffset = -60
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  const handleOnClear = () => {
    setFilterText('')
    setLocalComponents(components)
  }

  const endElement = filterText.length ? (
    <CloseButton style={{ marginTop: '-12px' }} onClick={handleOnClear} />
  ) : null

  return (
    <div css={demoIndexContainerStyles}>
      <h2 css={demoIndexTitleStyles}>Components Index</h2>
      <div>
        <InputGroup endElement={endElement}>
          <TextInput
            placeholder='Search a component'
            onChange={handleOnSearch}
            value={filterText}
          />
        </InputGroup>
        {localComponents.map((component) => {
          const componentId = component.toLowerCase().replaceAll(' ', '-')

          return (
            <div key={component}>
              <button
                type='button'
                css={demoIndexButtonStyles(selectedComponentId === componentId)}
                onClick={() => handleScrollTo(componentId)}
              >
                {component}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default DemoIndex
