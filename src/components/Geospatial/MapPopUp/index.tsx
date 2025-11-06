/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useRef } from 'react'
import {
  useFloating,
  offset as fOffset,
  flip,
  shift,
  arrow as fArrow,
  autoUpdate,
  useDismiss,
  useRole,
  useInteractions,
} from '@floating-ui/react'
import {
  mapPopUpConnectorStyles,
  mapPopUpContainerStyles,
  mapPopUpContentContainerStyles,
  mapPopUpFooterContainerStyles,
  mapPopUpHeaderContainerStyles,
} from './styles'
import CloseButton from '../../Forms/Actions/CloseButton'
import { MapPopUpProps } from './types'

const defaultConnectorSize = 4

const MapPopUp = ({
  open,
  onOpenChange,
  anchorRef,
  header,
  content,
  footer,
  placement = 'bottom',
  offset = 30,
  closeOnEscape = true,
  closeOnOutsideClick = false,
}: MapPopUpProps) => {
  const arrowRef = useRef<HTMLDivElement | null>(null)

  const {
    refs,
    floatingStyles,
    context,
    middlewareData,
    placement: actualPlacement,
  } = useFloating({
    open,
    onOpenChange,
    placement,
    whileElementsMounted: autoUpdate,
    middleware: [
      fOffset(offset),
      flip({ fallbackAxisSideDirection: 'start' }),
      shift({ padding: 8 }),
      fArrow({ element: arrowRef }),
    ],
  })

  React.useEffect(() => {
    if (anchorRef?.current) refs.setReference(anchorRef.current)
  }, [anchorRef, refs])

  const dismiss = useDismiss(context, {
    escapeKey: closeOnEscape,
    outsidePress: closeOnOutsideClick,
  })

  const role = useRole(context, { role: 'dialog' })
  const { getFloatingProps } = useInteractions([dismiss, role])

  const { x: arrowX, y: arrowY } = middlewareData.arrow ?? { x: null, y: null }

  const staticSide = {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right',
  }[actualPlacement.split('-')[0] as 'top' | 'right' | 'bottom' | 'left']

  if (!open) return null

  let connectorHeight = offset - 1
  let connectorWidth = defaultConnectorSize
  if (staticSide === 'left' || staticSide === 'right') {
    connectorHeight = defaultConnectorSize
    connectorWidth = offset - 1
  }

  return (
    <>
      <div
        ref={refs.setFloating}
        style={floatingStyles}
        aria-modal
        {...getFloatingProps()}
        css={mapPopUpContainerStyles}
      >
        <div css={mapPopUpHeaderContainerStyles}>
          {header}
          <CloseButton
            onClick={() => onOpenChange(false)}
            className='ds-map-pop-up-close-button'
            aria-label='Close'
          />
        </div>

        <div css={mapPopUpContentContainerStyles}>{content}</div>

        {footer ? (
          <div css={mapPopUpFooterContainerStyles}>{footer}</div>
        ) : null}

        <div
          ref={arrowRef}
          css={mapPopUpConnectorStyles(
            connectorHeight,
            connectorWidth,
            arrowX,
            arrowY,
            staticSide,
            offset,
          )}
        />
      </div>

      <div
        className='fixed inset-0 z-[999] bg-black/20 backdrop-blur-[1px]'
        onClick={() => closeOnOutsideClick && onOpenChange(false)}
      />
    </>
  )
}

export default MapPopUp
