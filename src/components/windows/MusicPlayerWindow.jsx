export default function MusicPlayerWindow() {
  return (
    <div style={{ background: '#0f0f0f', height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Winamp-style header */}
      <div style={{
        background: 'linear-gradient(to bottom, #2e2e2e 0%, #1a1a1a 100%)',
        padding: '5px',
        borderBottom: '1px solid #000',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        <div style={{
          flex: 1,
          background: '#000',
          color: '#00ff00',
          padding: '5px 10px',
          fontFamily: 'monospace',
          fontSize: '12px',
          border: '1px inset #333'
        }}>
          ♪ Daft Punk - Harder, Better, Faster, Stronger
        </div>
      </div>

      {/* Visualizer area */}
      <div style={{
        background: '#000',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: '1px solid #333'
      }}>
        <div style={{ color: '#00ff00', fontSize: '48px', fontFamily: 'monospace' }}>
          ♪ ♫ ♪
        </div>
      </div>

      {/* Player area */}
      <div style={{ flex: 1, padding: '20px' }}>
        <iframe
          width="100%"
          height="166"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/146808544&color=%2300ff00&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
          style={{ border: 'none', minHeight: '166px' }}
        />
      </div>

      {/* Controls */}
      <div style={{
        background: 'linear-gradient(to bottom, #2e2e2e 0%, #1a1a1a 100%)',
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
        gap: '5px',
        borderTop: '1px solid #333'
      }}>
        <button style={{
          background: '#333',
          border: '1px outset #555',
          color: '#00ff00',
          padding: '5px 10px',
          cursor: 'pointer',
          fontSize: '14px'
        }}>⏮</button>
        <button style={{
          background: '#333',
          border: '1px outset #555',
          color: '#00ff00',
          padding: '5px 15px',
          cursor: 'pointer',
          fontSize: '14px'
        }}>▶</button>
        <button style={{
          background: '#333',
          border: '1px outset #555',
          color: '#00ff00',
          padding: '5px 10px',
          cursor: 'pointer',
          fontSize: '14px'
        }}>⏸</button>
        <button style={{
          background: '#333',
          border: '1px outset #555',
          color: '#00ff00',
          padding: '5px 10px',
          cursor: 'pointer',
          fontSize: '14px'
        }}>⏹</button>
        <button style={{
          background: '#333',
          border: '1px outset #555',
          color: '#00ff00',
          padding: '5px 10px',
          cursor: 'pointer',
          fontSize: '14px'
        }}>⏭</button>
      </div>
    </div>
  )
}
