import { useRef, useState } from 'react'
import {
  EMAIL_HREF,
  PHONE_DISPLAY,
  phoneHref,
  SERVICES,
  textHref,
} from '../site.js'
import ContactDetails from './ContactDetails.jsx'

const emptyForm = {
  name: '',
  phone: '',
  email: '',
  address: '',
  service: 'Lawn Mowing',
  frequency: 'Recurring Service',
  message: '',
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function EstimateForm() {
  const [form, setForm] = useState(emptyForm)
  const [status, setStatus] = useState('')
  const [sending, setSending] = useState(false)
  const sendingRef = useRef(false)

  function update(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    event.stopPropagation()
    void sendEstimateRequest()
  }

  async function sendEstimateRequest() {
    if (sendingRef.current) {
      return
    }

    setStatus('')

    const name = form.name.trim()
    const phone = form.phone.trim()
    const email = form.email.trim()
    const service = form.service.trim()

    if (!name || !phone || !service) {
      return
    }

    if (email && !EMAIL_PATTERN.test(email)) {
      return
    }

    sendingRef.current = true
    setSending(true)

    try {
      const response = await fetch('/api/estimate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          email,
          address: form.address.trim(),
          service,
          frequency: form.frequency,
          message: form.message.trim(),
        }),
      })

      if (!response.ok) {
        throw new Error('Request failed')
      }

      setForm(emptyForm)
      setStatus('success')
    } catch {
      setStatus('error')
    } finally {
      sendingRef.current = false
      setSending(false)
    }
  }

  return (
    <section className="section estimate" id="estimate" aria-labelledby="estimate-heading">
      <div className="section-inner estimate-layout">
        <div className="section-intro">
          <p className="eyebrow">Free estimate</p>
          <h2 id="estimate-heading">Get your free estimate.</h2>
          <p>
            Share a few details about the property. We’ll send your request
            directly to Flint Hills Outdoor Co.
          </p>
          <div className="estimate-contacts">
            <a className="btn btn-forest" href={phoneHref}>
              Call {PHONE_DISPLAY}
            </a>
            <a className="btn btn-ghost" href={textHref}>
              Text {PHONE_DISPLAY}
            </a>
            <a className="btn btn-ghost" href={EMAIL_HREF}>
              Email Us
            </a>
          </div>
          <ContactDetails />
        </div>

        <form
          className="estimate-form"
          method="post"
          action="/api/estimate"
          onSubmit={handleSubmit}
        >
          {status === 'success' ? (
            <p className="form-status form-status-success" role="status">
              Thanks! We received your estimate request and will be in touch soon.
            </p>
          ) : null}
          {status === 'error' ? (
            <p className="form-status form-status-error" role="alert">
              Something went wrong. Please call or text us at 620-779-5234.
            </p>
          ) : null}
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
                <option key={service.slug} value={service.title}>
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
            <button className="btn btn-forest" type="submit" disabled={sending}>
              {sending ? 'Sending...' : 'Request a Free Estimate'}
            </button>
            <p className="form-note">
              We’ll send your request directly to Flint Hills Outdoor Co.
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
