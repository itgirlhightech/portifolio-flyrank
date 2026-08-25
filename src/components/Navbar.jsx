import './Navbar.css'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#hero" className="navbar-logo" aria-label="Voltar ao início">
          <span className="navbar-logo-badge">EF</span>
        </a>

        <nav aria-label="Navegação principal">
          <ul className="navbar-links">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
