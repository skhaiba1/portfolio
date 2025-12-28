import { useState } from 'react'
import SlideMenu from './SlideMenu'

export default function StartMenu({ onClose, onMenuItemClick }) {
  const [slideMenu, setSlideMenu] = useState(null)

  const leftMenuItems = [
    { id: 'about', name: 'About', icon: '/icons/tour.png' },
    { id: 'portfolio', name: 'My Portfolio', icon: '/icons/paint.png' },
    { id: 'contact', name: 'Contact', icon: '/icons/email.png' },
    { type: 'divider' },
    { id: 'mediaPlayer', name: 'Media Player', icon: '/icons/mediaplayer.png' },
    { id: 'musicPlayer', name: 'Music Player', icon: '/icons/winamp.png' },
    { id: 'allPrograms', name: 'All Programs', icon: '/icons/folder.png', hasArrow: true },
  ]

  const rightMenuItems = [
    { id: 'linkedin', name: 'LinkedIn', icon: '/icons/linkedin.png' },
    { type: 'divider' },
    { id: 'myDocuments', name: 'My Documents', icon: '/icons/folder.png' },
    { id: 'recentlyUsed', name: 'Recently Used', icon: '/icons/recent.png', hasArrow: true },
  ]

  const allProgramsItems = [
    { id: 'about', name: 'About', icon: '/icons/tour.png' },
    { id: 'portfolio', name: 'My Portfolio', icon: '/icons/paint.png' },
    { id: 'resume', name: 'My Resume', icon: '/icons/pdf.png' },
    { id: 'contact', name: 'Contact', icon: '/icons/email.png' },
    { id: 'mediaPlayer', name: 'Media Player', icon: '/icons/mediaplayer.png' },
    { id: 'musicPlayer', name: 'Music Player', icon: '/icons/winamp.png' },
    { id: 'myDocuments', name: 'My Documents', icon: '/icons/folder.png' },
  ]

  const recentlyUsedItems = [
    { name: 'Figma', icon: '/icons/figma.png' },
    { name: 'Slack', icon: '/icons/slack.png' },
    { name: 'Adobe', icon: '/icons/adobe.png' },
    { name: 'Cursor', icon: '/icons/cursor.png' },
    { name: 'Lovable', icon: '/icons/lovable.png' },
    { name: 'Sketch', icon: '/icons/sketch.png' },
    { name: 'Miro', icon: '/icons/miro.png' },
    { name: 'Jira', icon: '/icons/jira.png' },
    { name: 'Abstract', icon: '/icons/abstract.png' },
    { name: 'Zeplin', icon: '/icons/zeplin.png' },
    { name: 'Claude Code', icon: '/icons/claude.png' },
  ]

  const handleMenuItemClick = (item) => {
    if (item.id === 'allPrograms') {
      setSlideMenu({ type: 'allPrograms', items: allProgramsItems })
    } else if (item.id === 'recentlyUsed') {
      setSlideMenu({ type: 'recentlyUsed', items: recentlyUsedItems })
    } else {
      onMenuItemClick(item.id)
      onClose()
    }
  }

  const handleSlideMenuItemClick = (item) => {
    if (item.id) {
      onMenuItemClick(item.id)
      onClose()
    }
  }

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 9998,
        }}
        onClick={onClose}
      />
      <div className="start-menu">
        <div className="start-menu-header">
          <div>
            <div style={{ fontSize: '10px', fontWeight: 'normal', marginBottom: '2px' }}>
              Sergii Khaiba
            </div>
            <div style={{ fontSize: '14px' }}>Staff Product Designer</div>
          </div>
        </div>
        <div className="start-menu-body">
          <div className="start-menu-left">
            {leftMenuItems.map((item, index) =>
              item.type === 'divider' ? (
                <div key={index} className="start-menu-divider" />
              ) : (
                <div
                  key={item.id}
                  className="start-menu-item"
                  onClick={() => handleMenuItemClick(item)}
                  onMouseEnter={() => {
                    if (item.id === 'allPrograms') {
                      setSlideMenu({ type: 'allPrograms', items: allProgramsItems })
                    }
                  }}
                >
                  <img src={item.icon} alt={item.name} />
                  <span>{item.name}</span>
                  {item.hasArrow && <span style={{ marginLeft: 'auto' }}>▶</span>}
                </div>
              )
            )}
          </div>
          <div className="start-menu-right">
            {rightMenuItems.map((item, index) =>
              item.type === 'divider' ? (
                <div key={index} className="start-menu-divider" />
              ) : (
                <div
                  key={item.id}
                  className="start-menu-item"
                  onClick={() => handleMenuItemClick(item)}
                  onMouseEnter={() => {
                    if (item.id === 'recentlyUsed') {
                      setSlideMenu({ type: 'recentlyUsed', items: recentlyUsedItems })
                    }
                  }}
                >
                  <img src={item.icon} alt={item.name} />
                  <span>{item.name}</span>
                  {item.hasArrow && <span style={{ marginLeft: 'auto' }}>▶</span>}
                </div>
              )
            )}
          </div>
        </div>
        <div className="start-menu-footer">
          <button onClick={() => { onMenuItemClick('logoff'); onClose(); }}>
            <img src="/icons/logoff.png" alt="Log Off" />
            Log Off
          </button>
          <button onClick={() => { onMenuItemClick('shutdown'); onClose(); }}>
            <img src="/icons/shutdown.png" alt="Shut Down" />
            Shut Down
          </button>
        </div>
      </div>
      {slideMenu && (
        <SlideMenu
          type={slideMenu.type}
          items={slideMenu.items}
          onItemClick={handleSlideMenuItemClick}
          onClose={() => setSlideMenu(null)}
        />
      )}
    </>
  )
}
