import { useState, useEffect } from 'react'

export default function Taskbar({ windows, onStartClick, onWindowClick, startMenuOpen }) {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    })
  }

  return (
    <div className="taskbar">
      <button
        className={`start-button ${startMenuOpen ? 'active' : ''}`}
        onClick={onStartClick}
      >
        <img src="/icons/windows.png" alt="Start" />
        <span>start</span>
      </button>

      <div className="taskbar-items">
        {windows.filter(w => !w.minimized).map(window => (
          <div
            key={window.id}
            className="taskbar-item"
            onClick={() => onWindowClick(window.id)}
          >
            <img src={window.icon || '/icons/default.png'} alt="" />
            <span>{window.title}</span>
          </div>
        ))}
      </div>

      <div className="system-tray">
        <img src="/icons/volume.png" alt="Volume" className="system-tray-icon" />
        <div className="clock">{formatTime(time)}</div>
      </div>
    </div>
  )
}
