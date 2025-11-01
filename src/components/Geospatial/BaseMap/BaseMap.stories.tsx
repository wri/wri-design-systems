// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import BaseMapStory from '.'
import { BaseMapOptionProps } from './types'
import { getThemedColor } from '../../../lib/theme'
import { ChevronDownIcon, MapIcon } from '../../icons'
import Sheet from '../../Containers/Sheet'
import Button from '../../Forms/Actions/Button'

const meta = {
  title: 'Geospatial/Base Map',
  component: BaseMapStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BaseMapStory>

export default meta
type Story = StoryObj<typeof meta>

export const BaseMap: Story = {
  args: {
    title: 'Base map settings',
    caption: 'Update the visual style of the map.',
    options: [],
  },
  render: (args) => {
    const [additionalSettings, setAdditionalSettings] = useState({
      showBoundaries: false,
      showMapLabels: false,
      showRoads: false,
    })
    const [selectedOption, setSelectedOption] = useState<BaseMapOptionProps>({
      id: 'arcgis-hybrid',
      label: 'Mapbox Light',
      caption: 'Subtle map that provides basic geographic context.',
      imageUrl:
        'https://carto.com/help/images/building-maps/basemaps/dark_labels.png',
      active: true,
    })
    const [isOpenBaseMap, setIsOpenBaseMap] = useState(false)

    return (
      <div
        style={{
          height: '500px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        <div
          style={{
            height: isOpenBaseMap ? '400px' : 0,
            overflow: 'hidden',
            transition: 'height 0.3s ease-in-out',
          }}
          aria-hidden={!isOpenBaseMap}
        >
          <BaseMapStory
            title='Base map settings'
            caption='Update the visual style of the map.'
            additionalSettings={[
              {
                label: 'Show boundaries',
                checked: additionalSettings.showBoundaries,
                onCheckedChange: ({ checked }: { checked: boolean }) => {
                  setAdditionalSettings((current) => ({
                    ...current,
                    showBoundaries: checked,
                  }))
                },
                children: 'Component Placeholder',
              },
              {
                label: 'Show map labels',
                checked: additionalSettings.showMapLabels,
                onCheckedChange: ({ checked }: { checked: boolean }) => {
                  setAdditionalSettings((current) => ({
                    ...current,
                    showMapLabels: checked,
                  }))
                },
              },
              {
                label: 'Show roads',
                checked: additionalSettings.showRoads,
                onCheckedChange: ({ checked }: { checked: boolean }) => {
                  setAdditionalSettings((current) => ({
                    ...current,
                    showRoads: checked,
                  }))
                },
              },
            ]}
            options={[
              {
                id: 'carto-positron',
                label: 'Mapbox Streets',
                caption:
                  'Emphasizes accurate, legible styling of road and transit networks.',
                imageUrl:
                  'https://carto.com/help/images/building-maps/basemaps/positron_labels.png',
                active: selectedOption?.id === 'carto-positron',
              },
              {
                id: 'arcgis-hybrid',
                label: 'Mapbox Light',
                caption: 'Subtle map that provides basic geographic context.',
                imageUrl:
                  'https://carto.com/help/images/building-maps/basemaps/dark_labels.png',
                active: selectedOption?.id === 'arcgis-hybrid',
              },
              {
                id: 'osm',
                label: 'Mapbox Satellite',
                caption: 'Global satellite imagery from NASA, and USGS.',
                imageUrl:
                  'https://carto.com/help/images/building-maps/basemaps/voyager_labels.png',
                active: selectedOption?.id === 'osm',
                children: 'Component Placeholder',
              },
              {
                id: 'carto-voyager',
                label: 'Open Street Map',
                caption: 'Community-built open data map.',
                imageUrl:
                  'https://carto.com/help/images/building-maps/basemaps/voyager_labels.png',
                active: selectedOption?.id === 'carto-voyager',
              },
            ]}
            onOptionSelected={(option) => setSelectedOption(option)}
          />
        </div>

        <Button
          style={{ width: '260px' }}
          variant='secondary'
          leftIcon={<MapIcon />}
          rightIcon={
            isOpenBaseMap ? (
              <ChevronDownIcon rotate='180' />
            ) : (
              <ChevronDownIcon />
            )
          }
          onClick={() => setIsOpenBaseMap(!isOpenBaseMap)}
        >
          <p
            style={{
              width: '200px',
              fontWeight: 'bold',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textAlign: 'left',
              color: getThemedColor('neutral', 800),
            }}
          >
            {`Base map: ${selectedOption?.label}`}
          </p>
        </Button>
      </div>
    )
  },
}

export const BaseMapWithinSheet: Story = {
  args: {
    title: 'Base map settings',
    caption: 'Update the visual style of the map.',
    options: [],
  },
  render: (args) => {
    const [additionalSettings, setAdditionalSettings] = useState({
      showBoundaries: false,
      showMapLabels: false,
      showRoads: false,
    })
    const [selectedOption, setSelectedOption] = useState<BaseMapOptionProps>({
      id: 'arcgis-hybrid',
      label: 'Mapbox Light',
      caption: 'Subtle map that provides basic geographic context.',
      imageUrl:
        'https://carto.com/help/images/building-maps/basemaps/dark_labels.png',
      active: true,
    })
    const [showSheet, setShowSheet] = useState(false)

    const handleCloseSheet = () => {
      setShowSheet(false)
    }

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Sheet
          content={
            <BaseMapStory
              title='Base map settings'
              caption='Update the visual style of the map.'
              additionalSettings={[
                {
                  label: 'Show boundaries',
                  checked: additionalSettings.showBoundaries,
                  onCheckedChange: ({ checked }: { checked: boolean }) => {
                    setAdditionalSettings((current) => ({
                      ...current,
                      showBoundaries: checked,
                    }))
                  },
                  children: 'Component Placeholder',
                },
                {
                  label: 'Show map labels',
                  checked: additionalSettings.showMapLabels,
                  onCheckedChange: ({ checked }: { checked: boolean }) => {
                    setAdditionalSettings((current) => ({
                      ...current,
                      showMapLabels: checked,
                    }))
                  },
                },
                {
                  label: 'Show roads',
                  checked: additionalSettings.showRoads,
                  onCheckedChange: ({ checked }: { checked: boolean }) => {
                    setAdditionalSettings((current) => ({
                      ...current,
                      showRoads: checked,
                    }))
                  },
                },
              ]}
              options={[
                {
                  id: 'carto-positron',
                  label: 'Mapbox Streets',
                  caption:
                    'Emphasizes accurate, legible styling of road and transit networks.',
                  imageUrl:
                    'https://carto.com/help/images/building-maps/basemaps/positron_labels.png',
                  active: selectedOption?.id === 'carto-positron',
                },
                {
                  id: 'arcgis-hybrid',
                  label: 'Mapbox Light',
                  caption: 'Subtle map that provides basic geographic context.',
                  imageUrl:
                    'https://carto.com/help/images/building-maps/basemaps/dark_labels.png',
                  active: selectedOption?.id === 'arcgis-hybrid',
                },
                {
                  id: 'osm',
                  label: 'Mapbox Satellite',
                  caption: 'Global satellite imagery from NASA, and USGS.',
                  imageUrl:
                    'https://carto.com/help/images/building-maps/basemaps/voyager_labels.png',
                  active: selectedOption?.id === 'osm',
                  children: 'Component Placeholder',
                },
                {
                  id: 'carto-voyager',
                  label: 'Open Street Map',
                  caption: 'Community-built open data map.',
                  imageUrl:
                    'https://carto.com/help/images/building-maps/basemaps/voyager_labels.png',
                  active: selectedOption?.id === 'carto-voyager',
                },
              ]}
              onOptionSelected={(option) => setSelectedOption(option)}
              maxHeight='100%'
              maxWidth='100%'
            />
          }
          defaultSnap='mid'
          open={showSheet}
          onClose={handleCloseSheet}
        />

        <Button
          style={{ width: '200px' }}
          label='Show Closed Sheet'
          onClick={() => setShowSheet(true)}
        />
      </div>
    )
  },
}
