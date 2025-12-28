import { useState, useRef, useEffect } from 'react'

export default function Window({
  id,
  title,
  icon,
  children,
  zIndex,
  maximized,
  onClose,
  onMinimize,
  onMaximize,
  onFocus,
}) {
  const [position, setPosition] = useState({ x: 100, y: 80 })
  const [size, setSize] = useState({ width: 800, height: 600 })
  const [isDragging, setIsDragging] = useState(false)
  const dragOffset = useRef({ x: 0, y: 0 })
  const windowRef = useRef(null)

  useEffect(() => {
    // Center window on first render
    const centerX = (window.innerWidth - size.width) / 2
    const centerY = (window.innerHeight - size.height - 40) / 2
    setPosition({ x: Math.max(0, centerX), y: Math.max(0, centerY) })
  }, [])

  const handleMouseDown = (e) => {
    if (e.target.closest('.xp-titlebar-controls')) return

    onFocus()
    setIsDragging(true)

    const rect = windowRef.current.getBoundingClientRect()
    dragOffset.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }
  }

  useEffect(() => {
    if (!isDragging) return

    const handleMouseMove = (e) => {
      const newX = e.clientX - dragOffset.current.x
      const newY = e.clientY - dragOffset.current.y

      setPosition({
        x: Math.max(0, Math.min(newX, window.innerWidth - 200)),
        y: Math.max(0, Math.min(newY, window.innerHeight - 100)),
      })
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging])

  const windowStyle = maximized
    ? {
        top: 0,
        left: 0,
        width: '100%',
        height: 'calc(100vh - 40px)',
        zIndex,
      }
    : {
        top: `${position.y}px`,
        left: `${position.x}px`,
        width: `${size.width}px`,
        height: `${size.height}px`,
        zIndex,
      }

  return (
    <div
      ref={windowRef}
      className={`xp-window ${maximized ? 'maximized' : ''}`}
      style={windowStyle}
      onClick={onFocus}
    >
      <div className="xp-titlebar" onMouseDown={handleMouseDown}>
        <div className="xp-titlebar-text">
          <img src={icon} alt="" />
          <span>{title}</span>
        </div>
        <div className="xp-titlebar-controls">
          <button className="xp-titlebar-button" onClick={onMinimize}>
            _
          </button>
          <button className="xp-titlebar-button" onClick={onMaximize}>
            {maximized ? '❐' : '□'}
          </button>
          <button className="xp-titlebar-button" onClick={onClose}>
            ✕
          </button>
        </div>
      </div>
      <div className="xp-window-content">{children}</div>
    </div>
  )
}
