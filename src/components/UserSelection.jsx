import React from 'react'

export default function UserSelection({ onUserSelect }) {
  return (
    <div className="user-selection">
      <div className="user-selection-header">
        <h2>To begin, click your user name</h2>
      </div>
      <div className="user-card" onClick={onUserSelect}>
        <img src="/icons/user.png" alt="User" />
        <h3>Sergii Khaiba</h3>
        <p>Staff Product Designer</p>
      </div>
    </div>
  )
}
