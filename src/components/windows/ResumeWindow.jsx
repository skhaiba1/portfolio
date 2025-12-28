export default function ResumeWindow() {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{
        background: '#525252',
        padding: '5px 10px',
        borderBottom: '1px solid #333',
        display: 'flex',
        gap: '10px',
        fontSize: '11px',
        color: 'white'
      }}>
        <button style={{
          background: '#666',
          border: '1px outset #888',
          color: 'white',
          padding: '3px 10px',
          cursor: 'pointer'
        }}>Print</button>
        <button style={{
          background: '#666',
          border: '1px outset #888',
          color: 'white',
          padding: '3px 10px',
          cursor: 'pointer'
        }}>Download</button>
      </div>
      <div style={{
        flex: 1,
        background: '#525252',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}>
        <div style={{
          background: 'white',
          width: '100%',
          maxWidth: '800px',
          height: '100%',
          boxShadow: '0 0 10px rgba(0,0,0,0.5)',
          padding: '40px',
          overflowY: 'auto'
        }}>
          <div style={{ fontFamily: 'Arial', fontSize: '12px', lineHeight: '1.6' }}>
            <h1 style={{ fontSize: '24px', marginBottom: '10px', color: '#000' }}>Sergii Khaiba</h1>
            <div style={{ fontSize: '14px', marginBottom: '20px', color: '#666' }}>
              Staff Product Designer | UX/UI Expert | Design Systems Specialist
            </div>
            <div style={{ marginBottom: '20px', fontSize: '11px' }}>
              📧 skhaiba@gmail.com | 💼 linkedin.com/in/sergii-khaiba
            </div>

            <h2 style={{ fontSize: '16px', borderBottom: '2px solid #000', marginTop: '30px', marginBottom: '15px' }}>
              Summary
            </h2>
            <p style={{ marginBottom: '15px' }}>
              Staff Product Designer with 10+ years of experience creating exceptional digital products.
              Specialized in design systems, user research, and cross-functional collaboration.
              Passionate about solving complex UX challenges and mentoring design teams.
            </p>

            <h2 style={{ fontSize: '16px', borderBottom: '2px solid #000', marginTop: '30px', marginBottom: '15px' }}>
              Skills
            </h2>
            <ul style={{ marginBottom: '15px', paddingLeft: '20px' }}>
              <li>Product Design & UX Strategy</li>
              <li>Design Systems & Component Libraries</li>
              <li>User Research & Usability Testing</li>
              <li>Prototyping & Interaction Design</li>
              <li>Figma, Sketch, Adobe Creative Suite</li>
              <li>Cross-functional Team Leadership</li>
            </ul>

            <h2 style={{ fontSize: '16px', borderBottom: '2px solid #000', marginTop: '30px', marginBottom: '15px' }}>
              Experience
            </h2>

            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ fontSize: '14px', marginBottom: '5px' }}>Staff Product Designer</h3>
              <div style={{ fontSize: '11px', color: '#666', marginBottom: '10px' }}>
                Tech Company | 2020 - Present
              </div>
              <ul style={{ paddingLeft: '20px', fontSize: '11px' }}>
                <li>Led design system initiatives across multiple product lines</li>
                <li>Mentored team of 5 designers and established design best practices</li>
                <li>Improved user engagement by 45% through data-driven design decisions</li>
              </ul>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ fontSize: '14px', marginBottom: '5px' }}>Senior Product Designer</h3>
              <div style={{ fontSize: '11px', color: '#666', marginBottom: '10px' }}>
                Previous Company | 2016 - 2020
              </div>
              <ul style={{ paddingLeft: '20px', fontSize: '11px' }}>
                <li>Designed and launched 15+ product features from concept to production</li>
                <li>Conducted user research with 100+ participants to inform design decisions</li>
                <li>Collaborated with engineering and product teams to deliver high-quality experiences</li>
              </ul>
            </div>

            <h2 style={{ fontSize: '16px', borderBottom: '2px solid #000', marginTop: '30px', marginBottom: '15px' }}>
              Education
            </h2>
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ fontSize: '14px', marginBottom: '5px' }}>Bachelor of Design</h3>
              <div style={{ fontSize: '11px', color: '#666' }}>
                University Name | 2012
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
