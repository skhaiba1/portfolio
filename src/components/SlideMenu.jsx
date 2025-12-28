export default function SlideMenu({ type, items, onItemClick, onClose }) {
  const position = type === 'allPrograms'
    ? { bottom: '40px', left: '200px' }
    : { bottom: '40px', right: '0' }

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 10001,
        }}
        onClick={onClose}
      />
      <div className="slide-menu" style={position}>
        {items.map((item, index) => (
          <div
            key={index}
            className="slide-menu-item"
            onClick={() => onItemClick(item)}
          >
            <img src={item.icon} alt={item.name} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </>
  )
}
