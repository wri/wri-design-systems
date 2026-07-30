import { useCallback, useRef, useState } from 'react'

export type FlyoutPlacement = 'top' | 'bottom'

const readPlacement = (element: HTMLElement): FlyoutPlacement =>
  (element.getAttribute('data-placement') || 'bottom').startsWith('top')
    ? 'top'
    : 'bottom'

export const usePlacementSync = () => {
  const [placement, setPlacement] = useState<FlyoutPlacement>('bottom')
  const observerRef = useRef<MutationObserver | null>(null)

  const contentRef = useCallback((node: HTMLElement | null) => {
    observerRef.current?.disconnect()
    observerRef.current = null

    if (!node) return

    setPlacement(readPlacement(node))

    observerRef.current = new MutationObserver(() => {
      setPlacement(readPlacement(node))
    })
    observerRef.current.observe(node, {
      attributes: true,
      attributeFilter: ['data-placement'],
    })
  }, [])

  return { contentRef, placement }
}
