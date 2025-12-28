import React from 'react'

export default function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="loading-logo">
        <div style={{ fontSize: '12px', color: '#888', marginBottom: '5px' }}>
          Product design
        </div>
        <h1>
          <span style={{ fontWeight: 'normal' }}>Portfolio</span>
        </h1>
        <h2>
          <span style={{ fontWeight: 'bold', fontSize: '32px' }}>UX</span>
        </h2>
      </div>
      <div className="loading-bar-container">
        <div className="loading-bar"></div>
      </div>
    </div>
  )
}
