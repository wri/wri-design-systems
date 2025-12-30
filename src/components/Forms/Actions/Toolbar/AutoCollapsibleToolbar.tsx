import { useEffect, useState } from 'react'

type AutoCollapsibleToolbarProps = {
  children: (props: {
    collapsed: boolean
    onToggle: () => void
  }) => React.ReactNode
}

const AutoCollapsibleToolbar = ({ children }: AutoCollapsibleToolbarProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const [isAutoCollapsed, setIsAutoCollapsed] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const shouldCollapse = window.innerWidth < 768

      setIsAutoCollapsed(shouldCollapse)
      setCollapsed(shouldCollapse)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleToggle = () => {
    if (isAutoCollapsed) return
    setCollapsed((prev) => !prev)
  }

  return <>{children({ collapsed, onToggle: handleToggle })}</>
}

export default AutoCollapsibleToolbar
