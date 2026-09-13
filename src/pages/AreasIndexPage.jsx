import { Link } from 'react-router-dom'
import { breadcrumbJsonLd } from '../data/seo.js'
import { ADDITIONAL_NEARBY, AREAS } from '../site.js'
import Breadcrumbs from '../components/Breadcrumbs.jsx'
import CtaBand from '../components/CtaBand.jsx'
import Seo from '../components/Seo.jsx'

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Service Areas', path: '/service-areas' },
]

export default function AreasIndexPage() {
  return (
    <>
      <Seo
        title="Service Areas | Flint Hills Outdoor Co. in Emporia, KS"
        description="Flint Hills Outdoor Co. serves Emporia, Americus, Olpe, Hartford, Neosho Rapids, and Reading, Kansas. Request a free estimate for outdoor property care."
        path="/service-areas"
        jsonLd={breadcrumbJsonLd(crumbs)}
      />
      <header className="page-hero">
        <div className="section-inner">
          <Breadcrumbs items={crumbs} />
          <p className="eyebrow">Where we work</p>
          <h1>Service areas around Emporia, Kansas</h1>
          <p className="page-lead">
            Each community below has its own page because the properties are
            not interchangeable. Emporia is the home base. The other towns are
            part of the regular service area, not copied listings.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="section-inner">
          <ul className="area-card-grid">
            {AREAS.map((area) => (
              <li key={area.slug}>
                <Link className="area-card" to={`/service-areas/${area.slug}`}>
                  <p className="eyebrow">{area.state}</p>
                  <h2>{area.name}</h2>
                  <p>{area.intro}</p>
                  <span className="text-link">Outdoor care in {area.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="nearby-note">
            Nearby communities such as {ADDITIONAL_NEARBY.join(', ')} are
            welcome to request an estimate even without a dedicated page.
          </p>
        </div>
      </section>
      <CtaBand heading="Not sure if we reach your property?" />
    </>
  )
}
