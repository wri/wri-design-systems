/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import React, { useRef } from 'react'
import { BottomSheet, BottomSheetRef } from 'react-spring-bottom-sheet'
import { SheetProps } from './types'
import { sheetContainerStyles, grabberLabelStyles } from './styled'
import 'react-spring-bottom-sheet/dist/style.css'

const closedSnap = 20

const Sheet = ({
  header,
  content,
  footer,
  open = false,
  onClose,
  minimizedHeight,
  midHeight = 200,
  maxFullHeight,
  defaultSnap = 'minimized',
  className,
  blocking,
  zIndex = 1000,
}: SheetProps) => {
  const sheetRef = useRef<BottomSheetRef>(null)
  const snapPointsRef = React.useRef<number[]>([])
  const [currentSnap, setCurrentSnap] = React.useState<number | null>(null)
  const isDesktop = window.innerWidth > 768

  const snaps = snapPointsRef.current

  let grabberLabel = 'Expand sheet'

  if (currentSnap != null) {
    const index = snaps.indexOf(currentSnap)

    if (index > 0 && index < snaps.length - 1) {
      grabberLabel = 'Make full screen'
    } else if (index === snaps.length - 1) {
      grabberLabel = 'Expand sheet'
    }
  }

  return (
    <BottomSheet
      ref={sheetRef}
      css={sheetContainerStyles(!!header, zIndex)}
      className={className}
      open={open}
      onDismiss={onClose}
      header={
        <div>
          <div
            tabIndex={0}
            role='button'
            aria-label={grabberLabel}
            aria-expanded={open}
            css={grabberLabelStyles}
            onKeyDown={(e) => {
              if (e.key !== 'Enter' && e.key !== ' ') return
              e.preventDefault()

              const fullSnap = snaps[snaps.length - 1]

              if (isDesktop) {
                sheetRef.current?.snapTo?.(() => fullSnap)
                return
              }

              const current = currentSnap ?? snaps[0]
              let nextIndex = snaps.findIndex((s) => s > current)
              if (nextIndex === -1) nextIndex = snaps.length - 1
              const nextSnap = snaps[nextIndex]
              sheetRef.current?.snapTo?.(() => nextSnap)
            }}
          />
          {header}
        </div>
      }
      footer={footer}
      snapPoints={({ headerHeight, maxHeight, footerHeight }) => {
        const points = [
          closedSnap,
          minimizedHeight || headerHeight,
          midHeight + (footer ? footerHeight : 0),
          maxFullHeight || maxHeight - maxHeight / 6,
        ]

        snapPointsRef.current = points
        return points
      }}
      onSpringEnd={() => {
        const h = sheetRef.current?.height
        if (h) setCurrentSnap(h)
      }}
      defaultSnap={({ headerHeight, maxHeight, footerHeight }) => {
        let snap = closedSnap
        if (defaultSnap === 'minimized') {
          snap = minimizedHeight || headerHeight
        } else if (defaultSnap === 'mid') {
          snap = midHeight + (footer ? footerHeight : 0)
        } else if (defaultSnap === 'full') {
          snap = maxFullHeight || maxHeight - maxHeight / 6
        }

        return snap
      }}
      blocking={blocking}
    >
      {open ? content : null}
    </BottomSheet>
  )
}

export default Sheet
