/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import { useId } from 'react'
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
        <div id={headerId} css={panelHeaderContainerStyles}>
          {header}
        </div>
      ) : null}
      <div css={panelContentContainerStyles}>{content}</div>
      {footer ? <div css={panelFooterContainerStyles}>{footer}</div> : null}
    </div>
  )

  return panel
}

export default Panel
