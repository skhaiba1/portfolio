import { useState } from 'react'
import Taskbar from './Taskbar'
import StartMenu from './StartMenu'
import Window from './Window'
import AboutWindow from './windows/AboutWindow'
import PortfolioWindow from './windows/PortfolioWindow'
import ResumeWindow from './windows/ResumeWindow'
import ContactWindow from './windows/ContactWindow'
import MediaPlayerWindow from './windows/MediaPlayerWindow'
import MusicPlayerWindow from './windows/MusicPlayerWindow'
import MyDocumentsWindow from './windows/MyDocumentsWindow'
import CaseStudyWindow from './windows/CaseStudyWindow'
import ShutdownModal from './ShutdownModal'
import useSound from '../hooks/useSound'

export default function Desktop({ onRestart, onLogOff }) {
  const [showStartMenu, setShowStartMenu] = useState(false)
  const [windows, setWindows] = useState([])
  const [nextZIndex, setNextZIndex] = useState(100)
  const [selectedIcon, setSelectedIcon] = useState(null)
  const [showShutdownModal, setShowShutdownModal] = useState(false)
  const playSound = useSound()

  const desktopIcons = [
    { id: 'about', name: 'About', icon: '/icons/tour.png', window: 'about' },
    { id: 'portfolio', name: 'My Portfolio', icon: '/icons/paint.png', window: 'portfolio' },
    { id: 'resume', name: 'My Resume', icon: '/icons/pdf.png', window: 'resume' },
    { id: 'contact', name: 'Contact', icon: '/icons/email.png', window: 'contact' },
  ]

  const openWindow = (type, props = {}) => {
    playSound('click')

    // Special case for LinkedIn - open in new tab
    if (type === 'linkedin') {
      window.open('https://www.linkedin.com/in/sergii-khaiba/', '_blank')
      return
    }

    // Check if window already exists
    const existingWindow = windows.find(w => w.type === type && w.id === props.id)
    if (existingWindow) {
      // Bring to front
      focusWindow(existingWindow.id)
      return
    }

    const newWindow = {
      id: `${type}-${Date.now()}`,
      type,
      zIndex: nextZIndex,
      ...props,
    }

    setWindows([...windows, newWindow])
    setNextZIndex(nextZIndex + 1)
  }

  const closeWindow = (id) => {
    playSound('close')
    setWindows(windows.filter(w => w.id !== id))
  }

  const minimizeWindow = (id) => {
    playSound('minimize')
    setWindows(windows.map(w =>
      w.id === id ? { ...w, minimized: true } : w
    ))
  }

  const maximizeWindow = (id) => {
    playSound('maximize')
    setWindows(windows.map(w =>
      w.id === id ? { ...w, maximized: !w.maximized } : w
    ))
  }

  const focusWindow = (id) => {
    setWindows(windows.map(w =>
      w.id === id ? { ...w, zIndex: nextZIndex, minimized: false } : w
    ))
    setNextZIndex(nextZIndex + 1)
  }

  const handleIconClick = (icon) => {
    setSelectedIcon(icon.id)
    openWindow(icon.window)
  }

  const handleIconDoubleClick = (icon) => {
    openWindow(icon.window)
  }

  const handleDesktopClick = (e) => {
    if (e.target.classList.contains('desktop')) {
      setSelectedIcon(null)
      setShowStartMenu(false)
    }
  }

  const handleStartMenuToggle = () => {
    playSound('click')
    setShowStartMenu(!showStartMenu)
  }

  const handleMenuItemClick = (action) => {
    setShowStartMenu(false)

    if (action === 'shutdown' || action === 'logoff') {
      setShowShutdownModal(true)
      return
    }

    openWindow(action)
  }

  const renderWindowContent = (window) => {
    switch (window.type) {
      case 'about':
        return <AboutWindow />
      case 'portfolio':
        return <PortfolioWindow onOpenCaseStudy={(caseStudy) => openWindow('caseStudy', caseStudy)} />
      case 'caseStudy':
        return <CaseStudyWindow {...window} />
      case 'resume':
        return <ResumeWindow />
      case 'contact':
        return <ContactWindow />
      case 'mediaPlayer':
        return <MediaPlayerWindow />
      case 'musicPlayer':
        return <MusicPlayerWindow />
      case 'myDocuments':
        return <MyDocumentsWindow />
      default:
        return <div>Window content</div>
    }
  }

  const getWindowTitle = (window) => {
    const titles = {
      about: 'About - Tour Windows XP',
      portfolio: 'My Portfolio - Paint',
      caseStudy: window.title || 'Case Study - Notepad',
      resume: 'My Resume - Adobe Reader',
      contact: 'Contact - Outlook Express',
      mediaPlayer: 'Windows Media Player',
      musicPlayer: 'Winamp',
      myDocuments: 'My Documents',
    }
    return titles[window.type] || 'Window'
  }

  const getWindowIcon = (window) => {
    const icons = {
      about: '/icons/tour.png',
      portfolio: '/icons/paint.png',
      caseStudy: '/icons/notepad.png',
      resume: '/icons/pdf.png',
      contact: '/icons/email.png',
      mediaPlayer: '/icons/mediaplayer.png',
      musicPlayer: '/icons/winamp.png',
      myDocuments: '/icons/folder.png',
    }
    return icons[window.type] || '/icons/default.png'
  }

  return (
    <div className="desktop" onClick={handleDesktopClick}>
      <div className="desktop-icons">
        {desktopIcons.map(icon => (
          <div
            key={icon.id}
            className={`desktop-icon ${selectedIcon === icon.id ? 'selected' : ''}`}
            onClick={() => handleIconClick(icon)}
            onDoubleClick={() => handleIconDoubleClick(icon)}
          >
            <img src={icon.icon} alt={icon.name} />
            <span>{icon.name}</span>
          </div>
        ))}
      </div>

      {windows.filter(w => !w.minimized).map(window => (
        <Window
          key={window.id}
          id={window.id}
          title={getWindowTitle(window)}
          icon={getWindowIcon(window)}
          zIndex={window.zIndex}
          maximized={window.maximized}
          onClose={() => closeWindow(window.id)}
          onMinimize={() => minimizeWindow(window.id)}
          onMaximize={() => maximizeWindow(window.id)}
          onFocus={() => focusWindow(window.id)}
        >
          {renderWindowContent(window)}
        </Window>
      ))}

      {showStartMenu && (
        <StartMenu
          onClose={() => setShowStartMenu(false)}
          onMenuItemClick={handleMenuItemClick}
        />
      )}

      {showShutdownModal && (
        <ShutdownModal
          onClose={() => setShowShutdownModal(false)}
          onRestart={onRestart}
          onLogOff={onLogOff}
        />
      )}

      <Taskbar
        windows={windows}
        onStartClick={handleStartMenuToggle}
        onWindowClick={focusWindow}
        startMenuOpen={showStartMenu}
      />
    </div>
  )
}
