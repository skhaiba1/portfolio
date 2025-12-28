export default function AboutWindow() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Tahoma', fontSize: '11px', lineHeight: '1.6' }}>
      <h1 style={{ fontSize: '18px', color: '#0054e3', marginBottom: '20px', borderBottom: '2px solid #0054e3', paddingBottom: '10px' }}>
        About Sergii Khaiba
      </h1>

      <div style={{ maxHeight: '500px', overflowY: 'auto', paddingRight: '10px' }}>
        <h2 style={{ fontSize: '14px', marginTop: '20px', marginBottom: '10px', color: '#333' }}>
          Staff Product Designer
        </h2>
        <p style={{ marginBottom: '15px' }}>
          I'm a Staff Product Designer with over 10 years of experience crafting exceptional digital experiences.
          My passion lies in solving complex UX challenges and building design systems that scale.
        </p>

        <h2 style={{ fontSize: '14px', marginTop: '20px', marginBottom: '10px', color: '#333' }}>
          Expertise
        </h2>
        <ul style={{ marginBottom: '15px', paddingLeft: '20px' }}>
          <li>Product Design & UX Strategy</li>
          <li>Design Systems & Component Libraries</li>
          <li>User Research & Testing</li>
          <li>Prototyping & Interaction Design</li>
          <li>Cross-functional Team Leadership</li>
        </ul>

        <h2 style={{ fontSize: '14px', marginTop: '20px', marginBottom: '10px', color: '#333' }}>
          Tools I Use
        </h2>
        <p style={{ marginBottom: '15px' }}>
          Figma, Sketch, Adobe Creative Suite, Miro, Abstract, Principle, ProtoPie, and various prototyping tools.
          I'm constantly learning new technologies to stay at the forefront of design innovation.
        </p>

        <h2 style={{ fontSize: '14px', marginTop: '20px', marginBottom: '10px', color: '#333' }}>
          Philosophy
        </h2>
        <p style={{ marginBottom: '15px' }}>
          I believe great design is invisible. It's about creating intuitive experiences that users don't have to think about.
          My approach combines data-driven decisions with creative problem-solving to deliver products that users love.
        </p>

        <h2 style={{ fontSize: '14px', marginTop: '20px', marginBottom: '10px', color: '#333' }}>
          Beyond Work
        </h2>
        <p style={{ marginBottom: '15px' }}>
          When I'm not designing, you'll find me exploring new design trends, contributing to design communities,
          or mentoring aspiring designers. I'm passionate about sharing knowledge and helping others grow in their careers.
        </p>

        <div style={{ marginTop: '30px', padding: '15px', background: '#f0f0f0', border: '1px solid #ccc' }}>
          <p style={{ fontStyle: 'italic', color: '#666' }}>
            "Design is not just what it looks like and feels like. Design is how it works." - Steve Jobs
          </p>
        </div>
      </div>
    </div>
  )
}
