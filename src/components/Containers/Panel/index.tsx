/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import { useEffect, useId, useRef, useState } from 'react'
import {
  panelContainerStyles,
  panelContentContainerStyles,
  panelFixedContainerStyles,
  panelFloatingContainerStyles,
  panelFooterContainerStyles,
  panelHeaderContainerStyles,
} from './styled'
import { PanelProps } from './types'

const Panel = ({
  header,
  content,
  footer,
  variant = 'fixed',
  width,
}: PanelProps) => {
  const headerId = useId()
  const [headerHeight, setHeaderHeight] = useState<number | undefined>(
    undefined,
  )
  const [footerHeight, setFooterHeight] = useState<number | undefined>(
    undefined,
  )
  const headerRef = useRef<HTMLDivElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setHeaderHeight(headerRef?.current?.getBoundingClientRect()?.height)
    setFooterHeight(footerRef?.current?.getBoundingClientRect()?.height)
  }, [header, footer])

  const panel = (
    <div
      role='region'
      aria-labelledby={header ? headerId : undefined}
      css={[
        panelContainerStyles(width),
        variant === 'fixed'
          ? panelFixedContainerStyles
          : panelFloatingContainerStyles,
      ]}
    >
      {header ? (
        <div id={headerId} css={panelHeaderContainerStyles} ref={headerRef}>
          {header}
        </div>
      ) : null}
      <div css={panelContentContainerStyles(headerHeight, footerHeight)}>
        {content}
      </div>
      {footer ? (
        <div css={panelFooterContainerStyles} ref={footerRef}>
          {footer}
        </div>
      ) : null}
    </div>
  )

  return panel
}

export default Panel
