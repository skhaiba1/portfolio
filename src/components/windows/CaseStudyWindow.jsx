export default function CaseStudyWindow({ title, content, sections }) {
  return (
    <div className="notepad-content">
      <h1>{title}</h1>

      {sections && sections.map((section, index) => (
        <div key={index} style={{ marginBottom: '30px' }}>
          <h2>{section.title}</h2>
          <p style={{ whiteSpace: 'normal', marginBottom: '15px' }}>{section.text}</p>
          {section.image && (
            <img src={section.image} alt={section.title} />
          )}
        </div>
      ))}

      {content && (
        <div style={{ whiteSpace: 'normal' }}>
          {content}
        </div>
      )}
    </div>
  )
}
