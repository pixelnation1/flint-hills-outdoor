import { Link, NavLink } from 'react-router-dom'
import { PHONE_DISPLAY, phoneHref } from '../site.js'
import BrandLogo from './BrandLogo.jsx'

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" to="/" aria-label="Flint Hills Outdoor Co. home">
          <BrandLogo className="brand-logo" eager />
        </Link>
        <nav className="header-nav" aria-label="Primary">
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/service-areas">Service Areas</NavLink>
          <a className="header-phone" href={phoneHref}>
            {PHONE_DISPLAY}
          </a>
          <Link className="btn btn-tan header-cta" to="/#estimate">
            <span className="cta-full">Request an Estimate</span>
            <span className="cta-short">Estimate</span>
          </Link>
        </nav>
      </div>
    </header>
  )
}
