export default function MyDocumentsWindow() {
  const documents = [
    {
      name: 'Design Portfolio Presentation.ppt',
      icon: '/icons/powerpoint.png',
      url: 'https://docs.google.com/presentation/d/1234567890/edit'
    },
    {
      name: 'Case Studies Overview.ppt',
      icon: '/icons/powerpoint.png',
      url: 'https://docs.google.com/presentation/d/0987654321/edit'
    }
  ]

  const handleDocumentClick = (doc) => {
    window.open(doc.url, '_blank')
  }

  return (
    <div style={{ padding: '20px' }}>
      <div style={{
        background: '#f0f0f0',
        padding: '10px',
        borderBottom: '2px solid #0054e3',
        marginBottom: '20px',
        fontSize: '14px',
        fontWeight: 'bold'
      }}>
        My Documents
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
        gap: '20px'
      }}>
        {documents.map((doc, index) => (
          <div
            key={index}
            style={{
              cursor: 'pointer',
              textAlign: 'center',
              padding: '15px',
              border: '1px solid transparent',
              borderRadius: '3px',
              transition: 'all 0.2s'
            }}
            onClick={() => handleDocumentClick(doc)}
            onMouseEnter={(e) => {
              e.currentTarget.style.border = '1px solid #0054e3'
              e.currentTarget.style.background = '#f0f0f0'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.border = '1px solid transparent'
              e.currentTarget.style.background = 'transparent'
            }}
          >
            <img src={doc.icon} alt={doc.name} style={{ width: '64px', height: '64px', marginBottom: '10px' }} />
            <div style={{ fontSize: '11px', wordBreak: 'break-word' }}>
              {doc.name}
            </div>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: '40px',
        padding: '15px',
        background: '#fff3cd',
        border: '1px solid #ffc107',
        borderRadius: '3px',
        fontSize: '11px'
      }}>
        <strong>Note:</strong> Double-click any document to open it in a new browser tab.
      </div>
    </div>
  )
}
