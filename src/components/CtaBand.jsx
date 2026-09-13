import { Link } from 'react-router-dom'
import { PHONE_DISPLAY, phoneHref, textHref } from '../site.js'

export default function CtaBand({
  heading = 'Ready for a straightforward estimate?',
  copy = 'Tell us about the property. We’ll follow up directly—no call center in between.',
}) {
  return (
    <section className="cta-band" aria-labelledby="cta-band-heading">
      <div className="section-inner cta-band-inner">
        <div>
          <h2 id="cta-band-heading">{heading}</h2>
          <p>{copy}</p>
        </div>
        <div className="cta-band-actions">
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
      </div>
    </section>
  )
}
