import caseStudiesData from '../../data/caseStudies'

export default function PortfolioWindow({ onOpenCaseStudy }) {
  const designSystems = caseStudiesData.filter(cs => cs.category === 'Design Systems')
  const uxCaseStudies = caseStudiesData.filter(cs => cs.category === 'UX Case Studies')

  return (
    <div className="paint-content">
      <div className="paint-section">
        <h2>Design Systems ({designSystems.length})</h2>
        <div className="paint-grid">
          {designSystems.map(caseStudy => (
            <div
              key={caseStudy.id}
              className="paint-item"
              onClick={() => onOpenCaseStudy(caseStudy)}
            >
              <img src={caseStudy.thumbnail} alt={caseStudy.title} />
              <h3>{caseStudy.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="paint-section">
        <h2>UX Case Studies ({uxCaseStudies.length})</h2>
        <div className="paint-grid">
          {uxCaseStudies.map(caseStudy => (
            <div
              key={caseStudy.id}
              className="paint-item"
              onClick={() => onOpenCaseStudy(caseStudy)}
            >
              <img src={caseStudy.thumbnail} alt={caseStudy.title} />
              <h3>{caseStudy.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
