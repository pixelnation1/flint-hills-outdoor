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

const month = Number(new Intl.DateTimeFormat('en-US', { month: 'numeric', timeZone: 'America/Chicago' }).format(new Date()))
const seasonalSlugs = month >= 9 && month <= 11
  ? ['leaf-removal', 'seasonal-cleanup', 'snow-removal']
  : month === 12 || month <= 2
    ? ['snow-removal', 'yard-cleanup', 'lawn-mowing']
    : ['lawn-mowing', 'yard-cleanup', 'property-maintenance']
const seasonalLabel = month >= 9 && month <= 11 ? 'Fall cleanup & winter planning' : month === 12 || month <= 2 ? 'Winter property care' : 'A yard you can enjoy'

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
          <div className="hero-copy">
          <p className="eyebrow">Locally owned · {CITY}</p>
          <h1 id="hero-heading">Your yard. Our job.</h1>
          <p className="hero-lead">
            Lawn mowing, leaf removal, yard cleanup, and snow removal in Emporia
            and nearby communities. Get help with the outdoor work on your list.
          </p>
          <p className="hero-owner">Owned and operated by {OWNER_NAME}.</p>
          <div className="hero-actions">
            <a className="btn btn-tan" href={phoneHref}>
              Call Rayden: {PHONE_DISPLAY}
            </a>
            <Link className="btn btn-outline" to="/#estimate">
              Get a Free Estimate
            </Link>
            <a className="btn btn-outline" href={textHref}>
              Text Us
            </a>
          </div>
          <p className="hero-reassurance">One-time jobs or recurring care. A clear estimate before work begins.</p>
          </div>
          <aside className="seasonal-spotlight" aria-labelledby="spotlight-heading">
            <p className="eyebrow">Plan your next job</p>
            <h2 id="spotlight-heading">{seasonalLabel}</h2>
            <ul>
              {seasonalSlugs.map((slug) => {
                const service = SERVICES.find((item) => item.slug === slug)
                const Icon = SERVICE_ICONS[service.icon]
                return <li key={slug}><Link to={`/services/${slug}`}>
                  {Icon && <span className="spotlight-icon"><Icon /></span>}
                  <span><strong>{service.title}</strong><span>{service.cardCopy}</span></span>
                  <span aria-hidden="true">→</span>
                </Link></li>
              })}
            </ul>
            <a className="text-link" href={textHref}>Have a job in mind? Text Rayden →</a>
          </aside>
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
              Keep up with the lawn, tackle a cleanup, or plan for snow.
              Choose the service you need and ask for a free estimate for your property.
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
            <p className="eyebrow">Meet your local owner</p>
            <h2 id="why-heading">Work directly with Rayden.</h2>
            <p>
              Flint Hills Outdoor Co. is owned and operated by Rayden Wright
              in Emporia. From your first question to the work on your property,
              you have a direct line to the person responsible for the job.
            </p>
            <a className="text-link" href={phoneHref}>Talk through your job: {PHONE_DISPLAY} →</a>
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
              Get help when you need it, from the first spring mow to winter
              snow on the driveway. Ask about a single visit or ongoing care.
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
              Based in Emporia and serving surrounding communities. Not sure
              whether your property is in range? Call or text with your location.
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

      <section className="section how-it-works" aria-labelledby="steps-heading">
        <div className="section-inner">
          <div className="section-intro"><p className="eyebrow">From to-do to done</p><h2 id="steps-heading">Getting started is simple.</h2></div>
          <ol className="steps-grid">
            <li><span className="step-number">01</span><h3>Tell us about the job.</h3><p>Call, text, or use the form. Share your location and what you need help with.</p></li>
            <li><span className="step-number">02</span><h3>Get a clear estimate.</h3><p>Rayden will discuss the property, the work, and the price before you decide.</p></li>
            <li><span className="step-number">03</span><h3>Agree on a schedule.</h3><p>Confirm the scope and timing together, whether it is one visit or recurring care.</p></li>
          </ol>
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
