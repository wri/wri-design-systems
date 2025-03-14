// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { MapControlsPresets } from './MapControlsPresets'

const meta = {
  title: 'Presets/Map Controls',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <MapControlsPresets.Zoom
        onZoomInClick={() => {}}
        onZoomOutClick={() => {}}
      />
      <MapControlsPresets.Expand onClick={() => {}} />
      <MapControlsPresets.Share onClick={() => {}} />
      <MapControlsPresets.Print onClick={() => {}} />
      <MapControlsPresets.Settings onClick={() => {}} />
      <MapControlsPresets.Question onClick={() => {}} />
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '12px',
      }}
    >
      <MapControlsPresets.Zoom
        onZoomInClick={() => {}}
        onZoomOutClick={() => {}}
        vertical
      />
      <MapControlsPresets.Expand onClick={() => {}} />
      <MapControlsPresets.Share onClick={() => {}} />
      <MapControlsPresets.Print onClick={() => {}} />
      <MapControlsPresets.Settings onClick={() => {}} />
      <MapControlsPresets.Question onClick={() => {}} />
    </div>
  ),
}
