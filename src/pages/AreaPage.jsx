import { Link, Navigate, useParams } from 'react-router-dom'
import { breadcrumbJsonLd } from '../data/seo.js'
import { getArea, getOtherAreas, SERVICES } from '../site.js'
import Breadcrumbs from '../components/Breadcrumbs.jsx'
import CtaBand from '../components/CtaBand.jsx'
import FaqList from '../components/FaqList.jsx'
import Seo from '../components/Seo.jsx'

export default function AreaPage() {
  const { slug } = useParams()
  const area = getArea(slug)

  if (!area) {
    return <Navigate to="/service-areas" replace />
  }

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Service Areas', path: '/service-areas' },
    { name: `${area.name}, ${area.state}`, path: `/service-areas/${area.slug}` },
  ]
  const others = getOtherAreas(area.slug)

  return (
    <>
      <Seo
        title={area.titleTag}
        description={area.description}
        path={`/service-areas/${area.slug}`}
        jsonLd={breadcrumbJsonLd(crumbs)}
      />
      <header className="page-hero">
        <div className="section-inner">
          <Breadcrumbs items={crumbs} />
          <p className="eyebrow">Service area</p>
          <h1>{area.h1}</h1>
          <p className="page-lead">{area.intro}</p>
        </div>
      </header>

      <article className="section page-body">
        <div className="section-inner prose">
          {area.body.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
          <h2>Seasonal property care in {area.name}</h2>
          <p>{area.seasonal}</p>
        </div>
      </article>

      <section className="section services" aria-labelledby="area-services-heading">
        <div className="section-inner">
          <h2 id="area-services-heading">Services available in {area.name}</h2>
          <p className="section-dek">
            These are the outdoor services Flint Hills Outdoor Co. provides in{' '}
            {area.heading}. Each page explains the work in more detail.
          </p>
          <ul className="link-card-grid">
            {SERVICES.map((service) => (
              <li key={service.slug}>
                <Link to={`/services/${service.slug}`}>
                  <strong>{service.title}</strong>
                  <span>{service.cardCopy}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section area" aria-labelledby="nearby-heading">
        <div className="section-inner">
          <h2 id="nearby-heading">Nearby service coverage</h2>
          <p className="section-dek">{area.nearbyNote}</p>
          <ul className="town-list town-list-links">
            {others.map((item) => (
              <li key={item.slug}>
                <Link to={`/service-areas/${item.slug}`}>
                  {item.name}, {item.state}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="area-faq-heading">
        <div className="section-inner split-intro">
          <div>
            <p className="eyebrow">Questions</p>
            <h2 id="area-faq-heading">FAQ for {area.name}</h2>
          </div>
          <FaqList items={area.faqs} />
        </div>
      </section>

      <CtaBand
        heading={`Need outdoor care in ${area.name}?`}
        copy="Request a free estimate and tell us the property address or nearest town."
      />
    </>
  )
}
