// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { MapControls } from '.'

const meta = {
  title: 'Forms/Actions/Map Control/Preset/Map Controls',
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
      <MapControls.Zoom onZoomInClick={() => {}} onZoomOutClick={() => {}} />
      <MapControls.Expand onClick={() => {}} />
      <MapControls.Share onClick={() => {}} />
      <MapControls.Print onClick={() => {}} />
      <MapControls.Settings onClick={() => {}} />
      <MapControls.Question onClick={() => {}} />
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
      <MapControls.Zoom
        onZoomInClick={() => {}}
        onZoomOutClick={() => {}}
        vertical
      />
      <MapControls.Expand onClick={() => {}} />
      <MapControls.Share onClick={() => {}} />
      <MapControls.Print onClick={() => {}} />
      <MapControls.Settings onClick={() => {}} />
      <MapControls.Question onClick={() => {}} />
    </div>
  ),
}
