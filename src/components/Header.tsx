import './Header.css'

const links = ['experience', 'projects', 'skills', 'education', 'contact', 'terminal']

export default function Header() {
  return (
    <header className="bar">
      <div className="dots" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <span className="bar-title">yurae@portfolio: ~</span>
      <nav aria-label="Sections">
        {links.map((id) => (
          <a key={id} href={`#${id}`}>
            {id}
          </a>
        ))}
      </nav>
    </header>
  )
}