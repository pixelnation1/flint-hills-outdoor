import { useState } from 'react'
import {
  BUSINESS_NAME,
  CITY,
  NEARBY_COMMUNITIES,
  OWNER_NAME,
  PHONE_DISPLAY,
  PHONE_TEL,
  REASONS,
  SERVICES,
} from './site.js'

const phoneHref = `tel:${PHONE_TEL}`
const textHref = `sms:${PHONE_TEL}`

function LogoMark({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="6" fill="#F7F3EB" />
      <path
        d="M4 28C9 22 14 25 19 20C24 15 29 18 36 13V36H4V28Z"
        fill="#C4A574"
      />
      <path
        d="M4 31C11 26 16 30 22 25C28 20 32 24 36 21V36H4V31Z"
        fill="#2D5A43"
      />
      <path
        d="M4 34C13 30 19 33 26 29C31 26 34 28 36 27V36H4V34Z"
        fill="#F7F3EB"
      />
    </svg>
  )
}

function IconMower() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M4 22.5h11.5a4.5 4.5 0 0 0 9 0H29"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <circle cx="19.5" cy="22.5" r="3" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M4 22.5V17h8.5l2 5.5M16 17h6l3 5.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 17V11.5H6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  )
}

function IconLeaf() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M8 23c8-1.5 14.5-8 16.5-16.5C16 8.5 9.5 15 8 23Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M11 20c3-2.5 7-7.5 9.5-13M11 20l-3.5 5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  )
}

function IconSeasonal() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M7 26h18"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M10 26V12l6-5 6 5v14"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M14 26v-6h4v6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M10 16h12"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  )
}

function IconSnow() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M8 22.5 16 8l8 14.5H8Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 22.5V26h9v-3.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M16 8v6.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  )
}

const SERVICE_ICONS = {
  routine: IconMower,
  leaves: IconLeaf,
  seasonal: IconSeasonal,
  snow: IconSnow,
}

function Hills() {
  return (
    <svg
      className="hero-hills"
      viewBox="0 0 1440 220"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 128C180 72 320 164 520 110C740 50 900 150 1120 96C1260 60 1360 78 1440 92V220H0V128Z"
        fill="#2D5A43"
      />
      <path
        d="M0 158C220 110 380 180 620 132C860 84 1020 170 1220 128C1320 106 1390 118 1440 128V220H0V158Z"
        fill="#C4A574"
        opacity="0.35"
      />
      <path
        d="M0 178C260 140 420 196 700 160C980 124 1140 186 1440 154V220H0V178Z"
        fill="#163328"
      />
    </svg>
  )
}

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top">
          <LogoMark className="brand-mark" />
          <span className="brand-text">
            <span className="brand-kicker">Flint Hills</span>
            <span className="brand-name">Outdoor Co.</span>
          </span>
        </a>
        <a className="btn btn-tan header-cta" href="#estimate">
          <span className="cta-full">Request an Estimate</span>
          <span className="cta-short">Estimate</span>
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-inner">
        <p className="eyebrow">Serving {CITY}</p>
        <h1 id="hero-heading">Reliable lawn care without the runaround.</h1>
        <p className="hero-lead">
          Lawn mowing, trimming, cleanup &amp; seasonal yard care in Emporia,
          Kansas.
        </p>
        <p className="hero-owner">
          Owned and operated by {OWNER_NAME}.
        </p>
        <div className="hero-actions">
          <a className="btn btn-tan" href="#estimate">
            Request a Free Estimate
          </a>
          <a className="btn btn-outline" href={phoneHref}>
            Call {PHONE_DISPLAY}
          </a>
          <a className="btn btn-outline" href={textHref}>
            Text Us
          </a>
        </div>
        <a className="hero-callout" href="#estimate">
          Need regular lawn care? Ask about recurring mowing service.
        </a>
      </div>
      <Hills />
    </section>
  )
}

function Services() {
  return (
    <section className="section services" id="services" aria-labelledby="services-heading">
      <div className="section-inner">
        <div className="section-intro">
          <p className="eyebrow">What we do</p>
          <h2 id="services-heading">Recurring mowing for Emporia lawns</h2>
          <p>
            Routine Lawn Care is the main service: residential lawn mowing,
            string trimming, edging, and grass clipping cleanup on a regular
            schedule. Leaf cleanup, seasonal yard cleanup, and sidewalk and
            driveway snow removal are available when the season calls for them.
          </p>
        </div>
        <ul className="service-grid">
          {SERVICES.map((service) => {
            const Icon = SERVICE_ICONS[service.id]
            return (
              <li
                className={
                  service.featured
                    ? 'service-card service-card-primary'
                    : 'service-card'
                }
                key={service.id}
              >
                <span className="service-icon">
                  <Icon />
                </span>
                {service.featured ? (
                  <p className="service-kicker">Most requested</p>
                ) : null}
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
                {service.extra ? (
                  <p className="service-extra">{service.extra}</p>
                ) : null}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

function WhyChooseUs() {
  return (
    <section className="section why" id="why" aria-labelledby="why-heading">
      <div className="section-inner why-layout">
        <div className="section-intro">
          <p className="eyebrow">Why choose us</p>
          <h2 id="why-heading">A local owner, a clear way to get started</h2>
          <p>
            {BUSINESS_NAME} is owned and operated by {OWNER_NAME}. Call, text,
            or request a free estimate.
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
  )
}

function ServiceArea() {
  return (
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
            The company is based in Emporia. Nearby communities are welcome to
            request a free estimate for the services listed on this page.
          </p>
          <ul className="town-list">
            {NEARBY_COMMUNITIES.map((town) => (
              <li key={town}>{town}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

const emptyForm = {
  name: '',
  phone: '',
  email: '',
  address: '',
  service: 'Routine Lawn Care',
  frequency: 'Recurring Service',
  message: '',
}

function buildRequestDetails(form) {
  return [
    'Estimate request for Flint Hills Outdoor Co.',
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
    `Email: ${form.email || 'Not provided'}`,
    `Property: ${form.address || 'Not provided'}`,
    `Service: ${form.service}`,
    `Type: ${form.frequency}`,
    '',
    form.message || 'No additional details.',
  ].join('\n')
}

function EstimateForm() {
  const [form, setForm] = useState(emptyForm)
  const [submitted, setSubmitted] = useState(false)

  function update(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const body = encodeURIComponent(buildRequestDetails(form))
    window.location.href = `${textHref}?body=${body}`
    setSubmitted(true)
  }

  return (
    <section className="section estimate" id="estimate" aria-labelledby="estimate-heading">
      <div className="section-inner estimate-layout">
        <div className="section-intro">
          <p className="eyebrow">Free estimate</p>
          <h2 id="estimate-heading">Get your free estimate.</h2>
          <p>
            Share a few details and follow up by call or text. Phone is the
            best way to reach {OWNER_NAME}.
          </p>
          <div className="estimate-contacts">
            <a className="btn btn-forest" href={phoneHref}>
              Call {PHONE_DISPLAY}
            </a>
            <a className="btn btn-ghost" href={textHref}>
              Text {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        {submitted ? (
          <div className="form-success" role="status">
            <h3>Request ready to send</h3>
            <p>
              Your messaging app should open with the estimate details. If it
              does not, call or text {PHONE_DISPLAY}.
            </p>
            <div className="estimate-contacts">
              <a className="btn btn-forest" href={phoneHref}>
                Call {PHONE_DISPLAY}
              </a>
              <a className="btn btn-ghost" href={textHref}>
                Text {PHONE_DISPLAY}
              </a>
            </div>
            <button
              className="btn btn-ghost"
              type="button"
              onClick={() => {
                setSubmitted(false)
                setForm(emptyForm)
              }}
            >
              Send another request
            </button>
          </div>
        ) : (
          <form className="estimate-form" onSubmit={handleSubmit}>
            <label>
              Full name
              <input
                name="name"
                type="text"
                autoComplete="name"
                required
                value={form.name}
                onChange={update}
              />
            </label>
            <label>
              Phone
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                required
                value={form.phone}
                onChange={update}
              />
            </label>
            <label>
              <span>
                Email <span className="optional">(optional)</span>
              </span>
              <input
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={update}
              />
            </label>
            <label>
              Property address or city
              <input
                name="address"
                type="text"
                autoComplete="street-address"
                value={form.address}
                onChange={update}
              />
            </label>
            <label className="full">
              Service needed
              <select
                name="service"
                required
                value={form.service}
                onChange={update}
              >
                {SERVICES.map((service) => (
                  <option key={service.id} value={service.title}>
                    {service.title}
                  </option>
                ))}
                <option value="Other / not sure">Other / not sure</option>
              </select>
            </label>
            <fieldset className="full choice-group">
              <legend>One-Time Service or Recurring Service</legend>
              <div className="choice-options">
                <label className="choice">
                  <input
                    type="radio"
                    name="frequency"
                    value="Recurring Service"
                    checked={form.frequency === 'Recurring Service'}
                    onChange={update}
                    required
                  />
                  Recurring Service
                </label>
                <label className="choice">
                  <input
                    type="radio"
                    name="frequency"
                    value="One-Time Service"
                    checked={form.frequency === 'One-Time Service'}
                    onChange={update}
                  />
                  One-Time Service
                </label>
              </div>
            </fieldset>
            <label className="full">
              Description / additional details
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={update}
                placeholder="Lot size, weekly or biweekly mowing, or other work you have in mind"
              />
            </label>
            <div className="form-footer">
              <button className="btn btn-forest" type="submit">
                Request a Free Estimate
              </button>
              <p className="form-note">
                Submitting opens a text to {PHONE_DISPLAY} with your details.
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="brand footer-brand-row">
            <LogoMark className="brand-mark" />
            <span className="brand-text">
              <span className="brand-kicker">Flint Hills</span>
              <span className="brand-name">Outdoor Co. LLC</span>
            </span>
          </div>
          <p>
            Locally owned and operated by {OWNER_NAME} in {CITY}.
          </p>
        </div>
        <div>
          <h2>Contact</h2>
          <ul>
            <li>
              <a href={phoneHref}>Call {PHONE_DISPLAY}</a>
            </li>
            <li>
              <a href={textHref}>Text {PHONE_DISPLAY}</a>
            </li>
            <li>{CITY}</li>
          </ul>
        </div>
        <div>
          <h2>On this page</h2>
          <ul>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#why">Why choose us</a>
            </li>
            <li>
              <a href="#area">Service area</a>
            </li>
            <li>
              <a href="#estimate">Request an estimate</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="copyright">
        © {year} {BUSINESS_NAME}. All rights reserved.
      </p>
    </footer>
  )
}

function ContactBar() {
  return (
    <div className="contact-bar" role="navigation" aria-label="Quick contact">
      <a href={phoneHref}>Call</a>
      <a href={textHref}>Text</a>
      <a className="contact-bar-primary" href="#estimate">
        Estimate
      </a>
    </div>
  )
}

export default function App() {
  return (
    <div className="page" id="top">
      <a className="skip-link" href="#estimate">
        Skip to estimate form
      </a>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <ServiceArea />
        <EstimateForm />
      </main>
      <Footer />
      <ContactBar />
    </div>
  )
}
