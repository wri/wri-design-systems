/* eslint-disable consistent-return */
/* eslint-disable no-nested-ternary */
/** @jsxImportSource @emotion/react */
/* eslint-disable react/no-unknown-property */

import React, { useEffect, useMemo, useRef, useState } from 'react'
import { SheetProps } from './types'
import {
  sheetContainerStyles,
  sheetContentContainerStyles,
  sheetFooterContainerStyles,
  sheetGrabberContainerStyles,
  sheetGrabberStyles,
  sheetHeaderContainerStyles,
  sheetPositionContainerStyles,
} from './styled'

const Sheet = ({
  header,
  content,
  footer,
  open = false,
  onClose,
  minimizedHeight = 50,
  midHeight = 200,
  maxFullHeight = 1000,
  defaultSnap = 'minimized',
}: SheetProps) => {
  // viewport height tracking
  const getVh = () => {
    if (typeof window !== 'undefined') {
      const vh = (window?.screen?.height || 0) * 0.9
      return vh > maxFullHeight ? maxFullHeight : vh
    }

    return 0
  }

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

  // safe-area bottom inset
  const safeBottom = useMemo(() => {
    if (typeof window === 'undefined') return 0
    const el = document.createElement('div')
    el.style.cssText =
      'position:fixed;bottom:0;height:env(safe-area-inset-bottom);'
    document.body.appendChild(el)
    const inset = el.getBoundingClientRect().height || 0
    document.body.removeChild(el)
    return inset
  }, [])

  const fullHeight = useMemo(() => {
    const vh = getVh()
    const h = Math.max(0, vh - safeBottom)
    return maxFullHeight ? Math.min(h, maxFullHeight) : h
  }, [safeBottom, maxFullHeight])

  const snapHeights = useMemo(() => {
    const sorted: { [key: string]: number } = {
      closed: 18,
      // minimized: Math.max(18, Math.min(minimizedHeight, fullHeight)),
      minimized: Math.min(minimizedHeight, fullHeight),
      mid: Math.min(Math.max(minimizedHeight, midHeight), fullHeight),
      fullHeight,
      full: fullHeight,
    }

    return sorted
  }, [minimizedHeight, midHeight, fullHeight])

  const [snap, setSnap] = useState<'closed' | 'minimized' | 'mid' | 'full'>(
    defaultSnap,
  )
  const [currentHeight, setCurrentHeight] = useState<number>(0)

  // lock body scroll while open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [open])

  // Sync height when snap/metrics change
  useEffect(() => {
    if (!open) {
      setCurrentHeight(0)
      setSnap(defaultSnap)
    } else {
      setCurrentHeight(snapHeights[snap])
    }
  }, [snap, snapHeights, open])

  // Drag logic
  const handleRef = useRef<HTMLDivElement | null>(null)
  const sheetRef = useRef<HTMLDivElement | null>(null)
  const startY = useRef(0)
  const startH = useRef(0)
  const lastY = useRef(0)
  const lastT = useRef(0)
  const velocity = useRef(0)
  const dragging = useRef(false)

  useEffect(() => {
    const handle = handleRef.current
    if (!handle) return

    const onPointerDown = (e: PointerEvent) => {
      if (!open) return
      dragging.current = true
      handle.setPointerCapture(e.pointerId)
      startY.current = e.clientY
      startH.current = currentHeight
      lastY.current = e.clientY
      lastT.current = performance.now()
      velocity.current = 0
      // disable transition during drag
      if (sheetRef.current) sheetRef.current.style.transition = 'none'
    }

    const onPointerMove = (e: PointerEvent) => {
      if (!dragging.current) return
      const dy = e.clientY - startY.current // positive when dragging down
      const h = Math.max(0, Math.min(fullHeight, startH.current - dy))
      setCurrentHeight(h)

      // velocity
      const now = performance.now()
      const dt = Math.max(1, now - lastT.current)
      const vy = (e.clientY - lastY.current) / (dt / 1000)
      velocity.current = vy // +down, -up
      lastY.current = e.clientY
      lastT.current = now
    }

    const onPointerUp = () => {
      if (!dragging.current) return
      dragging.current = false
      // re-enable transition
      if (sheetRef.current)
        sheetRef.current.style.transition =
          'height 300ms ease, transform 300ms ease'

      const v = velocity.current // px/s
      const h = currentHeight
      const {
        closed: hClosed,
        minimized: hMin,
        mid: hMid,
        full: hFull,
      } = snapHeights

      // close if quick downward swipe near min
      const nearMin = h <= hMin * 0.6
      if ((v > 900 && h <= hMid) || nearMin) {
        setCurrentHeight(0)
        window.setTimeout(() => onClose && onClose(), 260)
        return
      }

      // choose nearest snap
      const cand: Array<{
        k: 'closed' | 'minimized' | 'mid' | 'full'
        v: number
      }> = [
        { k: 'closed', v: hClosed },
        { k: 'minimized', v: hMin },
        { k: 'mid', v: hMid },
        { k: 'full', v: hFull },
      ]

      let next: 'closed' | 'minimized' | 'mid' | 'full' = snap
      if (Math.abs(v) > 900) {
        next =
          v < 0
            ? h < (hMid + hFull) / 2
              ? 'mid'
              : 'full'
            : h > (hMin + hMid) / 2
              ? 'mid'
              : 'minimized'
      } else {
        cand.sort((a, b) => Math.abs(h - a.v) - Math.abs(h - b.v))
        next = cand[0].k
      }

      setSnap(next)
      const target = next === 'full' ? hFull : next === 'mid' ? hMid : hMin
      setCurrentHeight(target)
    }

    handle.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)
    window.addEventListener('pointercancel', onPointerUp)
    return () => {
      handle.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', onPointerUp)
      window.removeEventListener('pointercancel', onPointerUp)
    }
  }, [open, currentHeight, fullHeight, snapHeights, snap])

  // mount-in animation
  useEffect(() => {
    if (open) {
      setCurrentHeight(0)
      const t = window.setTimeout(() => setCurrentHeight(snapHeights[snap]), 10)
      return () => window.clearTimeout(t)
      // eslint-disable-next-line no-else-return
    } else {
      setCurrentHeight(0)
    }
  }, [open, snap, snapHeights])

  return (
    <div css={sheetPositionContainerStyles} aria-hidden={!open}>
      <div
        ref={sheetRef}
        role='dialog'
        aria-modal='true'
        css={sheetContainerStyles}
        style={{
          height: `${currentHeight}px`,
          transform: open ? 'translateY(0)' : 'translateY(100%)',
        }}
      >
        <div
          ref={handleRef}
          css={sheetGrabberContainerStyles}
          role='button'
          aria-label='Drag to expand or collapse'
          tabIndex={0}
        >
          <span css={sheetGrabberStyles} />
        </div>

        {header ? (
          <div css={sheetHeaderContainerStyles} ref={headerRef}>
            {header}
          </div>
        ) : null}

        <div css={sheetContentContainerStyles(headerHeight, footerHeight)}>
          {content}
        </div>

        {footer && snap === 'full' ? (
          <div css={sheetFooterContainerStyles} ref={footerRef}>
            {footer}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Sheet
