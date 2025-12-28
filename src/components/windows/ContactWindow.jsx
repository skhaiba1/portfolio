import { useState } from 'react'

export default function ContactWindow() {
  const [formData, setFormData] = useState({
    to: 'skhaiba@gmail.com',
    from: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Create mailto link
    const mailtoLink = `mailto:${formData.to}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`
    window.location.href = mailtoLink
  }

  return (
    <div className="email-client">
      <form onSubmit={handleSubmit}>
        <div className="email-field">
          <label>To:</label>
          <input
            type="email"
            value={formData.to}
            disabled
            style={{ background: '#f0f0f0', cursor: 'not-allowed' }}
          />
        </div>

        <div className="email-field">
          <label>From:</label>
          <input
            type="email"
            value={formData.from}
            onChange={(e) => setFormData({ ...formData, from: e.target.value })}
            placeholder="your.email@example.com"
            required
          />
        </div>

        <div className="email-field">
          <label>Subject:</label>
          <input
            type="text"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            placeholder="Enter subject"
            required
          />
        </div>

        <div className="email-field">
          <label>Message:</label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Type your message here..."
            required
          />
        </div>

        <button type="submit" className="email-send-button">
          Send Email
        </button>
      </form>
    </div>
  )
}
