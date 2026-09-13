import { Link } from 'react-router-dom'
import EstimateForm from '../components/EstimateForm.jsx'
import FaqList from '../components/FaqList.jsx'
import Hills from '../components/Hills.jsx'
import { SERVICE_ICONS } from '../components/Icons.jsx'
import Seo from '../components/Seo.jsx'
import {
  ADDITIONAL_NEARBY,
  AREAS,
  CITY,
  HOME_FAQS,
  OWNER_NAME,
  PHONE_DISPLAY,
  phoneHref,
  REASONS,
  SEASONS,
  SERVICES,
  textHref,
  TRUST_POINTS,
} from '../site.js'

export default function HomePage() {
  return (
    <>
      <Seo
        title="Flint Hills Outdoor Co. | Year-Round Property Care in Emporia, KS"
        description="Locally owned lawn mowing, leaf removal, snow removal, and yard cleanup in Emporia, Kansas and nearby towns. Call 620-779-5234 or request a free estimate."
        path="/"
      />

      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-inner">
          <p className="eyebrow">Serving {CITY}</p>
          <h1 id="hero-heading">Year-round outdoor property care in Emporia.</h1>
          <p className="hero-lead">
            Lawn mowing, cleanup, and snow on walks and drives—handled by a
            local owner, not a call center.
          </p>
          <p className="hero-owner">Owned and operated by {OWNER_NAME}.</p>
          <div className="hero-actions">
            <Link className="btn btn-tan" to="/#estimate">
              Request a Free Estimate
            </Link>
            <a className="btn btn-outline" href={phoneHref}>
              Call {PHONE_DISPLAY}
            </a>
            <a className="btn btn-outline" href={textHref}>
              Text Us
            </a>
          </div>
          <Link className="hero-callout" to="/services/lawn-mowing">
            Need regular lawn care? Ask about recurring mowing service.
          </Link>
        </div>
        <Hills />
      </section>

      <section className="trust" aria-label="Why people call a local owner">
        <ul className="section-inner trust-grid">
          {TRUST_POINTS.map((item) => (
            <li key={item.title}>
              <h2>{item.title}</h2>
              <p>{item.copy}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section services" id="services" aria-labelledby="services-heading">
        <div className="section-inner">
          <div className="section-intro">
            <p className="eyebrow">Services</p>
            <h2 id="services-heading">Outdoor care for Emporia properties</h2>
            <p>
              Recurring lawn mowing is the core of the work. Cleanup and snow
              removal cover the rest of the year. Each service has its own page
              so you can see what is included before you request an estimate.
            </p>
          </div>
          <ul className="service-grid">
            {SERVICES.map((service) => {
              const Icon = SERVICE_ICONS[service.icon]
              return (
                <li
                  className={
                    service.featured
                      ? 'service-card service-card-primary'
                      : 'service-card'
                  }
                  key={service.slug}
                >
                  {Icon ? (
                    <span className="service-icon">
                      <Icon />
                    </span>
                  ) : null}
                  {service.kicker ? (
                    <p className="service-kicker">{service.kicker}</p>
                  ) : null}
                  <h3>{service.title}</h3>
                  <p>{service.cardCopy}</p>
                  <Link className="text-link" to={`/services/${service.slug}`}>
                    About {service.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section className="section why" id="why" aria-labelledby="why-heading">
        <div className="section-inner why-layout">
          <div className="section-intro">
            <p className="eyebrow">Why choose us</p>
            <h2 id="why-heading">Why choose Flint Hills Outdoor Co.</h2>
            <p>
              You are hiring a local owner in Emporia. The estimate is clear.
              The work is the outdoor care listed on this site.
            </p>
          </div>
          <ol className="reason-list">
            {REASONS.map((reason, index) => (
              <li key={reason.title}>
                <span className="reason-num">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3>{reason.title}</h3>
                  <p>{reason.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section seasonal" aria-labelledby="seasonal-heading">
        <div className="section-inner">
          <div className="section-intro">
            <p className="eyebrow">Through the year</p>
            <h2 id="seasonal-heading">Seasonal services</h2>
            <p>
              Kansas weather does not pause. These are the visits that match
              the season without turning every job into a package you did not
              ask for.
            </p>
          </div>
          <ul className="season-grid">
            {SEASONS.map((season) => (
              <li className="season-card" key={season.name}>
                <h3>{season.name}</h3>
                <p>{season.copy}</p>
                <p className="season-links">
                  {season.links.map((item, index) => (
                    <span key={item.slug}>
                      {index > 0 ? ' · ' : null}
                      <Link to={`/services/${item.slug}`}>{item.label}</Link>
                    </span>
                  ))}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section area" id="area" aria-labelledby="area-heading">
        <div className="section-inner area-layout">
          <div className="area-map" aria-hidden="true">
            <div className="area-hub">
              <span className="area-pin" />
              <strong>Emporia</strong>
              <span>Kansas</span>
            </div>
          </div>
          <div className="section-intro">
            <p className="eyebrow">Service area</p>
            <h2 id="area-heading">Emporia, Kansas and nearby communities</h2>
            <p>
              The company is based in Emporia. Each town below has its own
              page because the properties and seasons do not read the same.
            </p>
            <ul className="town-list town-list-links">
              {AREAS.map((area) => (
                <li key={area.slug}>
                  <Link to={`/service-areas/${area.slug}`}>{area.name}</Link>
                </li>
              ))}
              {ADDITIONAL_NEARBY.map((town) => (
                <li key={town}>{town}</li>
              ))}
            </ul>
            <Link className="text-link area-index-link" to="/service-areas">
              See all service areas
            </Link>
          </div>
        </div>
      </section>

      <EstimateForm />

      <section className="section faq-section" aria-labelledby="faq-heading">
        <div className="section-inner split-intro">
          <div>
            <p className="eyebrow">Questions</p>
            <h2 id="faq-heading">FAQ</h2>
          </div>
          <FaqList items={HOME_FAQS} />
        </div>
      </section>
    </>
  )
}
