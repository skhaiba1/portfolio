export default function ShutdownModal({ onClose, onRestart, onLogOff }) {
  return (
    <div className="modal-overlay">
      <div className="modal-dialog">
        <div className="modal-titlebar">
          <span>Shut Down Portfolio</span>
          <button className="xp-titlebar-button" onClick={onClose}>✕</button>
        </div>
        <div className="modal-content">
          <p style={{ marginBottom: '20px' }}>What do you want to do?</p>
          <div className="modal-buttons">
            <button className="modal-button" onClick={onRestart}>
              <img src="/icons/shutdown.png" alt="" style={{ width: '16px', marginRight: '5px' }} />
              Restart
            </button>
            <button className="modal-button" onClick={onLogOff}>
              <img src="/icons/logoff.png" alt="" style={{ width: '16px', marginRight: '5px' }} />
              Log Off
            </button>
            <button className="modal-button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
