import React, { useMemo, useState } from 'react'
import Toolbar from '.'
import {
  PlusIcon,
  MinusIcon,
  ExpandIcon,
  ShareIcon,
  PrintIcon,
  SettingsIcon,
  QuestionIcon,
  LegendIcon,
  SaveIcon,
} from '../../../icons'
import DemoWrapper from '../../../UI/DemoWrapper'
import type { ToolbarItem } from './types'

const mapFrameStyle: React.CSSProperties = {
  position: 'relative',
  width: 420,
  height: 320,
  border: '0.0625rem dashed #ccc',
  background:
    'repeating-linear-gradient(0deg, transparent, transparent 15px, #f5f5f5 15px, #f5f5f5 16px), repeating-linear-gradient(90deg, transparent, transparent 15px, #f5f5f5 15px, #f5f5f5 16px)',
}

const horizontalMapFrameStyle: React.CSSProperties = {
  position: 'relative',
  width: 700,
  height: 200,
  border: '0.0625rem dashed #ccc',
  background:
    'repeating-linear-gradient(0deg, transparent, transparent 15px, #f5f5f5 15px, #f5f5f5 16px), repeating-linear-gradient(90deg, transparent, transparent 15px, #f5f5f5 15px, #f5f5f5 16px)',
}

const sectionStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  marginBottom: '1.5rem',
}

const sectionTitleStyle: React.CSSProperties = {
  margin: 0,
  fontSize: '0.875rem',
  fontWeight: 600,
}

const baseItems: ToolbarItem[] = [
  {
    icon: <PlusIcon />,
    label: 'Zoom in',
    ariaLabel: 'Zoom in',
    tooltip: 'Zoom in',
    onClick: () => {},
  },
  {
    icon: <MinusIcon />,
    label: 'Zoom out',
    ariaLabel: 'Zoom out',
    tooltip: 'Zoom out',
    gap: true,
    onClick: () => {},
  },
  {
    icon: <ExpandIcon />,
    label: 'Fit bounds',
    ariaLabel: 'Fit bounds',
    tooltip: 'Fit bounds',
    gap: true,
    onClick: () => {},
  },
  {
    icon: <SaveIcon />,
    label: 'Save',
    ariaLabel: 'Save',
    tooltip: 'Save',
    gap: true,
    onClick: () => {},
  },
  {
    icon: <ShareIcon />,
    label: 'Share',
    ariaLabel: 'Share',
    tooltip: 'Share',
    gap: true,
    onClick: () => {},
  },
  {
    icon: <PrintIcon />,
    label: 'Print',
    ariaLabel: 'Print',
    tooltip: 'Print',
    gap: true,
    onClick: () => {},
  },
  {
    icon: <SettingsIcon />,
    label: 'Settings',
    ariaLabel: 'Settings',
    tooltip: 'Settings',
    gap: true,
    onClick: () => {},
  },
  {
    icon: <QuestionIcon />,
    label: 'Help',
    ariaLabel: 'Help',
    tooltip: 'Help',
    onClick: () => {},
  },
]

const ExpandSidesDemo = () => (
  <div style={sectionStyle}>
    <p style={sectionTitleStyle}>Expand sides</p>
    <div style={mapFrameStyle}>
      <div style={{ position: 'absolute', top: 12, left: 12 }}>
        <Toolbar
          items={baseItems.slice(0, 4)}
          vertical
          showExpandedToggle
          expandSide='right'
          ariaLabel='Vertical expand right'
        />
      </div>
      <div style={{ position: 'absolute', top: 12, right: 12 }}>
        <Toolbar
          items={baseItems.slice(0, 4)}
          vertical
          showExpandedToggle
          expandSide='left'
          ariaLabel='Vertical expand left'
        />
      </div>
    </div>
    <div style={horizontalMapFrameStyle}>
      <div style={{ position: 'absolute', top: 12, left: 12 }}>
        <Toolbar
          items={baseItems.slice(0, 4)}
          showExpandedToggle
          expandSide='right'
          ariaLabel='Horizontal expand right'
        />
      </div>
      <div style={{ position: 'absolute', bottom: 12, right: 12 }}>
        <Toolbar
          items={baseItems.slice(0, 4)}
          showExpandedToggle
          expandSide='left'
          ariaLabel='Horizontal expand left'
        />
      </div>
    </div>
  </div>
)

const ActiveItemDemo = () => {
  const [polygonsVisible, setPolygonsVisible] = useState(true)

  const items = useMemo<ToolbarItem[]>(
    () => [
      ...baseItems.slice(0, 2),
      {
        icon: <LegendIcon />,
        label: 'Polygons',
        ariaLabel: 'Toggle polygons',
        tooltip: 'Show or hide polygon layer',
        gap: true,
        active: polygonsVisible,
        onClick: () => setPolygonsVisible((prev) => !prev),
      },
      ...baseItems.slice(2, 5),
    ],
    [polygonsVisible],
  )

  return (
    <div style={sectionStyle}>
      <p style={sectionTitleStyle}>
        Active item — polygons {polygonsVisible ? 'on' : 'off'}
      </p>
      <Toolbar
        items={items}
        vertical
        expanded
        showExpandedToggle
        expandSide='right'
        ariaLabel='Toolbar with active layer toggle'
      />
    </div>
  )
}

const AutoCollapseDemo = () => {
  const [width, setWidth] = useState(360)
  const [height, setHeight] = useState(240)

  return (
    <div style={sectionStyle}>
      <p style={sectionTitleStyle}>Auto collapse + expand toggle</p>

      <label
        htmlFor='toolbar-demo-horizontal-width'
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          maxWidth: 360,
        }}
      >
        <span style={{ fontSize: 14 }}>
          Horizontal width: <strong>{width}px</strong>
        </span>
        <input
          id='toolbar-demo-horizontal-width'
          type='range'
          min={160}
          max={720}
          value={width}
          onChange={(event) => setWidth(Number(event.target.value))}
        />
      </label>
      <div
        style={{
          width,
          minHeight: 96,
          padding: 12,
          border: '0.0625rem dashed #ccc',
          boxSizing: 'border-box',
          overflow: 'hidden',
        }}
      >
        <Toolbar
          items={baseItems}
          autoCollapse
          showExpandedToggle
          expandSide='right'
          ariaLabel='Horizontal auto-collapse toolbar'
        />
      </div>

      <label
        htmlFor='toolbar-demo-vertical-height'
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          maxWidth: 360,
        }}
      >
        <span style={{ fontSize: 14 }}>
          Vertical height: <strong>{height}px</strong>
        </span>
        <input
          id='toolbar-demo-vertical-height'
          type='range'
          min={100}
          max={420}
          value={height}
          onChange={(event) => setHeight(Number(event.target.value))}
        />
      </label>
      <div
        style={{
          width: 200,
          height,
          padding: 12,
          border: '0.0625rem dashed #ccc',
          boxSizing: 'border-box',
          overflow: 'hidden',
        }}
      >
        <Toolbar
          items={baseItems}
          vertical
          autoCollapse
          showExpandedToggle
          expandSide='right'
          ariaLabel='Vertical auto-collapse toolbar'
        />
      </div>
    </div>
  )
}

const ToolbarDemo = () => (
  <DemoWrapper title='Toolbar'>
    <ExpandSidesDemo />
    <ActiveItemDemo />
    <AutoCollapseDemo />
  </DemoWrapper>
)

export default ToolbarDemo
