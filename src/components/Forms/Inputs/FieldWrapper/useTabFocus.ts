import {
  FocusEvent,
  FocusEventHandler,
  useCallback,
  useEffect,
  useState,
} from 'react'

type Modality = 'keyboard' | 'pointer'

const KEYBOARD_FOCUS_KEYS = new Set(['Tab', 'Escape'])

let currentModality: Modality = 'pointer'
let subscriberCount = 0
const listeners = new Set<(modality: Modality) => void>()

const notify = (modality: Modality) => {
  if (currentModality === modality) return
  currentModality = modality
  listeners.forEach((listener) => listener(modality))
}

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.metaKey || event.altKey || event.ctrlKey) return
  if (KEYBOARD_FOCUS_KEYS.has(event.key)) {
    notify('keyboard')
  }
}

const handlePointer = () => notify('pointer')

const subscribeToModality = (listener: (modality: Modality) => void) => {
  if (subscriberCount === 0) {
    document.addEventListener('keydown', handleKeyDown, true)
    document.addEventListener('pointerdown', handlePointer, true)
  }
  subscriberCount += 1
  listeners.add(listener)

  return () => {
    listeners.delete(listener)
    subscriberCount -= 1
    if (subscriberCount === 0) {
      document.removeEventListener('keydown', handleKeyDown, true)
      document.removeEventListener('pointerdown', handlePointer, true)
    }
  }
}

export const useTabFocus = <T extends HTMLElement>(
  onFocus?: FocusEventHandler<T>,
  onBlur?: FocusEventHandler<T>,
) => {
  const [isFocused, setIsFocused] = useState(false)
  const [modality, setModality] = useState<Modality>(currentModality)

  useEffect(() => subscribeToModality(setModality), [])

  const handleFocus = useCallback(
    (event: FocusEvent<T>) => {
      setIsFocused(true)
      onFocus?.(event)
    },
    [onFocus],
  )

  const handleBlur = useCallback(
    (event: FocusEvent<T>) => {
      setIsFocused(false)
      onBlur?.(event)
    },
    [onBlur],
  )

  return {
    isTabFocused: isFocused && modality === 'keyboard',
    onFocus: handleFocus,
    onBlur: handleBlur,
  }
}
