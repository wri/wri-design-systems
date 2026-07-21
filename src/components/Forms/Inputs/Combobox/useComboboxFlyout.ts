import { KeyboardEvent, useCallback, useRef, useState } from 'react'

type NavSource = 'keyboard' | 'pointer'

const KEYBOARD_NAV_KEYS = new Set(['ArrowDown', 'ArrowUp', 'Home', 'End'])

export const useComboboxFlyout = () => {
  const [contentPlacement, setContentPlacement] = useState('bottom')
  const contentElRef = useRef<HTMLDivElement | null>(null)
  const placementObserver = useRef<MutationObserver | null>(null)
  const navSourceRef = useRef<NavSource>('pointer')

  const setNavSource = useCallback((source: NavSource) => {
    navSourceRef.current = source
    if (contentElRef.current) contentElRef.current.dataset.navSource = source
  }, [])

  const contentRef = useCallback((node: HTMLDivElement | null) => {
    placementObserver.current?.disconnect()
    contentElRef.current = node

    if (!node) return

    const contentEl = node
    contentEl.dataset.navSource = navSourceRef.current

    const syncPlacement = () =>
      setContentPlacement(contentEl.getAttribute('data-placement') || 'bottom')

    syncPlacement()
    placementObserver.current = new MutationObserver(syncPlacement)
    placementObserver.current.observe(contentEl, {
      attributes: true,
      attributeFilter: ['data-placement'],
    })
  }, [])

  const onInputKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (KEYBOARD_NAV_KEYS.has(event.key)) setNavSource('keyboard')
    },
    [setNavSource],
  )

  const markPointer = useCallback(() => setNavSource('pointer'), [setNavSource])

  return {
    contentPlacement,
    contentRef,
    onInputKeyDown,
    onInputPointerDown: markPointer,
    onContentPointerMove: markPointer,
  }
}
