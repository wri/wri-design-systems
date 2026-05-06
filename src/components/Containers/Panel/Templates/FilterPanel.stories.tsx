/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line @typescript-eslint/no-unused-vars

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text } from '@chakra-ui/react'
import Panel from '..'
import Button from '../../../Forms/Actions/Button'
import {
  layerPanelDescriptionStyles,
  layerPanelTitleStyles,
} from '../../../Geospatial/Layers/LayerPanel/styled'
import { getThemedColor } from '../../../../lib/theme'
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

export const FilterPanel: Story = {
  args: {
    content: <div>content</div>,
  },
  render: function Render(args) {
    return (
      <Panel
        variant='fixed'
        header={
          <Box
            style={{
              padding: '1.25rem',
              borderBottom: `0.0625rem solid ${getThemedColor('neutral', 300)}`,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text style={{ fontWeight: '700' }}>Filters</Text>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                }}
              >
                <Text
                  style={{
                    color: getThemedColor('neutral', 700),
                    fontWeight: 400,
                  }}
                >
                  Close
                </Text>
                <CloseButton />
              </div>
            </div>
          </Box>
        }
        content={
          <div style={{ maxHeight: '31.25rem' }}>
            <div>
              <Box
                style={{
                  border: `0.0625rem solid ${getThemedColor('neutral', 300)}`,
                  padding: '0.9375rem',
                  margin: '0.9375rem',
                  borderRadius: '0.3125rem',
                }}
              >
                <h2 css={layerPanelTitleStyles}>Label</h2>
                <p css={layerPanelDescriptionStyles}>Caption</p>

                <Search options={sampleOptions} placeholder='Search' />
                <div
                  style={{
                    display: 'flex',
                    gap: '0.625rem',
                    marginBottom: '0.9375rem',
                  }}
                >
                  <Tag variant='info-white' label='Label' closable />
                  <Tag variant='info-white' label='Label' closable />
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.25rem',
                    marginBottom: '2.5rem',
                  }}
                >
                  <Checkbox name='Checkbox' value='1' defaultChecked>
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
                  />
                  <Checkbox name='Checkbox2' value='1' defaultChecked>
                    Label
                  </Checkbox>
                  <Checkbox name='Checkbox3' value='1' defaultChecked>
                    Label
                  </Checkbox>
                </div>
              </Box>
            </div>
            <div>
              <Box
                style={{
                  border: `0.0625rem solid ${getThemedColor('neutral', 300)}`,
                  padding: '0.9375rem',
                  margin: '0.9375rem',
                  borderRadius: '0.3125rem',
                }}
              >
                <h2 css={layerPanelTitleStyles}>Label</h2>
                <p css={layerPanelDescriptionStyles}>Caption</p>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.25rem',
                    marginBottom: '2.5rem',
                  }}
                >
                  <Checkbox name='Checkbox' value='1' defaultChecked>
                    Label
                  </Checkbox>

                  <Checkbox name='Checkbox2' value='1' defaultChecked>
                    Label
                  </Checkbox>
                  <Checkbox name='Checkbox3' value='1' defaultChecked>
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
              padding: '0.625rem',
              background: 'white',
              gap: '0.9375rem',
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
