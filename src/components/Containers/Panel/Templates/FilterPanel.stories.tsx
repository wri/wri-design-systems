/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line @typescript-eslint/no-unused-vars

import React, { useState } from 'react'
import { css } from '@emotion/react'
import type { Meta, StoryObj } from '@storybook/react'
import { Box } from '@chakra-ui/react'
import Panel from '..'
import Button from '../../../Forms/Actions/Button'
import {
  getThemedBorderWidth,
  getThemedColor,
  getThemedFontSize,
  getThemedLineHeight,
  getThemedRadius,
  getThemedSpacing,
} from '../../../../lib/theme'
import CloseButton from '../../../Forms/Actions/CloseButton'
import { MapIcon } from '../../../icons'
import Search from '../../../Navigation/Search'
import CheckboxList from '../../../Forms/Inputs/CheckboxList'
import Tag from '../../../Forms/Tag'
import Checkbox from '../../../Forms/Controls/Checkbox'

const sampleOptions = [
  {
    id: '1',
    label: 'Location Name 1',
    caption: 'City • Address',
    icon: <MapIcon />,
  },
  {
    id: '2',
    label: 'Location Name 2',
    caption: 'City • Address',
    icon: <MapIcon />,
  },
  {
    id: '3',
    label: 'Location Name 3',
    caption: 'City • Address',
    icon: <MapIcon />,
  },
  {
    id: '4',
    label: 'Location Name 4',
    caption: 'City • Address',
    icon: <MapIcon />,
  },
  {
    id: '5',
    label: 'Location Name 5',
    caption: 'City • Address',
    icon: <MapIcon />,
  },
]

const meta = {
  title: 'Containers/Panel/Templates/Filter Panel',
  component: Panel,
  parameters: {
    layout: 'centered',

    docs: {
      description: {
        component:
          "Side panel container with fixed or floating variants. Use `variant='fixed'` for persistent sidebars and `variant='floating'` for overlays.",
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    header: { description: '`header` content', control: false },
    content: { description: '`content` content', control: false },
    footer: { description: '`footer` content', control: false },
    width: { description: '`width` value', control: false },
    variant: {
      description: '`variant` variant',
      control: { type: 'select' },
      options: ['fixed', 'floating'],
    },
  },
} satisfies Meta<typeof Panel>

export default meta
type Story = StoryObj<typeof meta>

const filterPanelSectionTitleStyles = css`
  color: ${getThemedColor('neutral', 900)};
  font-weight: 700;
  font-size: ${getThemedFontSize(600)};
  line-height: ${getThemedLineHeight(700)};
  text-align: left;
  margin: 0 0 ${getThemedSpacing(200)};
`

const filterPanelSectionLabelStyles = css`
  color: ${getThemedColor('neutral', 900)};
  font-weight: 700;
  font-size: ${getThemedFontSize(500)};
  line-height: ${getThemedLineHeight(600)};
  text-align: left;
  margin: 0 0 ${getThemedSpacing(100)};
`

const filterPanelSectionCaptionStyles = css`
  color: ${getThemedColor('neutral', 700)};
  font-weight: 400;
  font-size: ${getThemedFontSize(300)};
  line-height: ${getThemedLineHeight(500)};
  text-align: left;
  margin: 0 0 ${getThemedSpacing(300)};
`

export const FilterPanel: Story = {
  args: {
    content: <div>content</div>,
  },
  render: function Render(args) {
    const [selectedTags, setSelectedTags] = useState<string[]>([])

    const toggleTag = (name: string, checked: boolean) => {
      setSelectedTags((tags: string[]) =>
        checked ? [...tags, name] : tags.filter((tag) => tag !== name),
      )
    }

    const removeTag = (name: string) => {
      setSelectedTags((tags: string[]) => tags.filter((tag) => tag !== name))
    }

    return (
      <Panel
        variant='fixed'
        header={
          <Box
            style={{
              padding: getThemedSpacing(500),
              borderBottom: `${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 300)}`,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h2 css={filterPanelSectionTitleStyles}>Filters</h2>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: getThemedSpacing(300),
                }}
              >
                <span
                  style={{
                    color: getThemedColor('neutral', 700),
                    fontWeight: 400,
                  }}
                >
                  Close
                </span>
                <CloseButton />
              </div>
            </div>
          </Box>
        }
        content={
          <div
            style={{
              maxHeight: '31.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: getThemedSpacing(300),
            }}
          >
            <div style={{ flex: 1 }}>
              <Box
                style={{
                  border: `${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 300)}`,
                  padding: getThemedSpacing(300),
                  margin: getThemedSpacing(300),
                  borderRadius: getThemedRadius(300),
                }}
              >
                <h3 css={filterPanelSectionLabelStyles}>Label</h3>
                <p css={filterPanelSectionCaptionStyles}>Caption</p>

                <Search options={sampleOptions} placeholder='Search' />
                {selectedTags.length > 0 ? (
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: getThemedSpacing(200),
                      margin: `${getThemedSpacing(300)} 0`,
                    }}
                  >
                    {selectedTags.map((tag) => (
                      <Tag
                        key={tag}
                        variant='info-white'
                        label={tag}
                        closable
                        onClose={() => removeTag(tag)}
                      />
                    ))}
                  </div>
                ) : null}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: getThemedSpacing(300),
                    marginTop: getThemedSpacing(300),
                    marginBottom: getThemedSpacing(800),
                  }}
                >
                  <Checkbox
                    name='Checkbox'
                    value='1'
                    checked={selectedTags.includes('Checkbox')}
                    onCheckedChange={({ checked }) =>
                      toggleTag('Checkbox', !!checked)
                    }
                  >
                    Label
                  </Checkbox>
                  <CheckboxList
                    label={{ type: 'checkbox', label: 'Label', name: 'all' }}
                    checkboxes={[
                      {
                        children: 'Label',
                        name: 'checkbox-1',
                        value: 'checkbox-1',
                      },
                      {
                        children: 'Label',
                        name: 'checkbox-2',
                        value: 'checkbox-2',
                      },
                      {
                        children: 'Label',
                        name: 'checkbox-3',
                        value: 'checkbox-3',
                      },
                    ]}
                    onCheckedChange={(checkedValues) =>
                      Object.entries(checkedValues).forEach(([name, checked]) =>
                        toggleTag(name, checked),
                      )
                    }
                  />

                  <CheckboxList
                    label={{ type: 'checkbox', label: 'Label', name: 'all' }}
                    checkboxes={[
                      {
                        children: 'Label',
                        name: 'checkbox-1',
                        value: 'checkbox-1',
                      },
                      {
                        children: 'Label',
                        name: 'checkbox-2',
                        value: 'checkbox-2',
                      },
                      {
                        children: 'Label',
                        name: 'checkbox-3',
                        value: 'checkbox-3',
                      },
                      {
                        children: 'Label',
                        name: 'checkbox-4',
                        value: 'checkbox-4',
                      },
                      {
                        children: 'Label',
                        name: 'checkbox-5',
                        value: 'checkbox-5',
                      },
                    ]}
                    onCheckedChange={(checkedValues) =>
                      Object.entries(checkedValues).forEach(([name, checked]) =>
                        toggleTag(name, checked),
                      )
                    }
                  />
                  <Checkbox
                    name='Checkbox2'
                    value='1'
                    checked={selectedTags.includes('Checkbox2')}
                    onCheckedChange={({ checked }) =>
                      toggleTag('Checkbox2', !!checked)
                    }
                  >
                    Label
                  </Checkbox>
                  <Checkbox
                    name='Checkbox3'
                    value='1'
                    checked={selectedTags.includes('Checkbox3')}
                    onCheckedChange={({ checked }) =>
                      toggleTag('Checkbox3', !!checked)
                    }
                  >
                    Label
                  </Checkbox>
                </div>
              </Box>
            </div>
            <div style={{ flex: 1 }}>
              <Box
                style={{
                  border: `${getThemedBorderWidth(100)} solid ${getThemedColor('neutral', 300)}`,
                  padding: getThemedSpacing(300),
                  margin: getThemedSpacing(300),
                  borderRadius: getThemedRadius(300),
                }}
              >
                <h3 css={filterPanelSectionLabelStyles}>Label</h3>
                <p css={filterPanelSectionCaptionStyles}>Caption</p>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: getThemedSpacing(300),
                    marginBottom: getThemedSpacing(800),
                  }}
                >
                  <Checkbox
                    name='Checkbox'
                    value='1'
                    checked={selectedTags.includes('Checkbox')}
                    onCheckedChange={({ checked }) =>
                      toggleTag('Checkbox', !!checked)
                    }
                  >
                    Label
                  </Checkbox>

                  <Checkbox
                    name='Checkbox2'
                    value='1'
                    checked={selectedTags.includes('Checkbox2')}
                    onCheckedChange={({ checked }) =>
                      toggleTag('Checkbox2', !!checked)
                    }
                  >
                    Label
                  </Checkbox>
                  <Checkbox
                    name='Checkbox3'
                    value='1'
                    checked={selectedTags.includes('Checkbox3')}
                    onCheckedChange={({ checked }) =>
                      toggleTag('Checkbox3', !!checked)
                    }
                  >
                    Label
                  </Checkbox>
                </div>
              </Box>
            </div>
          </div>
        }
        footer={
          <div
            style={{
              width: '100%',
              display: 'flex',
              padding: getThemedSpacing(300),
              background: getThemedColor('neutral', 100),
              gap: getThemedSpacing(300),
            }}
          >
            <Button style={{ flex: 1 }} label='Clear All' variant='secondary' />
            <Button style={{ flex: 1 }} label='Apply' variant='primary' />
          </div>
        }
      />
    )
  },
}
