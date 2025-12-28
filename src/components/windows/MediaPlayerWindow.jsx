export default function MediaPlayerWindow() {
  return (
    <div style={{ background: '#000', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{
        background: 'linear-gradient(to bottom, #4d4d4d 0%, #1a1a1a 100%)',
        padding: '10px',
        borderBottom: '1px solid #333'
      }}>
        <div style={{ color: '#0af', fontSize: '14px', fontWeight: 'bold', marginBottom: '5px' }}>
          Windows Media Player
        </div>
        <div style={{ color: '#fff', fontSize: '11px' }}>
          Sergii Khaiba _ Migrating from Sketch to Figma
        </div>
      </div>

      <div style={{ flex: 1, background: '#000', position: 'relative' }}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Sergii Khaiba - Migrating from Sketch to Figma"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
      </div>

      <div style={{
        background: 'linear-gradient(to bottom, #4d4d4d 0%, #1a1a1a 100%)',
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        borderTop: '1px solid #333'
      }}>
        <button style={{
          background: '#0af',
          border: 'none',
          color: 'white',
          padding: '5px 15px',
          cursor: 'pointer',
          borderRadius: '3px'
        }}>▶ Play</button>
        <button style={{
          background: '#0af',
          border: 'none',
          color: 'white',
          padding: '5px 15px',
          cursor: 'pointer',
          borderRadius: '3px'
        }}>⏸ Pause</button>
        <button style={{
          background: '#0af',
          border: 'none',
          color: 'white',
          padding: '5px 15px',
          cursor: 'pointer',
          borderRadius: '3px'
        }}>⏹ Stop</button>
      </div>
    </div>
  )
}
