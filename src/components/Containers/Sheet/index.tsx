/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import React from 'react'
import { BottomSheet } from 'react-spring-bottom-sheet'
import { SheetProps } from './types'
import { sheetContainerStyles } from './styled'
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
}: SheetProps) => (
  <BottomSheet
    css={sheetContainerStyles(!!header)}
    className={className}
    open={open}
    onDismiss={onClose}
    header={header}
    footer={footer}
    snapPoints={({ headerHeight, maxHeight, footerHeight }) => [
      closedSnap,
      minimizedHeight || headerHeight,
      midHeight + (footer ? footerHeight : 0),
      maxFullHeight || maxHeight - maxHeight / 6,
    ]}
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
  >
    {content}
  </BottomSheet>
)

export default Sheet
