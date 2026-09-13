import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'

export default function NotFoundPage() {
  return (
    <>
      <Seo
        title="Page not found | Flint Hills Outdoor Co."
        description="That page is not on the Flint Hills Outdoor Co. website. Return home or request a free estimate."
        path="/404"
        noIndex
      />
      <header className="page-hero">
        <div className="section-inner">
          <p className="eyebrow">404</p>
          <h1>That page is not here.</h1>
          <p className="page-lead">
            The link may be old. You can go back to the homepage, browse
            services, or request an estimate.
          </p>
          <div className="hero-actions page-hero-actions">
            <Link className="btn btn-tan" to="/">
              Home
            </Link>
            <Link className="btn btn-outline" to="/#estimate">
              Request a Free Estimate
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}
