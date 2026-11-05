import { Link, Navigate, useParams } from 'react-router-dom'
import {
  breadcrumbJsonLd,
  serviceJsonLd,
} from '../data/seo.js'
import { AREAS, getRelatedServices, getService, phoneHref, PHONE_DISPLAY, textHref } from '../site.js'
import Breadcrumbs from '../components/Breadcrumbs.jsx'
import CtaBand from '../components/CtaBand.jsx'
import FaqList from '../components/FaqList.jsx'
import { SERVICE_ICONS } from '../components/Icons.jsx'
import Seo from '../components/Seo.jsx'

export default function ServicePage() {
  const { slug } = useParams()
  const service = getService(slug)

  if (!service) {
    return <Navigate to="/services" replace />
  }

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: service.title, path: `/services/${service.slug}` },
  ]
  const Icon = SERVICE_ICONS[service.icon]
  const related = getRelatedServices(service)

  return (
    <>
      <Seo
        title={service.titleTag}
        description={service.description}
        path={`/services/${service.slug}`}
        jsonLd={[breadcrumbJsonLd(crumbs), serviceJsonLd(service)]}
      />
      <header className="page-hero">
        <div className="section-inner">
          <Breadcrumbs items={crumbs} />
          <p className="eyebrow">Service</p>
          <h1>{service.h1}</h1>
          <p className="page-lead">{service.intro}</p>
          <div className="hero-actions page-hero-actions">
            <a className="btn btn-tan" href={phoneHref}>Call {PHONE_DISPLAY}</a>
            <Link className="btn btn-outline" to="/#estimate">Get a Free Estimate</Link>
            <a className="btn btn-outline" href={textHref}>Text Rayden</a>
          </div>
        </div>
      </header>

      <article className="section page-body">
        <div className="section-inner prose-layout">
          <div className="prose">
            {Icon ? (
              <span className="service-icon page-service-icon">
                <Icon />
              </span>
            ) : null}
            <p>{service.explanation}</p>
            <h2>Who this is for</h2>
            <p>{service.idealFor}</p>
            <h2>What is included</h2>
            <ul className="check-list">
              {service.included.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <aside className="page-aside">
            <h2>Benefits</h2>
            <ul className="check-list">
              {service.benefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link className="btn btn-forest" to="/#estimate">
              Request a Free Estimate
            </Link>
          </aside>
        </div>
      </article>

      <section className="section related-section" aria-labelledby="related-heading">
        <div className="section-inner">
          <h2 id="related-heading">Related services</h2>
          <ul className="link-card-grid">
            {related.map((item) => (
              <li key={item.slug}>
                <Link to={`/services/${item.slug}`}>
                  <strong>{item.title}</strong>
                  <span>{item.cardCopy}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section area" aria-labelledby="service-areas-heading">
        <div className="section-inner">
          <h2 id="service-areas-heading">Where we provide this service</h2>
          <p className="section-dek">
            Request {service.title.toLowerCase()} in Emporia and the surrounding
            communities below. Share your address to confirm availability.
          </p>
          <ul className="town-list town-list-links">
            {AREAS.map((area) => (
              <li key={area.slug}>
                <Link to={`/service-areas/${area.slug}`}>
                  {area.name}, {area.state}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="service-faq-heading">
        <div className="section-inner split-intro">
          <div>
            <p className="eyebrow">Questions</p>
            <h2 id="service-faq-heading">FAQ</h2>
          </div>
          <FaqList items={service.faqs} />
        </div>
      </section>

      <CtaBand
        heading={`Need ${service.title.toLowerCase()}?`}
        copy="Request a free estimate or call. We’ll tell you plainly what the visit can cover."
      />
    </>
  )
}
